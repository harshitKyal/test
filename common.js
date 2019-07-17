(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@theme/services/process.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/process.service.ts ***!
  \****************************************************/
/*! exports provided: ProcessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessService", function() { return ProcessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProcessService = /** @class */ (function () {
    function ProcessService(apiService) {
        this.apiService = apiService;
    }
    ProcessService.prototype.getAllProcesss = function (processReqObj) {
        return this.apiService.apiCaller('post', '/processList', processReqObj);
    };
    ProcessService.prototype.getProcessGivenByList = function (processReqObj) {
        return this.apiService.apiCaller('post', '/processGivenByList', processReqObj);
    };
    ProcessService.prototype.addProcess = function (process) {
        return this.apiService.apiCaller('post', '/addProcess', process);
    };
    ProcessService.prototype.getProcessById = function (id) {
        return this.apiService.apiCaller('get', '/getProcessById/' + id);
    };
    ProcessService.prototype.updateProcess = function (process) {
        return this.apiService.apiCaller('post', '/updateProcess', process);
    };
    ProcessService.prototype.deleteProcessById = function (id) {
        return this.apiService.apiCaller('get', '/deleteProcess/' + id);
    };
    ProcessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProcessService);
    return ProcessService;
}());



/***/ }),

/***/ "./src/app/@theme/services/program.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/program.service.ts ***!
  \****************************************************/
/*! exports provided: ProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramService", function() { return ProgramService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramService = /** @class */ (function () {
    function ProgramService(apiService) {
        this.apiService = apiService;
    }
    ProgramService.prototype.getAllPrograms = function (programReqObj) {
        return this.apiService.apiCaller('post', '/programList', programReqObj);
    };
    ProgramService.prototype.getProgramsByFilter = function (programReqObj) {
        return this.apiService.apiCaller('post', '/programListByFilter', programReqObj);
    };
    ProgramService.prototype.getProgramGivenByList = function (programReqObj) {
        return this.apiService.apiCaller('post', '/programGivenByList', programReqObj);
    };
    ProgramService.prototype.addProgram = function (program) {
        return this.apiService.apiCaller('post', '/addProgram', program);
    };
    ProgramService.prototype.getProgramById = function (id) {
        return this.apiService.apiCaller('get', '/getProgramById/' + id);
    };
    ProgramService.prototype.updateProgram = function (program) {
        return this.apiService.apiCaller('post', '/updateProgram', program);
    };
    ProgramService.prototype.deleteProgramById = function (id) {
        return this.apiService.apiCaller('get', '/deleteProgram/' + id);
    };
    ProgramService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProgramService);
    return ProgramService;
}());



/***/ }),

/***/ "./src/app/@theme/services/shade.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/shade.service.ts ***!
  \**************************************************/
/*! exports provided: ShadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeService", function() { return ShadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShadeService = /** @class */ (function () {
    function ShadeService(apiService) {
        this.apiService = apiService;
    }
    ShadeService.prototype.getAllShades = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeList', shadeReqObj);
    };
    ShadeService.prototype.getShadesByFilter = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeFilterList', shadeReqObj);
    };
    ShadeService.prototype.getShadesByQualityId = function (shadeReqObj) {
        return this.apiService.apiCaller('post', '/shadeListByQualityId', shadeReqObj);
    };
    ShadeService.prototype.addShade = function (shade) {
        return this.apiService.apiCaller('post', '/addShade', shade);
    };
    ShadeService.prototype.getShadeById = function (id) {
        return this.apiService.apiCaller('get', '/getShadeById/' + id);
    };
    ShadeService.prototype.updateShade = function (shade) {
        return this.apiService.apiCaller('post', '/updateShade', shade);
    };
    ShadeService.prototype.deleteShadeById = function (id) {
        return this.apiService.apiCaller('get', '/deleteShade/' + id);
    };
    ShadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ShadeService);
    return ShadeService;
}());



/***/ }),

