/**
 *
 * @fileoverview Class handling code does not special cases comments preceding
 * it before its JSDoc block. This comment would not get emitted if detached
 * source file comments were not emitted separately.
 *
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.file_comment.comment_before_class');
var module = module || { id: 'test_files/file_comment/comment_before_class.ts' };
module = module;
exports = {};
class Clazz {
}
exports.Clazz = Clazz;
