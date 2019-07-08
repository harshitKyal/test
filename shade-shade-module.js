(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shade-shade-module"],{

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



/***/ })

}]);
//# sourceMappingURL=shade-shade-module.js.map