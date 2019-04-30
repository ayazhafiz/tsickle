/**
 *
 * @fileoverview Regression test for single valued enums. TypeScript's getBaseTypeOfLiteralType
 * returns the EnumLiteral type for SingleValuedEnum.C below, instead of SingleValuedEnum directly.
 * Previously, tsickle would then emit the type as `SingleValuedEnum.C`, which is illegal in
 * Closure.
 *
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.single_value_enum.single_value_enum');
var module = module || { id: 'test_files/single_value_enum/single_value_enum.ts' };
module = module;
exports = {};
/** @enum {number} */
const FirstEnum = {
    A: 0,
    B: 1,
};
exports.FirstEnum = FirstEnum;
FirstEnum[FirstEnum.A] = 'A';
FirstEnum[FirstEnum.B] = 'B';
/** @enum {number} */
const SingleValuedEnum = {
    C: 0,
};
exports.SingleValuedEnum = SingleValuedEnum;
SingleValuedEnum[SingleValuedEnum.C] = 'C';
/** @typedef {!SingleValuedEnum} */
exports.AliasSingleValueEnum;
/** @type {(null|!SingleValuedEnum)} */
exports.useSingleValueEnum = null;
/** @typedef {(!SingleValuedEnum|!FirstEnum)} */
exports.UnionOfEnums;
