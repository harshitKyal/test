(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~process-process-module"],{

/***/ "./src/app/@theme/model/process-class.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/model/process-class.ts ***!
  \***********************************************/
/*! exports provided: Process, ProcessRecord, ProcessSubRecord, ProcessReq, ProcessReqRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRecord", function() { return ProcessRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessSubRecord", function() { return ProcessSubRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessReq", function() { return ProcessReq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessReqRecord", function() { return ProcessReqRecord; });
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());

var ProcessRecord = /** @class */ (function () {
    function ProcessRecord() {
    }
    return ProcessRecord;
}());

var ProcessSubRecord = /** @class */ (function () {
    function ProcessSubRecord() {
    }
    return ProcessSubRecord;
}());

var ProcessReq = /** @class */ (function () {
    function ProcessReq() {
    }
    return ProcessReq;
}());

var ProcessReqRecord = /** @class */ (function () {
    function ProcessReqRecord() {
    }
    return ProcessReqRecord;
}());



/***/ }),

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

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>{{topHeader}}\n  </nb-card-header>\n  <nb-card-body>\n    <form #vform=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>Process Name</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              [(ngModel)]=\"processModal.process_name\" name=\"processName\" #processname=\"ngModel\" required />\n            <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n              <div *ngIf=\"processname.errors && processname.errors.required\">\n                Process Name is required.\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>No. of Dying Bath</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"processModal.no_dying_bath\" name=\"dyingBath\"\n              #dyingbath=\"ngModel\" required />\n            <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n              <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                No. of Dying Bath is required.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label>DC Mulitplying Fac.</label>\n            <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n              (keypress)=\"numberOnly($event)\" [(ngModel)]=\"processModal.dc_multiplying_fac\" name=\"dc\" #Dc=\"ngModel\"\n              required />\n            <div *ngIf=\"Dc.invalid && (Dc.dirty || Dc.touched)\" class=\"errors\">\n              <div *ngIf=\"Dc.errors && Dc.errors.required\">\n                DC Mulitplying Fac is required.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              SCOURING\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.temperature\" name=\"scouringTemp\"\n                      #ScouringTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.plc_program_no\"\n                      name=\"scouring_program_no\" #ScouringProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                  No. of Dying Bath is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.hold_time\" name=\"scouringTime\"\n                      #ScouringTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"scouringRecord.rate_temperature\"\n                      name=\"scouringRateTemp\" #ScouringRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowScouringData\"\n                  [columnDefs]=\"scouringcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"scouringSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #scouringform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"scouringitemName\" autocomplete=\"off\" [(ngModel)]=\"scouringSubRecord.item_name\"\n                        (click)=\"HideShowSForm()\" required #scouringItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivSForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowSForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'scouring')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"scouringItemName.invalid && (scouringItemName.dirty || scouringItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"scouringItemName.errors && scouringItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"scouringSubRecord.concentration\"\n                        name=\"scouringConcentration\" #ScouringConcentration=\"ngModel\" required />\n                      <div\n                        *ngIf=\"ScouringConcentration.invalid && (ScouringConcentration.dirty || ScouringConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ScouringConcentration.errors && ScouringConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"scouringSubRecord.item_by\"\n                        name=\"scouringBy\" #ScouringBy=\"ngModel\" required />\n                      <div *ngIf=\"ScouringBy.invalid && (ScouringBy.dirty || ScouringBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"ScouringBy.errors && ScouringBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"scouringSubRecord.supplier_name\" name=\"scouringSuppName\"\n                        #ScouringSuppName=\"ngModel\" required />\n                      <div *ngIf=\"ScouringSuppName.invalid && (ScouringSuppName.dirty || ScouringSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ScouringSuppName.errors && ScouringSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"scouringform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddScouringRecord(scouringform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              DYING\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.temperature\" name=\"dyingTemp\"\n                      #DyingTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.plc_program_no\" name=\"dying_program_no\"\n                      #dyingProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                  <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                    No. of Dying Bath is required.\n                                  </div>\n                                </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.hold_time\" name=\"dyingTime\"\n                      #DyingTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"dyingRecord.rate_temperature\" name=\"dyingRateTemp\"\n                      #DyringRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowDyingData\"\n                  [columnDefs]=\"dyingcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"dyingSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #dyingform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"dyingitemName\" autocomplete=\"off\" [(ngModel)]=\"dyingSubRecord.item_name\"\n                        (click)=\"HideShowDForm()\" required #dyingItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivDForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowDForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'dying')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"dyingItemName.invalid && (dyingItemName.dirty || dyingItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"dyingItemName.errors && dyingItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"dyingSubRecord.concentration\"\n                        (keypress)=\"numberOnly($event)\" name=\"dyingConcentration\" #DyingConcentration=\"ngModel\"\n                        required />\n                      <div\n                        *ngIf=\"DyingConcentration.invalid && (DyingConcentration.dirty || DyingConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"DyingConcentration.errors && DyingConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"dyingSubRecord.item_by\"\n                        name=\"dyingBy\" #DyingBy=\"ngModel\" required />\n                      <div *ngIf=\"DyingBy.invalid && (DyingBy.dirty || DyingBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"DyingBy.errors && DyingBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"dyingSubRecord.supplier_name\" name=\"dyingSuppName\" #DyingSuppName=\"ngModel\"\n                        required />\n                      <div *ngIf=\"DyingSuppName.invalid && (DyingSuppName.dirty || DyingSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"DyingSuppName.errors && DyingSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"dyingform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddDyingRecord(dyingform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              RC\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.temperature\" name=\"rcTemp\"\n                      #RcTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.plc_program_no\" name=\"rc_program_no\"\n                      #RcProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                  <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                    No. of Dying Bath is required.\n                                  </div>\n                                </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.hold_time\" name=\"rcTime\"\n                      #RcTime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"rcRecord.rate_temperature\" name=\"rcRateTemp\"\n                      #RcRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                                <div *ngIf=\"processname.errors && processname.errors.required\">\n                                  Process Name is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowRCData\"\n                  [columnDefs]=\"rccolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"rcSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #rcform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\" name=\"rcitemName\"\n                        autocomplete=\"off\" [(ngModel)]=\"rcSubRecord.item_name\" (click)=\"HideShowRForm()\" required\n                        #rcItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivRForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowRForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'rc')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"rcItemName.invalid && (rcItemName.dirty || rcItemName.touched)\" class=\"errors\">\n                        <div *ngIf=\"rcItemName.errors && rcItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"rcSubRecord.concentration\"\n                        name=\"rcConcentration\" #RcConcentration=\"ngModel\" required />\n                      <div *ngIf=\"RcConcentration.invalid && (RcConcentration.dirty || RcConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"RcConcentration.errors && RcConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"rcSubRecord.item_by\" name=\"rcBy\"\n                        #RcBy=\"ngModel\" required />\n                      <div *ngIf=\"RcBy.invalid && (RcBy.dirty || RcBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"RcBy.errors && RcBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled [(ngModel)]=\"rcSubRecord.supplier_name\"\n                        name=\"rcSuppName\" #RcSuppName=\"ngModel\" required />\n                      <div *ngIf=\"RcSuppName.invalid && (RcSuppName.dirty || RcSuppName.touched)\" class=\"errors\">\n                        <div *ngIf=\"RcSuppName.errors && RcSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"rcform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddRCRecord(rcform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"row col-md-12\">\n        <nb-accordion>\n          <nb-accordion-item #item>\n            <nb-accordion-item-header>\n              COLD WASH\n            </nb-accordion-item-header>\n            <nb-accordion-item-body>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.temperature\" name=\"coldWashTemp\"\n                      #ColdWashTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Plc Program No.</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.plc_program_no\"\n                      name=\"coldWash_program_no\" #coldWashProgram=\"ngModel\" />\n                    <!-- <div *ngIf=\"dyingbath.invalid && (dyingbath.dirty || dyingbath.touched)\" class=\"errors\">\n                                <div *ngIf=\"dyingbath.errors && dyingbath.errors.required\">\n                                  No. of Dying Bath is required.\n                                </div>\n                              </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Hold Time</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.hold_time\" name=\"coldWashTime\"\n                      #coldWashtime=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label>Rate Temperature</label>\n                    <input nbInput fullWidth fieldSize=\"small\" class=\"form-control input-group input-group-sm\"\n                      (keypress)=\"numberOnly($event)\" [(ngModel)]=\"coldWashRecord.rate_temperature\"\n                      name=\"coldWashRateTemp\" #ColdWashRateTemp=\"ngModel\" />\n                    <!-- <div *ngIf=\"processname.invalid && (processname.dirty || processname.touched)\" class=\"errors\">\n                              <div *ngIf=\"processname.errors && processname.errors.required\">\n                                Process Name is required.\n                              </div>\n                            </div> -->\n                  </div>\n                </div>\n              </div>\n              <div class=\"row table table-responsive\">\n                <ag-grid-angular style=\"width: 100%; height:170px\" class=\"ag-theme-balham\" [rowData]=\"rowColdWashData\"\n                  [columnDefs]=\"coldwashcolumnDefs\" [pagination]=\"true\" [paginationPageSize]='10'\n                  *ngIf=\"coldWashSubRecordArray.length\">\n                </ag-grid-angular>\n              </div>\n              <form #coldwashform=\"ngForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Item Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" placeholder=\"Select Item Name\"\n                        name=\"coldWashitemName\" autocomplete=\"off\" [(ngModel)]=\"coldWashSubRecord.item_name\"\n                        (click)=\"HideShowCForm()\" required #ColdWashItemName=\"ngModel\">\n                      <div *ngIf=\"flagDivCForm\" class=\"dropdown\">\n                        <a href=\"javascript:void(0)\" (click)=\"HideShowCForm()\" class=\"float-right\">[X]</a>\n                        <table class=\"table table-bordered pointer table-responsive\">\n                          <thead>\n                            <tr>\n                              <th>Item Name</th>\n                              <th>Supplier Name</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of itemList; let i = index\" (click)=\"selectItem(item,'cold_wash')\"\n                              class=\"pointer\">\n                              <td style=\"display:none;\">{{item.entry_id}}</td>\n                              <td>{{item.item_name}}</td>\n                              <td>{{item.supplier_name}}</td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                      <div *ngIf=\"ColdWashItemName.invalid && (ColdWashItemName.dirty || ColdWashItemName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashItemName.errors && ColdWashItemName.errors.required\">\n                          Item Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>Concentration</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\" (keypress)=\"numberOnly($event)\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"coldWashSubRecord.concentration\"\n                        name=\"coldWashConcentration\" #ColdWashConcentration=\"ngModel\" required />\n                      <div\n                        *ngIf=\"ColdWashConcentration.invalid && (ColdWashConcentration.dirty || ColdWashConcentration.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashConcentration.errors && ColdWashConcentration.errors.required\">\n                          Concentration is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                      <label>By</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" [(ngModel)]=\"coldWashSubRecord.item_by\"\n                        name=\"coldWashBy\" #ColdWashBy=\"ngModel\" required />\n                      <div *ngIf=\"ColdWashBy.invalid && (ColdWashBy.dirty || ColdWashBy.touched)\" class=\"errors\">\n                        <div *ngIf=\"ColdWashBy.errors && ColdWashBy.errors.required\">\n                          By is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Supplier Name</label>\n                      <input nbInput fullWidth fieldSize=\"small\" type=\"text\"\n                        class=\"form-control input-group input-group-sm\" disabled\n                        [(ngModel)]=\"coldWashSubRecord.supplier_name\" name=\"coldWashSuppName\"\n                        #ColdWashSuppName=\"ngModel\" required />\n                      <div *ngIf=\"ColdWashSuppName.invalid && (ColdWashSuppName.dirty || ColdWashSuppName.touched)\"\n                        class=\"errors\">\n                        <div *ngIf=\"ColdWashSuppName.errors && ColdWashSuppName.errors.required\">\n                          Supplier Name is required.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <button size=\"small\" [disabled]=\"coldwashform.invalid\" style=\"margin-top: 32px;\" nbButton\n                      (click)=\"onAddColdWashRecord(coldwashform)\">Add</button>\n                  </div>\n                </div>\n              </form>\n\n            </nb-accordion-item-body>\n          </nb-accordion-item>\n        </nb-accordion>\n      </div>\n      <br>\n      <div class=\"box-footer\">\n        <button [disabled]=\"vform.invalid\" nbButton (click)=\"onCustomFormSubmit(vform)\">{{subBtnName}}</button>\n        &nbsp;\n        <button nbButton type=\"reset\" routerLink='/pages/process/view-process-list' id=\"Cancel\">Cancel</button>\n      </div>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MvYWRkLWVkaXQtcHJvY2Vzcy9hZGQtZWRpdC1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditProcessComponent, CustomRendererScouringRecordComponent, CustomRendererRCRecordComponent, CustomRendererColdWashRecordComponent, CustomRendererDyingRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProcessComponent", function() { return AddEditProcessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererScouringRecordComponent", function() { return CustomRendererScouringRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererRCRecordComponent", function() { return CustomRendererRCRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererColdWashRecordComponent", function() { return CustomRendererColdWashRecordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererDyingRecordComponent", function() { return CustomRendererDyingRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@theme/model/process-class */ "./src/app/@theme/model/process-class.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/supplier.service */ "./src/app/@theme/services/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddEditProcessComponent = /** @class */ (function () {
    function AddEditProcessComponent(toasterService, route, router, processService, authService, supplierService) {
        var _this = this;
        this.toasterService = toasterService;
        this.route = route;
        this.router = router;
        this.processService = processService;
        this.authService = authService;
        this.supplierService = supplierService;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.flagDivSForm = false;
        this.flagDivRForm = false;
        this.flagDivDForm = false;
        this.flagDivCForm = false;
        this.subBtnName = '';
        this.topHeader = '';
        this.viewFlag = false;
        this.processRecord = [];
        this.scouringSubRecordArray = [];
        this.rcSubRecordArray = [];
        this.dyingSubRecordArray = [];
        this.coldWashSubRecordArray = [];
        this.itemList = [];
        this.processReqRecord = [];
        this.scouringcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.dyingcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.rccolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.coldwashcolumnDefs = [
            { headerName: 'Actions', field: 'index', width: 70 },
            { headerName: 'Item Name', field: 'item_name' },
            { headerName: 'Concentration', field: 'concentration' },
            { headerName: 'By', field: 'item_by' },
            { headerName: 'Supplier Name', field: 'supplier_name' },
        ];
        this.processModal = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["Process"]();
        this.scouringRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.dyingRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.rcRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.coldWashRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessRecord"]();
        this.scouringSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.coldWashSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.dyingSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.rcSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserId = ele.user.user_id;
                _this.currentUserHeadid = ele.user.user_head_id;
                _this.currentUserPermission = ele.user_permission;
                _this.currentUserGroupUserIds = ele.user.group_user_ids;
            }
        });
    }
    AddEditProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    AddEditProcessComponent.prototype.ngOnInit = function () {
        this.setScouringColumns();
        this.setRCColumns();
        this.setColdWashColumns();
        this.setDyingColumns();
        this.getItemList();
        this.onPageLoad();
    };
    AddEditProcessComponent.prototype.onPageLoad = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id != null) {
            if (this.id) {
                this.subBtnName = 'Update';
                this.topHeader = 'Edit Process';
            }
            else {
                this.topHeader = 'Process View';
                this.viewFlag = true;
            }
            this.processService.getProcessById(this.id).subscribe(function (data) {
                if (!data[0].error) {
                    _this.processModal = data[0].data.process[0];
                    _this.processReqRecord = data[0].data.process_record;
                    if (_this.processReqRecord.length) {
                        var scouringIndex_1 = 0;
                        var dyingIndex_1 = 0;
                        var rcIndex_1 = 0;
                        var coldWashIndex_1 = 0;
                        _this.processReqRecord.forEach(function (ele, index) {
                            if (ele.type === 'scouring') {
                                if (!scouringIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.scouringRecord, ele);
                                }
                                scouringIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.scouringSubRecordArray, _this.scouringSubRecord, ele, scouringIndex_1);
                            }
                            else if (ele.type === 'rc') {
                                if (!rcIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.rcRecord, ele);
                                }
                                rcIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.rcSubRecordArray, _this.rcSubRecord, ele, rcIndex_1);
                            }
                            else if (ele.type === 'cold_wash') {
                                if (!coldWashIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.coldWashRecord, ele);
                                }
                                coldWashIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.coldWashSubRecordArray, _this.coldWashSubRecord, ele, coldWashIndex_1);
                            }
                            else if (ele.type === 'dying') {
                                if (!dyingIndex_1) {
                                    _this.setProcessRecordOnLoad(_this.dyingRecord, ele);
                                }
                                dyingIndex_1 += 1;
                                _this.setProcessSubRecordOnLoad(_this.dyingSubRecordArray, _this.dyingSubRecord, ele, dyingIndex_1);
                            }
                        });
                    }
                    console.log('dying', _this.dyingSubRecordArray);
                    _this.rowColdWashData = _this.coldWashSubRecordArray;
                    _this.rowDyingData = _this.dyingSubRecordArray;
                    _this.rowRCData = _this.rcSubRecordArray;
                    _this.rowScouringData = _this.scouringSubRecordArray;
                    _this.processModal.process_record = _this.processRecord;
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
            this.topHeader = 'Add Process';
        }
    };
    AddEditProcessComponent.prototype.setProcessRecordOnLoad = function (processRecord, ele) {
        processRecord.type = ele.index;
        processRecord.control_id = ele.control_id;
        processRecord.temperature = ele.temperature;
        processRecord.plc_program_no = ele.plc_program_no;
        processRecord.hold_time = ele.hold_time;
        processRecord.rate_temperature = ele.rate_temperature;
    };
    AddEditProcessComponent.prototype.setProcessSubRecordOnLoad = function (prcoessSubRecordArray, processSubRecordObj, ele, index) {
        processSubRecordObj = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        processSubRecordObj.entry_id = ele.entry_id;
        processSubRecordObj.index = index;
        processSubRecordObj.item_id = ele.item_id;
        processSubRecordObj.item_name = ele.item_name;
        processSubRecordObj.concentration = ele.concentration;
        processSubRecordObj.item_by = ele.item_by;
        processSubRecordObj.supplier_name = ele.supplier_name;
        prcoessSubRecordArray.push(processSubRecordObj);
    };
    AddEditProcessComponent.prototype.setScouringColumns = function () {
        var _this = this;
        this.scouringcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererScouringRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setRCColumns = function () {
        var _this = this;
        this.rccolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererRCRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setColdWashColumns = function () {
        var _this = this;
        this.coldwashcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererColdWashRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.setDyingColumns = function () {
        var _this = this;
        this.dyingcolumnDefs.forEach(function (column) {
            if (column.field === 'index') {
                column.cellRendererFramework = CustomRendererDyingRecordComponent;
                column.cellRendererParams = {
                    action: _this
                };
            }
        });
    };
    AddEditProcessComponent.prototype.getItemList = function () {
        var _this = this;
        console.log('dsae');
        this.supplierService.getAllSupplierItemData().subscribe(function (data) {
            if (!data[0].error) {
                _this.itemList = data[0].data;
            }
        });
    };
    AddEditProcessComponent.prototype.selectItem = function (value, table_name) {
        this.flagDivSForm = false;
        this.flagDivCForm = false;
        this.flagDivDForm = false;
        this.flagDivRForm = false;
        if (table_name === 'scouring') {
            this.scouringSubRecord.item_id = value.entry_id;
            this.scouringSubRecord.item_name = value.item_name;
            this.scouringSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'rc') {
            this.rcSubRecord.item_id = value.entry_id;
            this.rcSubRecord.item_name = value.item_name;
            this.rcSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'dying') {
            this.dyingSubRecord.item_id = value.entry_id;
            this.dyingSubRecord.item_name = value.item_name;
            this.dyingSubRecord.supplier_name = value.supplier_name;
        }
        else if (table_name === 'cold_wash') {
            this.coldWashSubRecord.item_id = value.entry_id;
            this.coldWashSubRecord.item_name = value.item_name;
            this.coldWashSubRecord.supplier_name = value.supplier_name;
        }
    };
    AddEditProcessComponent.prototype.HideShowSForm = function () {
        this.flagDivSForm = !this.flagDivSForm;
    };
    AddEditProcessComponent.prototype.HideShowRForm = function () {
        this.flagDivRForm = !this.flagDivRForm;
    };
    AddEditProcessComponent.prototype.HideShowDForm = function () {
        this.flagDivDForm = !this.flagDivDForm;
    };
    AddEditProcessComponent.prototype.HideShowCForm = function () {
        this.flagDivCForm = !this.flagDivCForm;
    };
    AddEditProcessComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && ((charCode < 46 || charCode > 57) || charCode == 47)) {
            return false;
        }
        return true;
    };
    AddEditProcessComponent.prototype.onAddScouringRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.scouringSubRecordArray.length) {
            this.scouringSubRecord.index = j;
        }
        else if (this.scouringSubRecord.index == undefined) {
            this.scouringSubRecord.index = this.scouringSubRecordArray.length + 1;
        }
        this.scouringSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.scouringSubRecord.index) {
                ele = _this.scouringSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.scouringSubRecordArray.push(this.scouringSubRecord);
        }
        this.rowScouringData = this.scouringSubRecordArray.slice();
        this.scouringSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditScouringRecord = function (data) {
        console.log('data', data);
        var i = this.scouringSubRecordArray.findIndex(function (v) { return v.index == data; });
        console.log('index', i);
        console.log('record', this.scouringSubRecordArray);
        this.scouringSubRecord = this.scouringSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteScouringRecord = function (data) {
        console.log(data);
        var i = this.scouringSubRecordArray.findIndex(function (v) { return v.index == data; });
        console.log('index', i);
        this.scouringSubRecordArray.splice(i, 1);
        this.rowScouringData = this.scouringSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddRCRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.rcSubRecordArray.length) {
            this.rcSubRecord.index = j;
        }
        else if (this.rcSubRecord.index == undefined) {
            this.rcSubRecord.index = this.rcSubRecordArray.length + 1;
        }
        this.rcSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.rcSubRecord.index) {
                ele = _this.rcSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.rcSubRecordArray.push(this.rcSubRecord);
        }
        this.rowRCData = this.rcSubRecordArray.slice();
        this.rcSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditRCRecord = function (data) {
        var i = this.rcSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.rcSubRecord = this.rcSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteRCRecord = function (data) {
        var i = this.rcSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.rcSubRecordArray.splice(i, 1);
        this.rowRCData = this.rcSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddDyingRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.dyingSubRecordArray.length) {
            this.dyingSubRecord.index = j;
        }
        else if (this.dyingSubRecord.index == undefined) {
            this.dyingSubRecord.index = this.dyingSubRecordArray.length + 1;
        }
        this.dyingSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.dyingSubRecord.index) {
                ele = _this.dyingSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.dyingSubRecordArray.push(this.dyingSubRecord);
        }
        this.rowDyingData = this.dyingSubRecordArray.slice();
        this.dyingSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditDyingRecord = function (data) {
        console.log('data', data);
        var i = this.dyingSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.dyingSubRecord = this.dyingSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteDyingRecord = function (data) {
        var i = this.dyingSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.dyingSubRecordArray.splice(i, 1);
        this.rowDyingData = this.dyingSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onAddColdWashRecord = function (form) {
        var _this = this;
        var flag = 0;
        var j = 1;
        if (!this.coldWashSubRecordArray.length) {
            this.coldWashSubRecord.index = j;
        }
        else if (this.coldWashSubRecord.index == undefined) {
            this.coldWashSubRecord.index = this.coldWashSubRecordArray.length + 1;
        }
        this.coldWashSubRecordArray.forEach(function (ele) {
            if (ele.index == _this.coldWashSubRecord.index) {
                ele = _this.coldWashSubRecord;
                flag = 1;
            }
        });
        if (!flag) {
            this.coldWashSubRecordArray.push(this.coldWashSubRecord);
        }
        this.rowColdWashData = this.coldWashSubRecordArray.slice();
        this.coldWashSubRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessSubRecord"]();
        form.resetForm();
    };
    AddEditProcessComponent.prototype.onEditColdWashRecord = function (data) {
        var i = this.coldWashSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.coldWashSubRecord = this.coldWashSubRecordArray[i];
    };
    AddEditProcessComponent.prototype.deleteColdWashRecord = function (data) {
        var i = this.coldWashSubRecordArray.findIndex(function (v) { return v.index == data; });
        this.coldWashSubRecordArray.splice(i, 1);
        this.rowColdWashData = this.coldWashSubRecordArray.slice();
    };
    AddEditProcessComponent.prototype.onCustomFormSubmit = function (form) {
        var _this = this;
        this.processReq = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessReq"]();
        this.processReqRecord = [];
        this.processReq.entry_id = this.processModal.entry_id;
        this.processReq.process_name = this.processModal.process_name;
        this.processReq.no_dying_bath = this.processModal.no_dying_bath;
        this.processReq.dc_multiplying_fac = this.processModal.dc_multiplying_fac;
        this.processReq.created_by = this.processModal.created_by;
        this.processReq.created_date = this.processModal.created_date;
        this.processReq.updated_by = this.processModal.updated_by;
        this.processReq.updated_date = this.processModal.updated_date;
        if (this.scouringSubRecordArray.length) {
            this.scouringSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.scouringRecord, 'scouring');
            });
        }
        if (this.dyingSubRecordArray.length) {
            this.dyingSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.dyingRecord, 'dying');
            });
        }
        if (this.rcSubRecordArray.length) {
            this.rcSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.rcRecord, 'rc');
            });
        }
        if (this.coldWashSubRecordArray.length) {
            this.coldWashSubRecordArray.forEach(function (ele) {
                _this.getProcessReqRecord(ele, _this.coldWashRecord, 'cold_wash');
            });
        }
        if (this.processReqRecord.length) {
            this.processReq.process_req_record = this.processReqRecord;
        }
        console.log('process', this.processReq);
        // for update
        if (this.id) {
            this.processReq.updated_by = this.currentUserId;
            this.processService.updateProcess(this.processReq).subscribe(function (data) {
                console.log(data);
                if (!data[0].error) {
                    _this.toasterService.success(data[0].message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data[0].message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
        else {
            this.processReq.created_by = this.currentUserId;
            this.processReq.user_head_id = this.currentUserHeadid;
            console.log(this.processReq);
            this.processService.addProcess(this.processReq).subscribe(function (data) {
                data = data[0];
                if (!data.error) {
                    _this.toasterService.success(data.message);
                    form.resetForm();
                    _this.router.navigate(['/pages/process/view-process-list']);
                }
                else {
                    _this.toasterService.error(data.message);
                }
            }, function (error) {
                _this.toasterService.error('Server Error');
            });
        }
    };
    AddEditProcessComponent.prototype.getProcessReqRecord = function (ele, record, type) {
        var processSingleReqRecord = new _theme_model_process_class__WEBPACK_IMPORTED_MODULE_5__["ProcessReqRecord"]();
        processSingleReqRecord.entry_id = ele.entry_id;
        processSingleReqRecord.index = ele.index;
        processSingleReqRecord.item_id = ele.item_id;
        processSingleReqRecord.item_name = ele.item_name;
        processSingleReqRecord.concentration = ele.concentration;
        processSingleReqRecord.supplier_name = ele.supplier_name;
        processSingleReqRecord.item_by = ele.item_by;
        processSingleReqRecord.control_id = record.control_id;
        processSingleReqRecord.type = type;
        processSingleReqRecord.temperature = record.temperature;
        processSingleReqRecord.plc_program_no = record.plc_program_no;
        processSingleReqRecord.hold_time = record.hold_time;
        processSingleReqRecord.rate_temperature = record.rate_temperature;
        this.processReqRecord.push(processSingleReqRecord);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('instance'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"])
    ], AddEditProcessComponent.prototype, "instance", void 0);
    AddEditProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-process',
            template: __webpack_require__(/*! ./add-edit-process.component.html */ "./src/app/pages/process/add-edit-process/add-edit-process.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_7__["ProcessService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _theme_services_supplier_service__WEBPACK_IMPORTED_MODULE_9__["SupplierService"]])
    ], AddEditProcessComponent);
    return AddEditProcessComponent;
}());

