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
var router_deprecated_1 = require('@angular/router-deprecated');
var departament_1 = require('/app/home/departament');
var departments_service_1 = require('/app/home/departments.service');
var name_validator_1 = require('/app/edit/name.validator');
var EditComponent = (function () {
    function EditComponent(departmentsService, router) {
        this.departmentsService = departmentsService;
        this.router = router;
    }
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.departmentsService.addDepartament(this.model, this.state)
            .then(function (resp) {
            return _this.initForm();
        });
        this.goHome();
    };
    EditComponent.prototype.validateNumber = function (c) {
        var number_REGEXP = new RegExp('^n_', 'i');
        return number_REGEXP.test(c.value) ? null : {
            validateNumber: {
                valid: false
            }
        };
    };
    EditComponent.prototype.initForm = function () {
        var _this = this;
        this.state = "new";
        this.active = true;
        this.model = new departament_1.Departament();
        if (this.id) {
            this.state = "modify";
            this.departmentsService.getDepartament(this.id)
                .then(function (resp) {
                return _this.model = resp;
            });
        }
        // Model-driven approach 
        this.form = new common_1.ControlGroup({
            name: new common_1.Control('', common_1.Validators.required),
            number: new common_1.Control('', common_1.Validators.compose([this.validateNumber]))
        });
    };
    EditComponent.prototype.routerOnActivate = function (curr) {
        this.id = curr.params.id;
        this.initForm();
    };
    EditComponent.prototype.goHome = function () {
        this.router.navigate(['Home']);
    };
    EditComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/edit/edit.component.html',
            providers: [departments_service_1.DepartmentsService],
            directives: [name_validator_1.NameValidator]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof departments_service_1.DepartmentsService !== 'undefined' && departments_service_1.DepartmentsService) === 'function' && _a) || Object, router_deprecated_1.Router])
    ], EditComponent);
    return EditComponent;
    var _a;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map