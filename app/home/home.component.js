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
var router_deprecated_1 = require('@angular/router-deprecated');
var departments_service_1 = require('/app/home/departments.service');
var HomeComponent = (function () {
    function HomeComponent(departmentsService, router) {
        this.departmentsService = departmentsService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initPage();
    };
    HomeComponent.prototype.initPage = function () {
        var _this = this;
        this.departmentsService.getDepartaments()
            .then(function (departments) {
            return _this.departments = departments;
        });
    };
    HomeComponent.prototype.addNewDep = function () {
        this.router.navigate(['Edit']);
    };
    HomeComponent.prototype.removeDep = function (id) {
        var _this = this;
        this.departmentsService.removeDepartament(id)
            .then(function (resp) {
            return _this.initPage();
        });
    };
    HomeComponent.prototype.modifyDep = function (id) {
        var link = ['Edit', { id: id }];
        this.router.navigate(link);
    };
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n\t<h3>All Departments</h3>\n\t<table class=\"table table-striped table-bordered\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>Number</th>\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Action</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let dep of departments\">\n\t\t\t\t<td>{{dep.deptNo}}</td>\n\t\t\t\t<td>{{dep.deptName}}</td>\n\t\t\t\t<td>\n\t\t\t\t\t<button class='btn btn-default' (click)='removeDep(dep.deptNo)'>Remove</button>\n\t\t\t\t\t<button class='btn btn-default' (click)='modifyDep(dep.deptNo)'>Edit</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\n\t<button class='btn btn-default' (click)='addNewDep()'>Add new department</button>\n  ",
            providers: [departments_service_1.DepartmentsService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof departments_service_1.DepartmentsService !== 'undefined' && departments_service_1.DepartmentsService) === 'function' && _a) || Object, router_deprecated_1.Router])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map