/***/ "./src/app/@theme/services/supplier.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@theme/services/supplier.service.ts ***!
  \*****************************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupplierService = /** @class */ (function () {
    function SupplierService(apiService) {
        this.apiService = apiService;
    }
    SupplierService.prototype.getAllSupplierData = function (obj) {
        return this.apiService.apiCaller('post', '/supplierList', obj);
    };
    SupplierService.prototype.getAllSupplierItemData = function () {
        return this.apiService.apiCaller('get', '/supplierItemList');
    };
    SupplierService.prototype.addSupplier = function (supplier) {
        return this.apiService.apiCaller('post', '/addSupplier', supplier);
    };
    SupplierService.prototype.getSupplierById = function (id) {
        return this.apiService.apiCaller('get', '/getSupplier/' + id);
    };
    SupplierService.prototype.updateSupplier = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplier', supplier);
    };
    SupplierService.prototype.deleteSupplierById = function (id) {
        return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
    };
    SupplierService.prototype.getAllSupplierRateData = function () {
        return this.apiService.apiCaller('get', '/supplierList');
    };
    SupplierService.prototype.addSupplierRate = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplierRateList', supplier);
    };
    SupplierService.prototype.getSupplierRateById = function (id) {
        return this.apiService.apiCaller('get', '/getSupplierRateList/' + id);
    };
    SupplierService.prototype.updateSupplierRate = function (supplier) {
        return this.apiService.apiCaller('post', '/updateSupplierRateList', supplier);
    };
    SupplierService.prototype.deleteSupplierRateById = function (id) {
        return this.apiService.apiCaller('get', '/deleteSupplierList/' + id);
    };
    SupplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MiscellaneousRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousRoutingModule", function() { return MiscellaneousRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.component */ "./src/app/pages/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
        children: [{
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());

var routedComponents = [
    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
];


/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.component.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent() {
    }
    MiscellaneousComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-miscellaneous',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous-routing.module */ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousRoutingModule"],
            ],
            declarations: _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-body>\n        <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n          <h2 class=\"title\">404 Page Not Found</h2>\n          <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n          <button (click)=\"goToHome()\" type=\"button\" class=\"btn btn-block btn-hero-primary\">\n            Take me home\n          </button>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-centered {\n  margin: auto; }\n\nnb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.title {\n  text-align: center; }\n\n.sub-title {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem; }\n\n.btn {\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXJ1bmd1cHRhL0Rlc2t0b3AvYS9uZ3gtd2lyZWZyYW1lL3NyYy9hcHAvcGFnZXMvbWlzY2VsbGFuZW91cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWlzY2VsbGFuZW91cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY2VudGVyZWQge1xuICBtYXJnaW46IGF1dG87XG59XG5uYi1jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-not-found',
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/miscellaneous/not-found/not-found.component.scss")],
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/miscellaneous/not-found/not-found.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Party',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Party',
                link: '/pages/party/view-party',
            },
        ],
    },
    {
        title: 'Quality',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Quality',
                link: '/pages/quality/view-quality',
            },
        ],
    },
    {
        title: 'User',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View User',
                link: '/pages/user/view-user',
            },
        ],
    },
    {
        title: 'Fabric In',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Fabric In',
                link: '/pages/fabric-in/view-fabric-in-list',
            },
        ],
    },
    {
        title: 'Batch',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Batch',
                link: '/pages/batch/view-batch-list',
            },
        ],
    },
    {
        title: 'Program',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Program',
                link: '/pages/program/view-program-list',
            },
        ],
    },
    {
        title: 'Process',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Process',
                link: '/pages/process/view-process-list',
            },
            {
                title: 'Dynamic Process',
                link: '/pages/process/dynamic-process',
            },
        ],
    },
    {
        title: 'Process Planning',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Process Planning',
                link: '/pages/process-planning/view-process-planning-list',
            },
        ],
    },
    {
        title: 'Shade',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Shade',
                link: '/pages/shade/view-shade-list',
            },
        ],
    },
    {
        title: 'Colour Stock',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Colour Stock',
                link: '/pages/colour-stock/view-colour-stock-list',
            },
        ],
    },
    {
        title: 'Supplier',
        icon: 'nb-layout-default',
        children: [
            {
                title: 'View Suppliers',
                link: '/pages/supplier/view-supplier-list',
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=common.js.map