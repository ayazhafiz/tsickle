import * as ts from 'typescript';

import {assertAbsolute} from './cli_support';
import {decoratorDownlevelTransformer} from './decorator_downlevel_transformer';
import {enumTransformer} from './enum_transformer';
import {generateExterns} from './externs';
import {transformFileoverviewCommentFactory} from './fileoverview_comment_transformer';
import * as googmodule from './googmodule';
import {jsdocTransformer, removeTypeAssertions} from './jsdoc_transformer';
import {ModulesManifest} from './modules_manifest';
import {isDtsFileName} from './transformer_util';

// triggered when the extension is loaded
export function activate(context: ts.CompilerPluginContext) {}

// triggered immediately before emit begins
export function preEmit(
    context: ts.CompilerPluginContext, program: ts.Program,
    targetSourcefile?: ts.SourceFile): ts.CompilerPluginPreEmitResult {
  const sources = targetSourcefile ? [targetSourcefile] : program.getSourceFiles();
  for (const sf of sources) {
    assertAbsolute(sf.fileName);
  }

  let tsickleDiagnostics: ts.Diagnostic[] = [];
  const typeChecker = program.getTypeChecker();
  const tsickleSourceTransformers: Array<ts.TransformerFactory<ts.SourceFile>> = [];
  tsickleSourceTransformers.push(transformFileoverviewCommentFactory(tsickleDiagnostics));
  tsickleSourceTransformers.push(jsdocTransformer(
      host, program.getCompilerOptions(), context.compilerHost, typeChecker, tsickleDiagnostics));
  tsickleSourceTransformers.push(enumTransformer(typeChecker, tsickleDiagnostics));
  tsickleSourceTransformers.push(decoratorDownlevelTransformer(typeChecker, tsickleDiagnostics));
  const modulesManifest = new ModulesManifest();
  // See comment on remoteTypeAssertions.
  tsickleSourceTransformers.push(removeTypeAssertions());

  const externs: {[fileName: string]: string} = {};
  const sourceFiles = targetSourceFile ? [targetSourceFile] : program.getSourceFiles();
  for (const sourceFile of sourceFiles) {
    const isDts = isDtsFileName(sourceFile.fileName);
    if (isDts && host.shouldSkipTsickleProcessing(sourceFile.fileName)) {
      continue;
    }
    const {output, diagnostics} =
        generateExterns(typeChecker, sourceFile, host, host.moduleResolutionHost, tsOptions);
    if (output) {
      externs[sourceFile.fileName] = output;
    }
    if (diagnostics) {
      tsickleDiagnostics.push(...diagnostics);
    }
  }

  // All diagnostics (including warnings) are treated as errors.
  // If the host decides to ignore warnings, just discard them.
  // Warnings include stuff like "don't use @type in your jsdoc"; tsickle
  // warns and then fixes up the code to be Closure-compatible anyway.
  tsickleDiagnostics = tsickleDiagnostics.filter(
      d => d.category === ts.DiagnosticCategory.Error ||
          !host.shouldIgnoreWarningsForPath(d.file!.fileName));

  const afterTransformers: Array<ts.TransformerFactory<ts.SourceFile>> = [];
  if (!!context.options['googmodule']) {
    afterTransformers.push(googmodule.commonJsToGoogmoduleTransformer(
        host, modulesManifest, typeChecker, tsickleDiagnostics));
  }

  return {
    diagnostics: tsickleDiagnostics,
    customTransformers: {
      before: tsickleSourceTransformers,
      after: afterTransformers,
      afterDeclarations: [],  // TODO: addClutzAliases
    }
  };
}

export function deactivate(context: ts.CompilerPluginContext) {}
