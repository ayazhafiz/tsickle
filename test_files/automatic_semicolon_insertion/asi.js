/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.automatic_semicolon_insertion.asi');
var module = module || { id: 'test_files/automatic_semicolon_insertion/asi.ts' };
module = module;
exports = {};
/**
 * @return {function(number): number}
 */
function mustParenthesizeCommentedReturnFn() {
    return (/**
     * @param {number} x
     * @return {number}
     */
    (x) => x + 1);
}
exports.mustParenthesizeCommentedReturnFn = mustParenthesizeCommentedReturnFn;