var CustomRendererScouringRecordComponent = /** @class */ (function () {
    function CustomRendererScouringRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererScouringRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererScouringRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererScouringRecordComponent.prototype.editRecord = function () {
        console.log('this', this.params.value);
        this.params.action.onEditScouringRecord(this.params.value);
    };
    CustomRendererScouringRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (res) {
            console.log('rex', res);
            if (res) {
                _this.params.action.deleteScouringRecord(_this.params.value);
            }
        });
    };
    CustomRendererScouringRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererScouringRecordComponent);
    return CustomRendererScouringRecordComponent;
}());

var CustomRendererRCRecordComponent = /** @class */ (function () {
    function CustomRendererRCRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererRCRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererRCRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererRCRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditRCRecord(this.params.value);
    };
    CustomRendererRCRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteRCRecord(_this.params.value);
            }
        });
    };
    CustomRendererRCRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererRCRecordComponent);
    return CustomRendererRCRecordComponent;
}());

var CustomRendererColdWashRecordComponent = /** @class */ (function () {
    function CustomRendererColdWashRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererColdWashRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererColdWashRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererColdWashRecordComponent.prototype.editRecord = function () {
        this.params.action.onEditColdWashRecord(this.params.value);
    };
    CustomRendererColdWashRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteColdWashRecord(_this.params.value);
            }
        });
    };
    CustomRendererColdWashRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererColdWashRecordComponent);
    return CustomRendererColdWashRecordComponent;
}());

