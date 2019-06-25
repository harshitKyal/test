(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-pages-pages-module~process-process-module"],{

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

/***/ "./src/app/pages/process/add-edit-process/add-edit-process.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/process/add-edit-process/add-edit-process.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-edit-process works!\n</p>\n"

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
/*! exports provided: AddEditProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProcessComponent", function() { return AddEditProcessComponent; });
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

var AddEditProcessComponent = /** @class */ (function () {
    function AddEditProcessComponent() {
    }
    AddEditProcessComponent.prototype.ngOnInit = function () {
    };
    AddEditProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-add-edit-process',
            template: __webpack_require__(/*! ./add-edit-process.component.html */ "./src/app/pages/process/add-edit-process/add-edit-process.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-process.component.scss */ "./src/app/pages/process/add-edit-process/add-edit-process.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddEditProcessComponent);
    return AddEditProcessComponent;
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
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"]
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
                _view_process_view_process_component__WEBPACK_IMPORTED_MODULE_2__["CustomRendererProcessComponent"]
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
            { headerName: 'Party Name', field: 'party_name', sortable: true, filter: true },
            { headerName: 'Process By', field: 'process_given_by', sortable: true, filter: true },
            { headerName: 'Quality Id', field: 'quality_id', sortable: true, filter: true },
            { headerName: 'Quality Name', field: 'quality_name', sortable: true, filter: true },
            { headerName: 'Quality Type', field: 'quality_type', sortable: true, filter: true },
            { headerName: 'remark', field: 'remark', sortable: true, filter: true },
        ];
        this.columnExportDefs = [
            'party_name', 'process_given_by', 'quality_id', 'quality_name', 'quality_type', 'remark'
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
                    // this.addUserPermission = ele.can_add;
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
                // this.processList.forEach(ele => {
                //   const i = this.qualityList.findIndex(v => v.entry_id == ele.quality_id);
                //   if (i > -1) {
                //     ele.quality_name = this.qualityList[i].quality_name;
                //     ele.quality_type = this.qualityList[i].quality_type;
                //   }
                //   const partyIndex = this.partyNameList.findIndex(v => v.entry_id == ele.party_id);
                //   if (partyIndex > -1) {
                //     ele.party_name = this.partyNameList[partyIndex].party_name;
                //   }
                // });
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