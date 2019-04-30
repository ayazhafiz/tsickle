/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.arrow_fn.arrow_fn');
var module = module || { id: 'test_files/arrow_fn/arrow_fn.ts' };
module = module;
exports = {};
/** @type {function(number): number} */
var fn3 = (/**
 * @param {number} a
 * @return {number}
 */
(a) => 12);
/** @type {function(?): ?} */
var fn4 = (/**
 * @param {?} a
 * @return {?}
 */
(a) => a + 12);
/** @type {function(number): number} */
exports.fn5 = (/**
 * @param {number=} a
 * @return {number}
 */
(a = 10) => a);
/**
 * \@param a this must be escaped, as Closure bails on it.
 * @type {function(number): number}
 */
const fn6 = (/**
 * @param {number=} a
 * @return {number}
 */
(a = 10) => a);