var CustomRendererDyingRecordComponent = /** @class */ (function () {
    function CustomRendererDyingRecordComponent(_modalService, toasterService) {
        this._modalService = _modalService;
        this.toasterService = toasterService;
    }
    CustomRendererDyingRecordComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    CustomRendererDyingRecordComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererDyingRecordComponent.prototype.editRecord = function () {
        console.log('this.params', this.params.action);
        this.params.action.onEditDyingRecord(this.params.value);
    };
    CustomRendererDyingRecordComponent.prototype.onDeleteRecord = function () {
        var _this = this;
        var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]);
        modalRef.componentInstance.titleFrom = 'Delete record ';
        modalRef.componentInstance.message = 'Are you sure you want to delete this record?';
        modalRef.result
            .then(function (result) {
            if (result) {
                _this.params.action.deleteDyingRecord(_this.params.value);
            }
        });
    };
    CustomRendererDyingRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editRecord()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteRecord()\"></i>",
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CustomRendererDyingRecordComponent);
    return CustomRendererDyingRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/process-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/process/process-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProcessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessRoutingModule", function() { return ProcessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/process/process.component.ts");
/* harmony import */ var _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-process/view-process.component */ "./src/app/pages/process/view-process/view-process.component.ts");
/* harmony import */ var _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-process/add-edit-process.component */ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _process_component__WEBPACK_IMPORTED_MODULE_2__["ProcessComponent"],
        children: [
            {
                path: 'view-process-list',
                component: _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_3__["ViewProcessComponent"]
            },
            {
                path: 'add-process',
                component: _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
            },
            {
                path: 'edit-process/:id',
                component: _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
            },
            {
                path: '',
                redirectTo: 'view-process-list',
                pathMatch: 'full',
            },
        ]
    }
];
var ProcessRoutingModule = /** @class */ (function () {
    function ProcessRoutingModule() {
    }
    ProcessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ProcessRoutingModule);
    return ProcessRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/process/process.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/process/process.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/process/process.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/process/process.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3MvcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process/process.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/process/process.component.ts ***!
  \****************************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcessComponent = /** @class */ (function () {
    function ProcessComponent() {
    }
    ProcessComponent.prototype.ngOnInit = function () {
    };
    ProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-process',
            template: __webpack_require__(/*! ./process.component.html */ "./src/app/pages/process/process.component.html"),
            styles: [__webpack_require__(/*! ./process.component.scss */ "./src/app/pages/process/process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProcessComponent);
    return ProcessComponent;
}());



/***/ }),

/***/ "./src/app/pages/process/process.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/process/process.module.ts ***!
  \*************************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-process/view-process.component */ "./src/app/pages/process/view-process/view-process.component.ts");
