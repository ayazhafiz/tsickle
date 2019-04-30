/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.parameter_properties.parameter_properties');
var module = module || { id: 'test_files/parameter_properties/parameter_properties.ts' };
module = module;
exports = {};
class ParamProps {
    // The @export below should not show up in the output ctor.
    /**
     * @param {string} publicExportedP
     * @param {string} publicP
     * @param {string} protectedP
     * @param {string} privateP
     * @param {string} readonlyP
     * @param {string} publicReadonlyP
     */
    constructor(publicExportedP, publicP, protectedP, privateP, readonlyP, publicReadonlyP) {
        this.publicExportedP = publicExportedP;
        this.publicP = publicP;
        this.protectedP = protectedP;
        this.privateP = privateP;
        this.readonlyP = readonlyP;
        this.publicReadonlyP = publicReadonlyP;
    }
}
if (false) {
    /**
     * @export
     * @type {string}
     */
    ParamProps.prototype.publicExportedP;
    /** @type {string} */
    ParamProps.prototype.publicP;
    /**
     * @type {string}
     * @protected
     */
    ParamProps.prototype.protectedP;
    /**
     * @type {string}
     * @private
     */
    ParamProps.prototype.privateP;
    /** @type {string} */
    ParamProps.prototype.readonlyP;
    /** @type {string} */
    ParamProps.prototype.publicReadonlyP;
}
