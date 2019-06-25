(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~fabric-in-fabric-in-module~program-program-module~shade-shade-module~~bdb6f9b5"],{

/***/ "./src/app/@theme/model/fabric-in-class.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/model/fabric-in-class.ts ***!
  \*************************************************/
/*! exports provided: Fabric, FabricInRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return Fabric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricInRecord", function() { return FabricInRecord; });
var Fabric = /** @class */ (function () {
    function Fabric() {
        this.party_id = '';
    }
    return Fabric;
}());

var FabricInRecord = /** @class */ (function () {
    function FabricInRecord() {
    }
    return FabricInRecord;
}());



/***/ }),

/***/ "./src/app/@theme/services/fabric-in.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@theme/services/fabric-in.service.ts ***!
  \******************************************************/
/*! exports provided: FabricInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricInService", function() { return FabricInService; });
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


var FabricInService = /** @class */ (function () {
    function FabricInService(apiService) {
        this.apiService = apiService;
    }
    FabricInService.prototype.getAllFabricIns = function (fabricReqObj) {
        return this.apiService.apiCaller('post', '/stockList', fabricReqObj);
    };
    FabricInService.prototype.getAllFabricByParty = function (fabricReqObj) {
        return this.apiService.apiCaller('post', '/stockListByParty', fabricReqObj);
    };
    FabricInService.prototype.addFabricIn = function (fabric) {
        return this.apiService.apiCaller('post', '/addStock', fabric);
    };
    FabricInService.prototype.getFabricInById = function (id) {
        return this.apiService.apiCaller('get', '/getStockById/' + id);
    };
    FabricInService.prototype.updateFabricIn = function (fabric) {
        return this.apiService.apiCaller('post', '/updateStock', fabric);
    };
    FabricInService.prototype.deleteFabricInById = function (id) {
        return this.apiService.apiCaller('get', '/deleteStock/' + id);
    };
    FabricInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], FabricInService);
    return FabricInService;
}());



/***/ }),

/***/ "./src/app/@theme/services/party.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/party.service.ts ***!
  \**************************************************/
/*! exports provided: PartyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartyService", function() { return PartyService; });
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


var PartyService = /** @class */ (function () {
    function PartyService(apiService) {
        this.apiService = apiService;
    }
    PartyService.prototype.getPartyList = function (obj) {
        return this.apiService.apiCaller('post', '/partyData', obj);
    };
    PartyService.prototype.updateParty = function (party) {
        return this.apiService.apiCaller('post', '/updateParty', party);
    };
    PartyService.prototype.addParty = function (party) {
        return this.apiService.apiCaller('post', '/addParty', party);
    };
    PartyService.prototype.deleteParty = function (id) {
        return this.apiService.apiCaller('get', '/deleteParty/' + id);
    };
    PartyService.prototype.getPartyById = function (id) {
        return this.apiService.apiCaller('get', '/getPartyById/' + id);
    };
    PartyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], PartyService);
    return PartyService;
}());



/***/ }),

/***/ "./src/app/@theme/services/quality.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/quality.service.ts ***!
  \****************************************************/
/*! exports provided: QualityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityService", function() { return QualityService; });
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


var QualityService = /** @class */ (function () {
    function QualityService(apiService) {
        this.apiService = apiService;
    }
    QualityService.prototype.getAllQualityData = function (data) {
        return this.apiService.apiCaller('post', '/qualityData', data);
    };
    QualityService.prototype.getAllQualityByPartyId = function (data) {
        return this.apiService.apiCaller('post', '/getQualityByPartyId', data);
    };
    QualityService.prototype.addQuality = function (quality) {
        return this.apiService.apiCaller('post', '/addQuality', quality);
    };
    QualityService.prototype.getQualityById = function (id) {
        return this.apiService.apiCaller('get', '/getQualityDataById/' + id);
    };
    QualityService.prototype.getTypeList = function () {
        return this.apiService.apiCaller('get', '/qualityTypeList');
    };
    QualityService.prototype.getSubTypeListByType = function (type) {
        return this.apiService.apiCaller('get', '/qualitySubTypeList/' + type);
    };
    QualityService.prototype.updateQuality = function (quality) {
        return this.apiService.apiCaller('post', '/updateQuality', quality);
    };
    QualityService.prototype.deleteQualityById = function (id) {
        return this.apiService.apiCaller('get', '/qualityData/' + id);
    };
    QualityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], QualityService);
    return QualityService;
}());



/***/ }),