/* harmony import */ var _process_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process.component */ "./src/app/pages/process/process.component.ts");
/* harmony import */ var _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-edit-process/add-edit-process.component */ "./src/app/pages/process/add-edit-process/add-edit-process.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _process_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process-routing.module */ "./src/app/pages/process/process-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProcessModule = /** @class */ (function () {
    function ProcessModule() {
    }
    ProcessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _process_component__WEBPACK_IMPORTED_MODULE_3__["ProcessComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["AddEditProcessComponent"],
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["ViewProcessComponent"],
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererScouringRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererColdWashRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererDyingRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererRCRecordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_11__["ThemeModule"],
                _process_routing_module__WEBPACK_IMPORTED_MODULE_12__["ProcessRoutingModule"]
            ],
            entryComponents: [
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererScouringRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererColdWashRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererDyingRecordComponent"],
                _add_edit_process_add_edit_process_component__WEBPACK_IMPORTED_MODULE_4__["CustomRendererRCRecordComponent"]
            ]
        })
    ], ProcessModule);
    return ProcessModule;
}());



/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Process\n    <button style=\"float: right;margin-left: 10px\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onAddProcess()\">\n      Add Process\n    </button>\n    <button style=\"float: right;\" nbButton size=\"xsmall\" status=\"info\" (click)=\"onExport()\">Export</button>\n  </nb-card-header>\n  <nb-card-body>\n    <div *ngIf=\"viewGroupDataPermission && !viewAllDataPermission\">\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessData($event)\">\n        <nb-radio [value]=\"1\">\n          View Own\n        </nb-radio>\n        <nb-radio [value]=\"2\">\n          View Group\n        </nb-radio>\n      </nb-radio-group>\n    </div>\n    <div *ngIf=\"viewGroupDataPermission && viewAllDataPermission\">\n      <nb-radio-group class=\"row ml-2 mb-2\" [(ngModel)]=\"radioSelected\" (valueChange)=\"getProcessData($event)\">\n        <nb-radio class=\"radio-inline\" [value]=\"1\">\n          View Own\n        </nb-radio>\n        <nb-radio class=\"radio-inline\" [value]=\"2\">\n          View Group\n        </nb-radio>\n        <nb-radio class=\"radio-inline\" [value]=\"3\">\n          View All\n        </nb-radio>\n      </nb-radio-group>\n    </div>\n    <ag-grid-angular style=\"width: 100%; height:500px\" class=\"ag-theme-balham\" [rowData]=\"rowData\"\n      [columnDefs]=\"columnDefs\" [pagination]=\"true\" [paginationPageSize]='100' (gridReady)=\"onGridReady($event)\">\n    </ag-grid-angular>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2Nlc3Mvdmlldy1wcm9jZXNzL3ZpZXctcHJvY2Vzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/process/view-process/view-process.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/process/view-process/view-process.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewProcessComponent, CustomRendererProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcessComponent", function() { return ViewProcessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRendererProcessComponent", function() { return CustomRendererProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@theme/model/user-class */ "./src/app/@theme/model/user-class.ts");
/* harmony import */ var _theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@theme/services/process.service */ "./src/app/@theme/services/process.service.ts");
/* harmony import */ var _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@theme/services/permission.service */ "./src/app/@theme/services/permission.service.ts");
/* harmony import */ var _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/services/quality.service */ "./src/app/@theme/services/quality.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _theme_services_party_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@theme/services/party.service */ "./src/app/@theme/services/party.service.ts");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@theme/components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewProcessComponent = /** @class */ (function () {
    function ViewProcessComponent(processService, router, tosterService, permissionService, papa, authService, qualityService, partyService) {
        var _this = this;
        this.processService = processService;
        this.router = router;
        this.tosterService = tosterService;
        this.permissionService = permissionService;
        this.papa = papa;
        this.authService = authService;
        this.qualityService = qualityService;
        this.partyService = partyService;
        this.processList = [];
        this.addProcessPermission = 1;
        this.columnDefs = [
            { headerName: 'Actions', field: 'entry_id', sortable: false, width: 120 },
            { headerName: 'Process Name', field: 'process_name', sortable: true, filter: true },
            { headerName: 'No. of Dying Bath', field: 'no_dying_bath', sortable: true, filter: true },
            { headerName: 'DC Mutiplying Fac', field: 'dc_multiplying_fac', sortable: true, filter: true },
            { headerName: 'Created By', field: 'created_by', sortable: true, filter: true },
            { headerName: 'Updated By', field: 'updated_by', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'process_name', 'no_dying_bath', 'dc_multiplying_fac', 'created_by', 'updated_by'
        ];
        this.currentUserPermission = [];
        this.viewAllDataPermission = false;
        this.viewOwnDataPermission = false;
        this.viewGroupDataPermission = false;
        this.radioSelected = 1;
        this.processReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityViewReqObj = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
        this.qualityList = [];
        this.partyNameList = [];
        this.viewPartyReqOb = new _theme_model_user_class__WEBPACK_IMPORTED_MODULE_1__["ViewReqObj"]();
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
    ViewProcessComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUserPermission.length) {
            this.currentUserPermission.forEach(function (ele) {
                if (ele.form_name === 'Process') {
                    _this.addProcessPermission = 1;
                    _this.viewAllDataPermission = ele.can_view_all;
                    _this.viewGroupDataPermission = ele.can_view_group;
                    _this.viewOwnDataPermission = ele.can_view;
                    _this.processReqObj.current_user_id = _this.currentUserId;
                    _this.processReqObj.user_head_id = _this.currentUser.user_head_id;
                    _this.processReqObj.group_user_ids = _this.currentUserGroupUserIds;
                }
            });
        }
        this.getQualityData();
        this.getPartyList();
        this.getProcessData();
    };
    ViewProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    ViewProcessComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyNameList = [];
        this.viewPartyReqOb.view_group = true;
        this.viewPartyReqOb.current_user_id = this.currentUserId;
        this.viewPartyReqOb.user_head_id = this.currentUser.user_head_id;
        this.viewPartyReqOb.group_user_ids = this.currentUserGroupUserIds;
        this.partyService.getPartyList(this.viewPartyReqOb).subscribe(function (data) {
            if (!data[0].error) {
                _this.partyNameList = data[0].data;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        }, function (error) {
            _this.tosterService.error(error);
        });
    };
    ViewProcessComponent.prototype.getQualityData = function () {
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
    ViewProcessComponent.prototype.getProcessData = function (value) {
        var _this = this;
        this.processReqObj.view_all = false;
        this.processReqObj.view_group = false;
        this.processReqObj.view_own = false;
        if (value)
            this.radioSelected = value;
        //check which radio button is selected
        if (this.radioSelected == 1)
            this.processReqObj.view_own = true;
        else if (this.radioSelected == 2)
            this.processReqObj.view_group = true;
        else if (this.radioSelected == 3)
            this.processReqObj.view_all = true;
        this.processService.getAllProcesss(this.processReqObj).subscribe(function (data) {
            if (!data[0].error) {
                _this.processList = data[0].data;
                _this.rowData = _this.processList;
            }
            else {
                _this.tosterService.error(data[0].message);
            }
        });
    };
    ViewProcessComponent.prototype.setColumns = function () {
        var _this = this;
        this.columnDefs.forEach(function (column) {
            if (column.field === 'entry_id') {
                column.cellRendererFramework = CustomRendererProcessComponent;
                column.cellRendererParams = {
                    inRouterLink: '/pages/process/edit-process/',
                    inViewLink: '/pages/process/view-process/',
                    action: _this
                };
            }
        });
    };
    ViewProcessComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getUserList(this.currentUserId);
    };
    ViewProcessComponent.prototype.onAddProcess = function () {
        if (this.addProcessPermission) {
            this.router.navigate(['/pages/process/add-process']);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to add process. If you want to add process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    ViewProcessComponent.prototype.onExport = function () {
        var _this = this;
        var params = {
            columnKeys: this.columnExportDefs
        };
        var data = this.gridApi.getDataAsCsv(params);
        this.papa.parse(data, {
            complete: function (result) {
                _this.exportExcel(result.data);
            }
        });
    };
    ViewProcessComponent.prototype.exportExcel = function (data) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].json_to_sheet(data);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        xlsx__WEBPACK_IMPORTED_MODULE_10__["writeFile"](workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });
    };
    ViewProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-view-process',
            template: __webpack_require__(/*! ./view-process.component.html */ "./src/app/pages/process/view-process/view-process.component.html"),
            styles: [__webpack_require__(/*! ./view-process.component.scss */ "./src/app/pages/process/view-process/view-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], ngx_papaparse__WEBPACK_IMPORTED_MODULE_7__["Papa"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _theme_services_quality_service__WEBPACK_IMPORTED_MODULE_4__["QualityService"], _theme_services_party_service__WEBPACK_IMPORTED_MODULE_8__["PartyService"]])
    ], ViewProcessComponent);
    return ViewProcessComponent;
}());

