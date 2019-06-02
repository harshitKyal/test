(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~bill-in-bill-in-module~supplier-supplier-module"],{

/***/ "./src/app/@theme/model/bill-class.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/model/bill-class.ts ***!
  \********************************************/
/*! exports provided: Bill, BillRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bill", function() { return Bill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRecord", function() { return BillRecord; });
var Bill = /** @class */ (function () {
    function Bill() {
    }
    return Bill;
}());

var BillRecord = /** @class */ (function () {
    function BillRecord() {
    }
    return BillRecord;
}());



/***/ }),

/***/ "./src/app/@theme/services/bill-in.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/services/bill-in.service.ts ***!
  \****************************************************/
/*! exports provided: BillInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillInService", function() { return BillInService; });
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


var BillInService = /** @class */ (function () {
    function BillInService(apiService) {
        this.apiService = apiService;
    }
    BillInService.prototype.getAllBills = function (billReqObj) {
        return this.apiService.apiCaller('post', '/stockList', billReqObj);
    };
    BillInService.prototype.addBill = function (bill) {
        return this.apiService.apiCaller('post', '/addStock', bill);
    };
    BillInService.prototype.getBillById = function (id) {
        return this.apiService.apiCaller('get', '/getStockById/' + id);
    };
    BillInService.prototype.updateBill = function (bill) {
        return this.apiService.apiCaller('post', '/updateStock', bill);
    };
    BillInService.prototype.deleteBillById = function (id) {
        return this.apiService.apiCaller('get', '/deleteStock/' + id);
    };
    BillInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BillInService);
    return BillInService;
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

/***/ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>{{topHeader}}\n  </nb-card-header>\n  <nb-card-body>\n    <form #vform=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Stock Id</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.stock_id\" name=\"stockId\" #StockId=\"ngModel\"\n              required />\n            <div *ngIf=\"StockId.invalid && (StockId.dirty || StockId.touched)\" class=\"errors\">\n              <div *ngIf=\"StockId.errors && StockId.errors.required\">\n                Stock Id is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Stock In Type</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.stock_in_type\" name=\"stockType\"\n              #StockType=\"ngModel\" required />\n            <div *ngIf=\"StockType.invalid && (StockType.dirty || StockType.touched)\" class=\"errors\">\n              <div *ngIf=\"StockType.errors && StockType.errors.required\">\n                Stock In Type is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Party Name</label>\n            <!-- pattern -->\n            <select class=\"form-control\" [(ngModel)]=\"billModal.party_name\" name=\"partyname\" #party=\"ngModel\">\n              <option disabled value=\"\">Select Party Name\n              </option>\n              <option *ngFor=\"let party of partyList\" [value]=\"party.party_name\">{{party.party_name}}</option>\n            </select>\n            <!-- <div *ngIf=\"party.invalid && (party.dirty || party.touched)\" class=\"errors\">\n                  <div *ngIf=\"party.errors && party.errors.required\">\n                    Party Name is required.\n                  </div>\n                </div> -->\n          </div>\n        </div>\n        <!-- <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Transfer Challan No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.transfer_challan_no\" name=\"transfer\" />\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <button style=\"margin-top: 32px;\" class=\"btn btn-primary btn-raised\">Transfer</button>\n        </div> -->\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Bill No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.bill_no\" name=\"bill\" #Bill=\"ngModel\"\n              required />\n            <div *ngIf=\"Bill.invalid && (Bill.dirty || Bill.touched)\" class=\"errors\">\n              <div *ngIf=\"Bill.errors && Bill.errors.required\">\n                Bill No. is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Bill Date</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"billModal.bill_date\" name=\"billdate\"\n              #BillDate=\"ngModel\" required data-trigger=\"hover\" data-placement=\"top\" data-title=\"Date Opened\"\n              data-toggle=\"tooltip\" />\n            <div *ngIf=\"BillDate.invalid && (BillDate.dirty || BillDate.touched)\" class=\"errors\">\n              <div *ngIf=\"BillDate.errors && BillDate.errors.required\">\n                Bill Date is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label>Chl No.</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.chl_no\" name=\"chl\" #Chl=\"ngModel\" required />\n            <div *ngIf=\"Chl.invalid && (Chl.dirty || Chl.touched)\" class=\"errors\">\n              <div *ngIf=\"Chl.errors && Chl.errors.required\">\n                Challan No. is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Chl Date</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"billModal.chl_date\" name=\"chldate\"\n              data-toggle=\"tooltip\" #ChlDate=\"ngModel\" data-trigger=\"hover\" data-placement=\"top\"\n              data-title=\"Date Opened\" required>\n            <div *ngIf=\"ChlDate.invalid && (ChlDate.dirty || ChlDate.touched)\" class=\"errors\">\n              <div *ngIf=\"ChlDate.errors && ChlDate.errors.required\">\n                Challan Date is required.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Batch</label>\n            <!-- pattern -->\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.batch_no\" name=\"batchs\" #Batch=\"ngModel\"\n              required />\n            <div *ngIf=\"Batch.invalid && (Batch.dirty || Batch.touched)\" class=\"errors\">\n              <div *ngIf=\"Batch.errors && Batch.errors.required\">\n                Batch is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label>Remark</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billModal.remark\" name=\"remark\" />\n          </div>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row table table-responsive\" *ngIf=\"billRecord.length\">\n        <ag-grid-angular style=\"width: 100%; height:300px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n          [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='10'>\n        </ag-grid-angular>\n      </div>\n      <div class=\"row\">\n        <form #sform=\"ngForm\">\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Gr</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.gr\" (keypress)=\"numberOnly($event)\" digits\n                  name=\"Gr\" #GR=\"ngModel\" required />\n                <div *ngIf=\"GR.invalid && (GR.dirty || GR.touched)\" class=\"errors\">\n                  <div *ngIf=\"GR.errors && GR.errors.required\">\n                    Gr is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Quality Id</label>\n                <!-- pattern -->\n                <select class=\"form-control\" [(ngModel)]=\"record.quality_entry_id\" name=\"quality_id\" #quality=\"ngModel\"\n                  (change)=\"onQualitySelect($event.target.value)\" required>\n                  <option disabled value=\"\">Select Quality Id\n                  </option>\n                  <option *ngFor=\"let quality of qualityList\" [value]=\"quality.entry_id\">{{quality.quality_id}}\n                  </option>\n                </select>\n                <div *ngIf=\"quality.invalid && (quality.dirty || quality.touched)\" class=\"errors\">\n                  <div *ngIf=\"quality.errors && quality.errors.required\">\n                    Quality Id is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Quality Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quality_name\" name=\"qualityname\"\n                  #qname=\"ngModel\" required />\n                <div *ngIf=\"qname.invalid && (qname.dirty || qname.touched)\" class=\"errors\">\n                  <div *ngIf=\"qname.errors && qname.errors.required\">\n                    Quality Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>Quality Type</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.quality_type\" name=\"type\" #qtype=\"ngModel\"\n                  required />\n                <div *ngIf=\"qtype.invalid && (qtype.dirty || qtype.touched)\" class=\"errors\">\n                  <div *ngIf=\"qtype.errors && qtype.errors.required\">\n                    Quality Type is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row col-md-12\">\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Mtr</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.mtr\" name=\"Mtr\"\n                  (keypress)=\"numberOnly($event)\" digits />\n                <!-- <div *ngIf=\"GR.invalid && (GR.dirty || GR.touched)\" class=\"errors\">\n                    <div *ngIf=\"GR.errors && GR.errors.required\">\n                      Gr is required.\n                    </div>\n                  </div> -->\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label>Weight</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.wt\" name=\"Wt\" #weight=\"ngModel\"\n                  (keypress)=\"numberOnly($event)\" digits required />\n                <div *ngIf=\"weight.invalid && (weight.dirty || weight.touched)\" class=\"errors\">\n                  <div *ngIf=\"weight.errors && weight.errors.required\">\n                    Weight is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>No. of Cones/ Taka</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.no_of_cones\" name=\"noOfTaka\" #taka=\"ngModel\"\n                  (keypress)=\"numberOnly($event)\" digits required />\n                <div *ngIf=\"taka.invalid && (taka.dirty || taka.touched)\" class=\"errors\">\n                  <div *ngIf=\"taka.errors && taka.errors.required\">\n                    No. of Cones/ Taka is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\">\n                <label>No. of Boxes</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.no_of_boxes\" (keypress)=\"numberOnly($event)\"\n                  digits name=\"noOfBox\" #boxes=\"ngModel\" />\n                <!-- <div *ngIf=\"qtype.invalid && (qtype.dirty || qtype.touched)\" class=\"errors\">\n                    <div *ngIf=\"qtype.errors && qtype.errors.required\">\n                      Quality Type is required.\n                    </div>\n                  </div> -->\n              </div>\n            </div>\n            <div class=\"col-md-2\">\n              <button [disabled]=\"sform.invalid\" style=\"margin-top: 32px;\" nbButton (click)=\"onAddRecord(sform)\">Add\n                Record</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"box-footer\">\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\n        &nbsp;\n        <button nbButton type=\"reset\" routerLink='/pages/bill/view-bill-list' id=\"Cancel\">Cancel</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errors {\n  color: red;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL3NyYy9hcHAvcGFnZXMvYmlsbC1pbi9hZGQtZWRpdC1iaWxsLWluL2FkZC1lZGl0LWJpbGwtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWxsLWluL2FkZC1lZGl0LWJpbGwtaW4vYWRkLWVkaXQtYmlsbC1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcnMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditBillInComponent, CustomRendererStockRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditBillInComponent", function() { return AddEditBillInComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererStockRecordComponent", function() { return CustomRendererStockRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_model_bill_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/model/bill-class */ "./src/app/@theme/model/bill-class.ts");
/* harmony import */ var _theme_services_bill_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/services/bill-in.service */ "./src/app/@theme/services/bill-in.service.ts");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddEditBillInComponent = /** @class */ (function () {
    function AddEditBillInComponent(toasterService, route, partyService, router, billService, qualityService) {
        this.toasterService = toasterService;
        this.route = route;
        this.partyService = partyService;
        this.router = router;
        this.billService = billService;
        this.qualityService = qualityService;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.partyList = [];
        this.billRecord = [];
        this.qualityList = [];
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
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
        this.billModal = new _theme_model_bill_class__WEBPACK_IMPORTED_MODULE_4__["Bill"]();
        this.record = new _theme_model_bill_class__WEBPACK_IMPORTED_MODULE_4__["BillRecord"]();
        this.setColumns();
    }
    AddEditBillInComponent.prototype.ngOnInit = function () {
        this.getQuality();
        // this.getPartyList();
        this.onPageLoad();
    };
    AddEditBillInComponent.prototype.setColumns = function () {
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
    AddEditBillInComponent.prototype.getQuality = function () {
        var _this = this;
        this.qualityService.getAllQualityData(this.qualityViewReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.qualityList = data[0].data;
            }
        });
    };
    AddEditBillInComponent.prototype.onQualitySelect = function (value) {
        var i = this.qualityList.findIndex(function (v) { return v.entry_id == value; });
        this.record.quality_name = this.qualityList[i].quality_name;
        this.record.quality_type = this.qualityList[i].quality_type;
    };
    AddEditBillInComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_9__["ViewReqObj"]();
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
    AddEditBillInComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Bill';
            }
            else {
                this.topHeader = 'Bill View';
                this.viewFlag = true;
            }
            this.billService.getBillById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.billModal = data[0].data.stock[0];
                    _this.billRecord = data[0].data.bill_record;
                    _this.billRecord.forEach(function (ele, index) {
                        ele.index = index + 1;
                        var i = _this.qualityList.findIndex(function (v) { return v.entry_id == ele.quality_entry_id; });
                        ele.quality_name = _this.qualityList[i].quality_name;
                        ele.quality_type = _this.qualityList[i].quality_type;
                    });
                    _this.rowData = _this.billRecord.slice();
                    _this.billModal.bill_record = _this.billRecord;
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
    AddEditBillInComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddEditBillInComponent.prototype.onAddRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (this.billRecord.length) {
            this.record.index = j;
        }
        else {
            this.record.index = this.billRecord.length + 1;
        }
        this.billRecord.forEach(function (ele) {
            if (ele.gr == _this.record.gr) {
                ele = _this.record;
                flag = 1;
            }
        });
        if (!flag) {
            this.billRecord.push(this.record);
        }
        this.rowData = this.billRecord.slice();
        this.record = new _theme_model_bill_class__WEBPACK_IMPORTED_MODULE_4__["BillRecord"]();
        form.resetForm();
    };
    AddEditBillInComponent.prototype.onEditRecord = function (data) {
        var i = this.billRecord.findIndex(function (v) { return v.index == data; });
        this.record = this.billRecord[i];
    };
    AddEditBillInComponent.prototype.deleteRecord = function (data) {
        var i = this.billRecord.findIndex(function (v) { return v.index == data; });
        this.billRecord.splice(i, 1);
        this.rowData = this.billRecord.slice();
    };
    AddEditBillInComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.billModal.bill_record = this.billRecord;
        console.log('bill', this.billModal);
        // for update
        if (this.id) {
            this.billService.updateBill(this.billModal).subscribe(function (data) {
                console.log(data);
                // data = data[0].data
                // console.log(data)
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/bill/view-bill-list']);
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
            console.log(this.billModal);
            this.billService.addBill(this.billModal).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/bill/view-bill-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditBillInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-bill-in',
            template: __webpack_require__(/*! ./add-edit-bill-in.component.html */ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-bill-in.component.scss */ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_6__["PartyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_services_bill_in_service__WEBPACK_IMPORTED_MODULE_5__["BillInService"], _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_7__["QualityService"]])
    ], AddEditBillInComponent);
    return AddEditBillInComponent;
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
            styles: [__webpack_require__(/*! ./add-edit-bill-in.component.scss */ "./src/app/pages/bill-in/add-edit-bill-in/add-edit-bill-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], CustomRendererStockRecordComponent);
    return CustomRendererStockRecordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-pages-pages-module~bill-in-bill-in-module~supplier-supplier-module.js.map