/***/ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>{{topHeader}}\n  </nb-card-header>\n  <nb-card-body>\n    <form #vform=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Stock Id</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.stock_id\" name=\"stockId\" #StockId=\"ngModel\"\n              required />\n            <div *ngIf=\"StockId.invalid && (StockId.dirty || StockId.touched)\" class=\"errors\">\n              <div *ngIf=\"StockId.errors && StockId.errors.required\">\n                Stock Id is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Stock In Type</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.stock_in_type\" name=\"stockType\"\n              #StockType=\"ngModel\" required />\n            <div *ngIf=\"StockType.invalid && (StockType.dirty || StockType.touched)\" class=\"errors\">\n              <div *ngIf=\"StockType.errors && StockType.errors.required\">\n                Stock In Type is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Party Name</label>\n            <!-- pattern -->\n            <select class=\"form-control\" [(ngModel)]=\"fabricModal.party_id\" name=\"partyid\" #party=\"ngModel\">\n              <option disabled value=\"\">Select Party Name\n              </option>\n              <option *ngFor=\"let party of partyList\" [value]=\"party.entry_id\">{{party.party_name}}</option>\n            </select>\n            <!-- <div *ngIf=\"party.invalid && (party.dirty || party.touched)\" class=\"errors\">\n                  <div *ngIf=\"party.errors && party.errors.required\">\n                    Party Name is required.\n                  </div>\n                </div> -->\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"mt-4\">\n            <nb-checkbox name=\"Batch\" [(ngModel)]=\"fabricModal.batch\">Batch\n            </nb-checkbox>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Bill No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.bill_no\" name=\"bill\" #Bill=\"ngModel\"\n              required />\n            <div *ngIf=\"Bill.invalid && (Bill.dirty || Bill.touched)\" class=\"errors\">\n              <div *ngIf=\"Bill.errors && Bill.errors.required\">\n                Bill No. is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Bill Date</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fabricModal.bill_date\" name=\"billdate\"\n              #BillDate=\"ngModel\" required data-trigger=\"hover\" data-placement=\"top\" data-title=\"Date Opened\"\n              data-toggle=\"tooltip\" />\n            <div *ngIf=\"BillDate.invalid && (BillDate.dirty || BillDate.touched)\" class=\"errors\">\n              <div *ngIf=\"BillDate.errors && BillDate.errors.required\">\n                Bill Date is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Chl No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.chl_no\" name=\"chl\" #Chl=\"ngModel\"\n              required />\n            <div *ngIf=\"Chl.invalid && (Chl.dirty || Chl.touched)\" class=\"errors\">\n              <div *ngIf=\"Chl.errors && Chl.errors.required\">\n                Challan No. is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Chl Date</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fabricModal.chl_date\" name=\"chldate\"\n              data-toggle=\"tooltip\" #ChlDate=\"ngModel\" data-trigger=\"hover\" data-placement=\"top\"\n              data-title=\"Date Opened\" required>\n            <div *ngIf=\"ChlDate.invalid && (ChlDate.dirty || ChlDate.touched)\" class=\"errors\">\n              <div *ngIf=\"ChlDate.errors && ChlDate.errors.required\">\n                Challan Date is required.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Lot</label>\n            <!-- pattern -->\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.lot_no\" name=\"lots\" #Lot=\"ngModel\"\n              required />\n            <div *ngIf=\"Lot.invalid && (Lot.dirty || Lot.touched)\" class=\"errors\">\n              <div *ngIf=\"Lot.errors && Lot.errors.required\">\n                Lot is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Remark</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fabricModal.remark\" name=\"remark\" />\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row table table-responsive\" *ngIf=\"fabricRecord.length\">\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\n        </ag-grid-angular>\n      </div>\n      <div class=\"row\">\n        <form #sform=\"ngForm\">\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Gr</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.gr\" (keypress)=\"numberOnly($event)\" digits\n                  name=\"Gr\" #GR=\"ngModel\" required />\n                <div *ngIf=\"GR.invalid && (GR.dirty || GR.touched)\" class=\"errors\">\n                  <div *ngIf=\"GR.errors && GR.errors.required\">\n                    Gr is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Quality Id</label>\n                <!-- pattern -->\n                <select class=\"form-control\" [(ngModel)]=\"record.quality_entry_id\" name=\"quality_id\" #quality=\"ngModel\"\n                  (change)=\"onQualitySelect($event.target.value)\" required>\n                  <option disabled value=\"\">Select Quality Id\n                  </option>\n                  <option *ngFor=\"let quality of qualityList\" [value]=\"quality.entry_id\">{{quality.quality_id}}\n                  </option>\n                </select>\n                <div *ngIf=\"quality.invalid && (quality.dirty || quality.touched)\" class=\"errors\">\n                  <div *ngIf=\"quality.errors && quality.errors.required\">\n                    Quality Id is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Quality Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quality_name\" name=\"qualityname\"\n                  #qname=\"ngModel\" required />\n                <div *ngIf=\"qname.invalid && (qname.dirty || qname.touched)\" class=\"errors\">\n                  <div *ngIf=\"qname.errors && qname.errors.required\">\n                    Quality Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Quality Type</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quality_type\" name=\"type\" #qtype=\"ngModel\"\n                  required />\n                <div *ngIf=\"qtype.invalid && (qtype.dirty || qtype.touched)\" class=\"errors\">\n                  <div *ngIf=\"qtype.errors && qtype.errors.required\">\n                    Quality Type is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Mtr</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.mtr\" name=\"Mtr\"\n                  (keypress)=\"numberOnly($event)\" digits />\n                <!-- <div *ngIf=\"GR.invalid && (GR.dirty || GR.touched)\" class=\"errors\">\n                    <div *ngIf=\"GR.errors && GR.errors.required\">\n                      Gr is required.\n                    </div>\n                  </div> -->\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Weight</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.wt\" name=\"Wt\" #weight=\"ngModel\"\n                  (keypress)=\"numberOnly($event)\" digits required />\n                <div *ngIf=\"weight.invalid && (weight.dirty || weight.touched)\" class=\"errors\">\n                  <div *ngIf=\"weight.errors && weight.errors.required\">\n                    Weight is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>No. of Cones/ Taka</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.no_of_cones\" name=\"noOfTaka\" #taka=\"ngModel\"\n                  (keypress)=\"numberOnly($event)\" digits required />\n                <div *ngIf=\"taka.invalid && (taka.dirty || taka.touched)\" class=\"errors\">\n                  <div *ngIf=\"taka.errors && taka.errors.required\">\n                    No. of Cones/ Taka is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>No. of Boxes</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.no_of_boxes\" (keypress)=\"numberOnly($event)\"\n                  digits name=\"noOfBox\" #boxes=\"ngModel\" />\n                <!-- <div *ngIf=\"qtype.invalid && (qtype.dirty || qtype.touched)\" class=\"errors\">\n                    <div *ngIf=\"qtype.errors && qtype.errors.required\">\n                      Quality Type is required.\n                    </div>\n                  </div> -->\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddRecord(sform)\">Add\n                Record</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <br><br>\n      <div class=\"box-footer\">\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\n        &nbsp;\n        <button nbButton type=\"reset\" routerLink='/pages/fabric-in/view-fabric-in-list' id=\"Cancel\">Cancel</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YXJ1bmd1cHRhL0Rlc2t0b3AvYS9uZ3gtd2lyZWZyYW1lL3NyYy9hcHAvcGFnZXMvZmFicmljLWluL2FkZC1lZGl0LWZhYnJpYy1pbi9hZGQtZWRpdC1mYWJyaWMtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYWJyaWMtaW4vYWRkLWVkaXQtZmFicmljLWluL2FkZC1lZGl0LWZhYnJpYy1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcnMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddEditFabricInComponent, CustomRendererStockRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditFabricInComponent", function() { return AddEditFabricInComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererStockRecordComponent", function() { return CustomRendererStockRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_model_fabric_in_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/model/fabric-in-class */ "./src/app/@theme/model/fabric-in-class.ts");
/* harmony import */ var _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/fabric-in.service */ "./src/app/@theme/services/fabric-in.service.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddEditFabricInComponent = /** @class */ (function () {
    function AddEditFabricInComponent(toasterService, route, partyService, router, fabricService, qualityService, datePipe, authService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.partyService = partyService;
        this.router = router;
        this.fabricService = fabricService;
        this.qualityService = qualityService;
        this.datePipe = datePipe;
        this.authService = authService;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.partyList = [];
        this.fabricRecord = [];
        this.qualityList = [];
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.currentUserPermission = [];
        this.columnDefs = [
            { headerName: 'Actions', field: 'index' },
            { headerName: 'Gr', field: 'gr' },
            { headerName: 'Quality Id', field: 'quality_entry_id' },
            { headerName: 'Quality Name', field: 'quality_name' },
            { headerName: 'Quality Type', field: 'quality_type' },
            { headerName: 'Mtr', field: 'mtr' },
            { headerName: 'Wt', field: 'wt' },
            { headerName: 'No. of Cones/Taka', field: 'no_of_cones' },
            { headerName: 'No. of Boxes', field: 'no_of_boxes' },
        ];
        this.partyReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.fabricModal = new _theme_model_fabric_in_class__WEBPACK_IMPORTED_MODULE_4__["Fabric"]();
        this.record = new _theme_model_fabric_in_class__WEBPACK_IMPORTED_MODULE_4__["FabricInRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
        this.setColumns();
    }
    AddEditFabricInComponent.prototype.ngOnInit = function () {
        this.getQuality();
        this.getPartyList();
        this.onPageLoad();
    };
    AddEditFabricInComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditFabricInComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererStockRecordComponent;
                column.cellRendererParams = {
                    // inRouterLink: '/user/edit-user/',
                    action: _this
                };
            }
        });
    };
    AddEditFabricInComponent.prototype.getQuality = function () {
        var _this = this;
        this.qualityViewReqObj.current_user_id = this.currentUserId;
        this.qualityViewReqObj.user_head_id = this.currentUser.user_head_id;
        this.qualityViewReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.qualityViewReqObj.view_group = true;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
            }
        });
    };
    AddEditFabricInComponent.prototype.onQualitySelect = function (value) {
        var i = this.qualityList.findIndex(function (v) { return v.entry_id == value; });
        this.record.quality_name = this.qualityList[i].quality_name;
        this.record.quality_type = this.qualityList[i].quality_type;
    };
    AddEditFabricInComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
        this.partyReqObj.current_user_id = this.currentUserId;
        this.partyReqObj.user_head_id = this.currentUser.user_head_id;
        this.partyReqObj.group_user_ids = this.currentUserGroupUserIds;
        this.partyReqObj.view_group = true;
        this.partyService.getPartyList(this.partyReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyList = data[0].data;
            }
            else {
                _this.toasterService.error(data[0].message);
            }
        }, function (error) {
            _this.toasterService.error('Server Error');
        });
    };
    AddEditFabricInComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Fabric In';
            }
            else {
                this.topHeader = 'Fabric In View';
                this.viewFlag = true;
            }
            this.fabricService.getFabricInById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.fabricModal = data[0].data.stock[0];
                    _this.fabricRecord = data[0].data.bill_record;
                    _this.fabricModal.bill_date = _this.datePipe.transform(_this.fabricModal.bill_date, "yyyy-MM-dd");
                    _this.fabricModal.chl_date = _this.datePipe.transform(_this.fabricModal.chl_date, "yyyy-MM-dd");
                    _this.fabricRecord.forEach(function (ele, index) {
                        ele.index = index + 1;
                        var i = _this.qualityList.findIndex(function (v) { return v.entry_id == ele.quality_entry_id; });
                        if (i > -1) {
                            ele.quality_name = _this.qualityList[i].quality_name;
                            ele.quality_type = _this.qualityList[i].quality_type;
                        }
                    });
                    _this.rowData = _this.fabricRecord.slice();
                    _this.fabricModal.fabric_record = _this.fabricRecord;
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.subBtnName = 'Save';
            this.topHeader = 'Add Bill';
        }
    };
    AddEditFabricInComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditFabricInComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (this.fabricRecord.length) {
            this.record.index = j;
        }
        else {
            this.record.index = this.fabricRecord.length + 1;
        }
        this.fabricRecord.forEach(function (ele) {
            if (ele.gr == _this.record.gr) {
                ele = _this.record;
                flag = 1;
            }
        });
        if (!flag) {
            this.fabricRecord.push(this.record);
        }
        this.rowData = this.fabricRecord.slice();
        this.record = new _theme_model_fabric_in_class__WEBPACK_IMPORTED_MODULE_4__["FabricInRecord"]();
        form.resetForm();
    };
    AddEditFabricInComponent.prototype.onEditRecord = function (data) {
        var i = this.fabricRecord.findIndex(function (v) { return v.index == data; });
        this.record = this.fabricRecord[i];
    };
    AddEditFabricInComponent.prototype.deleteRecord = function (data) {
        var i = this.fabricRecord.findIndex(function (v) { return v.index == data; });
        this.fabricRecord.splice(i, 1);
        this.rowData = this.fabricRecord.slice();
    };
    AddEditFabricInComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.fabricModal.fabric_record = this.fabricRecord;
        console.log('bill', this.fabricModal);
        // for update
        if (this.id) {
            this.fabricService.updateFabricIn(this.fabricModal).subscribe(function (data) {
                console.log(data);
                // data = data[0].data
                // console.log(data)
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/fabric-in/view-fabric-in-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            //for add
            console.log(this.fabricModal);
            this.fabricService.addFabricIn(this.fabricModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/fabric-in/view-fabric-in-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditFabricInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-fabric-in',
            template: __webpack_require__(/*! ./add-edit-fabric-in.component.html */ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-fabric-in.component.scss */ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__["PartyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_services_fabric_in_service__WEBPACK_IMPORTED_MODULE_5__["FabricInService"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_7__["QualityService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]])
    ], AddEditFabricInComponent);
    return AddEditFabricInComponent;
}());

var CustomRendererStockRecordComponent = /** @class */ (function () {
    function CustomRendererStockRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererStockRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererStockRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererStockRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRecord(this.params.value);
    };
    CustomRendererStockRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRecord(_this.params.value);
            }
        });
    };
    CustomRendererStockRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-fabric-in.component.scss */ "./src/app/pages/fabric-in/add-edit-fabric-in/add-edit-fabric-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], CustomRendererStockRecordComponent);
    return CustomRendererStockRecordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-pages-pages-module~fabric-in-fabric-in-module~program-program-module~shade-shade-module~~bdb6f9b5.js.map