var CustomRendererProcessComponent = /** @class */ (function () {
    function CustomRendererProcessComponent(router, _modalService, processService, toasterService, permissionService, authService) {
        var _this = this;
        this.router = router;
        this._modalService = _modalService;
        this.processService = processService;
        this.toasterService = toasterService;
        this.permissionService = permissionService;
        this.authService = authService;
        this.editProcessPermission = 1;
        this.deleteProcessPermission = 1;
        this.currentUserPermission = [];
        this.currentUser$ = this.authService.currentUser.subscribe(function (ele) {
            if (ele != null) {
                _this.currentUser = ele.user;
                _this.currentUserPermission = ele.user_permission;
            }
        });
    }
    CustomRendererProcessComponent.prototype.agInit = function (params) {
        var _this = this;
        this.params = params;
        this.currentUserPermission.forEach(function (ele) {
            if (ele.form_name === 'Process') {
                if (_this.params.action.radioSelected == 1) {
                    _this.editProcessPermission = ele.can_edit;
                    _this.deleteProcessPermission = ele.can_delete;
                }
                else if (_this.params.action.radioSelected == 2) {
                    _this.editProcessPermission = ele.can_edit_group;
                    _this.deleteProcessPermission = ele.can_delete_group;
                }
                else if (_this.params.action.radioSelected == 3) {
                    _this.editProcessPermission = ele.can_edit_all;
                    _this.deleteProcessPermission = ele.can_delete_all;
                }
            }
        });
    };
    CustomRendererProcessComponent.prototype.ngOnDestroy = function () {
        this.currentUser$.unsubscribe();
    };
    CustomRendererProcessComponent.prototype.refresh = function () {
        return false;
    };
    CustomRendererProcessComponent.prototype.viewProcess = function () {
    };
    CustomRendererProcessComponent.prototype.editProcess = function () {
        if (this.editProcessPermission) {
            this.router.navigate([this.params.inRouterLink + this.params.value]);
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to edit process. If you want to edit process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessComponent.prototype.onDeleteProcess = function () {
        var _this = this;
        if (this.deleteProcessPermission) {
            var modalRef = this._modalService.open(_theme_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogComponent"]);
            modalRef.componentInstance.titleFrom = 'Delete Process ';
            modalRef.componentInstance.message = 'Are you sure you want to delete this process?';
            modalRef.result
                .then(function (result) {
                if (result) {
                    var id = _this.params.value;
                    _this.processService.deleteProcessById(id).subscribe(function (data) {
                        if (!data[0].error) {
                            _this.params.action.getProcessData();
                            _this.toasterService.success(data[0].message);
                        }
                        else {
                            _this.toasterService.error(data[0].message);
                        }
                    });
                }
            });
        }
        else {
            var res = this.permissionService.callPermissionView('Ask for Permission', 'You do not have access permission to delete process. If you want to delete process ask admin for permission.');
            if (res) {
            }
            else {
            }
        }
    };
    CustomRendererProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <i class=\"ft-edit-2 font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"editProcess()\"></i>\n  <i class=\"ft-info font-medium-1 mr-2\" style=\"color:#4ca6ff\" (click)=\"viewProcess()\"></i>\n  <i class=\"ft-x font-medium-1 mr-2\" style=\"color:red\" (click)=\"onDeleteProcess()\"></i>",
            styles: [__webpack_require__(/*! ./view-process.component.scss */ "./src/app/pages/process/view-process/view-process.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _theme_services_process_service__WEBPACK_IMPORTED_MODULE_2__["ProcessService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _theme_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"], _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]])
    ], CustomRendererProcessComponent);
    return CustomRendererProcessComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-pages-pages-module~process-process-module.js.map