"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
function validateName(c) {
    var EMAIL_REGEXP = new RegExp('^jam', 'i');
    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
            valid: false
        }
    };
}
var NameValidator = (function () {
    function NameValidator() {
    }
    NameValidator = __decorate([
        core_1.Directive({
            selector: '[validateName]',
            providers: [
                core_1.provide(common_1.NG_VALIDATORS, {
                    useValue: validateName,
                    multi: true
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NameValidator);
    return NameValidator;
}());
exports.NameValidator = NameValidator;
//# sourceMappingURL=name.validator.js.map