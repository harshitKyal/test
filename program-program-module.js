(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./src/app/@theme/services/batch.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/batch.service.ts ***!
  \**************************************************/
/*! exports provided: BatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchService", function() { return BatchService; });
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


var BatchService = /** @class */ (function () {
    function BatchService(apiService) {
        this.apiService = apiService;
    }
    BatchService.prototype.getAllBatchs = function (batchReqObj) {
        return this.apiService.apiCaller('post', '/batchList', batchReqObj);
    };
    BatchService.prototype.getAllBatchByQualityId = function (batchReqObj) {
        return this.apiService.apiCaller('post', '/batchListByQualityId', batchReqObj);
    };
    BatchService.prototype.addBatch = function (batch) {
        return this.apiService.apiCaller('post', '/addBatch', batch);
    };
    BatchService.prototype.getBatchById = function (id) {
        return this.apiService.apiCaller('get', '/getBatchById/' + id);
    };
    BatchService.prototype.getGrListByQualityId = function (id) {
        return this.apiService.apiCaller('get', '/getGrListByQualityId/' + id);
    };
    BatchService.prototype.updateBatch = function (batch) {
        return this.apiService.apiCaller('post', '/updateBatch', batch);
    };
    BatchService.prototype.deleteBatchById = function (id) {
        return this.apiService.apiCaller('get', '/deleteBatch/' + id);
    };
    BatchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BatchService);
    return BatchService;
}());



/***/ })

}]);
//# sourceMappingURL=program-program-module.js.map