goog.module('sickle_test.coerce');/**
 * @param {string} arg
 * @return {string}
 */
function acceptString(arg) { return arg; }
acceptString(/** @type {?} */ (3));
