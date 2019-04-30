/**
 *
 * @fileoverview Declares a type alias as default export. This allows testing that the appropriate
 * type reference is created (no .default property).
 *
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.type_alias_imported.type_alias_default_exporter');
var module = module || { id: 'test_files/type_alias_imported/type_alias_default_exporter.ts' };
module = module;
exports = {};
const tsickle_type_alias_declare_1 = goog.requireType("test_files.type_alias_imported.type_alias_declare");
class Z {
}
exports.Z = Z;
