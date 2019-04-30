/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.interface.implement_import');
var module = module || { id: 'test_files/interface/implement_import.ts' };
module = module;
exports = {};
const tsickle_interface_1 = goog.requireType("test_files.interface.interface");
const interface_1 = goog.require('test_files.interface.interface');
/**
 * @implements {tsickle_interface_1.Point}
 */
class MyPoint {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
if (false) {
    /** @type {number} */
    MyPoint.prototype.x;
    /** @type {number} */
    MyPoint.prototype.y;
}
/**
 * @extends {tsickle_interface_1.User}
 */
class ImplementsUser {
    /**
     * @param {number} shoeSize
     */
    constructor(shoeSize) {
        this.shoeSize = shoeSize;
    }
}
if (false) {
    /** @type {number} */
    ImplementsUser.prototype.shoeSize;
}
class ExtendsUser extends interface_1.User {
    constructor() {
        super();
    }
}
