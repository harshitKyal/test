(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bill-in/bill-in.module": [
		"./src/app/pages/bill-in/bill-in.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~user-user-mo~0996d89c",
		"default~app-pages-pages-module~bill-in-bill-in-module~supplier-supplier-module",
		"default~app-pages-pages-module~bill-in-bill-in-module",
		"common"
	],
	"./lot/lot.module": [
		"./src/app/pages/lot/lot.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~user-user-mo~0996d89c",
		"default~app-pages-pages-module~lot-lot-module",
		"common",
		"lot-lot-module"
	],
	"./miscellaneous/miscellaneous.module": [
		"./src/app/pages/miscellaneous/miscellaneous.module.ts",
		"common"
	],
	"./party/party.module": [
		"./src/app/pages/party/party.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~user-user-mo~0996d89c",
		"default~app-pages-pages-module~party-party-module",
		"common",
		"party-party-module"
	],
	"./program/program.module": [
		"./src/app/pages/program/program.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"common"
	],
	"./quality/quality.module": [
		"./src/app/pages/quality/quality.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~quality-quality-module",
		"common",
		"quality-quality-module"
	],
	"./shade/shade.module": [
		"./src/app/pages/shade/shade.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"common"
	],
	"./supplier/supplier.module": [
		"./src/app/pages/supplier/supplier.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~bill-in-bill-in-module~supplier-supplier-module",
		"default~app-pages-pages-module~supplier-supplier-module",
		"common",
		"supplier-supplier-module"
	],
	"./user/user.module": [
		"./src/app/pages/user/user.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~user-user-mo~0996d89c",
		"default~app-pages-pages-module~user-user-module",
		"common"
	],
	"app/auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"common",
		"app-auth-auth-module"
	],
	"app/pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~bf8b898a",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~program-prog~14d0fbeb",
		"default~app-pages-pages-module~bill-in-bill-in-module~lot-lot-module~party-party-module~user-user-mo~0996d89c",
		"default~app-pages-pages-module~bill-in-bill-in-module~supplier-supplier-module",
		"default~app-pages-pages-module~user-user-module",
		"default~app-pages-pages-module~lot-lot-module",
		"default~app-pages-pages-module~supplier-supplier-module",
		"default~app-pages-pages-module~quality-quality-module",
		"default~app-pages-pages-module~party-party-module",
		"default~app-pages-pages-module~bill-in-bill-in-module",
		"common",
		"app-pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/@core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/*! exports provided: NbSimpleRoleProvider, NB_CORE_PROVIDERS, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbSimpleRoleProvider", function() { return NbSimpleRoleProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function() { return NB_CORE_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/@core/module-import-guard.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/app/@core/utils/index.ts");
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/users */ "./src/app/@core/data/users.ts");
/* harmony import */ var _data_electricity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/electricity */ "./src/app/@core/data/electricity.ts");
/* harmony import */ var _data_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/smart-table */ "./src/app/@core/data/smart-table.ts");
/* harmony import */ var _data_user_activity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/user-activity */ "./src/app/@core/data/user-activity.ts");
/* harmony import */ var _data_orders_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/orders-chart */ "./src/app/@core/data/orders-chart.ts");
/* harmony import */ var _data_profit_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/profit-chart */ "./src/app/@core/data/profit-chart.ts");
/* harmony import */ var _data_traffic_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/traffic-list */ "./src/app/@core/data/traffic-list.ts");
/* harmony import */ var _data_earning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/earning */ "./src/app/@core/data/earning.ts");
/* harmony import */ var _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/orders-profit-chart */ "./src/app/@core/data/orders-profit-chart.ts");
/* harmony import */ var _data_traffic_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/traffic-bar */ "./src/app/@core/data/traffic-bar.ts");
/* harmony import */ var _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/profit-bar-animation-chart */ "./src/app/@core/data/profit-bar-animation-chart.ts");
/* harmony import */ var _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data/temperature-humidity */ "./src/app/@core/data/temperature-humidity.ts");
/* harmony import */ var _data_solar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data/solar */ "./src/app/@core/data/solar.ts");
/* harmony import */ var _data_traffic_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data/traffic-chart */ "./src/app/@core/data/traffic-chart.ts");
/* harmony import */ var _data_stats_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data/stats-bar */ "./src/app/@core/data/stats-bar.ts");
/* harmony import */ var _data_country_order__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data/country-order */ "./src/app/@core/data/country-order.ts");
/* harmony import */ var _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./data/stats-progress-bar */ "./src/app/@core/data/stats-progress-bar.ts");
/* harmony import */ var _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./data/visitors-analytics */ "./src/app/@core/data/visitors-analytics.ts");
/* harmony import */ var _data_security_cameras__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./data/security-cameras */ "./src/app/@core/data/security-cameras.ts");
/* harmony import */ var _mock_users_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mock/users.service */ "./src/app/@core/mock/users.service.ts");
/* harmony import */ var _mock_electricity_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mock/electricity.service */ "./src/app/@core/mock/electricity.service.ts");
/* harmony import */ var _mock_smart_table_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mock/smart-table.service */ "./src/app/@core/mock/smart-table.service.ts");
/* harmony import */ var _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mock/user-activity.service */ "./src/app/@core/mock/user-activity.service.ts");
/* harmony import */ var _mock_orders_chart_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mock/orders-chart.service */ "./src/app/@core/mock/orders-chart.service.ts");
/* harmony import */ var _mock_profit_chart_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mock/profit-chart.service */ "./src/app/@core/mock/profit-chart.service.ts");
/* harmony import */ var _mock_traffic_list_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mock/traffic-list.service */ "./src/app/@core/mock/traffic-list.service.ts");
/* harmony import */ var _mock_earning_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mock/earning.service */ "./src/app/@core/mock/earning.service.ts");
/* harmony import */ var _mock_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mock/orders-profit-chart.service */ "./src/app/@core/mock/orders-profit-chart.service.ts");
/* harmony import */ var _mock_traffic_bar_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./mock/traffic-bar.service */ "./src/app/@core/mock/traffic-bar.service.ts");
/* harmony import */ var _mock_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./mock/profit-bar-animation-chart.service */ "./src/app/@core/mock/profit-bar-animation-chart.service.ts");
/* harmony import */ var _mock_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./mock/temperature-humidity.service */ "./src/app/@core/mock/temperature-humidity.service.ts");
/* harmony import */ var _mock_solar_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./mock/solar.service */ "./src/app/@core/mock/solar.service.ts");
/* harmony import */ var _mock_traffic_chart_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./mock/traffic-chart.service */ "./src/app/@core/mock/traffic-chart.service.ts");
/* harmony import */ var _mock_stats_bar_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mock/stats-bar.service */ "./src/app/@core/mock/stats-bar.service.ts");
/* harmony import */ var _mock_country_order_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mock/country-order.service */ "./src/app/@core/mock/country-order.service.ts");
/* harmony import */ var _mock_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mock/stats-progress-bar.service */ "./src/app/@core/mock/stats-progress-bar.service.ts");
/* harmony import */ var _mock_visitors_analytics_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./mock/visitors-analytics.service */ "./src/app/@core/mock/visitors-analytics.service.ts");
/* harmony import */ var _mock_security_cameras_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mock/security-cameras.service */ "./src/app/@core/mock/security-cameras.service.ts");
/* harmony import */ var _mock_mock_data_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./mock/mock-data.module */ "./src/app/@core/mock/mock-data.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















































var socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'socicon-github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'socicon-facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'socicon-twitter',
    },
];
var DATA_SERVICES = [
    { provide: _data_users__WEBPACK_IMPORTED_MODULE_7__["UserData"], useClass: _mock_users_service__WEBPACK_IMPORTED_MODULE_26__["UserService"] },
    { provide: _data_electricity__WEBPACK_IMPORTED_MODULE_8__["ElectricityData"], useClass: _mock_electricity_service__WEBPACK_IMPORTED_MODULE_27__["ElectricityService"] },
    { provide: _data_smart_table__WEBPACK_IMPORTED_MODULE_9__["SmartTableData"], useClass: _mock_smart_table_service__WEBPACK_IMPORTED_MODULE_28__["SmartTableService"] },
    { provide: _data_user_activity__WEBPACK_IMPORTED_MODULE_10__["UserActivityData"], useClass: _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_29__["UserActivityService"] },
    { provide: _data_orders_chart__WEBPACK_IMPORTED_MODULE_11__["OrdersChartData"], useClass: _mock_orders_chart_service__WEBPACK_IMPORTED_MODULE_30__["OrdersChartService"] },
    { provide: _data_profit_chart__WEBPACK_IMPORTED_MODULE_12__["ProfitChartData"], useClass: _mock_profit_chart_service__WEBPACK_IMPORTED_MODULE_31__["ProfitChartService"] },
    { provide: _data_traffic_list__WEBPACK_IMPORTED_MODULE_13__["TrafficListData"], useClass: _mock_traffic_list_service__WEBPACK_IMPORTED_MODULE_32__["TrafficListService"] },
    { provide: _data_earning__WEBPACK_IMPORTED_MODULE_14__["EarningData"], useClass: _mock_earning_service__WEBPACK_IMPORTED_MODULE_33__["EarningService"] },
    { provide: _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_15__["OrdersProfitChartData"], useClass: _mock_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_34__["OrdersProfitChartService"] },
    { provide: _data_traffic_bar__WEBPACK_IMPORTED_MODULE_16__["TrafficBarData"], useClass: _mock_traffic_bar_service__WEBPACK_IMPORTED_MODULE_35__["TrafficBarService"] },
    { provide: _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_17__["ProfitBarAnimationChartData"], useClass: _mock_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_36__["ProfitBarAnimationChartService"] },
    { provide: _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_18__["TemperatureHumidityData"], useClass: _mock_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_37__["TemperatureHumidityService"] },
    { provide: _data_solar__WEBPACK_IMPORTED_MODULE_19__["SolarData"], useClass: _mock_solar_service__WEBPACK_IMPORTED_MODULE_38__["SolarService"] },
    { provide: _data_traffic_chart__WEBPACK_IMPORTED_MODULE_20__["TrafficChartData"], useClass: _mock_traffic_chart_service__WEBPACK_IMPORTED_MODULE_39__["TrafficChartService"] },
    { provide: _data_stats_bar__WEBPACK_IMPORTED_MODULE_21__["StatsBarData"], useClass: _mock_stats_bar_service__WEBPACK_IMPORTED_MODULE_40__["StatsBarService"] },
    { provide: _data_country_order__WEBPACK_IMPORTED_MODULE_22__["CountryOrderData"], useClass: _mock_country_order_service__WEBPACK_IMPORTED_MODULE_41__["CountryOrderService"] },
    { provide: _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_23__["StatsProgressBarData"], useClass: _mock_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_42__["StatsProgressBarService"] },
    { provide: _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_24__["VisitorsAnalyticsData"], useClass: _mock_visitors_analytics_service__WEBPACK_IMPORTED_MODULE_43__["VisitorsAnalyticsService"] },
    { provide: _data_security_cameras__WEBPACK_IMPORTED_MODULE_25__["SecurityCamerasData"], useClass: _mock_security_cameras_service__WEBPACK_IMPORTED_MODULE_44__["SecurityCamerasService"] },
];
var NbSimpleRoleProvider = /** @class */ (function (_super) {
    __extends(NbSimpleRoleProvider, _super);
    function NbSimpleRoleProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbSimpleRoleProvider.prototype.getRole = function () {
        // here you could provide any role based on any auth flow
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('guest');
    };
    return NbSimpleRoleProvider;
}(_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"]));

var NB_CORE_PROVIDERS = _mock_mock_data_module__WEBPACK_IMPORTED_MODULE_45__["MockDataModule"].forRoot().providers.concat(DATA_SERVICES, _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"].forRoot({
    strategies: [
        _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbDummyAuthStrategy"].setup({
            name: 'email',
            delay: 3000,
        }),
    ],
    forms: {
        login: {
            socialLinks: socialLinks,
        },
        register: {
            socialLinks: socialLinks,
        },
    },
}).providers, [
    _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbSecurityModule"].forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"], useClass: NbSimpleRoleProvider,
    },
    _utils__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"],
    _utils__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
    _utils__WEBPACK_IMPORTED_MODULE_6__["PlayerService"],
    _utils__WEBPACK_IMPORTED_MODULE_6__["StateService"],
]);
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_5__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    var CoreModule_1;
    CoreModule = CoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_46__["HttpClientModule"],
            ],
            exports: [
                _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"],
            ],
            declarations: [],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/@core/data/country-order.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/country-order.ts ***!
  \*********************************************/
/*! exports provided: CountryOrderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOrderData", function() { return CountryOrderData; });
var CountryOrderData = /** @class */ (function () {
    function CountryOrderData() {
    }
    return CountryOrderData;
}());



/***/ }),

/***/ "./src/app/@core/data/earning.ts":
/*!***************************************!*\
  !*** ./src/app/@core/data/earning.ts ***!
  \***************************************/
/*! exports provided: EarningData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningData", function() { return EarningData; });
var EarningData = /** @class */ (function () {
    function EarningData() {
    }
    return EarningData;
}());



/***/ }),

/***/ "./src/app/@core/data/electricity.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/electricity.ts ***!
  \*******************************************/
/*! exports provided: ElectricityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityData", function() { return ElectricityData; });
var ElectricityData = /** @class */ (function () {
    function ElectricityData() {
    }
    return ElectricityData;
}());



/***/ }),

/***/ "./src/app/@core/data/orders-chart.ts":
/*!********************************************!*\
  !*** ./src/app/@core/data/orders-chart.ts ***!
  \********************************************/
/*! exports provided: OrdersChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersChartData", function() { return OrdersChartData; });
var OrdersChartData = /** @class */ (function () {
    function OrdersChartData() {
    }
    return OrdersChartData;
}());



/***/ }),

/***/ "./src/app/@core/data/orders-profit-chart.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/data/orders-profit-chart.ts ***!
  \***************************************************/
/*! exports provided: OrdersProfitChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitChartData", function() { return OrdersProfitChartData; });
var OrdersProfitChartData = /** @class */ (function () {
    function OrdersProfitChartData() {
    }
    return OrdersProfitChartData;
}());



/***/ }),

/***/ "./src/app/@core/data/profit-bar-animation-chart.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/data/profit-bar-animation-chart.ts ***!
  \**********************************************************/
/*! exports provided: ProfitBarAnimationChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitBarAnimationChartData", function() { return ProfitBarAnimationChartData; });
var ProfitBarAnimationChartData = /** @class */ (function () {
    function ProfitBarAnimationChartData() {
    }
    return ProfitBarAnimationChartData;
}());



/***/ }),

/***/ "./src/app/@core/data/profit-chart.ts":
/*!********************************************!*\
  !*** ./src/app/@core/data/profit-chart.ts ***!
  \********************************************/
/*! exports provided: ProfitChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitChartData", function() { return ProfitChartData; });
var ProfitChartData = /** @class */ (function () {
    function ProfitChartData() {
    }
    return ProfitChartData;
}());



/***/ }),

/***/ "./src/app/@core/data/security-cameras.ts":
/*!************************************************!*\
  !*** ./src/app/@core/data/security-cameras.ts ***!
  \************************************************/
/*! exports provided: SecurityCamerasData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCamerasData", function() { return SecurityCamerasData; });
var SecurityCamerasData = /** @class */ (function () {
    function SecurityCamerasData() {
    }
    return SecurityCamerasData;
}());



/***/ }),

/***/ "./src/app/@core/data/smart-table.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/smart-table.ts ***!
  \*******************************************/
/*! exports provided: SmartTableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableData", function() { return SmartTableData; });
var SmartTableData = /** @class */ (function () {
    function SmartTableData() {
    }
    return SmartTableData;
}());



/***/ }),

/***/ "./src/app/@core/data/solar.ts":
/*!*************************************!*\
  !*** ./src/app/@core/data/solar.ts ***!
  \*************************************/
/*! exports provided: SolarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarData", function() { return SolarData; });
var SolarData = /** @class */ (function () {
    function SolarData() {
    }
    return SolarData;
}());



/***/ }),

/***/ "./src/app/@core/data/stats-bar.ts":
/*!*****************************************!*\
  !*** ./src/app/@core/data/stats-bar.ts ***!
  \*****************************************/
/*! exports provided: StatsBarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsBarData", function() { return StatsBarData; });
var StatsBarData = /** @class */ (function () {
    function StatsBarData() {
    }
    return StatsBarData;
}());



/***/ }),

/***/ "./src/app/@core/data/stats-progress-bar.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/data/stats-progress-bar.ts ***!
  \**************************************************/
/*! exports provided: StatsProgressBarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProgressBarData", function() { return StatsProgressBarData; });
var StatsProgressBarData = /** @class */ (function () {
    function StatsProgressBarData() {
    }
    return StatsProgressBarData;
}());



/***/ }),

/***/ "./src/app/@core/data/temperature-humidity.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/data/temperature-humidity.ts ***!
  \****************************************************/
/*! exports provided: TemperatureHumidityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureHumidityData", function() { return TemperatureHumidityData; });
var TemperatureHumidityData = /** @class */ (function () {
    function TemperatureHumidityData() {
    }
    return TemperatureHumidityData;
}());



/***/ }),

/***/ "./src/app/@core/data/traffic-bar.ts":
/*!*******************************************!*\
  !*** ./src/app/@core/data/traffic-bar.ts ***!
  \*******************************************/
/*! exports provided: TrafficBarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficBarData", function() { return TrafficBarData; });
var TrafficBarData = /** @class */ (function () {
    function TrafficBarData() {
    }
    return TrafficBarData;
}());



/***/ }),

/***/ "./src/app/@core/data/traffic-chart.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/traffic-chart.ts ***!
  \*********************************************/
/*! exports provided: TrafficChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartData", function() { return TrafficChartData; });
var TrafficChartData = /** @class */ (function () {
    function TrafficChartData() {
    }
    return TrafficChartData;
}());



/***/ }),

/***/ "./src/app/@core/data/traffic-list.ts":
/*!********************************************!*\
  !*** ./src/app/@core/data/traffic-list.ts ***!
  \********************************************/
/*! exports provided: TrafficListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficListData", function() { return TrafficListData; });
var TrafficListData = /** @class */ (function () {
    function TrafficListData() {
    }
    return TrafficListData;
}());



/***/ }),

/***/ "./src/app/@core/data/user-activity.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/data/user-activity.ts ***!
  \*********************************************/
/*! exports provided: UserActivityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityData", function() { return UserActivityData; });
var UserActivityData = /** @class */ (function () {
    function UserActivityData() {
    }
    return UserActivityData;
}());



/***/ }),

/***/ "./src/app/@core/data/users.ts":
/*!*************************************!*\
  !*** ./src/app/@core/data/users.ts ***!
  \*************************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());



/***/ }),

/***/ "./src/app/@core/data/visitors-analytics.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/data/visitors-analytics.ts ***!
  \**************************************************/
/*! exports provided: VisitorsAnalyticsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsAnalyticsData", function() { return VisitorsAnalyticsData; });
var VisitorsAnalyticsData = /** @class */ (function () {
    function VisitorsAnalyticsData() {
    }
    return VisitorsAnalyticsData;
}());



/***/ }),

/***/ "./src/app/@core/mock/country-order.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@core/mock/country-order.service.ts ***!
  \*****************************************************/
/*! exports provided: CountryOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOrderService", function() { return CountryOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_country_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/country-order */ "./src/app/@core/data/country-order.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CountryOrderService = /** @class */ (function (_super) {
    __extends(CountryOrderService, _super);
    function CountryOrderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        _this.countriesCategoriesLength = _this.countriesCategories.length;
        return _this;
    }
    CountryOrderService.prototype.generateRandomData = function (nPoints) {
        return Array.from(Array(nPoints)).map(function () {
            return Math.round(Math.random() * 20);
        });
    };
    CountryOrderService.prototype.getCountriesCategories = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.countriesCategories);
    };
    CountryOrderService.prototype.getCountriesCategoriesData = function (country) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.generateRandomData(this.countriesCategoriesLength));
    };
    CountryOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CountryOrderService);
    return CountryOrderService;
}(_data_country_order__WEBPACK_IMPORTED_MODULE_2__["CountryOrderData"]));



/***/ }),

/***/ "./src/app/@core/mock/earning.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/mock/earning.service.ts ***!
  \***********************************************/
/*! exports provided: EarningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningService", function() { return EarningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_earning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/earning */ "./src/app/@core/data/earning.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EarningService = /** @class */ (function (_super) {
    __extends(EarningService, _super);
    function EarningService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentDate = new Date();
        _this.currentValue = Math.random() * 1000;
        _this.ONE_DAY = 24 * 3600 * 1000;
        _this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        _this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
        return _this;
    }
    EarningService.prototype.getDefaultLiveChartData = function (elementsNumber) {
        var _this = this;
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map(function (item) { return _this.generateRandomLiveChartData(); });
    };
    EarningService.prototype.generateRandomLiveChartData = function () {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    };
    EarningService.prototype.getEarningLiveUpdateCardData = function (currency) {
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        var newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data.liveChart);
    };
    EarningService.prototype.getEarningCardData = function (currency) {
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    };
    EarningService.prototype.getEarningPieChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.pieChartData);
    };
    EarningService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EarningService);
    return EarningService;
}(_data_earning__WEBPACK_IMPORTED_MODULE_2__["EarningData"]));



/***/ }),

/***/ "./src/app/@core/mock/electricity.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/mock/electricity.service.ts ***!
  \***************************************************/
/*! exports provided: ElectricityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityService", function() { return ElectricityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_electricity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/electricity */ "./src/app/@core/data/electricity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricityService = /** @class */ (function (_super) {
    __extends(ElectricityService, _super);
    function ElectricityService() {
        var _this = _super.call(this) || this;
        _this.listData = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
        _this.chartPoints = [
            490, 490, 495, 500,
            505, 510, 520, 530,
            550, 580, 630, 720,
            800, 840, 860, 870,
            870, 860, 840, 800,
            720, 200, 145, 130,
            130, 145, 200, 570,
            635, 660, 670, 670,
            660, 630, 580, 460,
            380, 350, 340, 340,
            340, 340, 340, 340,
            340, 340, 340,
        ];
        _this.chartData = _this.chartPoints.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
        return _this;
    }
    ElectricityService.prototype.getListData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.listData);
    };
    ElectricityService.prototype.getChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.chartData);
    };
    ElectricityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ElectricityService);
    return ElectricityService;
}(_data_electricity__WEBPACK_IMPORTED_MODULE_2__["ElectricityData"]));



/***/ }),

/***/ "./src/app/@core/mock/mock-data.module.ts":
/*!************************************************!*\
  !*** ./src/app/@core/mock/mock-data.module.ts ***!
  \************************************************/
/*! exports provided: MockDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataModule", function() { return MockDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/@core/mock/users.service.ts");
/* harmony import */ var _electricity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electricity.service */ "./src/app/@core/mock/electricity.service.ts");
/* harmony import */ var _smart_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart-table.service */ "./src/app/@core/mock/smart-table.service.ts");
/* harmony import */ var _user_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-activity.service */ "./src/app/@core/mock/user-activity.service.ts");
/* harmony import */ var _orders_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders-chart.service */ "./src/app/@core/mock/orders-chart.service.ts");
/* harmony import */ var _profit_chart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profit-chart.service */ "./src/app/@core/mock/profit-chart.service.ts");
/* harmony import */ var _traffic_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./traffic-list.service */ "./src/app/@core/mock/traffic-list.service.ts");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _earning_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./earning.service */ "./src/app/@core/mock/earning.service.ts");
/* harmony import */ var _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders-profit-chart.service */ "./src/app/@core/mock/orders-profit-chart.service.ts");
/* harmony import */ var _traffic_bar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./traffic-bar.service */ "./src/app/@core/mock/traffic-bar.service.ts");
/* harmony import */ var _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profit-bar-animation-chart.service */ "./src/app/@core/mock/profit-bar-animation-chart.service.ts");
/* harmony import */ var _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./temperature-humidity.service */ "./src/app/@core/mock/temperature-humidity.service.ts");
/* harmony import */ var _solar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./solar.service */ "./src/app/@core/mock/solar.service.ts");
/* harmony import */ var _traffic_chart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./traffic-chart.service */ "./src/app/@core/mock/traffic-chart.service.ts");
/* harmony import */ var _stats_bar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stats-bar.service */ "./src/app/@core/mock/stats-bar.service.ts");
/* harmony import */ var _country_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./country-order.service */ "./src/app/@core/mock/country-order.service.ts");
/* harmony import */ var _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stats-progress-bar.service */ "./src/app/@core/mock/stats-progress-bar.service.ts");
/* harmony import */ var _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./visitors-analytics.service */ "./src/app/@core/mock/visitors-analytics.service.ts");
/* harmony import */ var _security_cameras_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./security-cameras.service */ "./src/app/@core/mock/security-cameras.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SERVICES = [
    _users_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
    _electricity_service__WEBPACK_IMPORTED_MODULE_3__["ElectricityService"],
    _smart_table_service__WEBPACK_IMPORTED_MODULE_4__["SmartTableService"],
    _user_activity_service__WEBPACK_IMPORTED_MODULE_5__["UserActivityService"],
    _orders_chart_service__WEBPACK_IMPORTED_MODULE_6__["OrdersChartService"],
    _profit_chart_service__WEBPACK_IMPORTED_MODULE_7__["ProfitChartService"],
    _traffic_list_service__WEBPACK_IMPORTED_MODULE_8__["TrafficListService"],
    _periods_service__WEBPACK_IMPORTED_MODULE_9__["PeriodsService"],
    _earning_service__WEBPACK_IMPORTED_MODULE_10__["EarningService"],
    _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_11__["OrdersProfitChartService"],
    _traffic_bar_service__WEBPACK_IMPORTED_MODULE_12__["TrafficBarService"],
    _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_13__["ProfitBarAnimationChartService"],
    _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_14__["TemperatureHumidityService"],
    _solar_service__WEBPACK_IMPORTED_MODULE_15__["SolarService"],
    _traffic_chart_service__WEBPACK_IMPORTED_MODULE_16__["TrafficChartService"],
    _stats_bar_service__WEBPACK_IMPORTED_MODULE_17__["StatsBarService"],
    _country_order_service__WEBPACK_IMPORTED_MODULE_18__["CountryOrderService"],
    _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_19__["StatsProgressBarService"],
    _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_20__["VisitorsAnalyticsService"],
    _security_cameras_service__WEBPACK_IMPORTED_MODULE_21__["SecurityCamerasService"],
];
var MockDataModule = /** @class */ (function () {
    function MockDataModule() {
    }
    MockDataModule_1 = MockDataModule;
    MockDataModule.forRoot = function () {
        return {
            ngModule: MockDataModule_1,
            providers: SERVICES.slice(),
        };
    };
    var MockDataModule_1;
    MockDataModule = MockDataModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: SERVICES.slice(),
        })
    ], MockDataModule);
    return MockDataModule;
}());



/***/ }),

/***/ "./src/app/@core/mock/orders-chart.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/mock/orders-chart.service.ts ***!
  \****************************************************/
/*! exports provided: OrdersChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersChartService", function() { return OrdersChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_orders_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/orders-chart */ "./src/app/@core/data/orders-chart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersChartService = /** @class */ (function (_super) {
    __extends(OrdersChartService, _super);
    function OrdersChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    OrdersChartService.prototype.getDataForWeekPeriod = function () {
        return {
            chartLabel: this.getDataLabels(42, this.period.getWeeks()),
            linesData: [
                [
                    184, 267, 326, 366, 389, 399,
                    392, 371, 340, 304, 265, 227,
                    191, 158, 130, 108, 95, 91, 97,
                    109, 125, 144, 166, 189, 212,
                    236, 259, 280, 300, 316, 329,
                    338, 342, 339, 329, 312, 288,
                    258, 221, 178, 128, 71,
                ],
                [
                    158, 178, 193, 205, 212, 213,
                    204, 190, 180, 173, 168, 164,
                    162, 160, 159, 158, 159, 166,
                    179, 195, 215, 236, 257, 276,
                    292, 301, 304, 303, 300, 293,
                    284, 273, 262, 251, 241, 234,
                    232, 232, 232, 232, 232, 232,
                ],
                [
                    58, 137, 202, 251, 288, 312,
                    323, 324, 311, 288, 257, 222,
                    187, 154, 124, 100, 81, 68, 61,
                    58, 61, 69, 80, 96, 115, 137,
                    161, 186, 210, 233, 254, 271,
                    284, 293, 297, 297, 297, 297,
                    297, 297, 297, 297, 297,
                ],
            ],
        };
    };
    OrdersChartService.prototype.getDataForMonthPeriod = function () {
        return {
            chartLabel: this.getDataLabels(47, this.period.getMonths()),
            linesData: [
                [
                    5, 63, 113, 156, 194, 225,
                    250, 270, 283, 289, 290,
                    286, 277, 264, 244, 220,
                    194, 171, 157, 151, 150,
                    152, 155, 160, 166, 170,
                    167, 153, 135, 115, 97,
                    82, 71, 64, 63, 62, 61,
                    62, 65, 73, 84, 102,
                    127, 159, 203, 259, 333,
                ],
                [
                    6, 83, 148, 200, 240,
                    265, 273, 259, 211,
                    122, 55, 30, 28, 36,
                    50, 68, 88, 109, 129,
                    146, 158, 163, 165,
                    173, 187, 208, 236,
                    271, 310, 346, 375,
                    393, 400, 398, 387,
                    368, 341, 309, 275,
                    243, 220, 206, 202,
                    207, 222, 247, 286, 348,
                ],
                [
                    398, 348, 315, 292, 274,
                    261, 251, 243, 237, 231,
                    222, 209, 192, 172, 152,
                    132, 116, 102, 90, 80, 71,
                    64, 58, 53, 49, 48, 54, 66,
                    84, 104, 125, 142, 156, 166,
                    172, 174, 172, 167, 159, 149,
                    136, 121, 105, 86, 67, 45, 22,
                ],
            ],
        };
    };
    OrdersChartService.prototype.getDataForYearPeriod = function () {
        return {
            chartLabel: this.getDataLabels(42, this.year),
            linesData: [
                [
                    190, 269, 327, 366, 389, 398,
                    396, 387, 375, 359, 343, 327,
                    312, 298, 286, 276, 270, 268,
                    265, 258, 247, 234, 220, 204,
                    188, 172, 157, 142, 128, 116,
                    106, 99, 95, 94, 92, 89, 84,
                    77, 69, 60, 49, 36, 22,
                ],
                [
                    265, 307, 337, 359, 375, 386,
                    393, 397, 399, 397, 390, 379,
                    365, 347, 326, 305, 282, 261,
                    241, 223, 208, 197, 190, 187,
                    185, 181, 172, 160, 145, 126,
                    105, 82, 60, 40, 26, 19, 22,
                    43, 82, 141, 220, 321,
                ],
                [
                    9, 165, 236, 258, 244, 206,
                    186, 189, 209, 239, 273, 307,
                    339, 365, 385, 396, 398, 385,
                    351, 300, 255, 221, 197, 181,
                    170, 164, 162, 161, 159, 154,
                    146, 135, 122, 108, 96, 87,
                    83, 82, 82, 82, 82, 82, 82,
                ],
            ],
        };
    };
    OrdersChartService.prototype.getDataLabels = function (nPoints, labelsArray) {
        var labelsArrayLength = labelsArray.length;
        var step = Math.round(nPoints / labelsArrayLength);
        return Array.from(Array(nPoints)).map(function (item, index) {
            var dataIndex = Math.round(index / step);
            return index % step === 0 ? labelsArray[dataIndex] : '';
        });
    };
    OrdersChartService.prototype.getOrdersChartData = function (period) {
        return this.data[period];
    };
    OrdersChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"]])
    ], OrdersChartService);
    return OrdersChartService;
}(_data_orders_chart__WEBPACK_IMPORTED_MODULE_2__["OrdersChartData"]));



/***/ }),

/***/ "./src/app/@core/mock/orders-profit-chart.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/@core/mock/orders-profit-chart.service.ts ***!
  \***********************************************************/
/*! exports provided: OrdersProfitChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProfitChartService", function() { return OrdersProfitChartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_orders_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/orders-chart */ "./src/app/@core/data/orders-chart.ts");
/* harmony import */ var _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/orders-profit-chart */ "./src/app/@core/data/orders-profit-chart.ts");
/* harmony import */ var _data_profit_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/profit-chart */ "./src/app/@core/data/profit-chart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersProfitChartService = /** @class */ (function (_super) {
    __extends(OrdersProfitChartService, _super);
    function OrdersProfitChartService(ordersChartService, profitChartService) {
        var _this = _super.call(this) || this;
        _this.ordersChartService = ordersChartService;
        _this.profitChartService = profitChartService;
        _this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
        return _this;
    }
    OrdersProfitChartService.prototype.getOrderProfitChartSummary = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.summary);
    };
    OrdersProfitChartService.prototype.getOrdersChartData = function (period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.ordersChartService.getOrdersChartData(period));
    };
    OrdersProfitChartService.prototype.getProfitChartData = function (period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.profitChartService.getProfitChartData(period));
    };
    OrdersProfitChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_data_orders_chart__WEBPACK_IMPORTED_MODULE_2__["OrdersChartData"],
            _data_profit_chart__WEBPACK_IMPORTED_MODULE_4__["ProfitChartData"]])
    ], OrdersProfitChartService);
    return OrdersProfitChartService;
}(_data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_3__["OrdersProfitChartData"]));



/***/ }),

/***/ "./src/app/@core/mock/periods.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/mock/periods.service.ts ***!
  \***********************************************/
/*! exports provided: PeriodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodsService", function() { return PeriodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PeriodsService = /** @class */ (function () {
    function PeriodsService() {
    }
    PeriodsService.prototype.getYears = function () {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    };
    PeriodsService.prototype.getMonths = function () {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    };
    PeriodsService.prototype.getWeeks = function () {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    };
    PeriodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PeriodsService);
    return PeriodsService;
}());



/***/ }),

/***/ "./src/app/@core/mock/profit-bar-animation-chart.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/@core/mock/profit-bar-animation-chart.service.ts ***!
  \******************************************************************/
/*! exports provided: ProfitBarAnimationChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitBarAnimationChartService", function() { return ProfitBarAnimationChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/profit-bar-animation-chart */ "./src/app/@core/data/profit-bar-animation-chart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfitBarAnimationChartService = /** @class */ (function (_super) {
    __extends(ProfitBarAnimationChartService, _super);
    function ProfitBarAnimationChartService() {
        var _this = _super.call(this) || this;
        _this.data = {
            firstLine: _this.getDataForFirstLine(),
            secondLine: _this.getDataForSecondLine(),
        };
        return _this;
    }
    ProfitBarAnimationChartService.prototype.getDataForFirstLine = function () {
        return this.createEmptyArray(100)
            .map(function (_, index) {
            var oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    };
    ProfitBarAnimationChartService.prototype.getDataForSecondLine = function () {
        return this.createEmptyArray(100)
            .map(function (_, index) {
            var oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    };
    ProfitBarAnimationChartService.prototype.createEmptyArray = function (nPoints) {
        return Array.from(Array(nPoints));
    };
    ProfitBarAnimationChartService.prototype.getChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    };
    ProfitBarAnimationChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProfitBarAnimationChartService);
    return ProfitBarAnimationChartService;
}(_data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_2__["ProfitBarAnimationChartData"]));



/***/ }),

/***/ "./src/app/@core/mock/profit-chart.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/mock/profit-chart.service.ts ***!
  \****************************************************/
/*! exports provided: ProfitChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitChartService", function() { return ProfitChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_profit_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/profit-chart */ "./src/app/@core/data/profit-chart.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfitChartService = /** @class */ (function (_super) {
    __extends(ProfitChartService, _super);
    function ProfitChartService(period, http) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.http = http;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
        // this.data = {
        //   test: this.test,
        // };
    }
    ProfitChartService.prototype.getDataForWeekPeriod = function () {
        var nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    // private getData(): any {
    //   this.http.get('./assets/data/dashboard-graph.json').subscribe(data => {
    //     this.test = data;
    //   });
    // }
    ProfitChartService.prototype.getDataForMonthPeriod = function () {
        var nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    ProfitChartService.prototype.getDataForYearPeriod = function () {
        var nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    ProfitChartService.prototype.getRandomData = function (nPoints) {
        return Array.from(Array(nPoints)).map(function () {
            return Math.round(Math.random() * 500);
        });
    };
    ProfitChartService.prototype.getProfitChartData = function (period) {
        // const ch = 'test';
        // this.http.get('./assets/data/dashboard-graph.json').subscribe(data => {
        //   this.test = data;
        //   return this.data[ch];
        // });
        return this.data[period];
    };
    ProfitChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_1__["PeriodsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProfitChartService);
    return ProfitChartService;
}(_data_profit_chart__WEBPACK_IMPORTED_MODULE_2__["ProfitChartData"]));



/***/ }),

/***/ "./src/app/@core/mock/security-cameras.service.ts":
/*!********************************************************!*\
  !*** ./src/app/@core/mock/security-cameras.service.ts ***!
  \********************************************************/
/*! exports provided: SecurityCamerasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityCamerasService", function() { return SecurityCamerasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_security_cameras__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/security-cameras */ "./src/app/@core/data/security-cameras.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecurityCamerasService = /** @class */ (function (_super) {
    __extends(SecurityCamerasService, _super);
    function SecurityCamerasService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
        return _this;
    }
    SecurityCamerasService.prototype.getCamerasData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cameras);
    };
    SecurityCamerasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SecurityCamerasService);
    return SecurityCamerasService;
}(_data_security_cameras__WEBPACK_IMPORTED_MODULE_2__["SecurityCamerasData"]));



/***/ }),

/***/ "./src/app/@core/mock/smart-table.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/mock/smart-table.service.ts ***!
  \***************************************************/
/*! exports provided: SmartTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableService", function() { return SmartTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/smart-table */ "./src/app/@core/data/smart-table.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SmartTableService = /** @class */ (function (_super) {
    __extends(SmartTableService, _super);
    function SmartTableService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
        return _this;
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    SmartTableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SmartTableService);
    return SmartTableService;
}(_data_smart_table__WEBPACK_IMPORTED_MODULE_1__["SmartTableData"]));



/***/ }),

/***/ "./src/app/@core/mock/solar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/mock/solar.service.ts ***!
  \*********************************************/
/*! exports provided: SolarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarService", function() { return SolarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_solar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/solar */ "./src/app/@core/data/solar.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SolarService = /** @class */ (function (_super) {
    __extends(SolarService, _super);
    function SolarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 42;
        return _this;
    }
    SolarService.prototype.getSolarData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
    };
    SolarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SolarService);
    return SolarService;
}(_data_solar__WEBPACK_IMPORTED_MODULE_2__["SolarData"]));



/***/ }),

/***/ "./src/app/@core/mock/stats-bar.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@core/mock/stats-bar.service.ts ***!
  \*************************************************/
/*! exports provided: StatsBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsBarService", function() { return StatsBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_stats_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/stats-bar */ "./src/app/@core/data/stats-bar.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatsBarService = /** @class */ (function (_super) {
    __extends(StatsBarService, _super);
    function StatsBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    StatsBarService.prototype.getStatsBarData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.statsBarData);
    };
    StatsBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StatsBarService);
    return StatsBarService;
}(_data_stats_bar__WEBPACK_IMPORTED_MODULE_2__["StatsBarData"]));



/***/ }),

/***/ "./src/app/@core/mock/stats-progress-bar.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/mock/stats-progress-bar.service.ts ***!
  \**********************************************************/
/*! exports provided: StatsProgressBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsProgressBarService", function() { return StatsProgressBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/stats-progress-bar */ "./src/app/@core/data/stats-progress-bar.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatsProgressBarService = /** @class */ (function (_super) {
    __extends(StatsProgressBarService, _super);
    function StatsProgressBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
        return _this;
    }
    StatsProgressBarService.prototype.getProgressInfoData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.progressInfoData);
    };
    StatsProgressBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StatsProgressBarService);
    return StatsProgressBarService;
}(_data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_2__["StatsProgressBarData"]));



/***/ }),

/***/ "./src/app/@core/mock/temperature-humidity.service.ts":
/*!************************************************************!*\
  !*** ./src/app/@core/mock/temperature-humidity.service.ts ***!
  \************************************************************/
/*! exports provided: TemperatureHumidityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureHumidityService", function() { return TemperatureHumidityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/temperature-humidity */ "./src/app/@core/data/temperature-humidity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemperatureHumidityService = /** @class */ (function (_super) {
    __extends(TemperatureHumidityService, _super);
    function TemperatureHumidityService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        _this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
        return _this;
    }
    TemperatureHumidityService.prototype.getTemperatureData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.temperatureDate);
    };
    TemperatureHumidityService.prototype.getHumidityData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.humidityDate);
    };
    TemperatureHumidityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TemperatureHumidityService);
    return TemperatureHumidityService;
}(_data_temperature_humidity__WEBPACK_IMPORTED_MODULE_2__["TemperatureHumidityData"]));



/***/ }),

/***/ "./src/app/@core/mock/traffic-bar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/@core/mock/traffic-bar.service.ts ***!
  \***************************************************/
/*! exports provided: TrafficBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficBarService", function() { return TrafficBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_traffic_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/traffic-bar */ "./src/app/@core/data/traffic-bar.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrafficBarService = /** @class */ (function (_super) {
    __extends(TrafficBarService, _super);
    function TrafficBarService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    TrafficBarService.prototype.getDataForWeekPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    };
    TrafficBarService.prototype.getDataForMonthPeriod = function () {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    };
    TrafficBarService.prototype.getDataForYearPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    };
    TrafficBarService.prototype.getTrafficBarData = function (period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data[period]);
    };
    TrafficBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"]])
    ], TrafficBarService);
    return TrafficBarService;
}(_data_traffic_bar__WEBPACK_IMPORTED_MODULE_3__["TrafficBarData"]));



/***/ }),

/***/ "./src/app/@core/mock/traffic-chart.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@core/mock/traffic-chart.service.ts ***!
  \*****************************************************/
/*! exports provided: TrafficChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartService", function() { return TrafficChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_traffic_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/traffic-chart */ "./src/app/@core/data/traffic-chart.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrafficChartService = /** @class */ (function (_super) {
    __extends(TrafficChartService, _super);
    function TrafficChartService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    TrafficChartService.prototype.getTrafficChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data);
    };
    TrafficChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TrafficChartService);
    return TrafficChartService;
}(_data_traffic_chart__WEBPACK_IMPORTED_MODULE_2__["TrafficChartData"]));



/***/ }),

/***/ "./src/app/@core/mock/traffic-list.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/mock/traffic-list.service.ts ***!
  \****************************************************/
/*! exports provided: TrafficListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficListService", function() { return TrafficListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_traffic_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/traffic-list */ "./src/app/@core/data/traffic-list.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrafficListService = /** @class */ (function (_super) {
    __extends(TrafficListService, _super);
    function TrafficListService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    TrafficListService.prototype.getDataWeek = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var weeks = _this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.getDataMonth = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var months = _this.period.getMonths();
            var date = new Date();
            var prevYear = date.getFullYear() - 1;
            return months[months.length - 1] + ", " + prevYear;
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.getDataYear = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var years = _this.period.getYears();
            return "" + (parseInt(years[0], 10) - 1);
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.reduceData = function (timePeriods, getFirstDateInPeriod) {
        var _this = this;
        return timePeriods.reduce(function (result, timePeriod, index) {
            var hasResult = result[index - 1];
            var prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            var prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                _this.getRandom(100);
            var nextValue = _this.getRandom(100);
            var deltaValue = prevValue - nextValue;
            var item = {
                date: timePeriod,
                value: _this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate: prevDate,
                    prevValue: prevValue,
                    nextDate: timePeriod,
                    nextValue: nextValue,
                },
            };
            return result.concat([item]);
        }, []);
    };
    TrafficListService.prototype.getTrafficListData = function (period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data[period]);
    };
    TrafficListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"]])
    ], TrafficListService);
    return TrafficListService;
}(_data_traffic_list__WEBPACK_IMPORTED_MODULE_3__["TrafficListData"]));



/***/ }),

/***/ "./src/app/@core/mock/user-activity.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/@core/mock/user-activity.service.ts ***!
  \*****************************************************/
/*! exports provided: UserActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivityService", function() { return UserActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_user_activity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/user-activity */ "./src/app/@core/data/user-activity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserActivityService = /** @class */ (function (_super) {
    __extends(UserActivityService, _super);
    function UserActivityService(periods) {
        var _this = _super.call(this) || this;
        _this.periods = periods;
        _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    UserActivityService.prototype.generateUserActivityRandomData = function (date) {
        return {
            date: date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    };
    UserActivityService.prototype.getDataWeek = function () {
        var _this = this;
        return this.periods.getWeeks().map(function (week) {
            return _this.generateUserActivityRandomData(week);
        });
    };
    UserActivityService.prototype.getDataMonth = function () {
        var _this = this;
        var currentDate = new Date();
        var days = currentDate.getDate();
        var month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map(function (_, index) {
            var date = index + 1 + " " + month;
            return _this.generateUserActivityRandomData(date);
        });
    };
    UserActivityService.prototype.getDataYear = function () {
        var _this = this;
        return this.periods.getYears().map(function (year) {
            return _this.generateUserActivityRandomData(year);
        });
    };
    UserActivityService.prototype.getUserActivityData = function (period) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.data[period]);
    };
    UserActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"]])
    ], UserActivityService);
    return UserActivityService;
}(_data_user_activity__WEBPACK_IMPORTED_MODULE_3__["UserActivityData"]));



/***/ }),

/***/ "./src/app/@core/mock/users.service.ts":
/*!*********************************************!*\
  !*** ./src/app/@core/mock/users.service.ts ***!
  \*********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/users */ "./src/app/@core/data/users.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = new Date;
        _this.users = {
            nick: { name: 'Test', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        _this.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work',
        };
        _this.contacts = [
            { user: _this.users.nick, type: _this.types.mobile },
            { user: _this.users.eva, type: _this.types.home },
            { user: _this.users.jack, type: _this.types.mobile },
            { user: _this.users.lee, type: _this.types.mobile },
            { user: _this.users.alan, type: _this.types.home },
            { user: _this.users.kate, type: _this.types.work },
        ];
        _this.recentUsers = [
            { user: _this.users.alan, type: _this.types.home, time: _this.time.setHours(21, 12) },
            { user: _this.users.eva, type: _this.types.home, time: _this.time.setHours(17, 45) },
            { user: _this.users.nick, type: _this.types.mobile, time: _this.time.setHours(5, 29) },
            { user: _this.users.lee, type: _this.types.mobile, time: _this.time.setHours(11, 24) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(10, 45) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 42) },
            { user: _this.users.kate, type: _this.types.work, time: _this.time.setHours(9, 31) },
            { user: _this.users.jack, type: _this.types.mobile, time: _this.time.setHours(8, 0) },
        ];
        return _this;
    }
    UserService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.users);
    };
    UserService.prototype.getContacts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.contacts);
    };
    UserService.prototype.getRecentUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.recentUsers);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}(_data_users__WEBPACK_IMPORTED_MODULE_2__["UserData"]));



/***/ }),

/***/ "./src/app/@core/mock/visitors-analytics.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/mock/visitors-analytics.service.ts ***!
  \**********************************************************/
/*! exports provided: VisitorsAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsAnalyticsService", function() { return VisitorsAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _periods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./periods.service */ "./src/app/@core/mock/periods.service.ts");
/* harmony import */ var _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/visitors-analytics */ "./src/app/@core/data/visitors-analytics.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorsAnalyticsService = /** @class */ (function (_super) {
    __extends(VisitorsAnalyticsService, _super);
    function VisitorsAnalyticsService(periodService) {
        var _this = _super.call(this) || this;
        _this.periodService = periodService;
        _this.pieChartValue = 75;
        _this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        _this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
        return _this;
    }
    VisitorsAnalyticsService.prototype.generateOutlineLineData = function () {
        var months = this.periodService.getMonths();
        var outerLinePointsLength = this.outerLinePoints.length;
        var monthsLength = months.length;
        return this.outerLinePoints.map(function (p, index) {
            var monthIndex = Math.round(index / 4);
            var label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label: label,
                value: p,
            };
        });
    };
    VisitorsAnalyticsService.prototype.getInnerLineChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.innerLinePoints);
    };
    VisitorsAnalyticsService.prototype.getOutlineLineChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.generateOutlineLineData());
    };
    VisitorsAnalyticsService.prototype.getPieChartData = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.pieChartValue);
    };
    VisitorsAnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_periods_service__WEBPACK_IMPORTED_MODULE_2__["PeriodsService"]])
    ], VisitorsAnalyticsService);
    return VisitorsAnalyticsService;
}(_data_visitors_analytics__WEBPACK_IMPORTED_MODULE_3__["VisitorsAnalyticsData"]));



/***/ }),

/***/ "./src/app/@core/module-import-guard.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/module-import-guard.ts ***!
  \**********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/@core/utils/analytics.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@core/utils/analytics.service.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "./src/app/@core/utils/index.ts":
/*!**************************************!*\
  !*** ./src/app/@core/utils/index.ts ***!
  \**************************************/
/*! exports provided: LayoutService, AnalyticsService, PlayerService, StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.service */ "./src/app/@core/utils/layout.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return _layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"]; });

/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return _analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]; });

/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ "./src/app/@core/utils/player.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return _player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]; });

/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/@core/utils/state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]; });








/***/ }),

/***/ "./src/app/@core/utils/layout.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/utils/layout.service.ts ***!
  \***********************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LayoutService.prototype.changeLayoutSize = function () {
        this.layoutSize$.next();
    };
    LayoutService.prototype.onChangeLayoutSize = function () {
        return this.layoutSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/@core/utils/player.service.ts":
/*!***********************************************!*\
  !*** ./src/app/@core/utils/player.service.ts ***!
  \***********************************************/
/*! exports provided: Track, PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/@core/utils/state.service.ts":
/*!**********************************************!*\
  !*** ./src/app/@core/utils/state.service.ts ***!
  \**********************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StateService = /** @class */ (function () {
    function StateService(directionService) {
        var _this = this;
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (direction) { return _this.updateSidebarIcons(direction); });
        this.updateSidebarIcons(directionService.getDirection());
    }
    StateService.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StateService.prototype.updateSidebarIcons = function (direction) {
        var _a = this.sidebars, startSidebar = _a[0], endSidebar = _a[1];
        var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
        var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    };
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/confirm-dialog/confirm-dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n    {{confirmMessage}}\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button nbButton (click)=\"activeModal.close(true)\">Confirm</button>\r\n    <button nbButton (click)=\"activeModal.close(false)\">Cancel</button>\r\n</div>\r\n\r\n<!-- <h1 matDialogTitle>Confirm</h1>\r\n<div mat-dialog-content>{{confirmMessage}}</div>\r\n<div mat-dialog-actions class=\"pt-24\">\r\n    <button mat-raised-button class=\"mat-accent mr-16\" (click)=\"activeModal.close(true)\">Confirm</button>\r\n    <button mat-button (click)=\"activeModal.close(false)\">Cancel</button>\r\n</div> -->"

/***/ }),

/***/ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/@theme/components/confirm-dialog/confirm-dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(activeModal) {
        this.activeModal = activeModal;
        this.confirmMessage = '';
        this.title = '';
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
        this.confirmMessage = this.message;
        this.title = this.titleFrom;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmDialogComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmDialogComponent.prototype, "titleFrom", void 0);
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-default :host .socials {\n    font-size: 2rem; }\n.nb-theme-default :host .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-default :host .socials a:hover {\n        color: #2a2a2a; }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .socials {\n      font-size: 1.5rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-cosmic :host .socials {\n    font-size: 2rem; }\n.nb-theme-cosmic :host .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-cosmic :host .socials a:hover {\n        color: #ffffff; }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .socials {\n      font-size: 1.5rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.nb-theme-corporate :host .socials {\n    font-size: 2rem; }\n.nb-theme-corporate :host .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      -webkit-transition: color ease-out 0.1s;\n      transition: color ease-out 0.1s; }\n.nb-theme-corporate :host .socials a:hover {\n        color: #181818; }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate :host .socials {\n      font-size: 1.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIvaG9tZS9oYXJzaGl0L0Rlc2t0b3Avbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2RlZmF1bHQuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3NtaWMuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvc3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBR0g7O0dBRUc7QUNUSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUN2VEY7Ozs7R0FJRztBQ0pIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FHdlRGOzs7O0dBSUc7QUZKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FFdlRGOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FJdlRGOzs7O0dBSUc7QUhKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FFdlRGOzs7O0dBSUc7QURKSDs7OztHQUlHO0FESkg7Ozs7R0FJRztBQXNLSDs7OztHQUlHO0FBc0JIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUhFO0FLdlRGOzs7O0dBSUc7QU44R0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QUFDRjtFT2pJRixZQUFXO0VBQ1gscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYiwwQkFBOEI7TUFBOUIsdUJBQThCO1VBQTlCLCtCQUE4QjtFQUM5QiwwQkFBbUI7TUFBbkIsdUJBQW1CO1VBQW5CLG9CQUFtQixFUGlJaEI7QU8vSEg7SUFDRSxnQkFBZSxFQVdoQjtBQVRDO01BQ0UsZ0JBQWU7TUFDZixlSnFCYTtNSXBCYix3Q0FBK0I7TUFBL0IsZ0NBQStCLEVBS2hDO0FBSEM7UUFDRSxlSmtCbUIsRUlqQnBCO0FDcURIO0lEaERBO01BQ0Usa0JBQWlCLEVBQ2xCLEVBQUE7QVB1RkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QUFDRjtFT2pJRixZQUFXO0VBQ1gscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYiwwQkFBOEI7TUFBOUIsdUJBQThCO1VBQTlCLCtCQUE4QjtFQUM5QiwwQkFBbUI7TUFBbkIsdUJBQW1CO1VBQW5CLG9CQUFtQixFUGlJaEI7QU8vSEg7SUFDRSxnQkFBZSxFQVdoQjtBQVRDO01BQ0UsZ0JBQWU7TUFDZixlSENhO01HQWIsd0NBQStCO01BQS9CLGdDQUErQixFQUtoQztBQUhDO1FBQ0UsZUhGbUIsRUdHcEI7QUNxREg7SURoREE7TUFDRSxrQkFBaUIsRUFDbEIsRUFBQTtBUHVGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBQUNGO0VPaklGLFlBQVc7RUFDWCxxQkFBYTtFQUFiLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUE4QjtNQUE5Qix1QkFBOEI7VUFBOUIsK0JBQThCO0VBQzlCLDBCQUFtQjtNQUFuQix1QkFBbUI7VUFBbkIsb0JBQW1CLEVQaUloQjtBTy9ISDtJQUNFLGdCQUFlLEVBV2hCO0FBVEM7TUFDRSxnQkFBZTtNQUNmLGVKcUJhO01JcEJiLHdDQUErQjtNQUEvQixnQ0FBK0IsRUFLaEM7QUFIQztRQUNFLGVGRm1CLEVFR3BCO0FDcURIO0lEaERBO01BQ0Usa0JBQWlCLEVBQ2xCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcblxuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzOiBmYWxzZSAhZ2xvYmFsO1xuXG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgJHRtcDogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgICBAaWYgKCR0bXAgIT0gbnVsbCkge1xuICAgICAgQHJldHVybiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICR0bXApO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gY29udmVydC10by1jc3MtdmFyaWFibGVzKCR2YXJpYWJsZXMpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAkcmVzdWx0OiBtYXAtc2V0KCRyZXN1bHQsICR2YXIsICctLXZhcigjeyR2YXJ9KScpO1xuICB9XG5cbiAgQGRlYnVnICRyZXN1bHQ7XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1yYWRpYWwtZ3JhZGllbnQoJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMykge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItMjsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpkeGltYWdldHJhbnNmb3JtLm1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSckY29sb3ItMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yc3RyPSckY29sb3ItMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWRpZW50VHlwZT0xKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG5AbWl4aW4gbmItcmlnaHQtZ3JhZGllbnQoJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjNDBkYzdlLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNwaW5uZXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHNwaW5uZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIHNwaW5uZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHNwaW5uZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgc3Bpbm5lci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBzcGlubmVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHNwaW5uZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHNwaW5uZXIteHhzbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci14c21hbGw6IDEuNXJlbSxcbiAgc3Bpbm5lci1zbWFsbDogMS43NXJlbSxcbiAgc3Bpbm5lci1tZWRpdW06IDJyZW0sXG4gIHNwaW5uZXItbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXIteGxhcmdlOiAyLjVyZW0sXG4gIHNwaW5uZXIteHhsYXJnZTogM3JlbSxcblxuICBzdGVwcGVyLWluZGV4LXNpemU6IDJyZW0sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC1zaXplOiBmb250LXNpemUtc20sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHN0ZXBwZXItY29tcGxldGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgc3RlcHBlci1mZzogY29sb3ItZmcsXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24tc2l6ZTogMS41cmVtLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXdlaWdodDogZm9udC13ZWlnaHQtdWx0cmEtYm9sZCxcbiAgc3RlcHBlci1zdGVwLXBhZGRpbmc6IHBhZGRpbmcsXG5cbiAgYWNjb3JkaW9uLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjY29yZGlvbi1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBhY2NvcmRpb24tc2VwYXJhdG9yLFxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhY2NvcmRpb24taXRlbS1iZzogY29sb3ItYmcsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taXRlbS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBhY2NvcmRpb24taXRlbS1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBhY2NvcmRpb24taXRlbS1zaGFkb3c6IHNoYWRvdyxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLWNvbG9yOiB0YWJzLXNlcGFyYXRvcixcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIxLjg3NXJlbSxcbiAgY2FsZW5kYXItYm9keS1oZWlnaHQ6IDI1LjYyNXJlbSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLXhsZyxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC10aGluLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWhvdmVyLWl0ZW0tYmc6IGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmcsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBjYWxlbmRhci1zZWxlY3RlZC1mZzogY29sb3Itd2hpdGUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjYWxlbmRhci1mZyxcbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLWluYWN0aXZlLW9wYWNpdHk6IDAuNSxcbiAgY2FsZW5kYXItZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogMS43NXJlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXNpemU6IGZvbnQtc2l6ZS14cyxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYWxlbmRhci13ZWVrZGF5LWZnOiBjb2xvci1mZyxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LWZnOiBjb2xvci1kYW5nZXIsXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZWJmYmYyLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyNC4zNzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmc6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgdG9vbHRpcC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRvb2x0aXAtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgdG9vbHRpcC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgdG9vbHRpcC1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuICB0b29sdGlwLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuXG4gIHNlbGVjdC1ib3JkZXItd2lkdGg6IDJweCxcbiAgc2VsZWN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBzZWxlY3QtYmc6IGNvbG9yLWJnLFxuXG4gIHNlbGVjdC1jaGVja2JveC1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3QtY2hlY2ttYXJrLWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogI2YyZjRmNyxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIHNlbGVjdC1vcHRpb24tcGFkZGluZzogMC43NXJlbSAxLjVyZW0sXG5cbiAgZGF0ZXBpY2tlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZGF0ZXBpY2tlci1iZzogY29sb3ItYmcsXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG4gIGRhdGVwaWNrZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICByYWRpby1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWZnOiBjb2xvci1mZy10ZXh0LFxuICByYWRpby1zaXplOiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmFkaW8tYm9yZGVyLWNvbG9yLFxuICByYWRpby1kaXNhYmxlZC1jaGVja21hcms6IHJhZGlvLWNoZWNrbWFyayxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICByYWRpdXM6IDAuNXJlbSxcblxuICBjb2xvci1iZzogIzNkMzc4MCxcbiAgY29sb3ItYmctYWN0aXZlOiAjNDk0Mjk5LFxuICBjb2xvci1mZzogI2ExYTFlNSxcbiAgY29sb3ItZmctaGVhZGluZzogI2ZmZmZmZixcbiAgY29sb3ItZmctdGV4dDogI2QxZDFmZixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjMDBmOWE2LFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3NjU5ZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICMwMGQ5NzcsXG4gIGNvbG9yLWluZm86ICMwMDg4ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmMzg2YSxcblxuICBsaW5rLWNvbG9yOiAjMDBmOWE2LFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMTRmZmJlLFxuXG4gIHNlcGFyYXRvcjogIzM0MmU3MyxcbiAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg0MCwgMzcsIDg5LCAwLjYpLFxuXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG5cbiAgbGF5b3V0LWJnOiAjMmYyOTZiLFxuXG4gIHNjcm9sbGJhci1mZzogIzU1NGRiMyxcbiAgc2Nyb2xsYmFyLWJnOiAjMzMyZTczLFxuXG4gIHJhZGlhbC1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjNDIzZjhjLCAjMzAyYzZlKSxcbiAgbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNpZGViYXItZmc6IGNvbG9yLXNlY29uZGFyeSxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG5cbiAgaGVhZGVyLWZnOiBjb2xvci13aGl0ZSxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBmb290ZXItZmc6IGNvbG9yLWZnLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICB1c2VyLWZnOiBjb2xvci1iZyxcbiAgdXNlci1iZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oaWdobGlnaHQsXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItaGVpZ2h0OiBoZWFkZXItaGVpZ2h0LFxuXG4gIHNpZGViYXItd2lkdGg6IDE2LjI1cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNDVyZW0sXG5cbiAgbWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtc3VibWVudS1iZzogbGF5b3V0LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogdHJhbnNwYXJlbnQsXG5cbiAgYnRuLWhlcm8tc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgzMywgNywgNzcsIDAuNSksXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDNweCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAycHggOHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLWJnOiAjMzczMjczLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjMzEyYzY2LFxuXG4gIGZvcm0tY29udHJvbC1iZzogIzM3MzE3YSxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItZmcsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBzZWFyY2gtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjM2EzNDdhLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGNvbG9yLWJnLWFjdGl2ZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjIpLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDYxLCA1NSwgMTI4LCAwLjkpLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAyMGRlZyxcblxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICM0ZTQwOTUsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICMzNTJmNmUsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogIzMxMmU3NSxcblxuICB0b2FzdHItY29sb3ItZmc6IGNvbG9yLXdoaXRlLFxuICB0b2FzdHItcGFkZGluZzogMS4yNXJlbSxcbiAgdG9hc3RyLWJvcmRlcjogMCxcbiAgdG9hc3RyLWRlZmF1bHQtYmFja2dyb3VuZDogI2JjYzNjYyxcblxuICB0b29sdGlwLWZnOiBjb2xvci1iZyxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLXdoaXRlLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBkYXRlcGlja2VyLXNoYWRvdzogc2hhZG93LFxuXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIGhlYWRlci1mZzogI2Y3ZmFmYixcbiAgaGVhZGVyLWJnOiAjMTExMjE4LFxuXG4gIGxheW91dC1iZzogI2YxZjVmOCxcblxuICBjb2xvci1mZy1oZWFkaW5nOiAjMTgxODE4LFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLFxuXG4gIHNlcGFyYXRvcjogI2NkZDVkYyxcblxuICByYWRpdXM6IDAuMTdyZW0sXG5cbiAgc2Nyb2xsYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3M2ExZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM1ZGNmZTMsXG4gIGNvbG9yLWluZm86ICNiYTdmZWMsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmEzNmIsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNmI4MyxcblxuICBidG4tc2Vjb25kYXJ5LWJnOiAjZWRmMmY1LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2VkZjJmNSxcblxuICBhY3Rpb25zLWZnOiAjZDNkYmU1LFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICBzaWRlYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGJvcmRlci1jb2xvcjogI2Q1ZGJlMCxcblxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6ICNlM2U5ZWUsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogbWVudS1iZyxcblxuICBtZW51LXN1Ym1lbnUtYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogI2NkZDVkYyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1hY3RpdmUtYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1cyxcblxuICBidG4taGVyby1kZWdyZWU6IDBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogYnRuLWJvcmRlci1yYWRpdXMsXG5cbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItY29sb3IsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMCxcblxuICBsaW5rLWNvbG9yOiAjNWRjZmUzLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjN2RjZmUzLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgYWN0aW9ucy1zZXBhcmF0b3I6ICNmMWY0ZjUsXG5cbiAgbW9kYWwtc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VwYXJhdG9yOiAjZWJlY2VlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG5cbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItc2hhZG93OiBub25lLFxuICBmb290ZXItc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6ICMyYTJhMmEsXG5cbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogI2EyYjJjNyxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZTNlY2ZlLFxuICBjYWxlbmRhci10b2RheS1mZzogY29sb3Itd2hpdGUsXG5cbiAgdG9hc3RyLWljb24tcmFkaXVzOiByYWRpdXMsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuJGdyaWQtY29sdW1uczogMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZTogMjRweCAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aHM6IChcbiAgeHM6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBzbTogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIG1kOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbGc6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICB4bDogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2VcbikgIWRlZmF1bHQ7XG5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIGlzOiA0MDBweCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDAwcHgsXG4gIHh4eGw6IDE2MDBweFxuKTtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIGlzOiAzODBweCxcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHgsXG4gIHh4eGw6IDE1MDBweFxuKTtcblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3RoZW1lcyc7XG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2dsb2JhbC9icmVha3BvaW50cyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL2JyZWFrcG9pbnRzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLnNvY2lhbHMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcblxuICAgIGEge1xuICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGNvbG9yLWZnKTtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2Utb3V0IDAuMXM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoY29sb3ItZmctaGVhZGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGlzKSB7XG4gICAgLnNvY2lhbHMge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAycHgsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/@theme/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-footer',
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/@theme/components/footer/footer.component.scss")],
            template: "\n    <span class=\"created-by\">Created with \u2665 by <b><a href=\"https://akveo.com\" target=\"_blank\">Akveo</a></b> 2017</span>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n  ",
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\" [class.left]=\"position === 'normal'\" [class.right]=\"position === 'inverse'\">\n  <div class=\"logo-containter\">\n    <a (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\n    <div class=\"logo\" (click)=\"goToHome()\">\n      <img src=\"assets/images/logo.png\">\n    </div>\n  </div>\n  <!-- <ngx-theme-switcher></ngx-theme-switcher> -->\n</div>\n\n<div class=\"header-container\">\n  <!-- <ngx-layout-direction-switcher></ngx-layout-direction-switcher> -->\n  <nb-actions size=\"medium\" [class.right]=\"position === 'normal'\" [class.left]=\"position === 'inverse'\">\n    <nb-action *nbIsGranted=\"['view', 'user']\">\n      <nb-user [nbContextMenu]=\"userMenu\" [name]=\"user?.name\" [picture]=\"user?.picture\"></nb-user>\n    </nb-action>\n    <nb-action class=\"control-item\" icon=\"nb-notifications\"></nb-action>\n    <!-- <nb-action class=\"control-item\" icon=\"nb-email\"></nb-action> -->\n    <!-- <nb-action class=\"control-item\">\n      <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\n    </nb-action> -->\n  </nb-actions>\n</div>"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-default :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-default :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-default :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-default :host .control-item {\n    display: block; }\n.nb-theme-default :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-default :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-default :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-default :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-default :host .header-container .navigation i {\n        display: block; }\n.nb-theme-default :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-default :host .header-container .logo {\n        border-left: 1px solid #ebeef2; }\n[dir=rtl] .nb-theme-default :host .header-container .logo {\n        border-right: 1px solid #ebeef2; }\n.nb-theme-default :host .header-container .logo img {\n        height: 59px;\n        padding: 0.25rem; }\n.nb-theme-default :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-default :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-default :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-default :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-default :host .toggle-settings /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-default :host .toggle-settings /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-default :host .toggle-settings /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse;\n        -webkit-animation-name: pulse-light;\n                animation-name: pulse-light; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0);\n            box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4);\n            box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0);\n            box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0);\n            box-shadow: 0 0 1px 0 rgba(64, 220, 126, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4);\n            box-shadow: 0 0 3px 10px rgba(64, 220, 126, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0);\n            box-shadow: 0 0 5px 20px rgba(64, 220, 126, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-default :host nb-action:not(.toggle-settings) {\n      border: none; }\n    .nb-theme-default :host .control-item {\n      display: none; }\n    .nb-theme-default :host .toggle-settings {\n      padding: 0; }\n    .nb-theme-default :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-default :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-default :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-default :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-default :host .toggle-settings {\n      display: none; }\n    .nb-theme-default :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-default :host nb-action:not(.toggle-settings) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-default :host .right /deep/ {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-cosmic :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-cosmic :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-cosmic :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16.25rem - 1.25rem); }\n.nb-theme-cosmic :host .control-item {\n    display: block; }\n.nb-theme-cosmic :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-cosmic :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-cosmic :host .header-container .navigation i {\n        display: block; }\n.nb-theme-cosmic :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-cosmic :host .header-container .logo {\n        border-left: 1px solid #342e73; }\n[dir=rtl] .nb-theme-cosmic :host .header-container .logo {\n        border-right: 1px solid #342e73; }\n.nb-theme-cosmic :host .header-container .logo img {\n        height: 59px;\n        padding: 0.25rem; }\n.nb-theme-cosmic :host .header-container .logo span {\n        font-weight: 400; }\n.nb-theme-cosmic :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-cosmic :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-cosmic :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-cosmic :host .toggle-settings /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-cosmic :host .toggle-settings /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-cosmic :host .toggle-settings /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0);\n            box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4);\n            box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0);\n            box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0);\n            box-shadow: 0 0 1px 0 rgba(0, 249, 166, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4);\n            box-shadow: 0 0 3px 10px rgba(0, 249, 166, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0);\n            box-shadow: 0 0 5px 20px rgba(0, 249, 166, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-cosmic :host nb-action:not(.toggle-settings) {\n      border: none; }\n    .nb-theme-cosmic :host .control-item {\n      display: none; }\n    .nb-theme-cosmic :host .toggle-settings {\n      padding: 0; }\n    .nb-theme-cosmic :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-cosmic :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-cosmic :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-cosmic :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-cosmic :host .toggle-settings {\n      display: none; }\n    .nb-theme-cosmic :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-cosmic :host nb-action:not(.toggle-settings) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-cosmic :host .right /deep/ {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n.nb-theme-corporate :host .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.nb-theme-corporate :host .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n.nb-theme-corporate :host .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: calc(16rem - 1.25rem); }\n.nb-theme-corporate :host .control-item {\n    display: block; }\n.nb-theme-corporate :host .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: auto; }\n.nb-theme-corporate :host .header-container .navigation {\n      font-size: 2.5rem;\n      text-decoration: none; }\n[dir=ltr] .nb-theme-corporate :host .header-container .navigation {\n        padding-right: 1.25rem; }\n[dir=rtl] .nb-theme-corporate :host .header-container .navigation {\n        padding-left: 1.25rem; }\n.nb-theme-corporate :host .header-container .navigation i {\n        display: block; }\n.nb-theme-corporate :host .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 1.75rem;\n      font-weight: 500;\n      white-space: nowrap; }\n[dir=ltr] .nb-theme-corporate :host .header-container .logo {\n        border-left: 1px solid #cdd5dc; }\n[dir=rtl] .nb-theme-corporate :host .header-container .logo {\n        border-right: 1px solid #cdd5dc; }\n.nb-theme-corporate :host .header-container .logo img {\n        height: 59px;\n        padding: 0.25rem; }\n.nb-theme-corporate :host .header-container .logo span {\n        font-weight: 400; }\n[dir=ltr] .nb-theme-corporate :host nb-action {\n    border-left-color: #3f4550; }\n[dir=rtl] .nb-theme-corporate :host nb-action {\n    border-right-color: #3f4550; }\n[dir=ltr] .nb-theme-corporate :host .header-container .logo {\n    border: none; }\n[dir=rtl] .nb-theme-corporate :host .header-container .logo {\n    border: none; }\n.nb-theme-corporate :host .header-container /deep/ ngx-theme-switcher .dropdown-toggle {\n    color: #ffffff;\n    background: transparent; }\n.nb-theme-corporate :host ngx-layout-direction-switcher {\n    margin: 0 1.5rem; }\n.nb-theme-corporate :host ngx-theme-switcher {\n    margin: 2.25rem 2.25rem 0.75rem;\n    margin-top: 0;\n    margin-bottom: 0; }\n@media (max-width: 1399.98px) {\n    .nb-theme-corporate :host ngx-layout-direction-switcher {\n      display: none; } }\n.nb-theme-corporate :host .toggle-settings /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n.nb-theme-corporate :host .toggle-settings /deep/ a i {\n      color: #a4abb3;\n      font-size: 2.25rem;\n      border-radius: 50%;\n      position: relative;\n      -webkit-animation-name: pulse-light;\n              animation-name: pulse-light; }\n.nb-theme-corporate :host .toggle-settings /deep/ a i::after {\n        content: ' ';\n        background-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n        border-radius: 50%;\n        pointer-events: none;\n        position: absolute;\n        top: 52.3%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%);\n        width: 13%;\n        height: 13%;\n        -webkit-animation: 3s linear infinite pulse;\n                animation: 3s linear infinite pulse; }\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0);\n            box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0);\n            box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0); } }\n@keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0);\n            box-shadow: 0 0 1px 0 rgba(164, 171, 179, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4);\n            box-shadow: 0 0 3px 10px rgba(164, 171, 179, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0);\n            box-shadow: 0 0 5px 20px rgba(164, 171, 179, 0); } }\n@-webkit-keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@keyframes pulse-light {\n  0% {\n    -webkit-box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0);\n            box-shadow: 0 0 1px 0 rgba(115, 255, 208, 0); }\n  20% {\n    -webkit-box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4);\n            box-shadow: 0 0 3px 10px rgba(115, 255, 208, 0.4); }\n  100% {\n    -webkit-box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0);\n            box-shadow: 0 0 5px 20px rgba(115, 255, 208, 0); } }\n@media (max-width: 991.98px) {\n    .nb-theme-corporate :host nb-action:not(.toggle-settings) {\n      border: none; }\n    .nb-theme-corporate :host .control-item {\n      display: none; }\n    .nb-theme-corporate :host .toggle-settings {\n      padding: 0; }\n    .nb-theme-corporate :host ngx-layout-direction-switcher {\n      display: none; }\n    .nb-theme-corporate :host ngx-theme-switcher {\n      margin: 0 0.5rem; } }\n@media (max-width: 767.98px) {\n    .nb-theme-corporate :host nb-user /deep/ .user-name {\n      display: none; } }\n@media (max-width: 575.98px) {\n    .nb-theme-corporate :host .header-container .logo {\n      font-size: 1.25rem; }\n    .nb-theme-corporate :host .toggle-settings {\n      display: none; }\n    .nb-theme-corporate :host ngx-theme-switcher {\n      display: none; }\n    .nb-theme-corporate :host nb-action:not(.toggle-settings) {\n      padding: 0; } }\n@media (max-width: 399.98px) {\n    .nb-theme-corporate :host .right /deep/ {\n      display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIvaG9tZS9oYXJzaGl0L0Rlc2t0b3Avbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2RlZmF1bHQuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3NtaWMuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvc3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSDs7R0FFRztBQ1RIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBQ3ZURjs7OztHQUlHO0FDSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUd2VEY7Ozs7R0FJRztBRkpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUl2VEY7Ozs7R0FJRztBSEpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUt2VEY7Ozs7R0FJRztBTjhHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBQUNGO0VPaklGLHFCQUFhO0VBQWIscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQThCO01BQTlCLHVCQUE4QjtVQUE5QiwrQkFBOEI7RUFDOUIsWUFBVyxFUGtJUjtBT2hJSDtJQUNFLHFCQUFhO0lBQWIscUJBQWE7SUFBYixjQUFhO0lBQ2IsWUFBVztJQUNYLDZCQUFRO1FBQVIsa0JBQVE7WUFBUixTQUFRO0lBQ1IsK0JBQW1CO0lBQW5CLDhCQUFtQjtRQUFuQix3QkFBbUI7WUFBbkIsb0JBQW1CLEVBQ3BCO0FBQ0Q7SUFDRSw2QkFBUTtRQUFSLGtCQUFRO1lBQVIsU0FBUTtJQUNSLCtCQUEyQjtJQUEzQiwrQkFBMkI7UUFBM0IsZ0NBQTJCO1lBQTNCLDRCQUEyQixFQUM1QjtBQUVEO0lBQ0UscUJBQWE7SUFBYixxQkFBYTtJQUFiLGNBQWE7SUFDYiwwQkFBbUI7UUFBbkIsdUJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQiw2QkFBcUUsRUFDdEU7QUFFRDtJQUNFLGVBQWMsRUFDZjtBQUVEO0lBQ0UscUJBQWE7SUFBYixxQkFBYTtJQUFiLGNBQWE7SUFDYiwwQkFBbUI7UUFBbkIsdUJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQixZQUFXLEVBK0JaO0FBN0JDO01BR0Usa0JBQWlCO01BQ2pCLHNCQUFxQixFQU10QjtBQ3d6QkM7UVB6aUJBLHVCRTlSWSxFRmtTZjtBT3VpQkc7UVAzaUJBLHNCRTlSWSxFRmtTZjtBTXZSRztRQUNFLGVBQWMsRUFDZjtBQUlIO01BQ0UsbUJKbEJZO01JbUJaLG1CQUFrQjtNQUNsQixpQkpsQ21CO01JcUNuQixvQkFBbUIsRUFVcEI7QUNpekJDO1FQcGpCQSwrQkVuUmMsRUZ1UmpCO0FPa2pCRztRUHRqQkEsZ0NFblJjLEVGdVJqQjtBTXpRRztRQUNFLGFBQVk7UUFDWixpQkFBZ0IsRUFDakI7QUFFRDtRQUNFLGlCSjlDaUIsRUkrQ2xCO0FBdUJMO0lBQ0UsaUJBQWdCLEVBQ2pCO0FBRUQ7SUFDRSxnQ0p5RHFDO0lJeERyQyxjQUFhO0lBQ2IsaUJBQWdCLEVBQ2pCO0FEckNDO0lDd0NBO01BQ0UsY0FBYSxFQUNkLEVBQUE7QUFHSDtJQUNFLGVBQWM7SUFDZCxzQkFBcUI7SUFDckIsZUFBYyxFQThCZjtBQTVCQztNQUNFLGVKcEV1QjtNSXFFdkIsbUJBQWtCO01BQ2xCLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsb0NBQTJCO2NBQTNCLDRCQUEyQixFQXNCNUI7QUFwQkM7UUFDRSxhQUFZO1FBRVosd0dBQXVHO1FBQ3ZHLG1CQUFrQjtRQUNsQixxQkFBb0I7UUFFcEIsbUJBQWtCO1FBQ2xCLFdBQVU7UUFDVixVQUFTO1FBQ1QseUNBQWdDO2dCQUFoQyxpQ0FBZ0M7UUFDaEMsV0FBVTtRQUNWLFlBQVc7UUFFWCw0Q0FBbUM7Z0JBQW5DLG9DQUFtQztRQUdqQyxvQ0FBMkI7Z0JBQTNCLDRCQUEyQixFQUU5QjtBTndCTDtFTW5CRTtJQUNFLG9ESm5HdUI7WUltR3ZCLDRDSm5HdUIsRUFBQTtFSXNHekI7SUFDRSx5REp2R3VCO1lJdUd2QixpREp2R3VCLEVBQUE7RUkwR3pCO0lBQ0UsdURKM0d1QjtZSTJHdkIsK0NKM0d1QixFQUFBLEVBQUE7QUY4SDNCO0VNNUJFO0lBQ0Usb0RKbkd1QjtZSW1HdkIsNENKbkd1QixFQUFBO0VJc0d6QjtJQUNFLHlESnZHdUI7WUl1R3ZCLGlESnZHdUIsRUFBQTtFSTBHekI7SUFDRSx1REozR3VCO1lJMkd2QiwrQ0ozR3VCLEVBQUEsRUFBQTtBRnFIM0I7RU1MRTtJQUNFLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUU5QztJQUNFLDBEQUFpRDtZQUFqRCxrREFBaUQsRUFBQTtFQUVuRDtJQUNFLHdEQUErQztZQUEvQyxnREFBK0MsRUFBQSxFQUFBO0FOT25EO0VNZEU7SUFDRSxxREFBNEM7WUFBNUMsNkNBQTRDLEVBQUE7RUFFOUM7SUFDRSwwREFBaUQ7WUFBakQsa0RBQWlELEVBQUE7RUFFbkQ7SUFDRSx3REFBK0M7WUFBL0MsZ0RBQStDLEVBQUEsRUFBQTtBRHRHakQ7SUM0R0E7TUFDRSxhQUFZLEVBQ2I7SUFFRDtNQUNFLGNBQWEsRUFDZDtJQUVEO01BQ0UsV0FBVSxFQUNYO0lBRUQ7TUFDRSxjQUFhLEVBQ2Q7SUFFRDtNQUNFLGlCQUFnQixFQUNqQixFQUFBO0FEOUhEO0lDbUlBO01BQ0UsY0FBYSxFQUNkLEVBQUE7QURySUQ7SUMySUU7TUFDRSxtQkFBa0IsRUFDbkI7SUFHSDtNQUNFLGNBQWEsRUFDZDtJQUVEO01BQ0UsY0FBYSxFQUNkO0lBRUQ7TUFDRSxXQUFVLEVBQ1gsRUFBQTtBRDFKRDtJQzhKQTtNQUNFLGNBQWEsRUFDZCxFQUFBO0FQdEdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbUJFO0FBQ0Y7RU9qSUYscUJBQWE7RUFBYixxQkFBYTtFQUFiLGNBQWE7RUFDYiwwQkFBOEI7TUFBOUIsdUJBQThCO1VBQTlCLCtCQUE4QjtFQUM5QixZQUFXLEVQa0lSO0FPaElIO0lBQ0UscUJBQWE7SUFBYixxQkFBYTtJQUFiLGNBQWE7SUFDYixZQUFXO0lBQ1gsNkJBQVE7UUFBUixrQkFBUTtZQUFSLFNBQVE7SUFDUiwrQkFBbUI7SUFBbkIsOEJBQW1CO1FBQW5CLHdCQUFtQjtZQUFuQixvQkFBbUIsRUFDcEI7QUFDRDtJQUNFLDZCQUFRO1FBQVIsa0JBQVE7WUFBUixTQUFRO0lBQ1IsK0JBQTJCO0lBQTNCLCtCQUEyQjtRQUEzQixnQ0FBMkI7WUFBM0IsNEJBQTJCLEVBQzVCO0FBRUQ7SUFDRSxxQkFBYTtJQUFiLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUFtQjtRQUFuQix1QkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLGdDQUFxRSxFQUN0RTtBQUVEO0lBQ0UsZUFBYyxFQUNmO0FBRUQ7SUFDRSxxQkFBYTtJQUFiLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUFtQjtRQUFuQix1QkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLFlBQVcsRUErQlo7QUE3QkM7TUFHRSxrQkFBaUI7TUFDakIsc0JBQXFCLEVBTXRCO0FDby9CQztRUHJ1QkEsdUJFOVJZLEVGa1NmO0FPbXVCRztRUHZ1QkEsc0JFOVJZLEVGa1NmO0FNdlJHO1FBQ0UsZUFBYyxFQUNmO0FBSUg7TUFDRSxtQkpsQlk7TUltQlosbUJBQWtCO01BQ2xCLGlCSmxDbUI7TUlxQ25CLG9CQUFtQixFQVVwQjtBQzYrQkM7UVBodkJBLCtCR3pSYyxFSDZSakI7QU84dUJHO1FQbHZCQSxnQ0d6UmMsRUg2UmpCO0FNelFHO1FBQ0UsYUFBWTtRQUNaLGlCQUFnQixFQUNqQjtBQUVEO1FBQ0UsaUJKOUNpQixFSStDbEI7QUF1Qkw7SUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtJQUNFLGdDSnlEcUM7SUl4RHJDLGNBQWE7SUFDYixpQkFBZ0IsRUFDakI7QURyQ0M7SUN3Q0E7TUFDRSxjQUFhLEVBQ2QsRUFBQTtBQUdIO0lBQ0UsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixlQUFjLEVBOEJmO0FBNUJDO01BQ0UsZUh4RnVCO01HeUZ2QixtQkFBa0I7TUFDbEIsbUJBQWtCO01BQ2xCLG1CQUFrQjtNQUNsQixvQ0FBMkI7Y0FBM0IsNEJBQTJCLEVBc0I1QjtBQXBCQztRQUNFLGFBQVk7UUFFWix3R0FBdUc7UUFDdkcsbUJBQWtCO1FBQ2xCLHFCQUFvQjtRQUVwQixtQkFBa0I7UUFDbEIsV0FBVTtRQUNWLFVBQVM7UUFDVCx5Q0FBZ0M7Z0JBQWhDLGlDQUFnQztRQUNoQyxXQUFVO1FBQ1YsWUFBVztRQUVYLDRDQUFtQztnQkFBbkMsb0NBQW1DLEVBS3BDO0FOd0JMO0VNbkJFO0lBQ0UsbURIdkh1QjtZR3VIdkIsMkNIdkh1QixFQUFBO0VHMEh6QjtJQUNFLHdESDNIdUI7WUcySHZCLGdESDNIdUIsRUFBQTtFRzhIekI7SUFDRSxzREgvSHVCO1lHK0h2Qiw4Q0gvSHVCLEVBQUEsRUFBQTtBSGtKM0I7RU01QkU7SUFDRSxtREh2SHVCO1lHdUh2QiwyQ0h2SHVCLEVBQUE7RUcwSHpCO0lBQ0Usd0RIM0h1QjtZRzJIdkIsZ0RIM0h1QixFQUFBO0VHOEh6QjtJQUNFLHNESC9IdUI7WUcrSHZCLDhDSC9IdUIsRUFBQSxFQUFBO0FIeUkzQjtFTUxFO0lBQ0UscURBQTRDO1lBQTVDLDZDQUE0QyxFQUFBO0VBRTlDO0lBQ0UsMERBQWlEO1lBQWpELGtEQUFpRCxFQUFBO0VBRW5EO0lBQ0Usd0RBQStDO1lBQS9DLGdEQUErQyxFQUFBLEVBQUE7QU5PbkQ7RU1kRTtJQUNFLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUU5QztJQUNFLDBEQUFpRDtZQUFqRCxrREFBaUQsRUFBQTtFQUVuRDtJQUNFLHdEQUErQztZQUEvQyxnREFBK0MsRUFBQSxFQUFBO0FEdEdqRDtJQzRHQTtNQUNFLGFBQVksRUFDYjtJQUVEO01BQ0UsY0FBYSxFQUNkO0lBRUQ7TUFDRSxXQUFVLEVBQ1g7SUFFRDtNQUNFLGNBQWEsRUFDZDtJQUVEO01BQ0UsaUJBQWdCLEVBQ2pCLEVBQUE7QUQ5SEQ7SUNtSUE7TUFDRSxjQUFhLEVBQ2QsRUFBQTtBRHJJRDtJQzJJRTtNQUNFLG1CQUFrQixFQUNuQjtJQUdIO01BQ0UsY0FBYSxFQUNkO0lBRUQ7TUFDRSxjQUFhLEVBQ2Q7SUFFRDtNQUNFLFdBQVUsRUFDWCxFQUFBO0FEMUpEO0lDOEpBO01BQ0UsY0FBYSxFQUNkLEVBQUE7QVB0R0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7QUFDRjtFT2pJRixxQkFBYTtFQUFiLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUE4QjtNQUE5Qix1QkFBOEI7VUFBOUIsK0JBQThCO0VBQzlCLFlBQVcsRVBrSVI7QU9oSUg7SUFDRSxxQkFBYTtJQUFiLHFCQUFhO0lBQWIsY0FBYTtJQUNiLFlBQVc7SUFDWCw2QkFBUTtRQUFSLGtCQUFRO1lBQVIsU0FBUTtJQUNSLCtCQUFtQjtJQUFuQiw4QkFBbUI7UUFBbkIsd0JBQW1CO1lBQW5CLG9CQUFtQixFQUNwQjtBQUNEO0lBQ0UsNkJBQVE7UUFBUixrQkFBUTtZQUFSLFNBQVE7SUFDUiwrQkFBMkI7SUFBM0IsK0JBQTJCO1FBQTNCLGdDQUEyQjtZQUEzQiw0QkFBMkIsRUFDNUI7QUFFRDtJQUNFLHFCQUFhO0lBQWIscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1FBQW5CLHVCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsNkJBQXFFLEVBQ3RFO0FBRUQ7SUFDRSxlQUFjLEVBQ2Y7QUFFRDtJQUNFLHFCQUFhO0lBQWIscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1FBQW5CLHVCQUFtQjtZQUFuQixvQkFBbUI7SUFDbkIsWUFBVyxFQStCWjtBQTdCQztNQUdFLGtCQUFpQjtNQUNqQixzQkFBcUIsRUFNdEI7QUMrcUNDO1FQaDZCQSx1QkU5UlksRUZrU2Y7QU84NUJHO1FQbDZCQSxzQkU5UlksRUZrU2Y7QU12Ukc7UUFDRSxlQUFjLEVBQ2Y7QUFJSDtNQUNFLG1CSmxCWTtNSW1CWixtQkFBa0I7TUFDbEIsaUJKbENtQjtNSXFDbkIsb0JBQW1CLEVBVXBCO0FDd3FDQztRUDM2QkEsK0JJdlNjLEVKMlNqQjtBT3k2Qkc7UVA3NkJBLGdDSXZTYyxFSjJTakI7QU16UUc7UUFDRSxhQUFZO1FBQ1osaUJBQWdCLEVBQ2pCO0FBRUQ7UUFDRSxpQko5Q2lCLEVJK0NsQjtBQ2tyQ0w7SVBwN0JJLDJCTXpQbUMsRU42UHRDO0FPazdCRDtJUHQ3QkksNEJNelBtQyxFTjZQdEM7QU9vN0JEO0lQeDdCSSxhTWpQNEIsRU5xUC9CO0FPczdCRDtJUDE3QkksYU1oUDRCLEVOb1AvQjtBTWpQQztJQUNFLGVKbkNnQjtJSW9DaEIsd0JBQXVCLEVBQ3hCO0FBR0g7SUFDRSxpQkFBZ0IsRUFDakI7QUFFRDtJQUNFLGdDSnlEcUM7SUl4RHJDLGNBQWE7SUFDYixpQkFBZ0IsRUFDakI7QURyQ0M7SUN3Q0E7TUFDRSxjQUFhLEVBQ2QsRUFBQTtBQUdIO0lBQ0UsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixlQUFjLEVBOEJmO0FBNUJDO01BQ0UsZUp2RWE7TUl3RWIsbUJBQWtCO01BQ2xCLG1CQUFrQjtNQUNsQixtQkFBa0I7TUFDbEIsb0NBQTJCO2NBQTNCLDRCQUEyQixFQXNCNUI7QUFwQkM7UUFDRSxhQUFZO1FBRVosd0dBQXVHO1FBQ3ZHLG1CQUFrQjtRQUNsQixxQkFBb0I7UUFFcEIsbUJBQWtCO1FBQ2xCLFdBQVU7UUFDVixVQUFTO1FBQ1QseUNBQWdDO2dCQUFoQyxpQ0FBZ0M7UUFDaEMsV0FBVTtRQUNWLFlBQVc7UUFFWCw0Q0FBbUM7Z0JBQW5DLG9DQUFtQyxFQUtwQztBTndCTDtFTW5CRTtJQUNFLHFESnRHYTtZSXNHYiw2Q0p0R2EsRUFBQTtFSXlHZjtJQUNFLDBESjFHYTtZSTBHYixrREoxR2EsRUFBQTtFSTZHZjtJQUNFLHdESjlHYTtZSThHYixnREo5R2EsRUFBQSxFQUFBO0FGaUlqQjtFTTVCRTtJQUNFLHFESnRHYTtZSXNHYiw2Q0p0R2EsRUFBQTtFSXlHZjtJQUNFLDBESjFHYTtZSTBHYixrREoxR2EsRUFBQTtFSTZHZjtJQUNFLHdESjlHYTtZSThHYixnREo5R2EsRUFBQSxFQUFBO0FGd0hqQjtFTUxFO0lBQ0UscURBQTRDO1lBQTVDLDZDQUE0QyxFQUFBO0VBRTlDO0lBQ0UsMERBQWlEO1lBQWpELGtEQUFpRCxFQUFBO0VBRW5EO0lBQ0Usd0RBQStDO1lBQS9DLGdEQUErQyxFQUFBLEVBQUE7QU5PbkQ7RU1kRTtJQUNFLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUU5QztJQUNFLDBEQUFpRDtZQUFqRCxrREFBaUQsRUFBQTtFQUVuRDtJQUNFLHdEQUErQztZQUEvQyxnREFBK0MsRUFBQSxFQUFBO0FEdEdqRDtJQzRHQTtNQUNFLGFBQVksRUFDYjtJQUVEO01BQ0UsY0FBYSxFQUNkO0lBRUQ7TUFDRSxXQUFVLEVBQ1g7SUFFRDtNQUNFLGNBQWEsRUFDZDtJQUVEO01BQ0UsaUJBQWdCLEVBQ2pCLEVBQUE7QUQ5SEQ7SUNtSUE7TUFDRSxjQUFhLEVBQ2QsRUFBQTtBRHJJRDtJQzJJRTtNQUNFLG1CQUFrQixFQUNuQjtJQUdIO01BQ0UsY0FBYSxFQUNkO0lBRUQ7TUFDRSxjQUFhLEVBQ2Q7SUFFRDtNQUNFLFdBQVUsRUFDWCxFQUFBO0FEMUpEO0lDOEpBO01BQ0UsY0FBYSxFQUNkLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG5cbkBpbXBvcnQgJ2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2NvcmUvZnVuY3Rpb25zJztcblxuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzOiBmYWxzZSAhZ2xvYmFsO1xuXG4kbmItdGhlbWVzOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiAoKSAhZ2xvYmFsO1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpICFnbG9iYWw7XG5cbkBmdW5jdGlvbiBuYi10aGVtZSgka2V5KSB7XG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSB7XG4gIEBpZiAodHlwZS1vZigkdmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgJHRtcDogbWFwLWdldCgkdGhlbWUsICR2YWx1ZSk7XG5cbiAgICBAaWYgKCR0bXAgIT0gbnVsbCkge1xuICAgICAgQHJldHVybiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAkdmFsdWUsICR0bXApO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsICRrZXkpO1xufVxuXG5AZnVuY3Rpb24gY29udmVydC10by1jc3MtdmFyaWFibGVzKCR2YXJpYWJsZXMpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICR2YXIsICR2YWx1ZSBpbiAkdmFyaWFibGVzIHtcbiAgICAkcmVzdWx0OiBtYXAtc2V0KCRyZXN1bHQsICR2YXIsICctLXZhcigjeyR2YXJ9KScpO1xuICB9XG5cbiAgQGRlYnVnICRyZXN1bHQ7XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQGZ1bmN0aW9uIHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKSB7XG4gICR0aGVtZTogJHRoZW1lICFnbG9iYWw7XG4gICR0aGVtZS1uYW1lOiAkdGhlbWUtbmFtZSAhZ2xvYmFsO1xuICBAaWYgKCRuYi1lbmFibGUtY3NzLXZhcmlhYmxlcykge1xuICAgICR0aGVtZTogY29udmVydC10by1jc3MtdmFyaWFibGVzKCR0aGVtZSkgIWdsb2JhbDtcbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuQGZ1bmN0aW9uIG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgJG5hbWUsICRkZWZhdWx0OiBudWxsKSB7XG5cbiAgJHRoZW1lLWRhdGE6ICgpO1xuXG5cbiAgQGlmICgkZGVmYXVsdCAhPSBudWxsKSB7XG5cbiAgICAkdGhlbWU6IG1hcC1tZXJnZShtYXAtZ2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJGRlZmF1bHQpLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgJGRlZmF1bHQpKSAhZ2xvYmFsO1xuXG4gIH0gQGVsc2Uge1xuICAgICRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZDogbWFwLXNldCgkbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgICAkdGhlbWUtZGF0YTogbWFwLXNldCgkdGhlbWUtZGF0YSwgZGF0YSwgJHRoZW1lKTtcbiAgICAkbmItdGhlbWVzLWV4cG9ydDogbWFwLXNldCgkbmItdGhlbWVzLWV4cG9ydCwgJG5hbWUsIG1hcC1zZXQoJHRoZW1lLWRhdGEsIHBhcmVudCwgbnVsbCkpICFnbG9iYWw7XG4gIH1cblxuICAkdGhlbWUtcGFyc2VkOiAoKTtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgJHRoZW1lLXBhcnNlZDogbWFwLXNldCgkdGhlbWUtcGFyc2VkLCAka2V5LCBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpKTtcbiAgfVxuXG4gIC8vIGVuYWJsZSByaWdodCBhd2F5IHdoZW4gaW5zdGFsbGVkXG4gICR0aGVtZS1wYXJzZWQ6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUtcGFyc2VkLCAkbmFtZSk7XG4gIEByZXR1cm4gbWFwLXNldCgkbmItdGhlbWVzLCAkbmFtZSwgJHRoZW1lLXBhcnNlZCk7XG59XG5cbkBmdW5jdGlvbiBnZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogKCk7XG5cbiAgQGlmIChsZW5ndGgoJG5iLWVuYWJsZWQtdGhlbWVzKSA+IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSBpbiAkbmItZW5hYmxlZC10aGVtZXMge1xuICAgICAgJHRoZW1lcy10by1pbnN0YWxsOiBtYXAtc2V0KCR0aGVtZXMtdG8taW5zdGFsbCwgJHRoZW1lLW5hbWUsIG1hcC1nZXQoJG5iLXRoZW1lcywgJHRoZW1lLW5hbWUpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0aGVtZXMtdG8taW5zdGFsbDogJG5iLXRoZW1lcztcbiAgfVxuXG4gIEByZXR1cm4gJHRoZW1lcy10by1pbnN0YWxsO1xufVxuXG5AbWl4aW4gaW5zdGFsbC1jc3MtdmFyaWFibGVzKCR0aGVtZS1uYW1lLCAkdmFyaWFibGVzKSB7XG4gIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICAgLS0jeyR2YXJ9OiAkdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IHdlIGhpZGUgOmhvc3QgaW5zaWRlIG9mIGl0IHdoaWNoIGlzIG5vdCBvYnZpb3VzXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG5cbiAgJHRoZW1lcy10by1pbnN0YWxsOiBnZXQtZW5hYmxlZC10aGVtZXMoKTtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICR0aGVtZXMtdG8taW5zdGFsbCB7XG4gICAgLypcbiAgICAgIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gICAgICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICAgICAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICAgICAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgICAgIC4uLlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgICAgICAuLi5cbiAgICAgICAgfVxuXG4gICAgICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICAgICAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuICAgICovXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IDpob3N0IHtcbiAgICAgICR0aGVtZTogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSA9PSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1leGNlcHQtdGhlbWUoJG5hbWUpIHtcbiAgQGlmICgkdGhlbWUtbmFtZSAhPSAkbmFtZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIFRPRE86IGFub3RoZXIgbWl4aW5nIGZvciB0aGUgYWxtb3N0IHNhbWUgdGhpbmdcbkBtaXhpbiBuYi1pbnN0YWxsLXJvb3QtY29tcG9uZW50KCkge1xuICBAd2FybiAnYG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnRgIGlzIGRlcHJpY2F0ZWQsIHJlcGxhY2Ugd2l0aCBgbmItaW5zdGFsbC1jb21wb25lbnRgLCBhcyBgYm9keWAgaXMgcm9vdCBlbGVtZW50IG5vdyc7XG5cbiAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsKCkge1xuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1yYWRpYWwtZ3JhZGllbnQoJGNvbG9yLTEsICRjb2xvci0yLCAkY29sb3ItMykge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItMjsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBGRjMuNi0xNSAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChib3R0b20sIGVsbGlwc2UgY292ZXIsICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xuICBmaWx0ZXI6IHByb2dpZDpkeGltYWdldHJhbnNmb3JtLm1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPSckY29sb3ItMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZENvbG9yc3RyPSckY29sb3ItMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyYWRpZW50VHlwZT0xKTsgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xufVxuXG5AbWl4aW4gbmItcmlnaHQtZ3JhZGllbnQoJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpIHtcbiAgJHBsYWNlaG9sZGVyLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInXG4gICAgJzo6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbXMtaW5wdXQtcGxhY2Vob2xkZXInXG4gICk7XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICBjb2xvcjogJGNvbG9yO1xuICBmb250LXNpemU6ICRmb250LXNpemU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5cbiR0aGVtZTogKFxuICBmb250LW1haW46IHVucXVvdGUoJ1wiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmJyksXG4gIGZvbnQtc2Vjb25kYXJ5OiBmb250LW1haW4sXG5cbiAgZm9udC13ZWlnaHQtdGhpbjogMjAwLFxuICBmb250LXdlaWdodC1saWdodDogMzAwLFxuICBmb250LXdlaWdodC1ub3JtYWw6IDQwMCxcbiAgZm9udC13ZWlnaHQtYm9sZGVyOiA1MDAsXG4gIGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMCxcbiAgZm9udC13ZWlnaHQtdWx0cmEtYm9sZDogODAwLFxuXG4gIC8vIFRPRE86IHVzZSBpdCBhcyBhIGRlZmF1bHQgZm9udC1zaXplXG4gIGJhc2UtZm9udC1zaXplOiAxNnB4LFxuXG4gIGZvbnQtc2l6ZS14bGc6IDEuMjVyZW0sXG4gIGZvbnQtc2l6ZS1sZzogMS4xMjVyZW0sXG4gIGZvbnQtc2l6ZTogMXJlbSxcbiAgZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcbiAgZm9udC1zaXplLXhzOiAwLjc1cmVtLFxuXG4gIHJhZGl1czogMC4zNzVyZW0sXG4gIHBhZGRpbmc6IDEuMjVyZW0sXG4gIG1hcmdpbjogMS41cmVtLFxuICBsaW5lLWhlaWdodDogMS4yNSxcblxuICBjb2xvci1iZzogI2ZmZmZmZixcbiAgY29sb3ItYmctYWN0aXZlOiAjZTllZGYyLFxuICBjb2xvci1mZzogI2E0YWJiMyxcbiAgY29sb3ItZmctaGVhZGluZzogIzJhMmEyYSxcbiAgY29sb3ItZmctdGV4dDogIzRiNGI0YixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjNDBkYzdlLFxuXG4gIHNlcGFyYXRvcjogI2ViZWVmMixcblxuICBjb2xvci1ncmF5OiByZ2JhKDgxLCAxMTMsIDE2NSwgMC4xNSksXG4gIGNvbG9yLW5ldXRyYWw6IHRyYW5zcGFyZW50LFxuICBjb2xvci13aGl0ZTogI2ZmZmZmZixcbiAgY29sb3ItZGlzYWJsZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcblxuICBjb2xvci1wcmltYXJ5OiAjOGE3ZmZmLFxuICBjb2xvci1zdWNjZXNzOiAjNDBkYzdlLFxuICBjb2xvci1pbmZvOiAjNGNhNmZmLFxuICBjb2xvci13YXJuaW5nOiAjZmZhMTAwLFxuICBjb2xvci1kYW5nZXI6ICNmZjRjNmEsXG5cbiAgLy8gVE9ETzogbW92ZSB0byBjb25zdGFudHNcbiAgc29jaWFsLWNvbG9yLWZhY2Vib29rOiAjM2I1OTk4LFxuICBzb2NpYWwtY29sb3ItdHdpdHRlcjogIzU1YWNlZSxcbiAgc29jaWFsLWNvbG9yLWdvb2dsZTogI2RkNGIzOSxcbiAgc29jaWFsLWNvbG9yLWxpbmtlZGluOiAjMDE3N2I1LFxuICBzb2NpYWwtY29sb3ItZ2l0aHViOiAjNmI2YjZiLFxuICBzb2NpYWwtY29sb3Itc3RhY2tvdmVyZmxvdzogIzJmOTZlOCxcbiAgc29jaWFsLWNvbG9yLWRyaWJibGU6ICNmMjY3OTgsXG4gIHNvY2lhbC1jb2xvci1iZWhhbmNlOiAjMDA5M2ZhLFxuXG4gIGJvcmRlci1jb2xvcjogY29sb3ItZ3JheSxcbiAgc2hhZG93OiAwIDJweCAxMnB4IDAgI2RmZTNlYixcblxuICBsaW5rLWNvbG9yOiAjM2RjYzZkLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMmVlNTZiLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjZGFkYWRhLFxuICBzY3JvbGxiYXItYmc6ICNmMmYyZjIsXG4gIHNjcm9sbGJhci13aWR0aDogNXB4LFxuICBzY3JvbGxiYXItdGh1bWItcmFkaXVzOiAyLjVweCxcblxuICByYWRpYWwtZ3JhZGllbnQ6IG5vbmUsXG4gIGxpbmVhci1ncmFkaWVudDogbm9uZSxcblxuICBjYXJkLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYXJkLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgY2FyZC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYXJkLWZnOiBjb2xvci1mZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBjYXJkLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtYmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlaWdodC14eHNtYWxsOiA5NnB4LFxuICBjYXJkLWhlaWdodC14c21hbGw6IDIxNnB4LFxuICBjYXJkLWhlaWdodC1zbWFsbDogMzM2cHgsXG4gIGNhcmQtaGVpZ2h0LW1lZGl1bTogNDU2cHgsXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiA1NzZweCxcbiAgY2FyZC1oZWlnaHQteGxhcmdlOiA2OTZweCxcbiAgY2FyZC1oZWlnaHQteHhsYXJnZTogODE2cHgsXG4gIGNhcmQtc2hhZG93OiBzaGFkb3csXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAwLFxuICBjYXJkLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGNvbG9yLWJnLFxuICBjYXJkLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjYXJkLW1hcmdpbjogbWFyZ2luLFxuICBjYXJkLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGNhcmQtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBjYXJkLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgY2FyZC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgY2FyZC1oZWFkZXItZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBjYXJkLWhlYWRlci1hY3RpdmUtZmc6IGNvbG9yLWJnLFxuICBjYXJkLWhlYWRlci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhcmQtaGVhZGVyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBjYXJkLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWhlYWRlci1ib3JkZXItY29sb3I6IGNhcmQtc2VwYXJhdG9yLFxuXG4gIGhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IDQuNzI1cmVtLFxuICBmb290ZXItcGFkZGluZzogMS4yNXJlbSxcbiAgZm9vdGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuICBmb290ZXItc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbGF5b3V0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBsYXlvdXQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBsYXlvdXQtZmc6IGNvbG9yLWZnLFxuICBsYXlvdXQtYmc6ICNlYmVmZjUsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmc6IGxheW91dC1iZyxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wOiA0Ljc1cmVtLFxuICBsYXlvdXQtd2luZG93LXNoYWRvdzogc2hhZG93LFxuICBsYXlvdXQtcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW0sXG4gIGxheW91dC1tZWRpdW0tcGFkZGluZzogMS41cmVtIDEuNXJlbSAwLjVyZW0sXG4gIGxheW91dC1zbWFsbC1wYWRkaW5nOiAxcmVtIDFyZW0gMCxcblxuICBzaWRlYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzaWRlYmFyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc2lkZWJhci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IHBhZGRpbmcsXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcblxuICBtZW51LWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgbWVudS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbWVudS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG5cbiAgbWVudS1zdWJtZW51LWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiBjb2xvci1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LXN1Ym1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aDogMC4xMjVyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tcGFkZGluZzogMC41cmVtIDFyZW0sXG4gIG1lbnUtc3VibWVudS1pdGVtLWNvbnRhaW5lci1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIG1lbnUtc3VibWVudS1wYWRkaW5nOiAwLjVyZW0sXG5cbiAgbWVudS1ncm91cC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtZW51LWdyb3VwLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLWZnLFxuICBtZW51LWdyb3VwLXBhZGRpbmc6IDFyZW0gMS4yNXJlbSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNjc1cmVtIDAuNzVyZW0sXG4gIG1lbnUtaXRlbS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgbWVudS1pY29uLWZvbnQtc2l6ZTogMi41cmVtLFxuICBtZW51LWljb24tbWFyZ2luOiAwIDAuMjVyZW0gMCxcbiAgbWVudS1pY29uLWNvbG9yOiBjb2xvci1mZyxcbiAgbWVudS1pY29uLWFjdGl2ZS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcblxuICB0YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgdGFicy1jb250ZW50LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHRhYnMtY29udGVudC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgdGFicy1jb250ZW50LXBhZGRpbmc6IDAsXG4gIHRhYnMtaGVhZGVyLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgdGFicy1mZzogY29sb3ItZmcsXG4gIHRhYnMtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICB0YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRhYnMtc2VsZWN0ZWQtZGVncmVlczogMCxcbiAgdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICByb3V0ZS10YWJzLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgcm91dGUtdGFicy1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgcm91dGUtdGFicy1hY3RpdmUtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLWFjdGl2ZS1mb250LXdlaWdodDogY2FyZC1oZWFkZXItZm9udC13ZWlnaHQsXG4gIHJvdXRlLXRhYnMtcGFkZGluZzogcGFkZGluZyxcbiAgcm91dGUtdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICByb3V0ZS10YWJzLWZnOiBjb2xvci1mZyxcbiAgcm91dGUtdGFicy1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICByb3V0ZS10YWJzLWJnOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3Itc3VjY2VzcyxcbiAgcm91dGUtdGFicy1pY29uLW9ubHktbWF4LXdpZHRoOiA1NzZweCxcblxuICB1c2VyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB1c2VyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgdXNlci1iZzogY29sb3ItYmcsXG4gIHVzZXItZmc6IGNvbG9yLWZnLFxuICB1c2VyLWZnLWhpZ2hsaWdodDogI2JjYzNjYyxcbiAgdXNlci1mb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtc2Vjb25kYXJ5LFxuICB1c2VyLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgdXNlci1zaXplLW1lZGl1bTogMi41cmVtLFxuICB1c2VyLXNpemUtbGFyZ2U6IDMuMjVyZW0sXG4gIHVzZXItc2l6ZS14bGFyZ2U6IDRyZW0sXG5cbiAgcG9wb3Zlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgcG9wb3Zlci1iZzogY29sb3ItYmcsXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBwb3BvdmVyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgcG9wb3Zlci1zaGFkb3c6IG5vbmUsXG4gIHBvcG92ZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICBjb250ZXh0LW1lbnUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNvbnRleHQtbWVudS1iZzogY29sb3ItYmcsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtZmc6IGNvbG9yLXdoaXRlLFxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBub25lLFxuICBjb250ZXh0LW1lbnUtYXJyb3ctc2l6ZTogMTFweCxcblxuICBhY3Rpb25zLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY3Rpb25zLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWN0aW9ucy1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcbiAgYWN0aW9ucy1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWN0aW9ucy1wYWRkaW5nOiBwYWRkaW5nLFxuICBhY3Rpb25zLXNpemUtc21hbGw6IDEuNXJlbSxcbiAgYWN0aW9ucy1zaXplLW1lZGl1bTogMi4yNXJlbSxcbiAgYWN0aW9ucy1zaXplLWxhcmdlOiAzLjVyZW0sXG5cbiAgc2VhcmNoLWJ0bi1vcGVuLWZnOiBjb2xvci1mZyxcbiAgc2VhcmNoLWJ0bi1jbG9zZS1mZzpcdGNvbG9yLWZnLFxuICBzZWFyY2gtYmc6IGxheW91dC1iZyxcbiAgc2VhcmNoLWJnLXNlY29uZGFyeTogY29sb3ItZmcsXG4gIHNlYXJjaC10ZXh0OiBjb2xvci1mZy1oZWFkaW5nLFxuICBzZWFyY2gtaW5mbzogY29sb3ItZmcsXG4gIHNlYXJjaC1kYXNoOiBjb2xvci1mZyxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyOiBjb2xvci1mZyxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1oZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIHNtYXJ0LXRhYmxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBzbWFydC10YWJsZS1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzbWFydC10YWJsZS1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtYmctZXZlbjogI2Y1ZjdmYyxcbiAgc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiAjZTZmM2ZmLFxuICBzbWFydC10YWJsZS1wYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtLFxuICBzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZzogMC4zNzVyZW0gMC41cmVtLFxuICBzbWFydC10YWJsZS1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci13aWR0aDogMXB4LFxuICBzbWFydC10YWJsZS1wYWdpbmctZmctYWN0aXZlOiAjZmZmZmZmLFxuICBzbWFydC10YWJsZS1wYWdpbmctYmctYWN0aXZlOiBjb2xvci1zdWNjZXNzLFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC4wNSksXG5cbiAgdG9hc3RyLWJnOiBjb2xvci1iZyxcbiAgdG9hc3RyLXBhZGRpbmc6IDEuMTI1cmVtLFxuICB0b2FzdHItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvYXN0ci1ib3JkZXI6IDAuMTI1cmVtIHNvbGlkLFxuICB0b2FzdHItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICB0b2FzdHItYm9yZGVyLWNvbG9yOiAjYmNjM2NjLFxuICB0b2FzdHItaWNvbi1yYWRpdXM6IDAuMjVyZW0sXG4gIHRvYXN0ci1zaGFkb3c6IHNoYWRvdyxcblxuICBidG4tZmc6IGNvbG9yLXdoaXRlLFxuICBidG4tZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBidG4tbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBidG4tZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBidG4tY3Vyc29yOiBkZWZhdWx0LFxuXG4gIGJ0bi1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBidG4tc2Vjb25kYXJ5LWJnOiB0cmFuc3BhcmVudCxcbiAgYnRuLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGJ0bi1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBidG4td2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYnRuLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZGFkZmU2LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlci13aWR0aDogMnB4LFxuXG4gIGJ0bi1wYWRkaW5nLXktbGc6IDAuODc1cmVtLFxuICBidG4tcGFkZGluZy14LWxnOiAxLjc1cmVtLFxuICBidG4tZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG5cbiAgLy8gZGVmYXVsdCBzaXplXG4gIGJ0bi1wYWRkaW5nLXktbWQ6IDAuNzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbWQ6IDEuNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS1tZDogMXJlbSxcblxuICBidG4tcGFkZGluZy15LXNtOiAwLjYyNXJlbSxcbiAgYnRuLXBhZGRpbmcteC1zbTogMS41cmVtLFxuICBidG4tZm9udC1zaXplLXNtOiAwLjg3NXJlbSxcblxuICBidG4tcGFkZGluZy15LXhzOiAwLjVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgteHM6IDEuMjVyZW0sXG4gIGJ0bi1mb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgYnRuLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYnRuLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuICBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidG4tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ0bi1oZXJvLXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IG5vbmUsXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgMCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMjBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiAxMGRlZyxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IC0xMGRlZyxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogLTIwZGVnLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcblxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6ICNmZmZmZmYsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGJ0bi1ncm91cC1iZzogbGF5b3V0LWJnLFxuICBidG4tZ3JvdXAtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICNkYWRmZTYsXG5cbiAgZm9ybS1jb250cm9sLXRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgZm9ybS1jb250cm9sLWJnOiBjb2xvci1iZyxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBjb2xvci1iZyxcblxuICBmb3JtLWNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHgsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItdHlwZTogc29saWQsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGZvcm0tY29udHJvbC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGZvcm0tY29udHJvbC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6ICNkYWRmZTYsXG4gIGZvcm0tY29udHJvbC1zZWxlY3RlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG5cbiAgZm9ybS1jb250cm9sLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLFxuICBmb3JtLWNvbnRyb2wtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGZvcm0tY29udHJvbC1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXIsXG4gIGZvcm0tY29udHJvbC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZyxcblxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3I6IGNvbG9yLWZnLFxuICBmb3JtLWNvbnRyb2wtcGxhY2Vob2xkZXItZm9udC1zaXplOiAxcmVtLFxuXG4gIGZvcm0tY29udHJvbC1mb250LXNpemU6IDFyZW0sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nOiAwLjc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLXNtOiAwLjM3NXJlbSAxLjEyNXJlbSxcbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBmb3JtLWNvbnRyb2wtcGFkZGluZy1sZzogMS4xMjVyZW0sXG5cbiAgZm9ybS1jb250cm9sLWxhYmVsLWZvbnQtd2VpZ2h0OiA0MDAsXG5cbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtc2l6ZTogMC44NzVyZW0sXG4gIGZvcm0tY29udHJvbC1mZWVkYmFjay1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBmb3JtLWNvbnRyb2wtYm9yZGVyLWNvbG9yLFxuICBjaGVja2JveC1jaGVja21hcms6IHRyYW5zcGFyZW50LFxuXG4gIGNoZWNrYm94LWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNoZWNrYm94LWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIGNoZWNrYm94LWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBjaGVja2JveC1kaXNhYmxlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgbW9kYWwtZm9udC1zaXplOiBmb250LXNpemUsXG4gIG1vZGFsLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgbW9kYWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1vZGFsLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1vZGFsLWJnOiBjb2xvci1iZyxcbiAgbW9kYWwtYm9yZGVyOiB0cmFuc3BhcmVudCxcbiAgbW9kYWwtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtb2RhbC1wYWRkaW5nOiBwYWRkaW5nLFxuICBtb2RhbC1oZWFkZXItZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtb2RhbC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbW9kYWwtaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICBtb2RhbC1ib2R5LWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIG1vZGFsLWJvZHktZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbW9kYWwtYm9keS1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteGxnOiAxLjc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LWxnOiAxLjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQ6IDEuMzc1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXNtOiAxLjI1cmVtLFxuICBwcm9ncmVzcy1iYXItaGVpZ2h0LXhzOiAxcmVtLFxuICBwcm9ncmVzcy1iYXItYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14bGc6IGZvbnQtc2l6ZS14bGcsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXNtOiBmb250LXNpemUtc20sXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUteHM6IGZvbnQtc2l6ZS14cyxcbiAgcHJvZ3Jlc3MtYmFyLXJhZGl1czogcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItYmc6IGxheW91dC1iZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtY29sb3I6IGNvbG9yLXdoaXRlLFxuICBwcm9ncmVzcy1iYXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIHByb2dyZXNzLWJhci1kZWZhdWx0LWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHByb2dyZXNzLWJhci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIGFsZXJ0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhbGVydC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGFsZXJ0LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFsZXJ0LWZnOiBjb2xvci13aGl0ZSxcbiAgYWxlcnQtb3V0bGluZS1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LWJnOiBjb2xvci1iZyxcbiAgYWxlcnQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgYWxlcnQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBhbGVydC1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIGFsZXJ0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGFsZXJ0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGFsZXJ0LXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGFsZXJ0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGFsZXJ0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICBhbGVydC1oZWlnaHQteHhzbWFsbDogNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXhzbWFsbDogNzJweCxcbiAgYWxlcnQtaGVpZ2h0LXNtYWxsOiA5MnB4LFxuICBhbGVydC1oZWlnaHQtbWVkaXVtOiAxMTJweCxcbiAgYWxlcnQtaGVpZ2h0LWxhcmdlOiAxMzJweCxcbiAgYWxlcnQtaGVpZ2h0LXhsYXJnZTogMTUycHgsXG4gIGFsZXJ0LWhlaWdodC14eGxhcmdlOiAxNzJweCxcbiAgYWxlcnQtc2hhZG93OiBub25lLFxuICBhbGVydC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LWNsb3NhYmxlLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LWJ1dHRvbi1wYWRkaW5nOiAzcmVtLFxuICBhbGVydC1tYXJnaW46IG1hcmdpbixcblxuICBjaGF0LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjaGF0LWZnOiBjb2xvci13aGl0ZSxcbiAgY2hhdC1iZzogY29sb3ItYmcsXG4gIGNoYXQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjaGF0LWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNoYXQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNoYXQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2hhdC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2hhdC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjaGF0LWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjaGF0LWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2hhdC1ib3JkZXI6IGJvcmRlcixcbiAgY2hhdC1wYWRkaW5nOiBwYWRkaW5nLFxuICBjaGF0LXNoYWRvdzogc2hhZG93LFxuICBjaGF0LXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjaGF0LW1lc3NhZ2UtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LW1lc3NhZ2UtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjYTZmZiwgIzU5YmZmZiksXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjaGF0LW1lc3NhZ2UtcmVwbHktZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNoYXQtbWVzc2FnZS1hdmF0YXItYmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2Utc2VuZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLXF1b3RlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1maWxlLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tYmc6IHRyYW5zcGFyZW50LFxuICBjaGF0LWZvcm0tZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoYXQtZm9ybS1ib3JkZXI6IHNlcGFyYXRvcixcbiAgY2hhdC1mb3JtLXBsYWNlaG9sZGVyLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1mb3JtLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWZnLFxuICBjaGF0LWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNoYXQtZGlzYWJsZWQtYmc6IGNvbG9yLWRpc2FibGVkLFxuICBjaGF0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgY2hhdC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBjaGF0LWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIGNoYXQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2hhdC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBjaGF0LWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksXG4gIHNwaW5uZXItY2lyY2xlLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNwaW5uZXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIHNwaW5uZXItYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgc3Bpbm5lci1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIHNwaW5uZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIHNwaW5uZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgc3Bpbm5lci1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBzcGlubmVyLXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIHNwaW5uZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIHNwaW5uZXIteHhzbWFsbDogMS4yNXJlbSxcbiAgc3Bpbm5lci14c21hbGw6IDEuNXJlbSxcbiAgc3Bpbm5lci1zbWFsbDogMS43NXJlbSxcbiAgc3Bpbm5lci1tZWRpdW06IDJyZW0sXG4gIHNwaW5uZXItbGFyZ2U6IDIuMjVyZW0sXG4gIHNwaW5uZXIteGxhcmdlOiAyLjVyZW0sXG4gIHNwaW5uZXIteHhsYXJnZTogM3JlbSxcblxuICBzdGVwcGVyLWluZGV4LXNpemU6IDJyZW0sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC1zaXplOiBmb250LXNpemUtc20sXG4gIHN0ZXBwZXItbGFiZWwtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgc3RlcHBlci1hY2NlbnQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHN0ZXBwZXItY29tcGxldGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgc3RlcHBlci1mZzogY29sb3ItZmcsXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24tc2l6ZTogMS41cmVtLFxuICBzdGVwcGVyLWNvbXBsZXRlZC1pY29uLXdlaWdodDogZm9udC13ZWlnaHQtdWx0cmEtYm9sZCxcbiAgc3RlcHBlci1zdGVwLXBhZGRpbmc6IHBhZGRpbmcsXG5cbiAgYWNjb3JkaW9uLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjY29yZGlvbi1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGFjY29yZGlvbi1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWNjb3JkaW9uLWhlYWRlci1mZy1oZWFkaW5nOiBjb2xvci1mZy1oZWFkaW5nLFxuICBhY2NvcmRpb24taGVhZGVyLWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGg6IDFweCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yOiBhY2NvcmRpb24tc2VwYXJhdG9yLFxuICBhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBhY2NvcmRpb24taXRlbS1iZzogY29sb3ItYmcsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBhY2NvcmRpb24taXRlbS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taXRlbS1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBhY2NvcmRpb24taXRlbS1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICBhY2NvcmRpb24taXRlbS1zaGFkb3c6IHNoYWRvdyxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLWNvbG9yOiB0YWJzLXNlcGFyYXRvcixcbiAgbGlzdC1pdGVtLXBhZGRpbmc6IDFyZW0sXG5cbiAgY2FsZW5kYXItd2lkdGg6IDIxLjg3NXJlbSxcbiAgY2FsZW5kYXItYm9keS1oZWlnaHQ6IDI1LjYyNXJlbSxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLXhsZyxcbiAgY2FsZW5kYXItaGVhZGVyLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBjYWxlbmRhci1oZWFkZXItc3ViLXRpdGxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC10aGluLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLWJ1dHRvbi13aWR0aDogMTByZW0sXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWhvdmVyLWl0ZW0tYmc6IGNhbGVuZGFyLXNlbGVjdGVkLWl0ZW0tYmcsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNhbGVuZGFyLWZnOiBjb2xvci1mZy10ZXh0LFxuICBjYWxlbmRhci1zZWxlY3RlZC1mZzogY29sb3Itd2hpdGUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjYWxlbmRhci1mZyxcbiAgY2FsZW5kYXItZGF5LWNlbGwtd2lkdGg6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQ6IDIuNjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLWluYWN0aXZlLW9wYWNpdHk6IDAuNSxcbiAgY2FsZW5kYXItZGlzYWJsZWQtb3BhY2l0eTogMC4zLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWhlaWdodDogMS43NXJlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXNpemU6IGZvbnQtc2l6ZS14cyxcbiAgY2FsZW5kYXItd2Vla2RheS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBjYWxlbmRhci13ZWVrZGF5LWZnOiBjb2xvci1mZyxcbiAgY2FsZW5kYXItd2Vla2RheS1ob2xpZGF5LWZnOiBjb2xvci1kYW5nZXIsXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZWJmYmYyLFxuXG4gIGNhbGVuZGFyLWxhcmdlLXdpZHRoOiAyNC4zNzVyZW0sXG4gIGNhbGVuZGFyLWxhcmdlLWJvZHktaGVpZ2h0OiAyNy43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNC4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IDIuMzc1cmVtLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2Utd2lkdGg6IGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0LFxuXG4gIG92ZXJsYXktYmFja2Ryb3AtYmc6IHJnYmEoMCwgMCwgMCwgMC4yODgpLFxuXG4gIHRvb2x0aXAtYmc6IGNvbG9yLWZnLXRleHQsXG4gIHRvb2x0aXAtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgdG9vbHRpcC1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICB0b29sdGlwLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHRvb2x0aXAtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgdG9vbHRpcC1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgdG9vbHRpcC1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3ItYmctYWN0aXZlLFxuICB0b29sdGlwLXNoYWRvdzogc2hhZG93LFxuICB0b29sdGlwLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuXG4gIHNlbGVjdC1ib3JkZXItd2lkdGg6IDJweCxcbiAgc2VsZWN0LW1heC1oZWlnaHQ6IDIwcmVtLFxuICBzZWxlY3QtYmc6IGNvbG9yLWJnLFxuXG4gIHNlbGVjdC1jaGVja2JveC1jb2xvcjogY2hlY2tib3gtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3QtY2hlY2ttYXJrLWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogI2YyZjRmNyxcbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIHNlbGVjdC1vcHRpb24tcGFkZGluZzogMC43NXJlbSAxLjVyZW0sXG5cbiAgZGF0ZXBpY2tlci1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgZGF0ZXBpY2tlci1iZzogY29sb3ItYmcsXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLFxuICBkYXRlcGlja2VyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZGF0ZXBpY2tlci1zaGFkb3c6IG5vbmUsXG4gIGRhdGVwaWNrZXItYXJyb3ctc2l6ZTogMTFweCxcblxuICByYWRpby1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWZnOiBjb2xvci1mZy10ZXh0LFxuICByYWRpby1zaXplOiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtYmc6IHRyYW5zcGFyZW50LFxuICByYWRpby1jaGVja2VkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1zdWNjZXNzLFxuICByYWRpby1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogcmFkaW8tYm9yZGVyLWNvbG9yLFxuICByYWRpby1kaXNhYmxlZC1jaGVja21hcms6IHJhZGlvLWNoZWNrbWFyayxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBkZWZhdWx0KTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnLi4vY29yZS9taXhpbnMnO1xuQGltcG9ydCAnZGVmYXVsdCc7XG5cbi8vIGRlZmF1bHQgdGhlIGJhc2UgdGhlbWVcbiR0aGVtZTogKFxuICByYWRpdXM6IDAuNXJlbSxcblxuICBjb2xvci1iZzogIzNkMzc4MCxcbiAgY29sb3ItYmctYWN0aXZlOiAjNDk0Mjk5LFxuICBjb2xvci1mZzogI2ExYTFlNSxcbiAgY29sb3ItZmctaGVhZGluZzogI2ZmZmZmZixcbiAgY29sb3ItZmctdGV4dDogI2QxZDFmZixcbiAgY29sb3ItZmctaGlnaGxpZ2h0OiAjMDBmOWE2LFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3NjU5ZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICMwMGQ5NzcsXG4gIGNvbG9yLWluZm86ICMwMDg4ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmMzg2YSxcblxuICBsaW5rLWNvbG9yOiAjMDBmOWE2LFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjMTRmZmJlLFxuXG4gIHNlcGFyYXRvcjogIzM0MmU3MyxcbiAgc2hhZG93OiAwIDhweCAyMHB4IDAgcmdiYSg0MCwgMzcsIDg5LCAwLjYpLFxuXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG5cbiAgbGF5b3V0LWJnOiAjMmYyOTZiLFxuXG4gIHNjcm9sbGJhci1mZzogIzU1NGRiMyxcbiAgc2Nyb2xsYmFyLWJnOiAjMzMyZTczLFxuXG4gIHJhZGlhbC1ncmFkaWVudDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjNDIzZjhjLCAjMzAyYzZlKSxcbiAgbGluZWFyLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzE3NDksICM0MTM3ODkpLFxuXG4gIHNpZGViYXItZmc6IGNvbG9yLXNlY29uZGFyeSxcbiAgc2lkZWJhci1iZzogY29sb3ItYmcsXG5cbiAgaGVhZGVyLWZnOiBjb2xvci13aGl0ZSxcbiAgaGVhZGVyLWJnOiBjb2xvci1iZyxcblxuICBmb290ZXItZmc6IGNvbG9yLWZnLFxuICBmb290ZXItYmc6IGNvbG9yLWJnLFxuXG4gIGFjdGlvbnMtZmc6IGNvbG9yLWZnLFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICB1c2VyLWZnOiBjb2xvci1iZyxcbiAgdXNlci1iZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiBjb2xvci1mZy1oaWdobGlnaHQsXG5cbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIHBvcG92ZXItc2hhZG93OiBzaGFkb3csXG5cbiAgY29udGV4dC1tZW51LWFjdGl2ZS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY29udGV4dC1tZW51LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItaGVpZ2h0OiBoZWFkZXItaGVpZ2h0LFxuXG4gIHNpZGViYXItd2lkdGg6IDE2LjI1cmVtLFxuICBzaWRlYmFyLXdpZHRoLWNvbXBhY3Q6IDMuNDVyZW0sXG5cbiAgbWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZ3JvdXAtZmc6IGNvbG9yLXdoaXRlLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIG1lbnUtYWN0aXZlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtc3VibWVudS1iZzogbGF5b3V0LWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhpZ2hsaWdodCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IDAgMnB4IDEycHggMCByZ2JhKDAsIDI1NSwgMTcwLCAwLjI1KSxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogdHJhbnNwYXJlbnQsXG5cbiAgYnRuLWhlcm8tc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgzMywgNywgNzcsIDAuNSksXG4gIGJ0bi1oZXJvLXRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuICBidG4taGVyby1iZXZlbC1zaXplOiAwIDNweCAwIDAsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAycHggOHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgYnRuLW91dGxpbmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWhvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1mb2N1cy1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLWJnOiAjMzczMjczLFxuICBidG4tZ3JvdXAtc2VwYXJhdG9yOiAjMzEyYzY2LFxuXG4gIGZvcm0tY29udHJvbC1iZzogIzM3MzE3YSxcbiAgZm9ybS1jb250cm9sLWZvY3VzLWJnOiBzZXBhcmF0b3IsXG4gIGZvcm0tY29udHJvbC1ib3JkZXItY29sb3I6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeSxcblxuICBjaGVja2JveC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWJvcmRlci1jb2xvcjogY29sb3ItZmcsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBzZWFyY2gtYmc6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmctYWN0aXZlLFxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjM2EzNDdhLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6IGNvbG9yLWJnLWFjdGl2ZSxcblxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAycHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjIpLFxuXG4gIGJhZGdlLWZnLXRleHQ6IGNvbG9yLXdoaXRlLFxuICBiYWRnZS1wcmltYXJ5LWJnLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICBiYWRnZS1zdWNjZXNzLWJnLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBiYWRnZS1pbmZvLWJnLWNvbG9yOiBjb2xvci1pbmZvLFxuICBiYWRnZS13YXJuaW5nLWJnLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuICBiYWRnZS1kYW5nZXItYmctY29sb3I6IGNvbG9yLWRhbmdlcixcblxuICBzcGlubmVyLWJnOiByZ2JhKDYxLCA1NSwgMTI4LCAwLjkpLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAyMGRlZyxcblxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICM0ZTQwOTUsXG4gIGNhbGVuZGFyLXRvZGF5LWl0ZW0tYmc6ICMzNTJmNmUsXG5cbiAgc2VsZWN0LW9wdGlvbi1kaXNhYmxlZC1iZzogIzMxMmU3NSxcblxuICB0b2FzdHItY29sb3ItZmc6IGNvbG9yLXdoaXRlLFxuICB0b2FzdHItcGFkZGluZzogMS4yNXJlbSxcbiAgdG9hc3RyLWJvcmRlcjogMCxcbiAgdG9hc3RyLWRlZmF1bHQtYmFja2dyb3VuZDogI2JjYzNjYyxcblxuICB0b29sdGlwLWZnOiBjb2xvci1iZyxcbiAgdG9vbHRpcC1zdGF0dXMtZmc6IGNvbG9yLXdoaXRlLFxuXG4gIGRhdGVwaWNrZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBkYXRlcGlja2VyLXNoYWRvdzogc2hhZG93LFxuXG4gIHJhZGlvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuICByYWRpby1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3NtaWMsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIGhlYWRlci1mZzogI2Y3ZmFmYixcbiAgaGVhZGVyLWJnOiAjMTExMjE4LFxuXG4gIGxheW91dC1iZzogI2YxZjVmOCxcblxuICBjb2xvci1mZy1oZWFkaW5nOiAjMTgxODE4LFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLFxuXG4gIHNlcGFyYXRvcjogI2NkZDVkYyxcblxuICByYWRpdXM6IDAuMTdyZW0sXG5cbiAgc2Nyb2xsYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM3M2ExZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM1ZGNmZTMsXG4gIGNvbG9yLWluZm86ICNiYTdmZWMsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmEzNmIsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNmI4MyxcblxuICBidG4tc2Vjb25kYXJ5LWJnOiAjZWRmMmY1LFxuICBidG4tc2Vjb25kYXJ5LWJvcmRlcjogI2VkZjJmNSxcblxuICBhY3Rpb25zLWZnOiAjZDNkYmU1LFxuICBhY3Rpb25zLWJnOiBjb2xvci1iZyxcblxuICBzaWRlYmFyLWJnOiAjZTNlOWVlLFxuXG4gIGJvcmRlci1jb2xvcjogI2Q1ZGJlMCxcblxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6ICNlM2U5ZWUsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LWFjdGl2ZS1iZzogbWVudS1iZyxcblxuICBtZW51LXN1Ym1lbnUtYmc6IG1lbnUtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1iZzogI2NkZDVkYyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1hY3RpdmUtYmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtc2hhZG93OiBub25lLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItZmc6IG1lbnUtc3VibWVudS1hY3RpdmUtZmcsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogYnRuLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1cyxcblxuICBidG4taGVyby1kZWdyZWU6IDBkZWcsXG4gIGJ0bi1oZXJvLXByaW1hcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWluZm8tZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWRhbmdlci1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1nbG93LXNpemU6IDAgMCAyMHB4IDAsXG4gIGJ0bi1oZXJvLXByaW1hcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXN1Y2Nlc3MtZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXdhcm5pbmctZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWluZm8tZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLWRhbmdlci1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc2Vjb25kYXJ5LWdsb3ctc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogYnRuLWJvcmRlci1yYWRpdXMsXG5cbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGNhcmQtYm9yZGVyLWNvbG9yOiBib3JkZXItY29sb3IsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMCxcblxuICBsaW5rLWNvbG9yOiAjNWRjZmUzLFxuICBsaW5rLWNvbG9yLWhvdmVyOiAjN2RjZmUzLFxuICBsaW5rLWNvbG9yLXZpc2l0ZWQ6IGxpbmstY29sb3IsXG5cbiAgYWN0aW9ucy1zZXBhcmF0b3I6ICNmMWY0ZjUsXG5cbiAgbW9kYWwtc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG5cbiAgdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHRhYnMtc2VwYXJhdG9yOiAjZWJlY2VlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXByaW1hcnksXG5cbiAgcm91dGUtdGFicy1zZWxlY3RlZDogY29sb3ItcHJpbWFyeSxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcblxuICBmb290ZXItc2hhZG93OiBub25lLFxuICBmb290ZXItc2VwYXJhdG9yOiBib3JkZXItY29sb3IsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6ICMyYTJhMmEsXG5cbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogI2EyYjJjNyxcbiAgY2FsZW5kYXItYWN0aXZlLWl0ZW0tYmc6IGNvbG9yLXByaW1hcnksXG4gIGNhbGVuZGFyLXJhbmdlLWJnLWluLXJhbmdlOiAjZTNlY2ZlLFxuICBjYWxlbmRhci10b2RheS1mZzogY29sb3Itd2hpdGUsXG5cbiAgdG9hc3RyLWljb24tcmFkaXVzOiByYWRpdXMsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4pO1xuXG4vLyByZWdpc3RlciB0aGUgdGhlbWVcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgY29ycG9yYXRlLCBkZWZhdWx0KTtcbiIsIi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuJGdyaWQtY29sdW1uczogMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZTogMjRweCAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aHM6IChcbiAgeHM6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBzbTogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIG1kOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbGc6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICB4bDogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2VcbikgIWRlZmF1bHQ7XG5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIGlzOiA0MDBweCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweCxcbiAgeHhsOiAxNDAwcHgsXG4gIHh4eGw6IDE2MDBweFxuKTtcblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIGlzOiAzODBweCxcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHgsXG4gIHh4eGw6IDE1MDBweFxuKTtcblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAwLjAycHgsIG51bGwpO1xufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3RoZW1lcyc7XG5AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zL2JyZWFrcG9pbnRzJztcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL2JyZWFrcG9pbnRzJztcblxuQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQoKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAucmlnaHQge1xuICAgIG9yZGVyOiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC5sb2dvLWNvbnRhaW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygje25iLXRoZW1lKHNpZGViYXItd2lkdGgpfSAtICN7bmItdGhlbWUoaGVhZGVyLXBhZGRpbmcpfSk7XG4gIH1cblxuICAuY29udHJvbC1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG5cbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1yaWdodCwgbmItdGhlbWUocGFkZGluZykpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKHBhZGRpbmctbGVmdCwgbmItdGhlbWUocGFkZGluZykpO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIHBhZGRpbmc6IDAgbmItdGhlbWUocGFkZGluZyk7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUoZm9udC13ZWlnaHQtYm9sZGVyKTtcbiAgICAgIEBpbmNsdWRlIG5iLWx0cihib3JkZXItbGVmdCwgMXB4IHNvbGlkIG5iLXRoZW1lKHNlcGFyYXRvcikpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci1yaWdodCwgMXB4IHNvbGlkIG5iLXRoZW1lKHNlcGFyYXRvcikpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKGNvcnBvcmF0ZSkge1xuICAgICRtZW51LWFjdGlvbi1zZXBhcmF0b3ItY29sb3I6ICMzZjQ1NTA7XG5cbiAgICBuYi1hY3Rpb24ge1xuICAgICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci1sZWZ0LWNvbG9yLCAkbWVudS1hY3Rpb24tc2VwYXJhdG9yLWNvbG9yKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChib3JkZXItcmlnaHQtY29sb3IsICRtZW51LWFjdGlvbi1zZXBhcmF0b3ItY29sb3IpO1xuICAgIH1cblxuICAgIC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcbiAgICAgIEBpbmNsdWRlIG5iLWx0cihib3JkZXIsIG5vbmUpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlciwgbm9uZSk7XG4gICAgfVxuXG4gICAgLmhlYWRlci1jb250YWluZXIgL2RlZXAvIG5neC10aGVtZS1zd2l0Y2hlciAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShjb2xvci13aGl0ZSk7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cblxuICBuZ3gtbGF5b3V0LWRpcmVjdGlvbi1zd2l0Y2hlciB7XG4gICAgbWFyZ2luOiAwIDEuNXJlbTtcbiAgfVxuXG4gIG5neC10aGVtZS1zd2l0Y2hlciB7XG4gICAgbWFyZ2luOiBuYi10aGVtZShsYXlvdXQtcGFkZGluZyk7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHhsKSB7XG4gICAgbmd4LWxheW91dC1kaXJlY3Rpb24tc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAudG9nZ2xlLXNldHRpbmdzIC9kZWVwLyBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShjb2xvci1mZy1oaWdobGlnaHQpO1xuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlLWxpZ2h0O1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgLy8gaGFjayB0byBiZSBhYmxlIHRvIHNldCBib3JkZXItcmFkaXVzXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3Jyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUyLjMlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTMlO1xuICAgICAgICBoZWlnaHQ6IDEzJTtcblxuICAgICAgICBhbmltYXRpb246IDNzIGxpbmVhciBpbmZpbml0ZSBwdWxzZTtcblxuICAgICAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoZGVmYXVsdCkge1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwdWxzZS1saWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhwdWxzZSkge1xuICAgIDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKG5iLXRoZW1lKGNvbG9yLWZnLWhpZ2hsaWdodCksIDApO1xuICAgIH1cblxuICAgIDIwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYShuYi10aGVtZShjb2xvci1mZy1oaWdobGlnaHQpLCAwLjQpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEobmItdGhlbWUoY29sb3ItZmctaGlnaGxpZ2h0KSwgMCk7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUga2V5ZnJhbWVzKHB1bHNlLWxpZ2h0KSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7XG4gICAgfVxuICAgIDIwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwLjQpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDApO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuXG4gICAgbmItYWN0aW9uOm5vdCgudG9nZ2xlLXNldHRpbmdzKSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC50b2dnbGUtc2V0dGluZ3Mge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICBuZ3gtbGF5b3V0LWRpcmVjdGlvbi1zd2l0Y2hlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5neC10aGVtZS1zd2l0Y2hlciB7XG4gICAgICBtYXJnaW46IDAgMC41cmVtO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuXG4gICAgbmItdXNlciAvZGVlcC8gLnVzZXItbmFtZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihpcykge1xuXG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgLmxvZ28ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvZ2dsZS1zZXR0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5neC10aGVtZS1zd2l0Y2hlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIG5iLWFjdGlvbjpub3QoLnRvZ2dsZS1zZXR0aW5ncykge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAucmlnaHQgL2RlZXAvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBUaGlzIGlzIGEgc3RhcnRpbmcgcG9pbnQgd2hlcmUgd2UgZGVjbGFyZSB0aGUgbWFwcyBvZiB0aGVtZXMgYW5kIGdsb2JhbGx5IGF2YWlsYWJsZSBmdW5jdGlvbnMvbWl4aW5zXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9yZGVyOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLnJpZ2h0IHtcbiAgICBvcmRlcjogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmxvZ28tY29udGFpbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDE2cmVtIC0gMS4yNXJlbSk7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmNvbnRyb2wtaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtOyB9XG4gICAgICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLm5hdmlnYXRpb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07IH1cbiAgICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcbiAgICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmVlZjI7IH1cbiAgICAgIFtkaXI9cnRsXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVlZjI7IH1cbiAgICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIGltZyB7XG4gICAgICAgIGhlaWdodDogNTlweDtcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbTsgfVxuICAgICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28gc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qgbmd4LWxheW91dC1kaXJlY3Rpb24tc3dpdGNoZXIge1xuICAgIG1hcmdpbjogMCAxLjVyZW07IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qgbmd4LXRoZW1lLXN3aXRjaGVyIHtcbiAgICBtYXJnaW46IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qgbmd4LWxheW91dC1kaXJlY3Rpb24tc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC50b2dnbGUtc2V0dGluZ3MgL2RlZXAvIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMTsgfVxuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC50b2dnbGUtc2V0dGluZ3MgL2RlZXAvIGEgaSB7XG4gICAgICBjb2xvcjogIzQwZGM3ZTtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBwdWxzZS1saWdodDsgfVxuICAgICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyAvZGVlcC8gYSBpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTIuMyU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiAxMyU7XG4gICAgICAgIGhlaWdodDogMTMlO1xuICAgICAgICBhbmltYXRpb246IDNzIGxpbmVhciBpbmZpbml0ZSBwdWxzZTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlLWxpZ2h0OyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSg2NCwgMjIwLCAxMjYsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoNjQsIDIyMCwgMTI2LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDY0LCAyMjAsIDEyNiwgMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoNjQsIDIyMCwgMTI2LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDY0LCAyMjAsIDEyNiwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSg2NCwgMjIwLCAxMjYsIDApOyB9IH1cblxuQC1vLWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSg2NCwgMjIwLCAxMjYsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoNjQsIDIyMCwgMTI2LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDY0LCAyMjAsIDEyNiwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDY0LCAyMjAsIDEyNiwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSg2NCwgMjIwLCAxMjYsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoNjQsIDIyMCwgMTI2LCAwKTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZS1saWdodCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgcHVsc2UtbGlnaHQge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9IH1cblxuQC1vLWtleWZyYW1lcyBwdWxzZS1saWdodCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHB1bHNlLWxpZ2h0IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLWFjdGlvbjpub3QoLnRvZ2dsZS1zZXR0aW5ncykge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmNvbnRyb2wtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qgbmd4LWxheW91dC1kaXJlY3Rpb24tc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5neC10aGVtZS1zd2l0Y2hlciB7XG4gICAgICBtYXJnaW46IDAgMC41cmVtOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItdXNlciAvZGVlcC8gLnVzZXItbmFtZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3Qgbmd4LXRoZW1lLXN3aXRjaGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1hY3Rpb246bm90KC50b2dnbGUtc2V0dGluZ3MpIHtcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogMzk5Ljk4cHgpIHtcbiAgICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAucmlnaHQgL2RlZXAvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLmxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IC5yaWdodCB7XG4gICAgb3JkZXI6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLmxvZ28tY29udGFpbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDE2LjI1cmVtIC0gMS4yNXJlbSk7IH1cbiAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAuY29udHJvbC1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07IH1cbiAgICAgIFtkaXI9cnRsXSAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtOyB9XG4gICAgICAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIFtkaXI9bHRyXSAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzQyZTczOyB9XG4gICAgICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzNDJlNzM7IH1cbiAgICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtOyB9XG4gICAgICAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3Qgbmd4LWxheW91dC1kaXJlY3Rpb24tc3dpdGNoZXIge1xuICAgIG1hcmdpbjogMCAxLjVyZW07IH1cbiAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuZ3gtdGhlbWUtc3dpdGNoZXIge1xuICAgIG1hcmdpbjogMi4yNXJlbSAyLjI1cmVtIDAuNzVyZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHtcbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IG5neC1sYXlvdXQtZGlyZWN0aW9uLXN3aXRjaGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IC50b2dnbGUtc2V0dGluZ3MgL2RlZXAvIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMTsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyAvZGVlcC8gYSBpIHtcbiAgICAgIGNvbG9yOiAjMDBmOWE2O1xuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlLWxpZ2h0OyB9XG4gICAgICAubmItdGhlbWUtY29zbWljIDpob3N0IC50b2dnbGUtc2V0dGluZ3MgL2RlZXAvIGEgaTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBN1wiKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUyLjMlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMTMlO1xuICAgICAgICBoZWlnaHQ6IDEzJTtcbiAgICAgICAgYW5pbWF0aW9uOiAzcyBsaW5lYXIgaW5maW5pdGUgcHVsc2U7IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDAsIDI0OSwgMTY2LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDAsIDI0OSwgMTY2LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDAsIDI0OSwgMTY2LCAwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgwLCAyNDksIDE2NiwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgwLCAyNDksIDE2NiwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgwLCAyNDksIDE2NiwgMCk7IH0gfVxuXG5ALW8ta2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDAsIDI0OSwgMTY2LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDAsIDI0OSwgMTY2LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDAsIDI0OSwgMTY2LCAwKTsgfSB9XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMCwgMjQ5LCAxNjYsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMCwgMjQ5LCAxNjYsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMCwgMjQ5LCAxNjYsIDApOyB9IH1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlLWxpZ2h0IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfSB9XG5cbkAtbW96LWtleWZyYW1lcyBwdWxzZS1saWdodCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH0gfVxuXG5ALW8ta2V5ZnJhbWVzIHB1bHNlLWxpZ2h0IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfSB9XG5cbkBrZXlmcmFtZXMgcHVsc2UtbGlnaHQge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1hY3Rpb246bm90KC50b2dnbGUtc2V0dGluZ3MpIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLmNvbnRyb2wtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAudG9nZ2xlLXNldHRpbmdzIHtcbiAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IG5neC1sYXlvdXQtZGlyZWN0aW9uLXN3aXRjaGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IG5neC10aGVtZS1zd2l0Y2hlciB7XG4gICAgICBtYXJnaW46IDAgMC41cmVtOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi11c2VyIC9kZWVwLyAudXNlci1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuZ3gtdGhlbWUtc3dpdGNoZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItYWN0aW9uOm5vdCgudG9nZ2xlLXNldHRpbmdzKSB7XG4gICAgICBwYWRkaW5nOiAwOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM5OS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAucmlnaHQgL2RlZXAvIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3JkZXI6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5yaWdodCB7XG4gICAgb3JkZXI6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmxvZ28tY29udGFpbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDE2cmVtIC0gMS4yNXJlbSk7IH1cbiAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAuY29udHJvbC1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07IH1cbiAgICAgIFtkaXI9cnRsXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtOyB9XG4gICAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5uYXZpZ2F0aW9uIGkge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIFtkaXI9bHRyXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2RkNWRjOyB9XG4gICAgICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjZGQ1ZGM7IH1cbiAgICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28gaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA1OXB4O1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtOyB9XG4gICAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5oZWFkZXItY29udGFpbmVyIC5sb2dvIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLWFjdGlvbiB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMzZjQ1NTA7IH1cbiAgW2Rpcj1ydGxdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItYWN0aW9uIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICMzZjQ1NTA7IH1cbiAgW2Rpcj1sdHJdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmhlYWRlci1jb250YWluZXIgLmxvZ28ge1xuICAgIGJvcmRlcjogbm9uZTsgfVxuICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgYm9yZGVyOiBub25lOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLmhlYWRlci1jb250YWluZXIgL2RlZXAvIG5neC10aGVtZS1zd2l0Y2hlciAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5neC1sYXlvdXQtZGlyZWN0aW9uLXN3aXRjaGVyIHtcbiAgICBtYXJnaW46IDAgMS41cmVtOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3Qgbmd4LXRoZW1lLXN3aXRjaGVyIHtcbiAgICBtYXJnaW46IDIuMjVyZW0gMi4yNXJlbSAwLjc1cmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuZ3gtbGF5b3V0LWRpcmVjdGlvbi1zd2l0Y2hlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAudG9nZ2xlLXNldHRpbmdzIC9kZWVwLyBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE7IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC50b2dnbGUtc2V0dGluZ3MgL2RlZXAvIGEgaSB7XG4gICAgICBjb2xvcjogI2E0YWJiMztcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBwdWxzZS1saWdodDsgfVxuICAgICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAudG9nZ2xlLXNldHRpbmdzIC9kZWVwLyBhIGk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTdcIik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1Mi4zJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDEzJTtcbiAgICAgICAgaGVpZ2h0OiAxMyU7XG4gICAgICAgIGFuaW1hdGlvbjogM3MgbGluZWFyIGluZmluaXRlIHB1bHNlOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxNjQsIDE3MSwgMTc5LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDE2NCwgMTcxLCAxNzksIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTY0LCAxNzEsIDE3OSwgMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgcHVsc2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMTY0LCAxNzEsIDE3OSwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgxNjQsIDE3MSwgMTc5LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDE2NCwgMTcxLCAxNzksIDApOyB9IH1cblxuQC1vLWtleWZyYW1lcyBwdWxzZSB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxNjQsIDE3MSwgMTc5LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDE2NCwgMTcxLCAxNzksIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTY0LCAxNzEsIDE3OSwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDE2NCwgMTcxLCAxNzksIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMTY0LCAxNzEsIDE3OSwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgxNjQsIDE3MSwgMTc5LCAwKTsgfSB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZS1saWdodCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH0gfVxuXG5ALW1vei1rZXlmcmFtZXMgcHVsc2UtbGlnaHQge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwIHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH1cbiAgMjAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDEwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwLjQpOyB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMjBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9IH1cblxuQC1vLWtleWZyYW1lcyBwdWxzZS1saWdodCB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfVxuICAyMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMTBweCByZ2JhKDExNSwgMjU1LCAyMDgsIDAuNCk7IH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAyMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMCk7IH0gfVxuXG5Aa2V5ZnJhbWVzIHB1bHNlLWxpZ2h0IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCByZ2JhKDExNSwgMjU1LCAyMDgsIDApOyB9XG4gIDIwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAxMHB4IHJnYmEoMTE1LCAyNTUsIDIwOCwgMC40KTsgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDIwcHggcmdiYSgxMTUsIDI1NSwgMjA4LCAwKTsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItYWN0aW9uOm5vdCgudG9nZ2xlLXNldHRpbmdzKSB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5jb250cm9sLWl0ZW0ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLnRvZ2dsZS1zZXR0aW5ncyB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuZ3gtbGF5b3V0LWRpcmVjdGlvbi1zd2l0Y2hlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuZ3gtdGhlbWUtc3dpdGNoZXIge1xuICAgICAgbWFyZ2luOiAwIDAuNXJlbTsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItdXNlciAvZGVlcC8gLnVzZXItbmFtZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCAuaGVhZGVyLWNvbnRhaW5lciAubG9nbyB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC50b2dnbGUtc2V0dGluZ3Mge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3Qgbmd4LXRoZW1lLXN3aXRjaGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLWFjdGlvbjpub3QoLnRvZ2dsZS1zZXR0aW5ncykge1xuICAgICAgcGFkZGluZzogMDsgfSB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzOTkuOThweCkge1xuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLnJpZ2h0IC9kZWVwLyB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/@theme/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_data_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/users */ "./src/app/@core/data/users.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/utils */ "./src/app/@core/utils/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService, layoutService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.layoutService = layoutService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log Out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.nick; });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-header',
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/@theme/components/header/header.component.scss")],
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/@theme/components/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuService"],
            _core_data_users__WEBPACK_IMPORTED_MODULE_2__["UserData"],
            _core_utils__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"],
            _core_utils__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/components/index.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ "./src/app/@theme/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-input/search-input.component */ "./src/app/@theme/components/search-input/search-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"]; });

/* harmony import */ var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tiny-mce/tiny-mce.component */ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"]; });







/***/ }),

/***/ "./src/app/@theme/components/invoice/invoice.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/@theme/components/invoice/invoice.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invoice {\n  page-break-after: always;\n}\n\n.invoice:last-child {\n  page-break-after: avoid;\n}\n\n@media print {\n  .imp {\n    -webkit-print-color-adjust: exact;\n    background-color: yellow;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSx3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyx5QkFBeUI7R0FDMUI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludm9pY2Uge1xuICBwYWdlLWJyZWFrLWFmdGVyOiBhbHdheXM7XG59XG5cbi5pbnZvaWNlOmxhc3QtY2hpbGQge1xuICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgLmltcCB7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/components/invoice/invoice.component.html":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/invoice/invoice.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"invoice\" *ngFor=\"let invoice of invoiceIds; let i = index\">\n  <h1>Invoice Num. {{ invoice }}</h1>\n  Amount: {{ (invoiceDetails[i] | async)?.amount }}\n</div> -->\n<div class=\"invoice\">\n  <div class=\"row col-sm-12\">\n    <div class=\"col-sm-6 border\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Party Name :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          INOX LEISURE LIMITED - BHUBANESWAR\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Address :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          BHUBANESWER BHAWANI, BMC BHAWANI MALL\n          SAHEED NAGAR, BHUBANESWAR\n          BHUBANESWAR\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Phone No. :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          9777453660\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>GSTIN :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          21AAACI6063J1ZS\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Delivery Party :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          21AAACI6063J1ZS\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Delivery Add :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          21AAACI6063J1ZS\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 border\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Bill No. :</b>\n        </div>\n        <div class=\"col-md-3 border\">\n          1213132\n        </div>\n        <div class=\"col-md-2\">\n          <b>Date :</b>\n        </div>\n        <div class=\"col-md-3 border\">\n          26/Feb/2019\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Chl No. :</b>\n        </div>\n        <div class=\"col-md-3 border\">\n          1213132\n        </div>\n        <div class=\"col-md-2\">\n          <b>Date :</b>\n        </div>\n        <div class=\"col-md-3 border\">\n          26/Feb/2019\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>LR.RR No : :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          9777453660\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Party Po No :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n          21AAACI6063J1ZS\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Dispatch Through :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <b>Agent :</b>\n        </div>\n        <div class=\"col-md-8 border\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"imp row col-sm-12\">\n    <div class=\"col-sm-2\">\n      <b class=\"imp\">Net Rate</b>\n    </div>\n    <div class=\"col-sm-3 border\">\n      <b class=\"imp\">Payment Days:</b>\n    </div>\n    <div class=\"col-sm-1\">\n      <b class=\"imp\">45</b>\n    </div>\n    <div class=\"col-sm-6\">\n      <b class=\"imp\">INTEREST OF 2%/MONTH WILL BE CHARGED AFTER DUE DATE</b>\n    </div>\n  </div>\n  <div class=\"border\">\n    <table class=\"table table-bordered responsive\">\n      <tr>\n        <th rowspan=\"2\">\n          Sr.\n        </th>\n        <th rowspan=\"2\">\n          Particulars\n        </th>\n        <th rowspan=\"2\">\n          HSN\n        </th>\n        <th rowspan=\"2\">\n          Pcs\n        </th>\n        <th rowspan=\"2\">\n          Pcs\n        </th>\n        <th rowspan=\"2\">\n          Rate\n        </th>\n        <th rowspan=\"2\">\n          Dis. %\n        </th>\n        <th rowspan=\"2\">\n          Dis. Rate\n        </th>\n        <th rowspan=\"2\">\n          Taxable Amount\n        </th>\n        <th colspan=\"2\">\n          CGST\n        </th>\n        <th colspan=\"2\">\n          SGST\n        </th>\n        <th colspan=\"2\">\n          IGST\n        </th>\n      </tr>\n      <tr>\n        <th>\n          %\n        </th>\n        <th>\n          Amt\n        </th>\n        <th>\n          %\n        </th>\n        <th>\n          Amt\n        </th>\n        <th>\n          %\n        </th>\n        <th>\n          Amt\n        </th>\n      </tr>\n      <tr>\n        <td>\n          1\n        </td>\n        <td>\n          PB - 05 IFR - 8MM LAMINATED\n        </td>\n        <td>\n          5903\n        </td>\n        <td>\n          16\n        </td>\n        <td>\n          564.50\n        </td>\n        <td>\n          460.00\n        </td>\n        <td>\n          0%\n        </td>\n        <td>\n          460.00\n        </td>\n        <td>\n          259670.00\n        </td>\n        <td>\n\n        </td>\n        <td>\n\n        </td>\n\n        <td>\n\n        </td>\n\n        <td>\n\n        </td>\n\n        <td>\n          12.00\n        </td>\n        <td>\n          31160.40\n        </td>\n      </tr>\n      <tr *ngFor=\"let i of rowd\">\n        <td *ngFor=\"let j of col\"></td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td><b>16</b></td>\n        <td><b>564.5 Mtr</b></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td><b>259670.00</b></td>\n        <td colspan=\"2\"></td>\n        <td colspan=\"2\"></td>\n        <td colspan=\"2\"><b>31160.40</b></td>\n      </tr>\n    </table>\n  </div>\n  <br>\n  &nbsp;\n  <div class=\"row col-sm-12\">\n    <div class=\"col-sm-7\">\n      <div class=\"row border\">\n        <div class=\"col-sm-12 row\">\n          <div class=\"col-sm-4\">\n            BANK NAME\n          </div>\n          <div class=\"col-sm-8\">\n            :- TAMILNAD MERCHANTILE BANK LTD.\n          </div>\n        </div>\n        <div class=\"col-sm-12 row\">\n          <div class=\"col-sm-4\">\n            A/c No.\n          </div>\n          <div class=\"col-sm-8\">\n            :- 192700150950474\n          </div>\n        </div>\n        <div class=\"col-sm-12 row\">\n          <div class=\"col-sm-4\">\n            Branch IFS Code\n          </div>\n          <div class=\"col-sm-8\">\n            :- TMBL0000192 RING ROAD , SURAT\n          </div>\n        </div>\n      </div>\n      <div class=\"row border\">\n        <div class=\"col-sm-12\">\n          <b>TERMS CONDITION :</b>\n        </div>\n        <div class=\"col-sm-12\">\n          1 . Goods once sold will not be taken back .\n        </div>\n        <div class=\"col-sm-12\">\n          2 . Our responsibility ceases once the goods is delivered to the carrier.\n        </div>\n        <div class=\"col-sm-12\">\n          3. GST Payable on Reverse Charge : No\n        </div>\n        <div class=\"col-sm-12 row\"></div>\n      </div>\n    </div>\n    <div class=\"col-sm-1\">\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 border\">\n          <b>Tax Amt:</b>\n        </div>\n        <div class=\"col-sm-8 border\">\n          <b>259670.00</b>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4 border\">\n          <b>\n            CGST:</b>\n        </div>\n        <div class=\"col-sm-8 border\">\n          <b>2</b>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4 border\">\n          <b>SGST:</b>\n        </div>\n        <div class=\"col-sm-8 border\">\n          <b></b>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4 border\">\n          <b>IGST:</b>\n        </div>\n        <div class=\"col-sm-8 border\">\n          <b>31160.40</b>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-4 border\">\n          <b>Total:</b>\n        </div>\n        <div class=\"col-sm-8 border\">\n          <b>290,830.00</b>\n        </div>\n      </div>\n      <div class=\"row\">\n        <p class=\"text-center\">For , GLORY FAB LLP</p>\n      </div>\n      <div class=\"row\">\n        <p class=\"text-center\">Authorised Signatory</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/@theme/components/invoice/invoice.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@theme/components/invoice/invoice.component.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/print.service */ "./src/app/@theme/services/print.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(route, printService) {
        this.printService = printService;
        this.rowd = [{}, {}, {}, {}, {}, {}];
        this.col = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        // this.invoiceIds = route.snapshot.params['invoiceIds']
        //   .split(',');
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoiceDetails = [101, 102]
            .map(function (id) { return _this.getInvoiceDetails(id); });
        if (this.printService.isPrint) {
            Promise.all(this.invoiceDetails)
                .then(function () { return _this.printService.onDataReady(); });
        }
    };
    InvoiceComponent.prototype.getInvoiceDetails = function (invoiceId) {
        var amount = Math.floor((Math.random() * 100));
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve({ amount: amount }); }, 1000);
        });
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/@theme/components/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/@theme/components/invoice/invoice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"]])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/permission/permission.component.html":
/*!************************************************************************!*\
  !*** ./src/app/@theme/components/permission/permission.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{title}}</h4>\n    <button nbButton class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    {{permissionMessage}}\n</div>\n<div class=\"modal-footer\">\n    <button nbButton (click)=\"onGetOTP()\">Get OTP</button>\n    <button nbButton (click)=\"activeModal.close(false)\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/@theme/components/permission/permission.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/@theme/components/permission/permission.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@theme/components/permission/permission.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@theme/components/permission/permission.component.ts ***!
  \**********************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/@theme/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(activeModal, dashboardService, toasterService) {
        this.activeModal = activeModal;
        this.dashboardService = dashboardService;
        this.toasterService = toasterService;
        this.permissionMessage = '';
        this.title = '';
    }
    PermissionComponent.prototype.ngOnInit = function () {
        this.permissionMessage = this.message;
        this.title = this.titleFrom;
    };
    PermissionComponent.prototype.onGetOTP = function () {
        var _this = this;
        this.dashboardService.getOTP().subscribe(function (data) {
            if (!data[0].error) {
                _this.activeModal.close(data[0].data);
                _this.toasterService.success(data[0].message);
            }
            else {
                _this.activeModal.close(false);
                _this.toasterService.error(data[0].message);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermissionComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PermissionComponent.prototype, "titleFrom", void 0);
    PermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/@theme/components/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/@theme/components/permission/permission.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/print-layout/print-layout.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/@theme/components/print-layout/print-layout.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .header-space,\n.footer, .footer-space { height: 100px; }\n.header { position: fixed; top: 0; }\n.footer { position: fixed; bottom: 0; }\n/* @media screen {\n  :host {\n    display: none;\n  }\n} */\n.printpage {\n  background: white;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 0.5cm;\n  -webkit-box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\n          box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);\n  width: 31cm;\n  /* height: 29.7cm; */\n}\n/* .section[size=\"A4\"] {  \n  width: 21cm;\n  height: 29.7cm; \n} */\n/* body {\n  background: rgb(204,204,204); \n}\n/* page[size=\"A4\"][layout=\"landscape\"] {\n  width: 29.7cm;\n  height: 21cm;  \n}\npage[size=\"A3\"] {\n  width: 29.7cm;\n  height: 42cm;\n}\npage[size=\"A3\"][layout=\"landscape\"] {\n  width: 42cm;\n  height: 29.7cm;  \n}\npage[size=\"A5\"] {\n  width: 14.8cm;\n  height: 21cm;\n}\npage[size=\"A5\"][layout=\"landscape\"] {\n  width: 21cm;\n  height: 14.8cm;  \n} */\n@media print {\n  body, .section {\n    margin: 0;\n    -webkit-box-shadow: 0;\n            box-shadow: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO3lCQUN5QixjQUFjLEVBQUU7QUFDekMsVUFBVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7QUFDcEMsVUFBVSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7QUFFdkM7Ozs7SUFJSTtBQUNKO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLHFCQUFxQjtDQUN0QjtBQUNEOzs7SUFHSTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JJO0FBQ0o7RUFDRTtJQUNFLFVBQVU7SUFDVixzQkFBYztZQUFkLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvcHJpbnQtbGF5b3V0L3ByaW50LWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciwgLmhlYWRlci1zcGFjZSxcbi5mb290ZXIsIC5mb290ZXItc3BhY2UgeyBoZWlnaHQ6IDEwMHB4OyB9XG4uaGVhZGVyIHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IH1cbi5mb290ZXIgeyBwb3NpdGlvbjogZml4ZWQ7IGJvdHRvbTogMDsgfVxuXG4vKiBAbWVkaWEgc2NyZWVuIHtcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0gKi9cbi5wcmludHBhZ2Uge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwLjVjbTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWNtIHJnYmEoMCwwLDAsMC41KTtcbiAgd2lkdGg6IDMxY207XG4gIC8qIGhlaWdodDogMjkuN2NtOyAqL1xufVxuLyogLnNlY3Rpb25bc2l6ZT1cIkE0XCJdIHsgIFxuICB3aWR0aDogMjFjbTtcbiAgaGVpZ2h0OiAyOS43Y207IFxufSAqL1xuLyogYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYigyMDQsMjA0LDIwNCk7IFxufVxuLyogcGFnZVtzaXplPVwiQTRcIl1bbGF5b3V0PVwibGFuZHNjYXBlXCJdIHtcbiAgd2lkdGg6IDI5LjdjbTtcbiAgaGVpZ2h0OiAyMWNtOyAgXG59XG5wYWdlW3NpemU9XCJBM1wiXSB7XG4gIHdpZHRoOiAyOS43Y207XG4gIGhlaWdodDogNDJjbTtcbn1cbnBhZ2Vbc2l6ZT1cIkEzXCJdW2xheW91dD1cImxhbmRzY2FwZVwiXSB7XG4gIHdpZHRoOiA0MmNtO1xuICBoZWlnaHQ6IDI5LjdjbTsgIFxufVxucGFnZVtzaXplPVwiQTVcIl0ge1xuICB3aWR0aDogMTQuOGNtO1xuICBoZWlnaHQ6IDIxY207XG59XG5wYWdlW3NpemU9XCJBNVwiXVtsYXlvdXQ9XCJsYW5kc2NhcGVcIl0ge1xuICB3aWR0aDogMjFjbTtcbiAgaGVpZ2h0OiAxNC44Y207ICBcbn0gKi9cbkBtZWRpYSBwcmludCB7XG4gIGJvZHksIC5zZWN0aW9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNoYWRvdzogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/components/print-layout/print-layout.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/components/print-layout/print-layout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table>\n  <thead><tr><td>\n    <div class=\"header-space\"></div>\n  </td></tr></thead>\n  <tbody><tr><td>\n    <div class=\"content\">\n      <router-outlet></router-outlet>\n    </div>\n  </td></tr></tbody>\n  <tfoot><tr><td>\n    <div class=\"footer-space\"></div>\n  </td></tr></tfoot>\n</table> -->\n<!-- <hr> -->\n<section class=\"printpage\" id=\"printpdf\" >\n  <div class=\"border\">\n    <div>\n      <div class=\"border text-center\">\n        <div class=\"col-sm-12\">\n          <div class=\"content-header\">\n            SUBJECT TO SURAT JURISDICTION</div>\n        </div>\n      </div>\n      <!-- <hr> -->\n      <div class=\"border\">\n        <div class=\"col-sm-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"card-block\">\n                <div class=\"row\">\n                  <p class=\"col-sm-12 text-center\"><b>GLORY FAB LLP</b></p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"text-center col-sm-12\"><b>201,ROAD NO 2,GIDC,SACHIN-394230 SURAT</b></p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"text-center col-sm-12\"><b>Mo.9375252244 , 8128023332 E-Mail : gloryfab2016@gmail.com</b></p>\n                </div>\n                <div class=\"row\">\n                  <p class=\"text-center col-sm-12\"><b>GSTIN :- 24AAPFG4395K1ZU Place Of Supply : Surat</b></p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <hr> -->\n      <div class=\"border\">\n        <p class=\"col-sm-12 text-center\"><b>TAX INVOICE</b></p>\n      </div>\n      <!-- <hr> -->\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- <div class=\"header\">COOL HEADER</div>\n<div class=\"footer\">AWESOME FOOTER</div> -->"

/***/ }),

/***/ "./src/app/@theme/components/print-layout/print-layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/print-layout/print-layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: PrintLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLayoutComponent", function() { return PrintLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/print.service */ "./src/app/@theme/services/print.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintLayoutComponent = /** @class */ (function () {
    function PrintLayoutComponent(printService) {
        this.printService = printService;
    }
    PrintLayoutComponent.prototype.ngOnInit = function () {
        if (this.printService.isExport) {
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'pt', 'a4');
            pdf.addHTML(document.getElementById('printpdf'), function () {
                pdf.save('quality.pdf');
            });
            // html2canvas(document.getElementById('printpdf')).then(canvas => {
            //   var imgWidth = 208;
            //   var pageHeight = 295;
            //   var imgHeight = canvas.height * imgWidth / canvas.width;
            //   var heightLeft = imgHeight;
            //   const contentDataURL = canvas.toDataURL('image/png')
            //   let pdf = new jspdf('p', 'mm', 'a5'); // A4 size page of PDF  
            //   var position = 0;
            //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
            //   pdf.save('MYPdf.pdf'); // Generated PDF  
            //   //  window.close();
            // });
        }
        // } else {
        //   this.flag = true;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrintLayoutComponent.prototype, "content", void 0);
    PrintLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print-layout',
            template: __webpack_require__(/*! ./print-layout.component.html */ "./src/app/@theme/components/print-layout/print-layout.component.html"),
            styles: [__webpack_require__(/*! ./print-layout.component.css */ "./src/app/@theme/components/print-layout/print-layout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_print_service__WEBPACK_IMPORTED_MODULE_2__["PrintService"]])
    ], PrintLayoutComponent);
    return PrintLayoutComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    -webkit-transition: width 0.2s ease;\n    transition: width 0.2s ease; }\n  :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL3NyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQWIscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQW1CO01BQW5CLHVCQUFtQjtVQUFuQixvQkFBbUIsRUE4QnBCO0VBaENEO0lBTU0sa0JBQWlCLEVBQ2xCO0VBUEw7SUFVTSxnQkFBZSxFQUNoQjtFQVhMO0lBZUksYUFBWTtJQUNaLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLG9DQUEyQjtJQUEzQiw0QkFBMkIsRUFNNUI7RUF6Qkg7TUFzQk0sU0FBUTtNQUNSLFVBQVMsRUFDVjtFQXhCTDtJQTZCTSx3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGkuY29udHJvbC1pY29uIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2U7XG5cbiAgICAmLmhpZGRlbiB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAvZGVlcC8gc2VhcmNoLWlucHV0IHtcbiAgICBpbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/@theme/components/search-input/search-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function() { return SearchInputComponent; });
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

var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchInputComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-search-input',
            styles: [__webpack_require__(/*! ./search-input.component.scss */ "./src/app/@theme/components/search-input/search-input.component.scss")],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());



/***/ }),

/***/ "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
  \******************************************************************/
/*! exports provided: TinyMCEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function() { return TinyMCEComponent; });
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

var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());



/***/ }),

/***/ "./src/app/@theme/guard/auth-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/guard/auth-guard.service.ts ***!
  \****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, activateroute, authService) {
        var _this = this;
        this.router = router;
        this.activateroute = activateroute;
        this.authService = authService;
        this.currentUser$ = this.authService.currentUser.subscribe(function (data) {
            if (data != null) {
                _this.currentUser = data;
            }
        });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.currentUser !== undefined) {
            return true;
        }
        this.router.navigate(['/auth']);
        return false;
    };
    AuthGuard.prototype.ngOnDestroy = function () {
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/@theme/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('isLogged') === 'true') {
            return true;
        }
        this.router.navigate(['/auth']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/@theme/helpers/jwt.interceptors.ts":
/*!****************************************************!*\
  !*** ./src/app/@theme/helpers/jwt.interceptors.ts ***!
  \****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/@theme/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        // add authorization header with jwt token if available
        // const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
        var token = JSON.parse(localStorage.getItem('currentUserToken'));
        // if (token) {
        //     currentUser.token = token;
        // }
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request)
            .do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this.authService.logout();
                    // this.toasterService.error('Token Expired!');
                    _this.router.navigate(['./auth']);
                }
            }
        });
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/@theme/layouts/index.ts":
/*!*****************************************!*\
  !*** ./src/app/@theme/layouts/index.ts ***!
  \*****************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sample_sample_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample/sample.layout */ "./src/app/@theme/layouts/sample/sample.layout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return _sample_sample_layout__WEBPACK_IMPORTED_MODULE_0__["SampleLayoutComponent"]; });




/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.scss":
/*!**********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-default :host nb-sidebar.settings-sidebar {\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  width: 19rem;\n  overflow: hidden; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n[dir=rtl] .nb-theme-default :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=rtl] .nb-theme-default :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n.nb-theme-default :host nb-sidebar.settings-sidebar.expanded, .nb-theme-default :host nb-sidebar.settings-sidebar.expanded.start {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .scrollable {\n    width: 19rem;\n    padding: 3.4rem 0.25rem; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 19rem;\n    background: #ffffff;\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n    overflow: hidden;\n    position: relative; }\n.nb-theme-default :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 19rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.375rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.375rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-default :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-menu > .menu-items > .menu-item:first-child .menu-title::after {\n    color: #ffffff;\n    margin-left: 1rem;\n    background: #ff4c6a;\n    padding: 0 0.5rem;\n    border-radius: 0.375rem;\n    font-size: 0.875rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar /deep/ nb-menu .nb-e-commerce {\n    font-size: 2rem; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-default :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-default :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-default :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  width: 19rem;\n  overflow: hidden; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar.expanded, .nb-theme-cosmic :host nb-sidebar.settings-sidebar.expanded.start {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .scrollable {\n    width: 19rem;\n    padding: 3.4rem 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 19rem;\n    background: #3d3780;\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n    overflow: hidden;\n    position: relative;\n    background: #2f296b; }\n.nb-theme-cosmic :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 19rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important; }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.5rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-cosmic :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-menu > .menu-items > .menu-item:first-child .menu-title::after {\n    color: #ffffff;\n    margin-left: 1rem;\n    background: #ff386a;\n    padding: 0 0.5rem;\n    border-radius: 0.5rem;\n    font-size: 0.875rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ nb-menu .nb-e-commerce {\n    font-size: 2rem; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-cosmic :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-cosmic :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-cosmic :host .main-btn {\n    display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-corporate :host nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar {\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  width: 19rem;\n  overflow: hidden; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.settings-sidebar {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.settings-sidebar.start {\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar.expanded, .nb-theme-corporate :host nb-sidebar.settings-sidebar.expanded.start {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .scrollable {\n    width: 19rem;\n    padding: 3.4rem 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 19rem;\n    background: #ffffff;\n    -webkit-transition: -webkit-transform 0.3s ease;\n    transition: -webkit-transform 0.3s ease;\n    transition: transform 0.3s ease;\n    transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n    overflow: hidden;\n    position: relative; }\n.nb-theme-corporate :host nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 19rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  margin-top: 0;\n  background: transparent; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border: 1px solid #cdd5dc;\n    height: calc(100vh - 4.75rem) !important; }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-right-radius: 0.17rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      border-top-left-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable {\n    padding-top: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .scrollable .menu-item:first-child {\n      border-top: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    -webkit-transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48);\n    border-radius: 0.17rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n[dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n[dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      padding-right: 0.25rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn i, .nb-theme-corporate :host nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-menu > .menu-items > .menu-item:first-child .menu-title::after {\n    color: #ffffff;\n    margin-left: 1rem;\n    background: #ff6b83;\n    padding: 0 0.5rem;\n    border-radius: 0.17rem;\n    font-size: 0.875rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ nb-menu .nb-e-commerce {\n    font-size: 2rem; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    -webkit-transition: none;\n    transition: none; }\n.nb-theme-corporate :host nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n@media (max-width: 399.98px) {\n  .nb-theme-corporate :host .main-content {\n    padding: 0.75rem !important; } }\n@media (max-width: 767.98px) {\n  .nb-theme-corporate :host nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important; }\n      [dir=ltr] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-right-radius: 0; }\n      [dir=rtl] .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container {\n        border-top-left-radius: 0; }\n      .nb-theme-corporate :host nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  .nb-theme-corporate :host .main-btn {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvX3RoZW1pbmcuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9fbWl4aW5zLnNjc3MiLCIvaG9tZS9oYXJzaGl0L0Rlc2t0b3Avbmd4LXdpcmVmcmFtZS9ub2RlX21vZHVsZXMvQG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvX2Z1bmN0aW9ucy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvbm9kZV9tb2R1bGVzL0BuZWJ1bGFyL3RoZW1lL3N0eWxlcy90aGVtZXMvX2RlZmF1bHQuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3NtaWMuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvdGhlbWVzL19jb3Jwb3JhdGUuc2NzcyIsIi9ob21lL2hhcnNoaXQvRGVza3RvcC9uZ3gtd2lyZWZyYW1lL25vZGVfbW9kdWxlcy9AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFsL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvc3JjL2FwcC9AdGhlbWUvbGF5b3V0cy9zYW1wbGUvc2FtcGxlLmxheW91dC5zY3NzIiwic3JjL2FwcC9AdGhlbWUvbGF5b3V0cy9zYW1wbGUvc2FtcGxlLmxheW91dC5zY3NzIiwiL2hvbWUvaGFyc2hpdC9EZXNrdG9wL25neC13aXJlZnJhbWUvc3JjL2FwcC9AdGhlbWUvc3R5bGVzL3RoZW1lcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSDs7R0FFRztBQ1RIOzs7O0dBSUc7QUFzS0g7Ozs7R0FJRztBQXNCSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1IRTtBQ3ZURjs7OztHQUlHO0FDSkg7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUd2VEY7Ozs7R0FJRztBRkpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUl2VEY7Ozs7R0FJRztBSEpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUV2VEY7Ozs7R0FJRztBREpIOzs7O0dBSUc7QURKSDs7OztHQUlHO0FBc0tIOzs7O0dBSUc7QUFzQkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtSEU7QUt2VEY7Ozs7R0FJRztBTjhHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBT2hJSjtFQUNFLGtDQUFxQjtNQUFyQiwwQkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCO0FBRUQ7RUFHRSxnREFBK0I7RUFBL0Isd0NBQStCO0VBQS9CLGdDQUErQjtFQUEvQiw2REFBK0I7RUFDL0IsYUFIcUI7RUFJckIsaUJBQWdCLEVBZ0NqQjtBQ3F5QkQ7SVB2aEJJLDJDTTdTZ0Q7WU42U2hELG1DTTdTZ0QsRU5pVG5EO0FPcWhCRDtJUHpoQkksNENNNVNpRDtZTjRTakQsb0NNNVNpRCxFTmdUcEQ7QU91aEJEO0lQM2hCSSw0Q00xU21EO1lOMFNuRCxvQ00xU21ELEVOOFN0RDtBT3loQkQ7SVA3aEJJLDJDTXpTa0Q7WU55U2xELG1DTXpTa0QsRU42U3JEO0FNMVNDO0lBQ0Usd0NBQStCO1lBQS9CLGdDQUErQixFQUNoQztBQUVEO0lBQ0UsYUFqQm1CO0lBa0JuQix3QkFBdUIsRUFDeEI7QUFFRDtJQUNFLGFBdEJtQjtJQXVCbkIsb0JKQ2E7SUlBYixnREFBK0I7SUFBL0Isd0NBQStCO0lBQS9CLGdDQUErQjtJQUEvQiw2REFBK0I7SUFDL0IsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQVNuQjtBQVBDO01BQ0UsYUE3QmlCLEVBOEJsQjtBQVFMO0VBRUUsaUJFeENzQjtFRjBFdEIsd0JBQXVCLEVBa0V4QjtBQTlGQztJQUNFLGdEQUM2RyxFQVM5RztBQzJ5QkQ7TVBsakJFLGtDRS9SWSxFRm1TZjtBT2dqQkM7TVBwakJFLGlDRS9SWSxFRm1TZjtBTWpQQztJQUNFLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFDbkI7QUFJRDtJQUNFLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLHNFQUE2RDtJQUE3RCw4REFBNkQsRUFrQjlEO0FBWkM7TUFDRSxnQkFBZTtNQUNmLDBDQUF5QyxFQUMxQztBQzB4Qkg7TVBqa0JFLHNCTXZOdUMsRU4yTjFDO0FPK2pCQztNUG5rQkUsdUJNdE53QyxFTjBOM0M7QU12Tkc7TUFDRSx1QkFBc0IsRUFDdkI7QUFPSztJQUNFLGVKdEVRO0lJdUVSLGtCQUFpQjtJQUNqQixvQkpqRVM7SUlrRVQsa0JBQWlCO0lBQ2pCLHdCSjFGSTtJSTJGSixvQko5RlUsRUkrRlg7QUFLUDtJQUNFLGdCQUFlLEVBQ2hCO0FBS0Q7SUFDRSxnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjtBQUVEO0lBQ0UsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLHlCQUFnQjtJQUFoQixpQkFBZ0IsRUFLakI7QUFIQztNQUNFLGNBQWEsRUFDZDtBRDNGTDtFQ2lHQTtJQUNFLDRCQUEyQixFQUU1QixFQUFBO0FEcEdEO0VDeUdBO0lBRUUsY0FBYSxFQVdkO0lBVEM7TUFDRSx5Q0FBaUYsRUFPbEY7TUNvdkJEO1FQcm1CQSwyQk1ySjRDLEVOeUovQztNT21tQkc7UVB2bUJBLDBCTXBKMkMsRU53SjlDO01NdEpLO1FBQ0UsZUFBYyxFQUNmO0VBSUw7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBUGhFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBT2hJSjtFQUNFLGtDQUFxQjtNQUFyQiwwQkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCO0FBRUQ7RUFHRSxnREFBK0I7RUFBL0Isd0NBQStCO0VBQS9CLGdDQUErQjtFQUEvQiw2REFBK0I7RUFDL0IsYUFIcUI7RUFJckIsaUJBQWdCLEVBZ0NqQjtBQ3U1QkQ7SVB6b0JJLDJDTTdTZ0Q7WU42U2hELG1DTTdTZ0QsRU5pVG5EO0FPdW9CRDtJUDNvQkksNENNNVNpRDtZTjRTakQsb0NNNVNpRCxFTmdUcEQ7QU95b0JEO0lQN29CSSw0Q00xU21EO1lOMFNuRCxvQ00xU21ELEVOOFN0RDtBTzJvQkQ7SVAvb0JJLDJDTXpTa0Q7WU55U2xELG1DTXpTa0QsRU42U3JEO0FNMVNDO0lBQ0Usd0NBQStCO1lBQS9CLGdDQUErQixFQUNoQztBQUVEO0lBQ0UsYUFqQm1CO0lBa0JuQix3QkFBdUIsRUFDeEI7QUFFRDtJQUNFLGFBdEJtQjtJQXVCbkIsb0JIbkJhO0lHb0JiLGdEQUErQjtJQUEvQix3Q0FBK0I7SUFBL0IsZ0NBQStCO0lBQS9CLDZEQUErQjtJQUMvQixpQkFBZ0I7SUFDaEIsbUJBQWtCO0lBT2hCLG9CSEhZLEVHS2Y7QUFQQztNQUNFLGFBN0JpQixFQThCbEI7QUFRTDtFQUVFLGlCRVZzQjtFRjRDdEIsd0JBQXVCLEVBa0V4QjtBQTlGQztJQUNFLGdEQUM2RyxFQVM5RztBQzg1QkQ7TVBycUJFLGdDR2hUVSxFSG9UYjtBT21xQkM7TVB2cUJFLCtCR2hUVSxFSG9UYjtBTWpQQztJQUNFLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFDbkI7QUFJRDtJQUNFLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLHNFQUE2RDtJQUE3RCw4REFBNkQsRUFrQjlEO0FBWkM7TUFDRSxnQkFBZTtNQUNmLDBDQUF5QyxFQUMxQztBQzY0Qkg7TVBwckJFLHNCTXZOdUMsRU4yTjFDO0FPa3JCQztNUHRyQkUsdUJNdE53QyxFTjBOM0M7QU12Tkc7TUFDRSx1QkFBc0IsRUFDdkI7QUFPSztJQUNFLGVINUZRO0lHNkZSLGtCQUFpQjtJQUNqQixvQkh2RlM7SUd3RlQsa0JBQWlCO0lBQ2pCLHNCSDNHRTtJRzRHRixvQko5RlUsRUkrRlg7QUFLUDtJQUNFLGdCQUFlLEVBQ2hCO0FBS0Q7SUFDRSxnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjtBQUVEO0lBQ0UsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLHlCQUFnQjtJQUFoQixpQkFBZ0IsRUFLakI7QUFIQztNQUNFLGNBQWEsRUFDZDtBRDNGTDtFQ2lHQTtJQUNFLDRCQUEyQixFQUU1QixFQUFBO0FEcEdEO0VDeUdBO0lBRUUsY0FBYSxFQVdkO0lBVEM7TUFDRSx5Q0FBaUYsRUFPbEY7TUN1MkJEO1FQeHRCQSwyQk1ySjRDLEVOeUovQztNT3N0Qkc7UVAxdEJBLDBCTXBKMkMsRU53SjlDO01NdEpLO1FBQ0UsZUFBYyxFQUNmO0VBSUw7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBUGhFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQW1CRTtBT2hJSjtFQUNFLGtDQUFxQjtNQUFyQiwwQkFBcUI7VUFBckIsc0JBQXFCLEVBQ3RCO0FBRUQ7RUFHRSxnREFBK0I7RUFBL0Isd0NBQStCO0VBQS9CLGdDQUErQjtFQUEvQiw2REFBK0I7RUFDL0IsYUFIcUI7RUFJckIsaUJBQWdCLEVBZ0NqQjtBQzBnQ0Q7SVA1dkJJLDJDTTdTZ0Q7WU42U2hELG1DTTdTZ0QsRU5pVG5EO0FPMHZCRDtJUDl2QkksNENNNVNpRDtZTjRTakQsb0NNNVNpRCxFTmdUcEQ7QU80dkJEO0lQaHdCSSw0Q00xU21EO1lOMFNuRCxvQ00xU21ELEVOOFN0RDtBTzh2QkQ7SVBsd0JJLDJDTXpTa0Q7WU55U2xELG1DTXpTa0QsRU42U3JEO0FNMVNDO0lBQ0Usd0NBQStCO1lBQS9CLGdDQUErQixFQUNoQztBQUVEO0lBQ0UsYUFqQm1CO0lBa0JuQix3QkFBdUIsRUFDeEI7QUFFRDtJQUNFLGFBdEJtQjtJQXVCbkIsb0JKQ2E7SUlBYixnREFBK0I7SUFBL0Isd0NBQStCO0lBQS9CLGdDQUErQjtJQUEvQiw2REFBK0I7SUFDL0IsaUJBQWdCO0lBQ2hCLG1CQUFrQixFQVNuQjtBQVBDO01BQ0UsYUE3QmlCLEVBOEJsQjtBQVFMO0VBRUUsaUJFb0JzQjtFRmpCcEIsY0FBYTtFQStCZix3QkFBdUIsRUFrRXhCO0FBOUZDO0lBQ0UsZ0RBQzZHO0lBSzNHLDBCRjFDWTtJRTJDWix5Q0FDMkUsRUFFOUU7QUNtaENEO01QMXhCRSxpQ0lyU1csRUp5U2Q7QU93eEJDO01QNXhCRSxnQ0lyU1csRUp5U2Q7QU0zUEM7SUFFSSxlQUFjLEVBTWpCO0FBSkc7TUFDRSxpQkFBZ0IsRUFDakI7QUFJTDtJQUNFLHVCQUFzQjtJQUN0QixtQkFBa0IsRUFDbkI7QUFJRDtJQUNFLHdCQUF1QjtJQUN2QixrQkFBaUI7SUFDakIsa0JBQWlCO0lBQ2pCLHNFQUE2RDtJQUE3RCw4REFBNkQ7SUFHM0QsdUJGdEVTLEVFcUZaO0FBWkM7TUFDRSxnQkFBZTtNQUNmLDBDQUF5QyxFQUMxQztBQ3VnQ0g7TVA5eUJFLHNCTXZOdUMsRU4yTjFDO0FPNHlCQztNUGh6QkUsdUJNdE53QyxFTjBOM0M7QU12Tkc7TUFDRSx1QkFBc0IsRUFDdkI7QUFPSztJQUNFLGVKdEVRO0lJdUVSLGtCQUFpQjtJQUNqQixvQkZ0RlM7SUV1RlQsa0JBQWlCO0lBQ2pCLHVCRmhHRztJRWlHSCxvQko5RlUsRUkrRlg7QUFLUDtJQUNFLGdCQUFlLEVBQ2hCO0FBS0Q7SUFDRSxnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjtBQUVEO0lBQ0UsWUFBVztJQUNYLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLHlCQUFnQjtJQUFoQixpQkFBZ0IsRUFLakI7QUFIQztNQUNFLGNBQWEsRUFDZDtBRDNGTDtFQ2lHQTtJQUNFLDRCQUEyQixFQUU1QixFQUFBO0FEcEdEO0VDeUdBO0lBRUUsY0FBYSxFQVdkO0lBVEM7TUFDRSx5Q0FBaUYsRUFPbEY7TUNpK0JEO1FQbDFCQSwyQk1ySjRDLEVOeUovQztNT2cxQkc7UVBwMUJBLDBCTXBKMkMsRU53SjlDO01NdEpLO1FBQ0UsZUFBYyxFQUNmO0VBSUw7SUFDRSxjQUFhLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9sYXlvdXRzL3NhbXBsZS9zYW1wbGUubGF5b3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cblxuLyoqXG4gKiBUaGlzIGlzIGEgc3RhcnRpbmcgcG9pbnQgd2hlcmUgd2UgZGVjbGFyZSB0aGUgbWFwcyBvZiB0aGVtZXMgYW5kIGdsb2JhbGx5IGF2YWlsYWJsZSBmdW5jdGlvbnMvbWl4aW5zXG4gKi9cblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuXG4kbmItZW5hYmxlZC10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItZW5hYmxlLWNzcy12YXJpYWJsZXM6IGZhbHNlICFnbG9iYWw7XG5cbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLW5vbi1wcm9jZXNzZWQ6ICgpICFnbG9iYWw7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGZ1bmN0aW9uIG5iLXRoZW1lKCRrZXkpIHtcbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtdmFsdWUoJHRoZW1lLCAka2V5LCAkdmFsdWUpIHtcbiAgQGlmICh0eXBlLW9mKCR2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAkdG1wOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICAgIEBpZiAoJHRtcCAhPSBudWxsKSB7XG4gICAgICBAcmV0dXJuIG5iLWdldC12YWx1ZSgkdGhlbWUsICR2YWx1ZSwgJHRtcCk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZSwgJGtleSk7XG59XG5cbkBmdW5jdGlvbiBjb252ZXJ0LXRvLWNzcy12YXJpYWJsZXMoJHZhcmlhYmxlcykge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR2YXJpYWJsZXMge1xuICAgICRyZXN1bHQ6IG1hcC1zZXQoJHJlc3VsdCwgJHZhciwgJy0tdmFyKCN7JHZhcn0pJyk7XG4gIH1cblxuICBAZGVidWcgJHJlc3VsdDtcbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5AZnVuY3Rpb24gc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZSwgJHRoZW1lLW5hbWUpIHtcbiAgJHRoZW1lOiAkdGhlbWUgIWdsb2JhbDtcbiAgJHRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtdmFyaWFibGVzKSB7XG4gICAgJHRoZW1lOiBjb252ZXJ0LXRvLWNzcy12YXJpYWJsZXMoJHRoZW1lKSAhZ2xvYmFsO1xuICB9XG4gIEByZXR1cm4gJHRoZW1lO1xufVxuXG5AZnVuY3Rpb24gbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCAkbmFtZSwgJGRlZmF1bHQ6IG51bGwpIHtcblxuICAkdGhlbWUtZGF0YTogKCk7XG5cblxuICBAaWYgKCRkZWZhdWx0ICE9IG51bGwpIHtcblxuICAgICR0aGVtZTogbWFwLW1lcmdlKG1hcC1nZXQoJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkLCAkZGVmYXVsdCksICR0aGVtZSk7XG4gICAgJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiBtYXAtc2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICAgICR0aGVtZS1kYXRhOiBtYXAtc2V0KCR0aGVtZS1kYXRhLCBkYXRhLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgbWFwLXNldCgkdGhlbWUtZGF0YSwgcGFyZW50LCAkZGVmYXVsdCkpICFnbG9iYWw7XG5cbiAgfSBAZWxzZSB7XG4gICAgJG5iLXRoZW1lcy1ub24tcHJvY2Vzc2VkOiBtYXAtc2V0KCRuYi10aGVtZXMtbm9uLXByb2Nlc3NlZCwgJG5hbWUsICR0aGVtZSkgIWdsb2JhbDtcblxuICAgICR0aGVtZS1kYXRhOiBtYXAtc2V0KCR0aGVtZS1kYXRhLCBkYXRhLCAkdGhlbWUpO1xuICAgICRuYi10aGVtZXMtZXhwb3J0OiBtYXAtc2V0KCRuYi10aGVtZXMtZXhwb3J0LCAkbmFtZSwgbWFwLXNldCgkdGhlbWUtZGF0YSwgcGFyZW50LCBudWxsKSkgIWdsb2JhbDtcbiAgfVxuXG4gICR0aGVtZS1wYXJzZWQ6ICgpO1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRoZW1lIHtcbiAgICAkdGhlbWUtcGFyc2VkOiBtYXAtc2V0KCR0aGVtZS1wYXJzZWQsICRrZXksIG5iLWdldC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkpO1xuICB9XG5cbiAgLy8gZW5hYmxlIHJpZ2h0IGF3YXkgd2hlbiBpbnN0YWxsZWRcbiAgJHRoZW1lLXBhcnNlZDogc2V0LWdsb2JhbC10aGVtZS12YXJzKCR0aGVtZS1wYXJzZWQsICRuYW1lKTtcbiAgQHJldHVybiBtYXAtc2V0KCRuYi10aGVtZXMsICRuYW1lLCAkdGhlbWUtcGFyc2VkKTtcbn1cblxuQGZ1bmN0aW9uIGdldC1lbmFibGVkLXRoZW1lcygpIHtcbiAgJHRoZW1lcy10by1pbnN0YWxsOiAoKTtcblxuICBAaWYgKGxlbmd0aCgkbmItZW5hYmxlZC10aGVtZXMpID4gMCkge1xuICAgIEBlYWNoICR0aGVtZS1uYW1lIGluICRuYi1lbmFibGVkLXRoZW1lcyB7XG4gICAgICAkdGhlbWVzLXRvLWluc3RhbGw6IG1hcC1zZXQoJHRoZW1lcy10by1pbnN0YWxsLCAkdGhlbWUtbmFtZSwgbWFwLWdldCgkbmItdGhlbWVzLCAkdGhlbWUtbmFtZSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgJHRoZW1lcy10by1pbnN0YWxsOiAkbmItdGhlbWVzO1xuICB9XG5cbiAgQHJldHVybiAkdGhlbWVzLXRvLWluc3RhbGw7XG59XG5cbkBtaXhpbiBpbnN0YWxsLWNzcy12YXJpYWJsZXMoJHRoZW1lLW5hbWUsICR2YXJpYWJsZXMpIHtcbiAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICBAZWFjaCAkdmFyLCAkdmFsdWUgaW4gJHZhcmlhYmxlcyB7XG4gICAgICAtLSN7JHZhcn06ICR2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogd2UgaGlkZSA6aG9zdCBpbnNpZGUgb2YgaXQgd2hpY2ggaXMgbm90IG9idmlvdXNcbkBtaXhpbiBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcblxuICAkdGhlbWVzLXRvLWluc3RhbGw6IGdldC1lbmFibGVkLXRoZW1lcygpO1xuXG4gIEBlYWNoICR0aGVtZS1uYW1lLCAkdGhlbWUgaW4gJHRoZW1lcy10by1pbnN0YWxsIHtcbiAgICAvKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0gOmhvc3Qge1xuICAgICAgJHRoZW1lOiBzZXQtZ2xvYmFsLXRoZW1lLXZhcnMoJHRoZW1lLCAkdGhlbWUtbmFtZSk7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWZvci10aGVtZSgkbmFtZSkge1xuICBAaWYgKCR0aGVtZS1uYW1lID09ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWV4Y2VwdC10aGVtZSgkbmFtZSkge1xuICBAaWYgKCR0aGVtZS1uYW1lICE9ICRuYW1lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gVE9ETzogYW5vdGhlciBtaXhpbmcgZm9yIHRoZSBhbG1vc3Qgc2FtZSB0aGluZ1xuQG1peGluIG5iLWluc3RhbGwtcm9vdC1jb21wb25lbnQoKSB7XG4gIEB3YXJuICdgbmItaW5zdGFsbC1yb290LWNvbXBvbmVudGAgaXMgZGVwcmljYXRlZCwgcmVwbGFjZSB3aXRoIGBuYi1pbnN0YWxsLWNvbXBvbmVudGAsIGFzIGBib2R5YCBpcyByb290IGVsZW1lbnQgbm93JztcblxuICBAaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwoKSB7XG4gICR0aGVtZXMtdG8taW5zdGFsbDogZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUsICR0aGVtZSBpbiAkdGhlbWVzLXRvLWluc3RhbGwge1xuICAgIC5uYi10aGVtZS0jeyR0aGVtZS1uYW1lfSB7XG4gICAgICAkdGhlbWU6IHNldC1nbG9iYWwtdGhlbWUtdmFycygkdGhlbWUsICR0aGVtZS1uYW1lKTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2Nyb2xsYmFycygkZmcsICRiZywgJHNpemUsICRib3JkZXItcmFkaXVzOiAkc2l6ZSAvIDIpIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJGJnO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlXG4gIC8vIEZvciBJbnRlcm5ldCBFeHBsb3JlclxuICBzY3JvbGxiYXItZmFjZS1jb2xvcjogJGZnO1xuICBzY3JvbGxiYXItdHJhY2stY29sb3I6ICRiZztcbn1cblxuQG1peGluIG5iLXJhZGlhbC1ncmFkaWVudCgkY29sb3ItMSwgJGNvbG9yLTIsICRjb2xvci0zKSB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci0yOyAvKiBPbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoYm90dG9tLCBlbGxpcHNlIGNvdmVyLCAkY29sb3ItMSAwJSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMiA0NSUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTMgMTAwJSk7IC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGJvdHRvbSwgZWxsaXBzZSBjb3ZlciwgJGNvbG9yLTEgMCUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yLTIgNDUlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0zIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICRjb2xvci0xIDAlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvci0yIDQ1JSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3ItMyAxMDAlKTsgLyogVzNDLCBJRTEwKywgRkYxNissIENocm9tZTI2KywgT3BlcmExMissIFNhZmFyaTcrICovXG4gIGZpbHRlcjogcHJvZ2lkOmR4aW1hZ2V0cmFuc2Zvcm0ubWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyRjb2xvci0xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kQ29sb3JzdHI9JyRjb2xvci0zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR3JhZGllbnRUeXBlPTEpOyAvKiBJRTYtOSBmYWxsYmFjayBvbiBob3Jpem9udGFsIGdyYWRpZW50ICovXG59XG5cbkBtaXhpbiBuYi1yaWdodC1ncmFkaWVudCgkbGVmdC1jb2xvciwgJHJpZ2h0LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxlZnQtY29sb3IsICRyaWdodC1jb2xvcik7XG59XG5cbkBtaXhpbiBuYi1oZWFkaW5ncygkZnJvbTogMSwgJHRvOiA2KSB7XG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XG4gICAgaCN7JGl9IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICY6Zm9jdXMsXG4gICY6YWN0aXZlLFxuICAmOmhvdmVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY2VudGVyLWhvcml6b250YWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICBsZWZ0OiA1MCU7XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRodW1iKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItdGh1bWInXG4gICAgJzo6LW1vei1yYW5nZS10aHVtYidcbiAgICAnOjotbXMtdGh1bWInXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXRyYWNrKCkge1xuICAkdGh1bWItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2snXG4gICAgJzo6LW1vei1yYW5nZS10cmFjaydcbiAgICAnOjotbXMtdHJhY2snXG4gICk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICR0aHVtYi1zZWxlY3RvcnMge1xuICAgICYjeyRzZWxlY3Rvcn0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBpbnN0YWxsLXBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKTtcbiAgfVxuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkcGxhY2Vob2xkZXItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSk7XG4gICAgfVxuXG4gICAgJjpmb2N1cyN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlci1mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXItZm9jdXMoKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRlLi4uKSB7XG4gICRtYXg6IGxlbmd0aCgkYW5pbWF0ZSk7XG4gICRhbmltYXRpb25zOiAnJztcblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgbnRoKCRhbmltYXRlLCAkaSl9O1xuXG4gICAgQGlmICRpIDwgJG1heCB7XG4gICAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArICcsICd9O1xuICAgIH1cbiAgfVxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbnM7XG4gIC1tb3otYW5pbWF0aW9uOiAgICAkYW5pbWF0aW9ucztcbiAgLW8tYW5pbWF0aW9uOiAgICAgICRhbmltYXRpb25zO1xuICBhbmltYXRpb246ICAgICAgICAgJGFuaW1hdGlvbnM7XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbkBtaXhpbiBidG4tcHVsc2UoJG5hbWUsICRjb2xvcikge1xuICAmLmJ0bi1wdWxzZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKGJ0bi0jeyRuYW1lfS1wdWxzZSAxLjVzIGluZmluaXRlKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhidG4tI3skbmFtZX0tcHVsc2UpIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gMCAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gIH1cbn1cblxuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuXG5AbWl4aW4gX3ByZXBlbmQtd2l0aC1zZWxlY3Rvcigkc2VsZWN0b3IsICRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgI3skc2VsZWN0b3J9ICYge1xuICAgIEBpZiAkcHJvcCAhPSBudWxsIHtcbiAgICAgICN7JHByb3B9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWx0cigkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9bHRyXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItcnRsKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1ydGxdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vLy8gU2xpZ2h0bHkgbGlnaHRlbiBhIGNvbG9yXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLyBAcGFyYW0ge0NvbG9yfSAkY29sb3IgLSBjb2xvciB0byB0aW50XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHRpbnQoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peCh3aGl0ZSwgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbi8vLyBTbGlnaHRseSBkYXJrZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gc2hhZGVcbi8vLyBAcGFyYW0ge051bWJlcn0gJHBlcmNlbnRhZ2UgLSBwZXJjZW50YWdlIG9mIGAkY29sb3JgIGluIHJldHVybmVkIGNvbG9yXG4vLy8gQHJldHVybiB7Q29sb3J9XG5AZnVuY3Rpb24gc2hhZGUoJGNvbG9yLCAkcGVyY2VudGFnZSkge1xuICBAcmV0dXJuIG1peChibGFjaywgJGNvbG9yLCAkcGVyY2VudGFnZSk7XG59XG5cbkBmdW5jdGlvbiBtYXAtc2V0KCRtYXAsICRrZXksICR2YWx1ZTogbnVsbCkge1xuICAkbmV3OiAoJGtleTogJHZhbHVlKTtcbiAgQHJldHVybiBtYXAtbWVyZ2UoJG1hcCwgJG5ldyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG4gIGZvbnQtbWFpbjogdW5xdW90ZSgnXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYnKSxcbiAgZm9udC1zZWNvbmRhcnk6IGZvbnQtbWFpbixcblxuICBmb250LXdlaWdodC10aGluOiAyMDAsXG4gIGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDAsXG4gIGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwLFxuICBmb250LXdlaWdodC1ib2xkZXI6IDUwMCxcbiAgZm9udC13ZWlnaHQtYm9sZDogNjAwLFxuICBmb250LXdlaWdodC11bHRyYS1ib2xkOiA4MDAsXG5cbiAgLy8gVE9ETzogdXNlIGl0IGFzIGEgZGVmYXVsdCBmb250LXNpemVcbiAgYmFzZS1mb250LXNpemU6IDE2cHgsXG5cbiAgZm9udC1zaXplLXhsZzogMS4yNXJlbSxcbiAgZm9udC1zaXplLWxnOiAxLjEyNXJlbSxcbiAgZm9udC1zaXplOiAxcmVtLFxuICBmb250LXNpemUtc206IDAuODc1cmVtLFxuICBmb250LXNpemUteHM6IDAuNzVyZW0sXG5cbiAgcmFkaXVzOiAwLjM3NXJlbSxcbiAgcGFkZGluZzogMS4yNXJlbSxcbiAgbWFyZ2luOiAxLjVyZW0sXG4gIGxpbmUtaGVpZ2h0OiAxLjI1LFxuXG4gIGNvbG9yLWJnOiAjZmZmZmZmLFxuICBjb2xvci1iZy1hY3RpdmU6ICNlOWVkZjIsXG4gIGNvbG9yLWZnOiAjYTRhYmIzLFxuICBjb2xvci1mZy1oZWFkaW5nOiAjMmEyYTJhLFxuICBjb2xvci1mZy10ZXh0OiAjNGI0YjRiLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICM0MGRjN2UsXG5cbiAgc2VwYXJhdG9yOiAjZWJlZWYyLFxuXG4gIGNvbG9yLWdyYXk6IHJnYmEoODEsIDExMywgMTY1LCAwLjE1KSxcbiAgY29sb3ItbmV1dHJhbDogdHJhbnNwYXJlbnQsXG4gIGNvbG9yLXdoaXRlOiAjZmZmZmZmLFxuICBjb2xvci1kaXNhYmxlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxuXG4gIGNvbG9yLXByaW1hcnk6ICM4YTdmZmYsXG4gIGNvbG9yLXN1Y2Nlc3M6ICM0MGRjN2UsXG4gIGNvbG9yLWluZm86ICM0Y2E2ZmYsXG4gIGNvbG9yLXdhcm5pbmc6ICNmZmExMDAsXG4gIGNvbG9yLWRhbmdlcjogI2ZmNGM2YSxcblxuICAvLyBUT0RPOiBtb3ZlIHRvIGNvbnN0YW50c1xuICBzb2NpYWwtY29sb3ItZmFjZWJvb2s6ICMzYjU5OTgsXG4gIHNvY2lhbC1jb2xvci10d2l0dGVyOiAjNTVhY2VlLFxuICBzb2NpYWwtY29sb3ItZ29vZ2xlOiAjZGQ0YjM5LFxuICBzb2NpYWwtY29sb3ItbGlua2VkaW46ICMwMTc3YjUsXG4gIHNvY2lhbC1jb2xvci1naXRodWI6ICM2YjZiNmIsXG4gIHNvY2lhbC1jb2xvci1zdGFja292ZXJmbG93OiAjMmY5NmU4LFxuICBzb2NpYWwtY29sb3ItZHJpYmJsZTogI2YyNjc5OCxcbiAgc29jaWFsLWNvbG9yLWJlaGFuY2U6ICMwMDkzZmEsXG5cbiAgYm9yZGVyLWNvbG9yOiBjb2xvci1ncmF5LFxuICBzaGFkb3c6IDAgMnB4IDEycHggMCAjZGZlM2ViLFxuXG4gIGxpbmstY29sb3I6ICMzZGNjNmQsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMyZWU1NmIsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBzY3JvbGxiYXItZmc6ICNkYWRhZGEsXG4gIHNjcm9sbGJhci1iZzogI2YyZjJmMixcbiAgc2Nyb2xsYmFyLXdpZHRoOiA1cHgsXG4gIHNjcm9sbGJhci10aHVtYi1yYWRpdXM6IDIuNXB4LFxuXG4gIHJhZGlhbC1ncmFkaWVudDogbm9uZSxcbiAgbGluZWFyLWdyYWRpZW50OiBub25lLFxuXG4gIGNhcmQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhcmQtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBjYXJkLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhcmQtZmc6IGNvbG9yLWZnLCAvLyBUT0RPOiBub3QgdXNlZFxuICBjYXJkLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGNhcmQtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZywgLy8gVE9ETzogbm90IHVzZWRcbiAgY2FyZC1iZzogY29sb3ItYmcsXG4gIGNhcmQtaGVpZ2h0LXh4c21hbGw6IDk2cHgsXG4gIGNhcmQtaGVpZ2h0LXhzbWFsbDogMjE2cHgsXG4gIGNhcmQtaGVpZ2h0LXNtYWxsOiAzMzZweCxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiA0NTZweCxcbiAgY2FyZC1oZWlnaHQtbGFyZ2U6IDU3NnB4LFxuICBjYXJkLWhlaWdodC14bGFyZ2U6IDY5NnB4LFxuICBjYXJkLWhlaWdodC14eGxhcmdlOiA4MTZweCxcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAsXG4gIGNhcmQtYm9yZGVyLXR5cGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogY29sb3ItYmcsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBjYXJkLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGNhcmQtbWFyZ2luOiBtYXJnaW4sXG4gIGNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgY2FyZC1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIGNhcmQtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBjYXJkLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBjYXJkLWhlYWRlci1mZzogY29sb3ItZmcsIC8vIFRPRE86IG5vdCB1c2VkXG4gIGNhcmQtaGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1iZzogY29sb3ItZmcsXG4gIGNhcmQtaGVhZGVyLWFjdGl2ZS1mZzogY29sb3ItYmcsXG4gIGNhcmQtaGVhZGVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FyZC1oZWFkZXItaW5mby1iZzogY29sb3ItaW5mbyxcbiAgY2FyZC1oZWFkZXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgY2FyZC1oZWFkZXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWhlYWRlci1ib3JkZXItdHlwZTogc29saWQsXG4gIGNhcmQtaGVhZGVyLWJvcmRlci1jb2xvcjogY2FyZC1zZXBhcmF0b3IsXG5cbiAgaGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgaGVhZGVyLWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBoZWFkZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBoZWFkZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGhlYWRlci1iZzogY29sb3ItYmcsXG4gIGhlYWRlci1oZWlnaHQ6IDQuNzVyZW0sXG4gIGhlYWRlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBoZWFkZXItc2hhZG93OiBzaGFkb3csXG5cbiAgZm9vdGVyLWhlaWdodDogNC43MjVyZW0sXG4gIGZvb3Rlci1wYWRkaW5nOiAxLjI1cmVtLFxuICBmb290ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgZm9vdGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGxheW91dC1mb250LWZhbWlseTogZm9udC1tYWluLFxuICBsYXlvdXQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGxheW91dC1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGxheW91dC1mZzogY29sb3ItZmcsXG4gIGxheW91dC1iZzogI2ViZWZmNSxcbiAgbGF5b3V0LW1pbi1oZWlnaHQ6IDEwMHZoLFxuICBsYXlvdXQtY29udGVudC13aWR0aDogOTAwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGg6IDMwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoOiAxOTIwcHgsXG4gIGxheW91dC13aW5kb3ctbW9kZS1iZzogbGF5b3V0LWJnLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuXG4gIHNpZGViYXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNpZGViYXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzaWRlYmFyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcbiAgc2lkZWJhci1oZWlnaHQ6IDEwMHZoLFxuICBzaWRlYmFyLXdpZHRoOiAxNnJlbSxcbiAgc2lkZWJhci13aWR0aC1jb21wYWN0OiAzLjVyZW0sXG4gIHNpZGViYXItcGFkZGluZzogcGFkZGluZyxcbiAgc2lkZWJhci1oZWFkZXItaGVpZ2h0OiAzLjVyZW0sXG4gIHNpZGViYXItZm9vdGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLXNoYWRvdzogc2hhZG93LFxuXG4gIG1lbnUtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBtZW51LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtZW51LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgbWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LWFjdGl2ZS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcblxuICBtZW51LXN1Ym1lbnUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtZmc6IGNvbG9yLWZnLXRleHQsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IGNvbG9yLWJnLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogbm9uZSxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWZnOiBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnLFxuICBtZW51LXN1Ym1lbnUtaG92ZXItYmc6IG1lbnUtc3VibWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgbWVudS1zdWJtZW51LWl0ZW0tY29udGFpbmVyLXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAuNXJlbSxcblxuICBtZW51LWdyb3VwLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkZXIsXG4gIG1lbnUtZ3JvdXAtZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgbWVudS1ncm91cC1mZzogY29sb3ItZmcsXG4gIG1lbnUtZ3JvdXAtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC42NzVyZW0gMC43NXJlbSxcbiAgbWVudS1pdGVtLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBtZW51LWljb24tZm9udC1zaXplOiAyLjVyZW0sXG4gIG1lbnUtaWNvbi1tYXJnaW46IDAgMC4yNXJlbSAwLFxuICBtZW51LWljb24tY29sb3I6IGNvbG9yLWZnLFxuICBtZW51LWljb24tYWN0aXZlLWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHRhYnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICB0YWJzLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICB0YWJzLWNvbnRlbnQtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgdGFicy1jb250ZW50LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICB0YWJzLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQsXG4gIHRhYnMtYWN0aXZlLWZvbnQtd2VpZ2h0OiBjYXJkLWhlYWRlci1mb250LXdlaWdodCxcbiAgdGFicy1wYWRkaW5nOiBwYWRkaW5nLFxuICB0YWJzLWNvbnRlbnQtcGFkZGluZzogMCxcbiAgdGFicy1oZWFkZXItYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICB0YWJzLWZnOiBjb2xvci1mZyxcbiAgdGFicy1mZy10ZXh0OiBjb2xvci1mZy10ZXh0LFxuICB0YWJzLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHRhYnMtYmc6IHRyYW5zcGFyZW50LFxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgdGFicy1zZWxlY3RlZC1kZWdyZWVzOiAwLFxuICB0YWJzLWljb24tb25seS1tYXgtd2lkdGg6IDU3NnB4LFxuXG4gIHJvdXRlLXRhYnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICByb3V0ZS10YWJzLWZvbnQtc2l6ZTogZm9udC1zaXplLWxnLFxuICByb3V0ZS10YWJzLWFjdGl2ZS1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtYWN0aXZlLWZvbnQtd2VpZ2h0OiBjYXJkLWhlYWRlci1mb250LXdlaWdodCxcbiAgcm91dGUtdGFicy1wYWRkaW5nOiBwYWRkaW5nLFxuICByb3V0ZS10YWJzLWhlYWRlci1iZzogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnMtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIHJvdXRlLXRhYnMtZmc6IGNvbG9yLWZnLFxuICByb3V0ZS10YWJzLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHJvdXRlLXRhYnMtYmc6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzLXNlbGVjdGVkOiBjb2xvci1zdWNjZXNzLFxuICByb3V0ZS10YWJzLWljb24tb25seS1tYXgtd2lkdGg6IDU3NnB4LFxuXG4gIHVzZXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHVzZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICB1c2VyLWJnOiBjb2xvci1iZyxcbiAgdXNlci1mZzogY29sb3ItZmcsXG4gIHVzZXItZmctaGlnaGxpZ2h0OiAjYmNjM2NjLFxuICB1c2VyLWZvbnQtZmFtaWx5LXNlY29uZGFyeTogZm9udC1zZWNvbmRhcnksXG4gIHVzZXItc2l6ZS1zbWFsbDogMS41cmVtLFxuICB1c2VyLXNpemUtbWVkaXVtOiAyLjVyZW0sXG4gIHVzZXItc2l6ZS1sYXJnZTogMy4yNXJlbSxcbiAgdXNlci1zaXplLXhsYXJnZTogNHJlbSxcblxuICBwb3BvdmVyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBwb3BvdmVyLWJnOiBjb2xvci1iZyxcbiAgcG9wb3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIHBvcG92ZXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogbm9uZSxcbiAgcG9wb3Zlci1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIGNvbnRleHQtbWVudS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgY29udGV4dC1tZW51LWJnOiBjb2xvci1iZyxcbiAgY29udGV4dC1tZW51LWFjdGl2ZS1mZzogY29sb3Itd2hpdGUsXG4gIGNvbnRleHQtbWVudS1hY3RpdmUtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNvbnRleHQtbWVudS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNvbnRleHQtbWVudS1zaGFkb3c6IG5vbmUsXG4gIGNvbnRleHQtbWVudS1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIGFjdGlvbnMtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFjdGlvbnMtZm9udC1mYW1pbHk6IGZvbnQtc2Vjb25kYXJ5LFxuICBhY3Rpb25zLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuICBhY3Rpb25zLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBhY3Rpb25zLXBhZGRpbmc6IHBhZGRpbmcsXG4gIGFjdGlvbnMtc2l6ZS1zbWFsbDogMS41cmVtLFxuICBhY3Rpb25zLXNpemUtbWVkaXVtOiAyLjI1cmVtLFxuICBhY3Rpb25zLXNpemUtbGFyZ2U6IDMuNXJlbSxcblxuICBzZWFyY2gtYnRuLW9wZW4tZmc6IGNvbG9yLWZnLFxuICBzZWFyY2gtYnRuLWNsb3NlLWZnOlx0Y29sb3ItZmcsXG4gIHNlYXJjaC1iZzogbGF5b3V0LWJnLFxuICBzZWFyY2gtYmctc2Vjb25kYXJ5OiBjb2xvci1mZyxcbiAgc2VhcmNoLXRleHQ6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNlYXJjaC1pbmZvOiBjb2xvci1mZyxcbiAgc2VhcmNoLWRhc2g6IGNvbG9yLWZnLFxuICBzZWFyY2gtcGxhY2Vob2xkZXI6IGNvbG9yLWZnLFxuXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ib2xkLFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogY29sb3ItYmcsXG5cbiAgc21hcnQtdGFibGUtZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIHNtYXJ0LXRhYmxlLWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgc21hcnQtdGFibGUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIHNtYXJ0LXRhYmxlLWJnOiBjb2xvci1iZyxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiAjZjVmN2ZjLFxuICBzbWFydC10YWJsZS1mZy1zZWNvbmRhcnk6IGNvbG9yLWZnLFxuICBzbWFydC10YWJsZS1iZy1hY3RpdmU6ICNlNmYzZmYsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6ICNmZmZmZmYsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjA1KSxcblxuICB0b2FzdHItYmc6IGNvbG9yLWJnLFxuICB0b2FzdHItcGFkZGluZzogMS4xMjVyZW0sXG4gIHRvYXN0ci1mZzogY29sb3ItZmctdGV4dCxcbiAgdG9hc3RyLWJvcmRlcjogMC4xMjVyZW0gc29saWQsXG4gIHRvYXN0ci1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIHRvYXN0ci1ib3JkZXItY29sb3I6ICNiY2MzY2MsXG4gIHRvYXN0ci1pY29uLXJhZGl1czogMC4yNXJlbSxcbiAgdG9hc3RyLXNoYWRvdzogc2hhZG93LFxuXG4gIGJ0bi1mZzogY29sb3Itd2hpdGUsXG4gIGJ0bi1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIGJ0bi1saW5lLWhlaWdodDogbGluZS1oZWlnaHQsXG4gIGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIGJ0bi1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnRuLXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGJ0bi1zZWNvbmRhcnktYmc6IHRyYW5zcGFyZW50LFxuICBidG4taW5mby1iZzogY29sb3ItaW5mbyxcbiAgYnRuLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJ0bi13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBidG4tZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgYnRuLXNlY29uZGFyeS1ib3JkZXI6ICNkYWRmZTYsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyLXdpZHRoOiAycHgsXG5cbiAgYnRuLXBhZGRpbmcteS1sZzogMC44NzVyZW0sXG4gIGJ0bi1wYWRkaW5nLXgtbGc6IDEuNzVyZW0sXG4gIGJ0bi1mb250LXNpemUtbGc6IGZvbnQtc2l6ZS1sZyxcblxuICAvLyBkZWZhdWx0IHNpemVcbiAgYnRuLXBhZGRpbmcteS1tZDogMC43NXJlbSxcbiAgYnRuLXBhZGRpbmcteC1tZDogMS41cmVtLFxuICBidG4tZm9udC1zaXplLW1kOiAxcmVtLFxuXG4gIGJ0bi1wYWRkaW5nLXktc206IDAuNjI1cmVtLFxuICBidG4tcGFkZGluZy14LXNtOiAxLjVyZW0sXG4gIGJ0bi1mb250LXNpemUtc206IDAuODc1cmVtLFxuXG4gIGJ0bi1wYWRkaW5nLXkteHM6IDAuNXJlbSxcbiAgYnRuLXBhZGRpbmcteC14czogMS4yNXJlbSxcbiAgYnRuLWZvbnQtc2l6ZS14czogMC43NXJlbSxcblxuICBidG4tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBidG4tcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXG4gIGJ0bi1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIGJ0bi1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgYnRuLWhlcm8tc2hhZG93OiBub25lLFxuICBidG4taGVyby10ZXh0LXNoYWRvdzogbm9uZSxcbiAgYnRuLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1wcmltYXJ5LWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zdWNjZXNzLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby13YXJuaW5nLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1pbmZvLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1kYW5nZXItZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGVncmVlOiAyMGRlZyxcbiAgYnRuLWhlcm8tcHJpbWFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8td2FybmluZy1kZWdyZWU6IDEwZGVnLFxuICBidG4taGVyby1pbmZvLWRlZ3JlZTogLTEwZGVnLFxuICBidG4taGVyby1kYW5nZXItZGVncmVlOiAtMjBkZWcsXG4gIGJ0bi1oZXJvLXNlY29uZGFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuXG4gIGJ0bi1vdXRsaW5lLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tb3V0bGluZS1ob3Zlci1mZzogI2ZmZmZmZixcbiAgYnRuLW91dGxpbmUtZm9jdXMtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgYnRuLWdyb3VwLWJnOiBsYXlvdXQtYmcsXG4gIGJ0bi1ncm91cC1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLWdyb3VwLXNlcGFyYXRvcjogI2RhZGZlNixcblxuICBmb3JtLWNvbnRyb2wtdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1mZy1oZWFkaW5nLFxuICBmb3JtLWNvbnRyb2wtYmc6IGNvbG9yLWJnLFxuICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IGNvbG9yLWJnLFxuXG4gIGZvcm0tY29udHJvbC1ib3JkZXItd2lkdGg6IDJweCxcbiAgZm9ybS1jb250cm9sLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgZm9ybS1jb250cm9sLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgZm9ybS1jb250cm9sLXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgZm9ybS1jb250cm9sLXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcbiAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogI2RhZGZlNixcbiAgZm9ybS1jb250cm9sLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcblxuICBmb3JtLWNvbnRyb2wtaW5mby1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8sXG4gIGZvcm0tY29udHJvbC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgZm9ybS1jb250cm9sLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlcixcbiAgZm9ybS1jb250cm9sLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLFxuXG4gIGZvcm0tY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcjogY29sb3ItZmcsXG4gIGZvcm0tY29udHJvbC1wbGFjZWhvbGRlci1mb250LXNpemU6IDFyZW0sXG5cbiAgZm9ybS1jb250cm9sLWZvbnQtc2l6ZTogMXJlbSxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmc6IDAuNzVyZW0gMS4xMjVyZW0sXG4gIGZvcm0tY29udHJvbC1mb250LXNpemUtc206IGZvbnQtc2l6ZS1zbSxcbiAgZm9ybS1jb250cm9sLXBhZGRpbmctc206IDAuMzc1cmVtIDEuMTI1cmVtLFxuICBmb3JtLWNvbnRyb2wtZm9udC1zaXplLWxnOiBmb250LXNpemUtbGcsXG4gIGZvcm0tY29udHJvbC1wYWRkaW5nLWxnOiAxLjEyNXJlbSxcblxuICBmb3JtLWNvbnRyb2wtbGFiZWwtZm9udC13ZWlnaHQ6IDQwMCxcblxuICBmb3JtLWNvbnRyb2wtZmVlZGJhY2stZm9udC1zaXplOiAwLjg3NXJlbSxcbiAgZm9ybS1jb250cm9sLWZlZWRiYWNrLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG5cbiAgY2hlY2tib3gtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1ib3JkZXItY29sb3I6IGZvcm0tY29udHJvbC1ib3JkZXItY29sb3IsXG4gIGNoZWNrYm94LWNoZWNrbWFyazogdHJhbnNwYXJlbnQsXG5cbiAgY2hlY2tib3gtY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgY2hlY2tib3gtY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLWZnLWhlYWRpbmcsXG5cbiAgY2hlY2tib3gtZGlzYWJsZWQtYmc6IHRyYW5zcGFyZW50LFxuICBjaGVja2JveC1kaXNhYmxlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItc2l6ZTogMnB4LFxuICBjaGVja2JveC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGNoZWNrYm94LWRpc2FibGVkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBtb2RhbC1mb250LXNpemU6IGZvbnQtc2l6ZSxcbiAgbW9kYWwtbGluZS1oZWlnaHQ6IGxpbmUtaGVpZ2h0LFxuICBtb2RhbC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtb2RhbC1mZzogY29sb3ItZmctdGV4dCxcbiAgbW9kYWwtZmctaGVhZGluZzogY29sb3ItZmctaGVhZGluZyxcbiAgbW9kYWwtYmc6IGNvbG9yLWJnLFxuICBtb2RhbC1ib3JkZXI6IHRyYW5zcGFyZW50LFxuICBtb2RhbC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1vZGFsLXBhZGRpbmc6IHBhZGRpbmcsXG4gIG1vZGFsLWhlYWRlci1mb250LWZhbWlseTogZm9udC1zZWNvbmRhcnksXG4gIG1vZGFsLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBtb2RhbC1oZWFkZXItZm9udC1zaXplOiBmb250LXNpemUtbGcsXG4gIG1vZGFsLWJvZHktZm9udC1mYW1pbHk6IGZvbnQtbWFpbixcbiAgbW9kYWwtYm9keS1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBtb2RhbC1ib2R5LWZvbnQtc2l6ZTogZm9udC1zaXplLFxuICBtb2RhbC1zZXBhcmF0b3I6IHNlcGFyYXRvcixcblxuICBiYWRnZS1mZy10ZXh0OiBjb2xvci13aGl0ZSxcbiAgYmFkZ2UtcHJpbWFyeS1iZy1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgYmFkZ2Utc3VjY2Vzcy1iZy1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgYmFkZ2UtaW5mby1iZy1jb2xvcjogY29sb3ItaW5mbyxcbiAgYmFkZ2Utd2FybmluZy1iZy1jb2xvcjogY29sb3Itd2FybmluZyxcbiAgYmFkZ2UtZGFuZ2VyLWJnLWNvbG9yOiBjb2xvci1kYW5nZXIsXG5cbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodC14bGc6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQtbGc6IDEuNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQtc206IDEuMjVyZW0sXG4gIHByb2dyZXNzLWJhci1oZWlnaHQteHM6IDFyZW0sXG4gIHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplLXhsZzogZm9udC1zaXplLXhsZyxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS1sZzogZm9udC1zaXplLWxnLFxuICBwcm9ncmVzcy1iYXItZm9udC1zaXplOiBmb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1mb250LXNpemUtc206IGZvbnQtc2l6ZS1zbSxcbiAgcHJvZ3Jlc3MtYmFyLWZvbnQtc2l6ZS14czogZm9udC1zaXplLXhzLFxuICBwcm9ncmVzcy1iYXItcmFkaXVzOiByYWRpdXMsXG4gIHByb2dyZXNzLWJhci1iZzogbGF5b3V0LWJnLFxuICBwcm9ncmVzcy1iYXItZm9udC1jb2xvcjogY29sb3Itd2hpdGUsXG4gIHByb2dyZXNzLWJhci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZCxcbiAgcHJvZ3Jlc3MtYmFyLWRlZmF1bHQtYmc6IGNvbG9yLWluZm8sXG4gIHByb2dyZXNzLWJhci1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHByb2dyZXNzLWJhci13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgYWxlcnQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFsZXJ0LWxpbmUtaGVpZ2h0OiBsaW5lLWhlaWdodCxcbiAgYWxlcnQtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgYWxlcnQtZmc6IGNvbG9yLXdoaXRlLFxuICBhbGVydC1vdXRsaW5lLWZnOiBjb2xvci1mZyxcbiAgYWxlcnQtYmc6IGNvbG9yLWJnLFxuICBhbGVydC1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBhbGVydC1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGFsZXJ0LWRpc2FibGVkLWZnOiBjb2xvci1mZyxcbiAgYWxlcnQtcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgYWxlcnQtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgYWxlcnQtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgYWxlcnQtd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgYWxlcnQtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG4gIGFsZXJ0LWhlaWdodC14eHNtYWxsOiA1MnB4LFxuICBhbGVydC1oZWlnaHQteHNtYWxsOiA3MnB4LFxuICBhbGVydC1oZWlnaHQtc21hbGw6IDkycHgsXG4gIGFsZXJ0LWhlaWdodC1tZWRpdW06IDExMnB4LFxuICBhbGVydC1oZWlnaHQtbGFyZ2U6IDEzMnB4LFxuICBhbGVydC1oZWlnaHQteGxhcmdlOiAxNTJweCxcbiAgYWxlcnQtaGVpZ2h0LXh4bGFyZ2U6IDE3MnB4LFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgYWxlcnQtcGFkZGluZzogMXJlbSAxLjEyNXJlbSxcbiAgYWxlcnQtY2xvc2FibGUtcGFkZGluZzogM3JlbSxcbiAgYWxlcnQtYnV0dG9uLXBhZGRpbmc6IDNyZW0sXG4gIGFsZXJ0LW1hcmdpbjogbWFyZ2luLFxuXG4gIGNoYXQtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNoYXQtZmc6IGNvbG9yLXdoaXRlLFxuICBjaGF0LWJnOiBjb2xvci1iZyxcbiAgY2hhdC1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGNoYXQtZmctdGV4dDogY29sb3ItZmctdGV4dCxcbiAgY2hhdC1oZWlnaHQteHhzbWFsbDogOTZweCxcbiAgY2hhdC1oZWlnaHQteHNtYWxsOiAyMTZweCxcbiAgY2hhdC1oZWlnaHQtc21hbGw6IDMzNnB4LFxuICBjaGF0LWhlaWdodC1tZWRpdW06IDQ1NnB4LFxuICBjaGF0LWhlaWdodC1sYXJnZTogNTc2cHgsXG4gIGNoYXQtaGVpZ2h0LXhsYXJnZTogNjk2cHgsXG4gIGNoYXQtaGVpZ2h0LXh4bGFyZ2U6IDgxNnB4LFxuICBjaGF0LWJvcmRlcjogYm9yZGVyLFxuICBjaGF0LXBhZGRpbmc6IHBhZGRpbmcsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtc2VwYXJhdG9yOiBzZXBhcmF0b3IsXG4gIGNoYXQtbWVzc2FnZS1mZzogY29sb3Itd2hpdGUsXG4gIGNoYXQtbWVzc2FnZS1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGNhNmZmLCAjNTliZmZmKSxcbiAgY2hhdC1tZXNzYWdlLXJlcGx5LWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1mZzogY29sb3ItZmctdGV4dCxcbiAgY2hhdC1tZXNzYWdlLWF2YXRhci1iZzogY29sb3ItZmcsXG4gIGNoYXQtbWVzc2FnZS1zZW5kZXItZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtcXVvdGUtYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgY2hhdC1tZXNzYWdlLWZpbGUtZmc6IGNvbG9yLWZnLFxuICBjaGF0LW1lc3NhZ2UtZmlsZS1iZzogdHJhbnNwYXJlbnQsXG4gIGNoYXQtZm9ybS1iZzogdHJhbnNwYXJlbnQsXG4gIGNoYXQtZm9ybS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgY2hhdC1mb3JtLWJvcmRlcjogc2VwYXJhdG9yLFxuICBjaGF0LWZvcm0tcGxhY2Vob2xkZXItZmc6IGNvbG9yLWZnLFxuICBjaGF0LWZvcm0tYWN0aXZlLWJvcmRlcjogY29sb3ItZmcsXG4gIGNoYXQtYWN0aXZlLWJnOiBjb2xvci1mZyxcbiAgY2hhdC1kaXNhYmxlZC1iZzogY29sb3ItZGlzYWJsZWQsXG4gIGNoYXQtZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBjaGF0LXByaW1hcnktYmc6IGNvbG9yLXByaW1hcnksXG4gIGNoYXQtaW5mby1iZzogY29sb3ItaW5mbyxcbiAgY2hhdC1zdWNjZXNzLWJnOiBjb2xvci1zdWNjZXNzLFxuICBjaGF0LXdhcm5pbmctYmc6IGNvbG9yLXdhcm5pbmcsXG4gIGNoYXQtZGFuZ2VyLWJnOiBjb2xvci1kYW5nZXIsXG5cbiAgc3Bpbm5lci1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzKSxcbiAgc3Bpbm5lci1jaXJjbGUtYmc6IGNvbG9yLWJnLWFjdGl2ZSxcbiAgc3Bpbm5lci1mZzogY29sb3ItZmctdGV4dCxcbiAgc3Bpbm5lci1hY3RpdmUtYmc6IGNvbG9yLWZnLFxuICBzcGlubmVyLWRpc2FibGVkLWJnOiBjb2xvci1kaXNhYmxlZCxcbiAgc3Bpbm5lci1kaXNhYmxlZC1mZzogY29sb3ItZmcsXG4gIHNwaW5uZXItcHJpbWFyeS1iZzogY29sb3ItcHJpbWFyeSxcbiAgc3Bpbm5lci1pbmZvLWJnOiBjb2xvci1pbmZvLFxuICBzcGlubmVyLXN1Y2Nlc3MtYmc6IGNvbG9yLXN1Y2Nlc3MsXG4gIHNwaW5uZXItd2FybmluZy1iZzogY29sb3Itd2FybmluZyxcbiAgc3Bpbm5lci1kYW5nZXItYmc6IGNvbG9yLWRhbmdlcixcbiAgc3Bpbm5lci14eHNtYWxsOiAxLjI1cmVtLFxuICBzcGlubmVyLXhzbWFsbDogMS41cmVtLFxuICBzcGlubmVyLXNtYWxsOiAxLjc1cmVtLFxuICBzcGlubmVyLW1lZGl1bTogMnJlbSxcbiAgc3Bpbm5lci1sYXJnZTogMi4yNXJlbSxcbiAgc3Bpbm5lci14bGFyZ2U6IDIuNXJlbSxcbiAgc3Bpbm5lci14eGxhcmdlOiAzcmVtLFxuXG4gIHN0ZXBwZXItaW5kZXgtc2l6ZTogMnJlbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXNpemU6IGZvbnQtc2l6ZS1zbSxcbiAgc3RlcHBlci1sYWJlbC1mb250LXdlaWdodDogZm9udC13ZWlnaHQtYm9sZGVyLFxuICBzdGVwcGVyLWFjY2VudC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgc3RlcHBlci1jb21wbGV0ZWQtZmc6IGNvbG9yLXdoaXRlLFxuICBzdGVwcGVyLWZnOiBjb2xvci1mZyxcbiAgc3RlcHBlci1jb21wbGV0ZWQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIHN0ZXBwZXItY29tcGxldGVkLWljb24td2VpZ2h0OiBmb250LXdlaWdodC11bHRyYS1ib2xkLFxuICBzdGVwcGVyLXN0ZXAtcGFkZGluZzogcGFkZGluZyxcblxuICBhY2NvcmRpb24tcGFkZGluZzogcGFkZGluZyxcbiAgYWNjb3JkaW9uLXNlcGFyYXRvcjogc2VwYXJhdG9yLFxuICBhY2NvcmRpb24taGVhZGVyLWZvbnQtZmFtaWx5OiBmb250LXNlY29uZGFyeSxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXNpemU6IGZvbnQtc2l6ZS1sZyxcbiAgYWNjb3JkaW9uLWhlYWRlci1mb250LXdlaWdodDogZm9udC13ZWlnaHQtbm9ybWFsLFxuICBhY2NvcmRpb24taGVhZGVyLWZnLWhlYWRpbmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtZmc6IGNvbG9yLWZnLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci13aWR0aDogMXB4LFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci10eXBlOiBzb2xpZCxcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGFjY29yZGlvbi1zZXBhcmF0b3IsXG4gIGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIGFjY29yZGlvbi1pdGVtLWJnOiBjb2xvci1iZyxcbiAgYWNjb3JkaW9uLWl0ZW0tZm9udC1zaXplOiBmb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGFjY29yZGlvbi1pdGVtLWZvbnQtZmFtaWx5OiBmb250LW1haW4sXG4gIGFjY29yZGlvbi1pdGVtLWZnLXRleHQ6IGNvbG9yLWZnLXRleHQsXG4gIGFjY29yZGlvbi1pdGVtLXNoYWRvdzogc2hhZG93LFxuXG4gIGxpc3QtaXRlbS1ib3JkZXItY29sb3I6IHRhYnMtc2VwYXJhdG9yLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcblxuICBjYWxlbmRhci13aWR0aDogMjEuODc1cmVtLFxuICBjYWxlbmRhci1ib2R5LWhlaWdodDogMjUuNjI1cmVtLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUteGxnLFxuICBjYWxlbmRhci1oZWFkZXItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGQsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC1zaXplOiBmb250LXNpemUsXG4gIGNhbGVuZGFyLWhlYWRlci1zdWItdGl0bGUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LXRoaW4sXG4gIGNhbGVuZGFyLW5hdmlnYXRpb24tYnV0dG9uLXdpZHRoOiAxMHJlbSxcbiAgY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItaG92ZXItaXRlbS1iZzogY2FsZW5kYXItc2VsZWN0ZWQtaXRlbS1iZyxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogY29sb3ItYmctYWN0aXZlLFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3Itc3VjY2VzcyxcbiAgY2FsZW5kYXItZmc6IGNvbG9yLWZnLXRleHQsXG4gIGNhbGVuZGFyLXNlbGVjdGVkLWZnOiBjb2xvci13aGl0ZSxcbiAgY2FsZW5kYXItdG9kYXktZmc6IGNhbGVuZGFyLWZnLFxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodDogMi42MjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtd2lkdGg6IDQuMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiAyLjM3NXJlbSxcbiAgY2FsZW5kYXIteWVhci1jZWxsLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWhlaWdodCxcbiAgY2FsZW5kYXItaW5hY3RpdmUtb3BhY2l0eTogMC41LFxuICBjYWxlbmRhci1kaXNhYmxlZC1vcGFjaXR5OiAwLjMsXG4gIGNhbGVuZGFyLWJvcmRlci1yYWRpdXM6IHJhZGl1cyxcbiAgY2FsZW5kYXItd2Vla2RheS13aWR0aDogY2FsZW5kYXItZGF5LWNlbGwtd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiAxLjc1cmVtLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtc2l6ZTogZm9udC1zaXplLXhzLFxuICBjYWxlbmRhci13ZWVrZGF5LWZvbnQtd2VpZ2h0OiBmb250LXdlaWdodC1ub3JtYWwsXG4gIGNhbGVuZGFyLXdlZWtkYXktZmc6IGNvbG9yLWZnLFxuICBjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktZmc6IGNvbG9yLWRhbmdlcixcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlYmZiZjIsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDI0LjM3NXJlbSxcbiAgY2FsZW5kYXItbGFyZ2UtYm9keS1oZWlnaHQ6IDI3Ljc1cmVtLFxuICBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aDogM3JlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0OiAzcmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoOiA0LjI1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodDogMi4zNzVyZW0sXG4gIGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgb3ZlcmxheS1iYWNrZHJvcC1iZzogcmdiYSgwLCAwLCAwLCAwLjI4OCksXG5cbiAgdG9vbHRpcC1iZzogY29sb3ItZmctdGV4dCxcbiAgdG9vbHRpcC1wcmltYXJ5LWJnOiBjb2xvci1wcmltYXJ5LFxuICB0b29sdGlwLWluZm8tYmc6IGNvbG9yLWluZm8sXG4gIHRvb2x0aXAtc3VjY2Vzcy1iZzogY29sb3Itc3VjY2VzcyxcbiAgdG9vbHRpcC13YXJuaW5nLWJnOiBjb2xvci13YXJuaW5nLFxuICB0b29sdGlwLWRhbmdlci1iZzogY29sb3ItZGFuZ2VyLFxuICB0b29sdGlwLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc3RhdHVzLWZnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG4gIHRvb2x0aXAtZm9udC1zaXplOiBmb250LXNpemUsXG5cbiAgc2VsZWN0LWJvcmRlci13aWR0aDogMnB4LFxuICBzZWxlY3QtbWF4LWhlaWdodDogMjByZW0sXG4gIHNlbGVjdC1iZzogY29sb3ItYmcsXG5cbiAgc2VsZWN0LWNoZWNrYm94LWNvbG9yOiBjaGVja2JveC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1jaGVja21hcmstY29sb3I6IGNoZWNrYm94LWJvcmRlci1jb2xvcixcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjZjJmNGY3LFxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLW9wYWNpdHk6IDAuMyxcbiAgc2VsZWN0LW9wdGlvbi1wYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSxcblxuICBkYXRlcGlja2VyLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBkYXRlcGlja2VyLWJnOiBjb2xvci1iZyxcbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MsXG4gIGRhdGVwaWNrZXItYm9yZGVyLXJhZGl1czogcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcbiAgZGF0ZXBpY2tlci1hcnJvdy1zaXplOiAxMXB4LFxuXG4gIHJhZGlvLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZmc6IGNvbG9yLWZnLXRleHQsXG4gIHJhZGlvLXNpemU6IDEuMjVyZW0sXG4gIHJhZGlvLWJvcmRlci1zaXplOiAycHgsXG4gIHJhZGlvLWJvcmRlci1jb2xvcjogZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcixcbiAgcmFkaW8tY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY2hlY2tlZC1iZzogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNoZWNrZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItc2l6ZTogMnB4LFxuICByYWRpby1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2VzcyxcbiAgcmFkaW8tY2hlY2tlZC1jaGVja21hcms6IGNvbG9yLXN1Y2Nlc3MsXG4gIHJhZGlvLWRpc2FibGVkLWJnOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGlzYWJsZWQtc2l6ZTogMS4yNXJlbSxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLXNpemU6IDJweCxcbiAgcmFkaW8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiByYWRpby1ib3JkZXItY29sb3IsXG4gIHJhZGlvLWRpc2FibGVkLWNoZWNrbWFyazogcmFkaW8tY2hlY2ttYXJrLFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkZWZhdWx0JztcblxuLy8gZGVmYXVsdCB0aGUgYmFzZSB0aGVtZVxuJHRoZW1lOiAoXG4gIHJhZGl1czogMC41cmVtLFxuXG4gIGNvbG9yLWJnOiAjM2QzNzgwLFxuICBjb2xvci1iZy1hY3RpdmU6ICM0OTQyOTksXG4gIGNvbG9yLWZnOiAjYTFhMWU1LFxuICBjb2xvci1mZy1oZWFkaW5nOiAjZmZmZmZmLFxuICBjb2xvci1mZy10ZXh0OiAjZDFkMWZmLFxuICBjb2xvci1mZy1oaWdobGlnaHQ6ICMwMGY5YTYsXG5cbiAgY29sb3ItZ3JheTogcmdiYSg4MSwgMTEzLCAxNjUsIDAuMTUpLFxuICBjb2xvci1uZXV0cmFsOiB0cmFuc3BhcmVudCxcbiAgY29sb3Itd2hpdGU6ICNmZmZmZmYsXG4gIGNvbG9yLWRpc2FibGVkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG5cbiAgY29sb3ItcHJpbWFyeTogIzc2NTlmZixcbiAgY29sb3Itc3VjY2VzczogIzAwZDk3NyxcbiAgY29sb3ItaW5mbzogIzAwODhmZixcbiAgY29sb3Itd2FybmluZzogI2ZmYTEwMCxcbiAgY29sb3ItZGFuZ2VyOiAjZmYzODZhLFxuXG4gIGxpbmstY29sb3I6ICMwMGY5YTYsXG4gIGxpbmstY29sb3ItaG92ZXI6ICMxNGZmYmUsXG5cbiAgc2VwYXJhdG9yOiAjMzQyZTczLFxuICBzaGFkb3c6IDAgOHB4IDIwcHggMCByZ2JhKDQwLCAzNywgODksIDAuNiksXG5cbiAgY2FyZC1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcblxuICBsYXlvdXQtYmc6ICMyZjI5NmIsXG5cbiAgc2Nyb2xsYmFyLWZnOiAjNTU0ZGIzLFxuICBzY3JvbGxiYXItYmc6ICMzMzJlNzMsXG5cbiAgcmFkaWFsLWdyYWRpZW50OiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICM0MjNmOGMsICMzMDJjNmUpLFxuICBsaW5lYXItZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE3MTc0OSwgIzQxMzc4OSksXG5cbiAgc2lkZWJhci1mZzogY29sb3Itc2Vjb25kYXJ5LFxuICBzaWRlYmFyLWJnOiBjb2xvci1iZyxcblxuICBoZWFkZXItZmc6IGNvbG9yLXdoaXRlLFxuICBoZWFkZXItYmc6IGNvbG9yLWJnLFxuXG4gIGZvb3Rlci1mZzogY29sb3ItZmcsXG4gIGZvb3Rlci1iZzogY29sb3ItYmcsXG5cbiAgYWN0aW9ucy1mZzogY29sb3ItZmcsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHVzZXItZmc6IGNvbG9yLWJnLFxuICB1c2VyLWJnOiBjb2xvci1mZyxcbiAgdXNlci1mZy1oaWdobGlnaHQ6IGNvbG9yLWZnLWhpZ2hsaWdodCxcblxuICBwb3BvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbiAgcG9wb3Zlci1zaGFkb3c6IHNoYWRvdyxcblxuICBjb250ZXh0LW1lbnUtYWN0aXZlLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1oZWlnaHQ6IGhlYWRlci1oZWlnaHQsXG5cbiAgc2lkZWJhci13aWR0aDogMTYuMjVyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy40NXJlbSxcblxuICBtZW51LWZnOiBjb2xvci1mZyxcbiAgbWVudS1iZzogY29sb3ItYmcsXG4gIG1lbnUtYWN0aXZlLWZnOiBjb2xvci13aGl0ZSxcbiAgbWVudS1ncm91cC1mZzogY29sb3Itd2hpdGUsXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgbWVudS1hY3RpdmUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1zdWJtZW51LWJnOiBsYXlvdXQtYmcsXG4gIG1lbnUtc3VibWVudS1mZzogY29sb3ItZmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtc3VibWVudS1hY3RpdmUtYmc6IHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGlnaGxpZ2h0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLXNoYWRvdzogMCAycHggMTJweCAwIHJnYmEoMCwgMjU1LCAxNzAsIDAuMjUpLFxuICBtZW51LWl0ZW0tcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtLFxuICBtZW51LWl0ZW0tc2VwYXJhdG9yOiB0cmFuc3BhcmVudCxcblxuICBidG4taGVyby1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDMzLCA3LCA3NywgMC41KSxcbiAgYnRuLWhlcm8tdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksXG4gIGJ0bi1oZXJvLWJldmVsLXNpemU6IDAgM3B4IDAgMCxcbiAgYnRuLWhlcm8tZ2xvdy1zaXplOiAwIDJweCA4cHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiBidG4taGVyby1nbG93LXNpemUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuICBidG4tb3V0bGluZS1mZzogY29sb3ItZmctaGVhZGluZyxcbiAgYnRuLW91dGxpbmUtaG92ZXItZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIGJ0bi1vdXRsaW5lLWZvY3VzLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBidG4tZ3JvdXAtYmc6ICMzNzMyNzMsXG4gIGJ0bi1ncm91cC1zZXBhcmF0b3I6ICMzMTJjNjYsXG5cbiAgZm9ybS1jb250cm9sLWJnOiAjMzczMTdhLFxuICBmb3JtLWNvbnRyb2wtZm9jdXMtYmc6IHNlcGFyYXRvcixcbiAgZm9ybS1jb250cm9sLWJvcmRlci1jb2xvcjogc2VwYXJhdG9yLFxuICBmb3JtLWNvbnRyb2wtc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LFxuXG4gIGNoZWNrYm94LWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtc2l6ZTogMS4yNXJlbSxcbiAgY2hlY2tib3gtYm9yZGVyLXNpemU6IDJweCxcbiAgY2hlY2tib3gtYm9yZGVyLWNvbG9yOiBjb2xvci1mZyxcbiAgY2hlY2tib3gtY2hlY2ttYXJrOiB0cmFuc3BhcmVudCxcblxuICBjaGVja2JveC1jaGVja2VkLWJnOiB0cmFuc3BhcmVudCxcbiAgY2hlY2tib3gtY2hlY2tlZC1zaXplOiAxLjI1cmVtLFxuICBjaGVja2JveC1jaGVja2VkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICBjaGVja2JveC1jaGVja2VkLWNoZWNrbWFyazogY29sb3ItZmctaGVhZGluZyxcblxuICBjaGVja2JveC1kaXNhYmxlZC1iZzogdHJhbnNwYXJlbnQsXG4gIGNoZWNrYm94LWRpc2FibGVkLXNpemU6IDEuMjVyZW0sXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1zaXplOiAycHgsXG4gIGNoZWNrYm94LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZmctaGVhZGluZyxcbiAgY2hlY2tib3gtZGlzYWJsZWQtY2hlY2ttYXJrOiBjb2xvci1mZy1oZWFkaW5nLFxuXG4gIHNlYXJjaC1iZzogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTcxNzQ5LCAjNDEzNzg5KSxcblxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LW5vcm1hbCxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWJnOiBjb2xvci1iZy1hY3RpdmUsXG4gIHNtYXJ0LXRhYmxlLWJnLWV2ZW46ICMzYTM0N2EsXG4gIHNtYXJ0LXRhYmxlLWJnLWFjdGl2ZTogY29sb3ItYmctYWN0aXZlLFxuXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IDJweCxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZTogY29sb3ItZmctaGVhZGluZyxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuMiksXG5cbiAgYmFkZ2UtZmctdGV4dDogY29sb3Itd2hpdGUsXG4gIGJhZGdlLXByaW1hcnktYmctY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIGJhZGdlLXN1Y2Nlc3MtYmctY29sb3I6IGNvbG9yLXN1Y2Nlc3MsXG4gIGJhZGdlLWluZm8tYmctY29sb3I6IGNvbG9yLWluZm8sXG4gIGJhZGdlLXdhcm5pbmctYmctY29sb3I6IGNvbG9yLXdhcm5pbmcsXG4gIGJhZGdlLWRhbmdlci1iZy1jb2xvcjogY29sb3ItZGFuZ2VyLFxuXG4gIHNwaW5uZXItYmc6IHJnYmEoNjEsIDU1LCAxMjgsIDAuOSksXG4gIHN0ZXBwZXItYWNjZW50LWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuXG4gIHRhYnMtc2VsZWN0ZWQtc2Vjb25kLWNvbG9yOiBjb2xvci1zdWNjZXNzLFxuICB0YWJzLXNlbGVjdGVkLWRlZ3JlZXM6IDIwZGVnLFxuXG4gIGNhbGVuZGFyLWFjdGl2ZS1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1zZWxlY3RlZC1pdGVtLWJnOiBjb2xvci1wcmltYXJ5LFxuICBjYWxlbmRhci1yYW5nZS1iZy1pbi1yYW5nZTogIzRlNDA5NSxcbiAgY2FsZW5kYXItdG9kYXktaXRlbS1iZzogIzM1MmY2ZSxcblxuICBzZWxlY3Qtb3B0aW9uLWRpc2FibGVkLWJnOiAjMzEyZTc1LFxuXG4gIHRvYXN0ci1jb2xvci1mZzogY29sb3Itd2hpdGUsXG4gIHRvYXN0ci1wYWRkaW5nOiAxLjI1cmVtLFxuICB0b2FzdHItYm9yZGVyOiAwLFxuICB0b2FzdHItZGVmYXVsdC1iYWNrZ3JvdW5kOiAjYmNjM2NjLFxuXG4gIHRvb2x0aXAtZmc6IGNvbG9yLWJnLFxuICB0b29sdGlwLXN0YXR1cy1mZzogY29sb3Itd2hpdGUsXG5cbiAgZGF0ZXBpY2tlci1ib3JkZXI6IGNvbG9yLXByaW1hcnksXG4gIGRhdGVwaWNrZXItc2hhZG93OiBzaGFkb3csXG5cbiAgcmFkaW8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnksXG4gIHJhZGlvLWNoZWNrZWQtY2hlY2ttYXJrOiBjb2xvci1wcmltYXJ5LFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4vLyBkZWZhdWx0IHRoZSBiYXNlIHRoZW1lXG4kdGhlbWU6IChcbiAgaGVhZGVyLWZnOiAjZjdmYWZiLFxuICBoZWFkZXItYmc6ICMxMTEyMTgsXG5cbiAgbGF5b3V0LWJnOiAjZjFmNWY4LFxuXG4gIGNvbG9yLWZnLWhlYWRpbmc6ICMxODE4MTgsXG4gIGNvbG9yLWZnLXRleHQ6ICM0YjRiNGIsXG4gIGNvbG9yLWZnLWhpZ2hsaWdodDogY29sb3ItZmcsXG5cbiAgc2VwYXJhdG9yOiAjY2RkNWRjLFxuXG4gIHJhZGl1czogMC4xN3JlbSxcblxuICBzY3JvbGxiYXItYmc6ICNlM2U5ZWUsXG5cbiAgY29sb3ItcHJpbWFyeTogIzczYTFmZixcbiAgY29sb3Itc3VjY2VzczogIzVkY2ZlMyxcbiAgY29sb3ItaW5mbzogI2JhN2ZlYyxcbiAgY29sb3Itd2FybmluZzogI2ZmYTM2YixcbiAgY29sb3ItZGFuZ2VyOiAjZmY2YjgzLFxuXG4gIGJ0bi1zZWNvbmRhcnktYmc6ICNlZGYyZjUsXG4gIGJ0bi1zZWNvbmRhcnktYm9yZGVyOiAjZWRmMmY1LFxuXG4gIGFjdGlvbnMtZmc6ICNkM2RiZTUsXG4gIGFjdGlvbnMtYmc6IGNvbG9yLWJnLFxuXG4gIHNpZGViYXItYmc6ICNlM2U5ZWUsXG5cbiAgYm9yZGVyLWNvbG9yOiAjZDVkYmUwLFxuXG4gIG1lbnUtZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0LWJvbGRlcixcbiAgbWVudS1mZzogY29sb3ItZmctdGV4dCxcbiAgbWVudS1iZzogI2UzZTllZSxcbiAgbWVudS1hY3RpdmUtZmc6IGNvbG9yLWZnLWhlYWRpbmcsXG4gIG1lbnUtYWN0aXZlLWJnOiBtZW51LWJnLFxuXG4gIG1lbnUtc3VibWVudS1iZzogbWVudS1iZyxcbiAgbWVudS1zdWJtZW51LWZnOiBjb2xvci1mZy10ZXh0LFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWZnOiBjb2xvci1mZy1oZWFkaW5nLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJnOiAjY2RkNWRjLFxuICBtZW51LXN1Ym1lbnUtYWN0aXZlLWJvcmRlci1jb2xvcjogbWVudS1zdWJtZW51LWFjdGl2ZS1iZyxcbiAgbWVudS1zdWJtZW51LWFjdGl2ZS1zaGFkb3c6IG5vbmUsXG4gIG1lbnUtc3VibWVudS1ob3Zlci1mZzogbWVudS1zdWJtZW51LWFjdGl2ZS1mZyxcbiAgbWVudS1zdWJtZW51LWhvdmVyLWJnOiBtZW51LWJnLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAuMTI1cmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItcmFkaXVzOiByYWRpdXMsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IDAuNXJlbSAxcmVtLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1jb250YWluZXItcGFkZGluZzogMCAxLjI1cmVtLFxuICBtZW51LXN1Ym1lbnUtcGFkZGluZzogMC41cmVtLFxuXG4gIGJ0bi1ib3JkZXItcmFkaXVzOiBidG4tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzLFxuXG4gIGJ0bi1oZXJvLWRlZ3JlZTogMGRlZyxcbiAgYnRuLWhlcm8tcHJpbWFyeS1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8td2FybmluZy1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8taW5mby1kZWdyZWU6IGJ0bi1oZXJvLWRlZ3JlZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWRlZ3JlZTogYnRuLWhlcm8tZGVncmVlLFxuICBidG4taGVyby1zZWNvbmRhcnktZGVncmVlOiBidG4taGVyby1kZWdyZWUsXG4gIGJ0bi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcbiAgYnRuLWhlcm8tcHJpbWFyeS1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tc3VjY2Vzcy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8td2FybmluZy1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8taW5mby1nbG93LXNpemU6IGJ0bi1oZXJvLWdsb3ctc2l6ZSxcbiAgYnRuLWhlcm8tZGFuZ2VyLWdsb3ctc2l6ZTogYnRuLWhlcm8tZ2xvdy1zaXplLFxuICBidG4taGVyby1zZWNvbmRhcnktZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidG4taGVyby1ib3JkZXItcmFkaXVzOiBidG4tYm9yZGVyLXJhZGl1cyxcblxuICBjYXJkLXNoYWRvdzogbm9uZSxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2FyZC1ib3JkZXItY29sb3I6IGJvcmRlci1jb2xvcixcbiAgY2FyZC1oZWFkZXItYm9yZGVyLXdpZHRoOiAwLFxuXG4gIGxpbmstY29sb3I6ICM1ZGNmZTMsXG4gIGxpbmstY29sb3ItaG92ZXI6ICM3ZGNmZTMsXG4gIGxpbmstY29sb3ItdmlzaXRlZDogbGluay1jb2xvcixcblxuICBhY3Rpb25zLXNlcGFyYXRvcjogI2YxZjRmNSxcblxuICBtb2RhbC1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuICB0YWJzLXNlbGVjdGVkLXNlY29uZC1jb2xvcjogY29sb3ItcHJpbWFyeSxcbiAgdGFicy1zZXBhcmF0b3I6ICNlYmVjZWUsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeSxcblxuICByb3V0ZS10YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LFxuXG4gIHBvcG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LFxuXG4gIGZvb3Rlci1zaGFkb3c6IG5vbmUsXG4gIGZvb3Rlci1zZXBhcmF0b3I6IGJvcmRlci1jb2xvcixcbiAgZm9vdGVyLWZnLWhpZ2hsaWdodDogIzJhMmEyYSxcblxuICBjYWxlbmRhci10b2RheS1pdGVtLWJnOiAjYTJiMmM3LFxuICBjYWxlbmRhci1hY3RpdmUtaXRlbS1iZzogY29sb3ItcHJpbWFyeSxcbiAgY2FsZW5kYXItcmFuZ2UtYmctaW4tcmFuZ2U6ICNlM2VjZmUsXG4gIGNhbGVuZGFyLXRvZGF5LWZnOiBjb2xvci13aGl0ZSxcblxuICB0b2FzdHItaWNvbi1yYWRpdXM6IHJhZGl1cyxcblxuICBkYXRlcGlja2VyLWJvcmRlcjogY29sb3ItcHJpbWFyeSxcbik7XG5cbi8vIHJlZ2lzdGVyIHRoZSB0aGVtZVxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBjb3Jwb3JhdGUsIGRlZmF1bHQpO1xuIiwiLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZ3JpZC1jb2x1bW5zOiAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aC1iYXNlOiAyNHB4ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoczogKFxuICB4czogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHNtOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbWQ6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBsZzogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHhsOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZVxuKSAhZGVmYXVsdDtcblxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgaXM6IDQwMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbiAgeHh4bDogMTYwMHB4XG4pO1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgaXM6IDM4MHB4LFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweCxcbiAgeHh4bDogMTUwMHB4XG4pO1xuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIDAuMDJweCwgbnVsbCk7XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvdGhlbWVzJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9taXhpbnMvYnJlYWtwb2ludHMnO1xuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9nbG9iYWwvYnJlYWtwb2ludHMnO1xuXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcbiAgbmItbGF5b3V0LWNvbHVtbi5zbWFsbCB7XG4gICAgZmxleDogMC4xNSAhaW1wb3J0YW50O1xuICB9XG5cbiAgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyIHtcbiAgICAkc2lkZWJhci13aWR0aDogMTlyZW07XG5cbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIG5iLWx0cih0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApKTtcbiAgICBAaW5jbHVkZSBuYi1ydGwodHJhbnNmb3JtLCB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkpO1xuICAgICYuc3RhcnQge1xuICAgICAgQGluY2x1ZGUgbmItbHRyKHRyYW5zZm9ybSwgdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bCh0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApKTtcbiAgICB9XG5cbiAgICAmLmV4cGFuZGVkLCAmLmV4cGFuZGVkLnN0YXJ0IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuXG4gICAgL2RlZXAvIC5zY3JvbGxhYmxlIHtcbiAgICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcbiAgICAgIHBhZGRpbmc6IDMuNHJlbSAwLjI1cmVtO1xuICAgIH1cblxuICAgIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xuICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoY29sb3ItYmcpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgd2lkdGg6ICRzaWRlYmFyLXdpZHRoO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoY29zbWljKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGxheW91dC1iZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItc2lkZWJhci5tZW51LXNpZGViYXIge1xuXG4gICAgbWFyZ2luLXRvcDogbmItdGhlbWUoc2lkZWJhci1oZWFkZXItZ2FwKTtcblxuICAgIEBpbmNsdWRlIG5iLWZvci10aGVtZShjb3Jwb3JhdGUpIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgL2RlZXAvIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6XG4gICAgICAgIGNhbGMoI3tuYi10aGVtZShzaWRlYmFyLWhlaWdodCl9IC0gI3tuYi10aGVtZShoZWFkZXItaGVpZ2h0KX0gLSAje25iLXRoZW1lKHNpZGViYXItaGVhZGVyLWdhcCl9KSAhaW1wb3J0YW50O1xuICAgICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCBuYi10aGVtZShyYWRpdXMpKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChib3JkZXItdG9wLWxlZnQtcmFkaXVzLCBuYi10aGVtZShyYWRpdXMpKTtcblxuICAgICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKGNvcnBvcmF0ZSkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBuYi10aGVtZShzZXBhcmF0b3IpO1xuICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgY2FsYygje25iLXRoZW1lKHNpZGViYXItaGVpZ2h0KX0gLSAje25iLXRoZW1lKGhlYWRlci1oZWlnaHQpfSkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvZGVlcC8gLnNjcm9sbGFibGUge1xuICAgICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKGNvcnBvcmF0ZSkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICAubWVudS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgL2RlZXAvIG5iLXNpZGViYXItaGVhZGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAubWFpbi1idG4ge1xuICAgICAgcGFkZGluZzogMC43NXJlbSAyLjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjQ4KTtcblxuICAgICAgQGluY2x1ZGUgbmItZm9yLXRoZW1lKGNvcnBvcmF0ZSkge1xuICAgICAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShyYWRpdXMpO1xuICAgICAgfVxuXG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1sZWZ0LCAwLjI1cmVtKTtcbiAgICAgICAgQGluY2x1ZGUgbmItcnRsKHBhZGRpbmctcmlnaHQsIDAuMjVyZW0pO1xuICAgICAgfVxuXG4gICAgICBpLCBzcGFuIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvZGVlcC8gbmItbWVudSB7XG4gICAgICAmID4gLm1lbnUtaXRlbXMge1xuICAgICAgICAmID4gLm1lbnUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgLm1lbnUtdGl0bGUge1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogbmItdGhlbWUoY29sb3Itd2hpdGUpO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKHJhZGl1cyk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoZm9udC1zaXplLXNtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5iLWUtY29tbWVyY2Uge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jb21wYWN0ZWQge1xuXG4gICAgICAvZGVlcC8gbmItc2lkZWJhci1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIC5tYWluLWJ0biB7XG4gICAgICAgIHdpZHRoOiA0NnB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMC43NXJlbSAhaW1wb3J0YW50O1xuXG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG5cbiAgICBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciB7XG5cbiAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoI3tuYi10aGVtZShzaWRlYmFyLWhlaWdodCl9IC0gI3tuYi10aGVtZShoZWFkZXItaGVpZ2h0KX0pICFpbXBvcnRhbnQ7XG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cihib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgMCk7XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bChib3JkZXItdG9wLWxlZnQtcmFkaXVzLCAwKTtcblxuICAgICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1idG4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBpcyBhIHN0YXJ0aW5nIHBvaW50IHdoZXJlIHdlIGRlY2xhcmUgdGhlIG1hcHMgb2YgdGhlbWVzIGFuZCBnbG9iYWxseSBhdmFpbGFibGUgZnVuY3Rpb25zL21peGluc1xuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKiFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKlxuICAgICAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gICAgICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgICAgIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbi5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLWxheW91dC1jb2x1bW4uc21hbGwge1xuICBmbGV4OiAwLjE1ICFpbXBvcnRhbnQ7IH1cblxuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgd2lkdGg6IDE5cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7IH1cbiAgW2Rpcj1ydGxdIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH1cbiAgW2Rpcj1sdHJdIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH1cbiAgW2Rpcj1ydGxdIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTsgfVxuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIuZXhwYW5kZWQsIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5leHBhbmRlZC5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIgL2RlZXAvIC5zY3JvbGxhYmxlIHtcbiAgICB3aWR0aDogMTlyZW07XG4gICAgcGFkZGluZzogMy40cmVtIDAuMjVyZW07IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciAuc2Nyb2xsYWJsZSB7XG4gICAgICB3aWR0aDogMTlyZW07IH1cblxuLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljc1cmVtIC0gMnJlbSkgIWltcG9ydGFudDsgfVxuICAgIFtkaXI9bHRyXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjM3NXJlbTsgfVxuICAgIFtkaXI9cnRsXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMzc1cmVtOyB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyBuYi1zaWRlYmFyLWhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuNDgpOyB9XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIGkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtOyB9XG4gICAgW2Rpcj1ydGxdIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC5tYWluLWJ0biBzcGFuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07IH1cbiAgICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAubWFpbi1idG4gaSwgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gbmItbWVudSA+IC5tZW51LWl0ZW1zID4gLm1lbnUtaXRlbTpmaXJzdC1jaGlsZCAubWVudS10aXRsZTo6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZjRjNmE7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gbmItbWVudSAubmItZS1jb21tZXJjZSB7XG4gICAgZm9udC1zaXplOiAycmVtOyB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyLmNvbXBhY3RlZCAvZGVlcC8gbmItc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwOyB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyLmNvbXBhY3RlZCAubWFpbi1idG4ge1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogbm9uZTsgfVxuICAgIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyLmNvbXBhY3RlZCAubWFpbi1idG4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzOTkuOThweCkge1xuICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCAubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIge1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgICAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQuNzVyZW0pICFpbXBvcnRhbnQ7IH1cbiAgICAgIFtkaXI9bHRyXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cbiAgICAgIFtkaXI9cnRsXSAubmItdGhlbWUtZGVmYXVsdCA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDsgfVxuICAgICAgLm5iLXRoZW1lLWRlZmF1bHQgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gIC5uYi10aGVtZS1kZWZhdWx0IDpob3N0IC5tYWluLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1sYXlvdXQtY29sdW1uLnNtYWxsIHtcbiAgZmxleDogMC4xNSAhaW1wb3J0YW50OyB9XG5cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgd2lkdGg6IDE5cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTsgfVxuICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH1cbiAgW2Rpcj1ydGxdIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyLnN0YXJ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyLmV4cGFuZGVkLCAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5leHBhbmRlZC5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciAvZGVlcC8gLnNjcm9sbGFibGUge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBwYWRkaW5nOiAzLjRyZW0gMC4yNXJlbTsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTlyZW07XG4gICAgYmFja2dyb3VuZDogIzNkMzc4MDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICMyZjI5NmI7IH1cbiAgICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIC5zY3JvbGxhYmxlIHtcbiAgICAgIHdpZHRoOiAxOXJlbTsgfVxuXG4ubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljc1cmVtIC0gMnJlbSkgIWltcG9ydGFudDsgfVxuICAgIFtkaXI9bHRyXSAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTsgfVxuICAgIFtkaXI9cnRsXSAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIG5iLXNpZGViYXItaGVhZGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC5tYWluLWJ0biB7XG4gICAgcGFkZGluZzogMC43NXJlbSAyLjVyZW07XG4gICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzIGN1YmljLWJlemllcigwLjE4LCAwLjg5LCAwLjMyLCAxLjQ4KTsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIGkge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAubWFpbi1idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07IH1cbiAgICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAubWFpbi1idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtOyB9XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAubWFpbi1idG4gaSwgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAubWFpbi1idG4gc3BhbiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIG5iLW1lbnUgPiAubWVudS1pdGVtcyA+IC5tZW51LWl0ZW06Zmlyc3QtY2hpbGQgLm1lbnUtdGl0bGU6OmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmYzODZhO1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIG5iLW1lbnUgLm5iLWUtY29tbWVyY2Uge1xuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyLmNvbXBhY3RlZCAvZGVlcC8gbmItc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwOyB9XG4gIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIuY29tcGFjdGVkIC5tYWluLWJ0biB7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBub25lOyB9XG4gICAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhci5jb21wYWN0ZWQgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzk5Ljk4cHgpIHtcbiAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCAubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciB7XG4gICAgbWFyZ2luLXRvcDogMDsgfVxuICAgIC5uYi10aGVtZS1jb3NtaWMgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljc1cmVtKSAhaW1wb3J0YW50OyB9XG4gICAgICBbZGlyPWx0cl0gLm5iLXRoZW1lLWNvc21pYyA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cbiAgICAgIFtkaXI9cnRsXSAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XG4gICAgICAubmItdGhlbWUtY29zbWljIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIgLnNjcm9sbGFibGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDsgfVxuICAubmItdGhlbWUtY29zbWljIDpob3N0IC5tYWluLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbi8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgICAgIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgICAgIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgICAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgICAgICAuLi5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgICAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAgICAgLi4uXG4gICAgICAgIH1cblxuICAgICAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgICAgIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiAgICAqL1xuLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1sYXlvdXQtY29sdW1uLnNtYWxsIHtcbiAgZmxleDogMC4xNSAhaW1wb3J0YW50OyB9XG5cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgd2lkdGg6IDE5cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTsgfVxuICBbZGlyPXJ0bF0gLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApOyB9XG4gIFtkaXI9bHRyXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH1cbiAgW2Rpcj1ydGxdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyLnN0YXJ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5zZXR0aW5ncy1zaWRlYmFyLmV4cGFuZGVkLCAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhci5leHBhbmRlZC5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciAvZGVlcC8gLnNjcm9sbGFibGUge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgICBwYWRkaW5nOiAzLjRyZW0gMC4yNXJlbTsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIuc2V0dGluZ3Mtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTlyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLnNldHRpbmdzLXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciAuc2Nyb2xsYWJsZSB7XG4gICAgICB3aWR0aDogMTlyZW07IH1cblxuLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC43NXJlbSAtIDJyZW0pICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDVkYztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0Ljc1cmVtKSAhaW1wb3J0YW50OyB9XG4gICAgW2Rpcj1sdHJdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4xN3JlbTsgfVxuICAgIFtkaXI9cnRsXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4xN3JlbTsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAuc2Nyb2xsYWJsZSB7XG4gICAgcGFkZGluZy10b3A6IDA7IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAuc2Nyb2xsYWJsZSAubWVudS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7IH1cbiAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gbmItc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDIuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3MgY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuNDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTdyZW07IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC5tYWluLWJ0biBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG4gICAgW2Rpcj1sdHJdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtOyB9XG4gICAgW2Rpcj1ydGxdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMC4yNXJlbTsgfVxuICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIGksIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgLm1haW4tYnRuIHNwYW4ge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyBuYi1tZW51ID4gLm1lbnUtaXRlbXMgPiAubWVudS1pdGVtOmZpcnN0LWNoaWxkIC5tZW51LXRpdGxlOjphZnRlciB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmNmI4MztcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjE3cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07IH1cbiAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gbmItbWVudSAubmItZS1jb21tZXJjZSB7XG4gICAgZm9udC1zaXplOiAycmVtOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIuY29tcGFjdGVkIC9kZWVwLyBuYi1zaWRlYmFyLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cbiAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhci5jb21wYWN0ZWQgLm1haW4tYnRuIHtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzogMC4zNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRyYW5zaXRpb246IG5vbmU7IH1cbiAgICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyLmNvbXBhY3RlZCAubWFpbi1idG4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzOTkuOThweCkge1xuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAwOyB9XG4gICAgLm5iLXRoZW1lLWNvcnBvcmF0ZSA6aG9zdCBuYi1zaWRlYmFyLm1lbnUtc2lkZWJhciAvZGVlcC8gLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQuNzVyZW0pICFpbXBvcnRhbnQ7IH1cbiAgICAgIFtkaXI9bHRyXSAubmItdGhlbWUtY29ycG9yYXRlIDpob3N0IG5iLXNpZGViYXIubWVudS1zaWRlYmFyIC9kZWVwLyAubWFpbi1jb250YWluZXIge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxuICAgICAgW2Rpcj1ydGxdIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7IH1cbiAgICAgIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgbmItc2lkZWJhci5tZW51LXNpZGViYXIgL2RlZXAvIC5tYWluLWNvbnRhaW5lciAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gIC5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgLm1haW4tYnRuIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cbiIsIi8vIEBuZWJ1bGFyIHRoZW1pbmcgZnJhbWV3b3JrXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1pbmcnO1xuLy8gQG5lYnVsYXIgb3V0IG9mIHRoZSBib3ggdGhlbWVzXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL3RoZW1lcyc7XG5cbi8vIHdoaWNoIHRoZW1lcyB5b3Ugd2hhdCB0byBlbmFibGUgKGVtcHR5IHRvIGVuYWJsZSBhbGwpXG4kbmItZW5hYmxlZC10aGVtZXM6IChkZWZhdWx0LCBjb3NtaWMsIGNvcnBvcmF0ZSk7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKChcbiAvLyBhcHAgd2lzZSB2YXJpYWJsZXMgZm9yIGVhY2ggdGhlbWVcbiAgc2lkZWJhci1oZWFkZXItZ2FwOiAycmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IGluaXRpYWwsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiAxNDAwcHgsXG5cbiAgZm9udC1tYWluOiBSb2JvdG8sXG4gIGZvbnQtc2Vjb25kYXJ5OiBFeG8sXG5cbiAgc3dpdGNoZXItYmFja2dyb3VuZDogI2ViZWZmNSxcbiAgc3dpdGNoZXItYmFja2dyb3VuZC1wZXJjZW50YWdlOiA1MCUsXG4gIGRyb3BzLWljb24tbGluZS1nYWRpZW50OiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjMDFkYmI1LCAjMGJiYjc5KSxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2xpZGUtb3V0LWNvbnRhaW5lci13aWR0aDogMzAlLFxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2Y3ZmFmYiAwJSwgI2VjZjJmNSAxMDAlKSxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvcjogMCA0cHggMTRweCAwICNhMmQyYzgsXG4gIHNsaWRlLW91dC1zaGFkb3ctY29sb3ItcnRsOiAwIDRweCAxNHB4IDAgI2EyZDJjOCxcblxuICBjaGFydC1wYW5lbC1zdW1tYXJ5LWJveC1zaGFkb3c6IG5vbmUsXG4gIGNoYXJ0LXBhbmVsLXN1bW1hcnktYmFja2dyb3VuZC1jb2xvcjogI2VjZjJmNSxcbiAgY2hhcnQtcGFuZWwtc3VtbWFyeS1ib3JkZXItY29sb3I6ICNlYmVmZjEsXG4gIGNoYXJ0LXBhbmVsLXN1bW1hcnktYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgZWNvbW1lcmNlLWNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzNlZGQ4MSAwJSwgIzNiZGRhZiAxMDAlKSxcbiksIGRlZmF1bHQsIGRlZmF1bHQpO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgoXG4gIC8vIGFwcCB3aXNlIHZhcmlhYmxlcyBmb3IgZWFjaCB0aGVtZVxuICBzaWRlYmFyLWhlYWRlci1nYXA6IDJyZW0sXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogaW5pdGlhbCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDE0MDBweCxcblxuICBmb250LW1haW46IFJvYm90byxcbiAgZm9udC1zZWNvbmRhcnk6IEV4byxcblxuICBzd2l0Y2hlci1iYWNrZ3JvdW5kOiAjNGU0MWE1LFxuICBzd2l0Y2hlci1iYWNrZ3JvdW5kLXBlcmNlbnRhZ2U6IDE0JSxcbiAgZHJvcHMtaWNvbi1saW5lLWdhZGllbnQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNhMjU4ZmUsICM3OTU4ZmEpLFxuXG4gIGxpc3QtaXRlbS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzbGlkZS1vdXQtY29udGFpbmVyLXdpZHRoOiAzMCUsXG4gIHNsaWRlLW91dC1iYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjMzAyYzZlIDAlLCAjNDIzZjhjIDEwMCUpLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAycHggMCAzcHggcmdiYSgxOSwgMTksIDk0LCAwLjkpLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yLXJ0bDogLTJweCAwIDNweCByZ2JhKDE5LCAxOSwgOTQsIDAuOSksXG5cbiAgY2hhcnQtcGFuZWwtc3VtbWFyeS1ib3gtc2hhZG93OiBub25lLFxuICBjaGFydC1wYW5lbC1zdW1tYXJ5LWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgY2hhcnQtcGFuZWwtc3VtbWFyeS1ib3JkZXItY29sb3I6ICMzMzJlNzMsXG4gIGNoYXJ0LXBhbmVsLXN1bW1hcnktYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgZWNvbW1lcmNlLWNhcmQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwYzdjNyAwJSwgIzAwZDk3NyAxMDAlKSxcbiksIGNvc21pYywgY29zbWljKTtcblxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoKFxuICAvLyBhcHAgd2lzZSB2YXJpYWJsZXMgZm9yIGVhY2ggdGhlbWVcbiAgc2lkZWJhci1oZWFkZXItZ2FwOiAycmVtLFxuICBzaWRlYmFyLWhlYWRlci1oZWlnaHQ6IGluaXRpYWwsXG4gIGxheW91dC1jb250ZW50LXdpZHRoOiAxNDAwcHgsXG5cbiAgZm9udC1tYWluOiBSb2JvdG8sXG4gIGZvbnQtc2Vjb25kYXJ5OiBFeG8sXG5cbiAgc3dpdGNoZXItYmFja2dyb3VuZDogIzJiMmQzNCxcbiAgc3dpdGNoZXItYmFja2dyb3VuZC1wZXJjZW50YWdlOiAxNCUsXG4gIGRyb3BzLWljb24tbGluZS1nYWRpZW50OiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZTllOGViLCAjYTdhMmJlKSxcblxuICBsaXN0LWl0ZW0tYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2xpZGUtb3V0LWNvbnRhaW5lci13aWR0aDogMzAlLFxuICBzbGlkZS1vdXQtYmFja2dyb3VuZDogXHRsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZjdmYWZiIDAlLCAjZWNmMmY1IDEwMCUpLFxuICBzbGlkZS1vdXQtc2hhZG93LWNvbG9yOiAwIDRweCAxNHB4IDAgI2EyZDJjOCxcbiAgc2xpZGUtb3V0LXNoYWRvdy1jb2xvci1ydGw6IDAgNHB4IDE0cHggMCAjYTJkMmM4LFxuXG4gIGNoYXJ0LXBhbmVsLXN1bW1hcnktYm94LXNoYWRvdzogbm9uZSxcbiAgY2hhcnQtcGFuZWwtc3VtbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmYWZiLFxuICBjaGFydC1wYW5lbC1zdW1tYXJ5LWJvcmRlci1jb2xvcjogI2ViZWZmMSxcbiAgY2hhcnQtcGFuZWwtc3VtbWFyeS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBlY29tbWVyY2UtY2FyZC1ib3JkZXItd2lkdGg6IDFweCxcblxuICBwcm9ncmVzcy1iYXItYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY5ZjZmIDAlLCAjZmY4Yjk3IDEwMCUpLFxuKSwgY29ycG9yYXRlLCBjb3Jwb3JhdGUpO1xuIl19 */"

/***/ }),

/***/ "./src/app/@theme/layouts/sample/sample.layout.ts":
/*!********************************************************!*\
  !*** ./src/app/@theme/layouts/sample/sample.layout.ts ***!
  \********************************************************/
/*! exports provided: SampleLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLayoutComponent", function() { return SampleLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@core/utils */ "./src/app/@core/utils/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        // subMenu: NbMenuItem[] = [
        //   {
        //     title: 'PAGE LEVEL MENU',
        //     group: true,
        //   },
        //   {
        //     title: 'Buttons',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/buttons',
        //   },
        //   {
        //     title: 'Grid',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/grid',
        //   },
        //   {
        //     title: 'Icons',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/icons',
        //   },
        //   {
        //     title: 'Modals',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/modals',
        //   },
        //   {
        //     title: 'Typography',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/typography',
        //   },
        //   {
        //     title: 'Animated Searches',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/search-fields',
        //   },
        //   {
        //     title: 'Tabs',
        //     icon: 'ion ion-android-radio-button-off',
        //     link: '/pages/ui-features/tabs',
        //   },
        // ];
        this.layout = {};
        this.sidebar = {};
        this.alive = true;
        this.stateService.onLayoutState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (layout) { return _this.layout = layout; });
        this.stateService.onSidebarState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuService.onItemSelect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.themeService.onMediaQueryChange()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SampleLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-sample-layout',
            styles: [__webpack_require__(/*! ./sample.layout.scss */ "./src/app/@theme/layouts/sample/sample.layout.scss")],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'start' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [end]=\"sidebar.id === 'end'\">\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [end]=\"sidebar.id !== 'end'\">\n\n                   </nb-sidebar>\n    </nb-layout>\n  ",
        })
        // <nb-layout-footer fixed>
        // <ngx-footer></ngx-footer>
        // </nb-layout-footer>
        // <ngx-theme-settings></ngx-theme-settings>
        // <ngx-toggle-settings-button></ngx-toggle-settings-button>
        ,
        __metadata("design:paramtypes", [_core_utils__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMediaBreakpointsService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarService"]])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());

// template: `
//     <nb-layout [center]="layout.id === 'center-column'" windowMode>
//       <nb-layout-header fixed>
//         <ngx-header [position]="sidebar.id === 'start' ? 'normal': 'inverse'"></ngx-header>
//       </nb-layout-header>
//       <nb-sidebar class="menu-sidebar"
//                    tag="menu-sidebar"
//                    responsive
//                    [end]="sidebar.id === 'end'">
//         <nb-sidebar-header *ngIf="currentTheme !== 'corporate'">
//           <a href="#" class="btn btn-hero-success main-btn">
//             <i class="ion ion-social-github"></i> <span>Support Us</span>
//           </a>
//         </nb-sidebar-header>
//         <ng-content select="nb-menu"></ng-content>
//       </nb-sidebar>
//       <nb-layout-column class="main-content">
//         <ng-content select="router-outlet"></ng-content>
//       </nb-layout-column>
//       <nb-layout-column start class="small" *ngIf="layout.id === 'two-column' || layout.id === 'three-column'">
//         <nb-menu [items]="subMenu"></nb-menu>
//       </nb-layout-column>
//       <nb-layout-column class="small" *ngIf="layout.id === 'three-column'">
//         <nb-menu [items]="subMenu"></nb-menu>
//       </nb-layout-column>
//       <nb-sidebar class="settings-sidebar"
//                    tag="settings-sidebar"
//                    state="collapsed"
//                    fixed
//                    [end]="sidebar.id !== 'end'">
//                    </nb-sidebar>
//     </nb-layout>
//   `,
// })


/***/ }),

/***/ "./src/app/@theme/model/login-class.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/model/login-class.ts ***!
  \*********************************************/
/*! exports provided: LoginModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return LoginModal; });
var LoginModal = /** @class */ (function () {
    function LoginModal() {
        this.Password = '';
        this.UserName = '';
    }
    return LoginModal;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/eva-icons.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/pipes/eva-icons.pipe.ts ***!
  \************************************************/
/*! exports provided: EvaIconsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaIconsPipe", function() { return EvaIconsPipe; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var eva_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! eva-icons */ "./node_modules/eva-icons/eva.js");
/* harmony import */ var eva_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(eva_icons__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EvaIconsPipe = /** @class */ (function () {
    function EvaIconsPipe(sanitizer) {
        this.sanitizer = sanitizer;
        this.defaultOptions = {
            height: 24,
            width: 24,
            fill: 'inherit',
            animationHover: true,
            animationInfinity: false,
        };
    }
    EvaIconsPipe.prototype.transform = function (icon, options) {
        var mergedOptions = __assign({}, this.defaultOptions, options);
        var width = mergedOptions.width, height = mergedOptions.height, fill = mergedOptions.fill, animationType = mergedOptions.animationType, animationHover = mergedOptions.animationHover, animationInfinity = mergedOptions.animationInfinity;
        var animation = animationType ?
            { type: animationType, hover: animationHover, infinite: animationInfinity } :
            null;
        return this.sanitizer.bypassSecurityTrustHtml(eva_icons__WEBPACK_IMPORTED_MODULE_2__["icons"][icon].toSvg({
            width: width,
            height: height,
            fill: fill,
            animation: animation,
        }));
    };
    EvaIconsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'eva' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], EvaIconsPipe);
    return EvaIconsPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/@theme/pipes/index.ts ***!
  \***************************************/
/*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe, EvaIconsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"]; });

/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plural.pipe */ "./src/app/@theme/pipes/plural.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"]; });

/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./round.pipe */ "./src/app/@theme/pipes/round.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"]; });

/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timing.pipe */ "./src/app/@theme/pipes/timing.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"]; });

/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number-with-commas.pipe */ "./src/app/@theme/pipes/number-with-commas.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberWithCommasPipe"]; });

/* harmony import */ var _eva_icons_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eva-icons.pipe */ "./src/app/@theme/pipes/eva-icons.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaIconsPipe", function() { return _eva_icons_pipe__WEBPACK_IMPORTED_MODULE_5__["EvaIconsPipe"]; });









/***/ }),

/***/ "./src/app/@theme/pipes/number-with-commas.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/@theme/pipes/number-with-commas.pipe.ts ***!
  \*********************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberWithCommasPipe = /** @class */ (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxNumberWithCommas' })
    ], NumberWithCommasPipe);
    return NumberWithCommasPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/plural.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
  \*********************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/round.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/@theme/pipes/round.pipe.ts ***!
  \********************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/@theme/pipes/timing.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
  \*********************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = /** @class */ (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/app/@theme/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    // private api = environment.api;
    function ApiService(http) {
        this.http = http;
        this.uri = '';
    }
    ApiService.prototype.getJsonOptions = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return httpOptions;
    };
    ApiService.prototype.setOptions = function (body) {
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            body: body
        };
        return options;
    };
    /**
         * @name extractData
         * @function extracts the data from the response
         * @returns response
         * @param response from the server
         */
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.apiCaller = function (type, url, data) {
        //  this.uri = this.api + url;
        // this.uri = 'http://localhost:8100' + url;
        this.uri = 'http://api.testautotech.xyz' + url;
        if (type === 'get') {
            return this.get(this.uri);
        }
        else {
            return this.post(this.uri, data);
        }
    };
    ApiService.prototype.post = function (url, data) {
        return this.http.post(url, data, { headers: this.getHeaders() });
    };
    ApiService.prototype.get = function (url) {
        return this.http.get(url, { headers: this.getHeaders() });
    };
    ApiService.prototype.getHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/@theme/services/app-toastr.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/@theme/services/app-toastr.service.ts ***!
  \*******************************************************/
/*! exports provided: AppToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToastrService", function() { return AppToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppToastrService = /** @class */ (function () {
    function AppToastrService(toastrService) {
        this.toastrService = toastrService;
        this.types = {
            Default: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].DEFAULT,
            Danger: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].DANGER,
            Info: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].INFO,
            Primary: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].PRIMARY,
            Sucess: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].SUCCESS,
            Warning: _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_2__["NbToastStatus"].WARNING,
        };
    }
    AppToastrService.prototype.showToastr = function (type, message) {
        var config = {
            status: type,
            destroyByClick: true,
            duration: 5000,
            hasIcon: true,
            position: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT,
            preventDuplicates: false,
        };
        this.toastrService.show('', message, config);
    };
    AppToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]])
    ], AppToastrService);
    return AppToastrService;
}());



/***/ }),

/***/ "./src/app/@theme/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/@theme/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_login_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/login-class */ "./src/app/@theme/model/login-class.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/@theme/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(router, api) {
        this.router = router;
        this.api = api;
        this.loggedOn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    AuthService.prototype.signinUser = function (username, password) {
        var _this = this;
        var user = new _model_login_class__WEBPACK_IMPORTED_MODULE_2__["LoginModal"]();
        user.UserName = username;
        user.Password = password;
        return this.onLogin(user)
            .map(function (result) {
            if (!result[0].error) {
                console.log('result login', result);
                // const res = JSON.parse(result);
                localStorage.setItem('isLogged', 'true');
                _this.currentUser.next({ 'user': result[0].data.user, 'user_permission': result[0].data.user_permission, 'token': result[0].data.token, 'group_user_ids': result[0].data.group_user_ids });
                localStorage.setItem('currentUser', JSON.stringify(result[0].data.user));
                localStorage.setItem('currentUserPermission', JSON.stringify(result[0].data.user_permission));
                localStorage.setItem('currentUserToken', JSON.stringify(result[0].data.token));
                localStorage.setItem('currentGroupUserIds', JSON.stringify(result[0].data.group_user_ids));
            }
            return result;
        }).catch(function (error) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error'); });
        // your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('isLogged');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
        localStorage.removeItem('currentUserPermission');
        this.currentUser.next(null);
        this.router.navigate(['/auth']);
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
    };
    AuthService.prototype.onLogin = function (data) {
        // alert(data.UserName)
        return this.api.apiCaller('post', '/SignIn', data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/@theme/services/dashboard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/@theme/services/dashboard.service.ts ***!
  \******************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
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


var DashboardService = /** @class */ (function () {
    function DashboardService(apiService) {
        this.apiService = apiService;
    }
    DashboardService.prototype.getOTP = function () {
        return this.apiService.apiCaller('get', '/getOTP');
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/@theme/services/print.service.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/services/print.service.ts ***!
  \**************************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrintService = /** @class */ (function () {
    function PrintService(router) {
        this.router = router;
        this.isPrinting = false;
        this.isExport = true;
        this.isPrint = false;
        // isExportData: BehaviorSubject<any> = new BehaviorSubject(false);
        this.pdfContent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    PrintService.prototype.printDocument = function (documentName, documentData, isPdf) {
        this.isPrinting = true;
        var url;
        if (isPdf) {
            url = this.router.createUrlTree(['./export/invoice']);
            window.open(url.toString(), '_blank');
        }
        else {
            this.isExport = false;
            this.isPrint = true;
            this.router.navigate(['./',
                {
                    outlets: {
                        'print': ['print', documentName, documentData.join()]
                    }
                }]);
        }
    };
    PrintService.prototype.onDataReady = function () {
        var _this = this;
        setTimeout(function () {
            window.print();
            _this.isPrinting = false;
            _this.router.navigate([{ outlets: { print: null } }]);
        });
    };
    PrintService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PrintService);
    return PrintService;
}());



/***/ }),

/***/ "./src/app/@theme/styles/theme.corporate.ts":
/*!**************************************************!*\
  !*** ./src/app/@theme/styles/theme.corporate.ts ***!
  \**************************************************/
/*! exports provided: CORPORATE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function() { return CORPORATE_THEME; });
var CORPORATE_THEME = {
    name: 'corporate',
    base: 'default',
    variables: {
        temperature: [
            '#ffa36b',
            '#ffa36b',
            '#ff9e7a',
            '#ff9888',
            '#ff8ea0',
        ],
        solar: {
            gradientLeft: '#ff8ea0',
            gradientRight: '#ffa36b',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#ffffff',
            tooltipBg: '#eef2f5',
            tooltipBorderColor: '#eef2f5',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: '400',
            lineBg: '#cae6f3',
            lineShadowBlur: '0',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#74a2ff',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ffffff',
            gradTo: '#ffffff',
        },
        electricity: {
            tooltipBg: '#edf0f4',
            tooltipLineColor: '#bdc4cd',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#73a1ff',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#bdc4cd',
            lineGradTo: '#c0c8d1',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(255, 255, 255, 0)',
            areaGradTo: 'rgba(255, 255, 255, 0)',
            shadowLineDarkBg: 'rgba(255, 255, 255, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        profitBarAnimationEchart: {
            textColor: '#b2bac2',
            firstAnimationBarColor: '#719efc',
            secondAnimationBarColor: '#5dcfe3',
            splitLineStyleOpacity: '0.06',
            splitLineStyleWidth: '1',
            splitLineStyleColor: '#000000',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: '400',
            tooltipFontSize: '16',
            tooltipBg: '#eef2f5',
            tooltipBorderColor: '#eef2f5',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: '#ff8ea0',
            gradientTo: '#ffa36b',
            shadow: 'rgba(0, 0, 0, 0)',
            shadowBlur: '0',
            axisTextColor: '#b2bac2',
            axisFontSize: '12',
            tooltipBg: '#edf0f4',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
        },
        countryOrders: {
            countryBorderColor: 'rgba(255, 255, 255, 1)',
            countryFillColor: 'rgba(236, 242, 245, 1)',
            countryBorderWidth: '1',
            hoveredCountryBorderColor: 'rgba(113, 158, 252, 1)',
            hoveredCountryFillColor: 'rgba(199, 216, 247, 1)',
            hoveredCountryBorderWidth: '3',
            chartAxisLineColor: 'rgba(0, 0, 0, 0)',
            chartAxisTextColor: '#b2bac2',
            chartAxisFontSize: '16',
            chartGradientTo: 'rgba(113, 158, 252, 1)',
            chartGradientFrom: 'rgba(113, 158, 252, 1)',
            chartAxisSplitLine: '#ebeef2',
            chartShadowLineColor: '#2f296b',
            chartLineBottomShadowColor: 'rgba(113, 158, 252, 1)',
            chartInnerLineColor: '#eceff4',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
        orders: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '20',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#73a1ff',
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: 'rgba(227, 236, 254, 0.7)',
            firstAreaGradTo: 'rgba(227, 236, 254, 0.7)',
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: 'rgba(93, 207, 227, 1)',
            secondLineGradTo: 'rgba(93, 207, 227, 1)',
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: 'rgba(113, 158, 252, 1)',
            thirdLineGradTo: 'rgba(113, 158, 252, 1)',
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: '#ffffff',
            textColor: '#ffffff',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            splitLineColor: 'rgba(161, 161 ,229, 0.2)',
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            // first bar
            firstLineGradFrom: '#719efc',
            firstLineGradTo: '#719efc',
            firstLineShadow: 'rgba(14, 16, 48, 0.4)',
            // second bar
            secondLineGradFrom: '#5dcfe3',
            secondLineGradTo: '#5dcfe3',
            secondLineShadow: 'rgba(14, 16, 48, 0.4)',
            // third bar
            thirdLineGradFrom: '#e3ecfe',
            thirdLineGradTo: '#e3ecfe',
            thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
        },
        orderProfitLegend: {
            firstItem: '#719efc',
            secondItem: '#5dcfe3',
            thirdItem: '#e3ecfe',
        },
        visitors: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '20',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#73a1ff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#73a1ff',
            lineGradTo: '#73a1ff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(146, 181, 252, 1)',
            areaGradTo: 'rgba(146, 181, 252, 1)',
            shadowLineDarkBg: '#a695ff',
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: 'rgba(227, 236, 254, 1)',
            innerAreaGradTo: 'rgba(227, 236, 254, 1)',
        },
        visitorsLegend: {
            firstIcon: '#e3ecfe',
            secondIcon: '#719efc',
        },
        visitorsPie: {
            firstPieGradientLeft: '#94e2ed',
            firstPieGradientRight: '#94e2ed',
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: '#719efc',
            secondPieGradientRight: '#719efc',
            secondPieShadowColor: '#b2cafb',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: '#719efc',
            secondSection: '#99e5ee',
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: '#719efc',
            firstPieGradientRight: '#719efc',
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: '#ff9f6f',
            secondPieGradientRight: '#ff9f6f',
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: '#ff5e83',
            thirdPieGradientRight: '#ff5e83',
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: '#e3ecfe',
            gradTo: '#e3ecfe',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: '400',
            tooltipFontSize: '16',
            tooltipBg: '#eef2f5',
            tooltipBorderColor: '#eef2f5',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.cosmic.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
  \***********************************************/
/*! exports provided: COSMIC_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        profitBarAnimationEchart: {
            textColor: '#ffffff',
            firstAnimationBarColor: '#0088ff',
            secondAnimationBarColor: '#7659ff',
            splitLineStyleOpacity: '0.06',
            splitLineStyleWidth: '1',
            splitLineStyleColor: '#000000',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: '#fc0',
            gradientTo: '#ffa100',
            shadow: '#ffb600',
            shadowBlur: '5',
            axisTextColor: '#a1a1e5',
            axisFontSize: '12',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: '#525dbd',
            countryFillColor: '#4f41a6',
            countryBorderWidth: '2',
            hoveredCountryBorderColor: '#00f9a6',
            hoveredCountryFillColor: '#377aa7',
            hoveredCountryBorderWidth: '3',
            chartAxisLineColor: 'rgba(161, 161 ,229, 0.3)',
            chartAxisTextColor: '#a1a1e5',
            chartAxisFontSize: '16',
            chartGradientTo: '#00c7c7',
            chartGradientFrom: '#00d977',
            chartAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            chartShadowBarColor: '#2f296b',
            chartLineBottomShadowColor: '#00977e',
            chartInnerLineColor: '#2f296b',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
        orders: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: 'rgba(78, 64, 164, 1)',
            firstAreaGradTo: 'rgba(78, 64, 164, 1)',
            firstShadowLineDarkBg: '#018dff',
            // second line
            secondLineGradFrom: '#00bece',
            secondLineGradTo: '#00da78',
            secondAreaGradFrom: 'rgba(38, 139, 145, 0.8)',
            secondAreaGradTo: 'rgba(38, 139, 145, 0.5)',
            secondShadowLineDarkBg: '#2c5a85',
            // third line
            thirdLineGradFrom: '#8069ff',
            thirdLineGradTo: '#8357ff',
            thirdAreaGradFrom: 'rgba(118, 73, 208, 0.7)',
            thirdAreaGradTo: 'rgba(188, 92, 255, 0.4)',
            thirdShadowLineDarkBg: '#a695ff',
        },
        profit: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: '#a1a1e5',
            // first bar
            firstLineGradFrom: '#00bece',
            firstLineGradTo: '#00da78',
            firstLineShadow: 'rgba(14, 16, 48, 0.4)',
            // second bar
            secondLineGradFrom: '#8069ff',
            secondLineGradTo: '#8357ff',
            secondLineShadow: 'rgba(14, 16, 48, 0.4)',
            // third bar
            thirdLineGradFrom: '#4e40a4',
            thirdLineGradTo: '#4e40a4',
            thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
        },
        orderProfitLegend: {
            firstItem: 'linear-gradient(90deg, #00c7c7 0%, #00d977 100%)',
            secondItem: 'linear-gradient(90deg, #a454ff 0%, #7659ff 100%)',
            thirdItem: '#4e40a4',
        },
        visitors: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 1)',
            areaGradTo: 'rgba(188, 92, 255, 0.5)',
            shadowLineDarkBg: '#a695ff',
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: 'rgba(59, 165, 243, 1)',
            innerAreaGradTo: 'rgba(4, 133, 243 , 1)',
        },
        visitorsLegend: {
            firstIcon: 'linear-gradient(90deg, #0088ff 0%, #3dafff 100%)',
            secondIcon: 'linear-gradient(90deg, #a454ff 0%, #7659ff 100%)',
        },
        visitorsPie: {
            firstPieGradientLeft: '#7bff24',
            firstPieGradientRight: '#2ec7fe',
            firstPieShadowColor: '#19977E',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: '#ff894a',
            secondPieGradientRight: '#ffcc10',
            secondPieShadowColor: '#cf7c1c',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: 'linear-gradient(90deg, #ffcb17 0%, #ff874c 100%)',
            secondSection: 'linear-gradient(90deg, #00c7c7 0%, #00d977 100%)',
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: '#00d77f',
            firstPieGradientRight: '#00d77f',
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: '#7756f7',
            secondPieGradientRight: '#7756f7',
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: '#ffca00',
            thirdPieGradientRight: '#ffca00',
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/styles/theme.default.ts":
/*!************************************************!*\
  !*** ./src/app/@theme/styles/theme.default.ts ***!
  \************************************************/
/*! exports provided: DEFAULT_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        profitBarAnimationEchart: {
            textColor: '#484848',
            firstAnimationBarColor: '#3edd81',
            secondAnimationBarColor: '#8d7fff',
            splitLineStyleOpacity: '0.06',
            splitLineStyleWidth: '1',
            splitLineStyleColor: '#000000',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '16',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: '#fc0',
            gradientTo: '#ffa100',
            shadow: '#ffb600',
            shadowBlur: '0',
            axisTextColor: '#b2bac2',
            axisFontSize: '12',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
        },
        countryOrders: {
            countryBorderColor: 'rgba(255, 255, 255, 1)',
            countryFillColor: 'rgba(236, 242, 245, 1)',
            countryBorderWidth: '1',
            hoveredCountryBorderColor: '#40dc7e',
            hoveredCountryFillColor: '#c7f4d9',
            hoveredCountryBorderWidth: '3',
            chartAxisLineColor: 'rgba(0, 0, 0, 0)',
            chartAxisTextColor: '#b2bac2',
            chartAxisFontSize: '16',
            chartGradientTo: '#3edd81',
            chartGradientFrom: '#3bddaf',
            chartAxisSplitLine: '#ebeef2',
            chartShadowLineColor: '#2f296b',
            chartLineBottomShadowColor: '#eceff4',
            chartInnerLineColor: '#eceff4',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
        orders: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '20',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: 'rgba(236, 242, 245, 0.8)',
            firstAreaGradTo: 'rgba(236, 242, 245, 0.8)',
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: 'rgba(164, 123, 255, 1)',
            secondLineGradTo: 'rgba(164, 123, 255, 1)',
            secondAreaGradFrom: 'rgba(188, 92, 255, 0.2)',
            secondAreaGradTo: 'rgba(188, 92, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: 'rgba(55, 220, 136, 1)',
            thirdLineGradTo: 'rgba(55, 220, 136, 1)',
            thirdAreaGradFrom: 'rgba(31 ,106, 124, 0.2)',
            thirdAreaGradTo: 'rgba(4, 126, 230, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        // TODO: need design for default theme
        profit: {
            bg: '#ffffff',
            textColor: '#ffffff',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            splitLineColor: 'rgba(161, 161 ,229, 0.2)',
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            // first bar
            firstLineGradFrom: '#00bece',
            firstLineGradTo: '#00da78',
            firstLineShadow: 'rgba(14, 16, 48, 0.4)',
            // second bar
            secondLineGradFrom: '#8069ff',
            secondLineGradTo: '#8357ff',
            secondLineShadow: 'rgba(14, 16, 48, 0.4)',
            // third bar
            thirdLineGradFrom: 'rgba(236, 242, 245, 0.8)',
            thirdLineGradTo: 'rgba(236, 242, 245, 0.8)',
            thirdLineShadow: 'rgba(14, 16, 48, 0.4)',
        },
        orderProfitLegend: {
            firstItem: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
            secondItem: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
            thirdItem: 'rgba(236, 242, 245, 0.8)',
        },
        visitors: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '20',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            axisFontSize: '16',
            axisTextColor: '#b2bac2',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#42db7d',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(14, 16, 48, 0)',
            areaGradFrom: 'rgba(188, 92, 255, 1)',
            areaGradTo: 'rgba(188, 92, 255, 0.5)',
            shadowLineDarkBg: '#a695ff',
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: 'rgba(60, 221, 156, 1)',
            innerAreaGradTo: 'rgba(60, 221, 156, 1)',
        },
        visitorsLegend: {
            firstIcon: 'linear-gradient(90deg, #3edd81 0%, #3bddad 100%)',
            secondIcon: 'linear-gradient(90deg, #8d7fff 0%, #b17fff 100%)',
        },
        visitorsPie: {
            firstPieGradientLeft: '#8defbb',
            firstPieGradientRight: '#8defbb',
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: '#ff894a',
            secondPieGradientRight: '#ffcc10',
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0',
        },
        visitorsPieLegend: {
            firstSection: 'linear-gradient(90deg, #ffcb17 0%, #ff874c 100%)',
            secondSection: '#8defbb',
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: '#00d77f',
            firstPieGradientRight: '#00d77f',
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: '#7756f7',
            secondPieGradientRight: '#7756f7',
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: '#ffca00',
            thirdPieGradientRight: '#ffca00',
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: 'rgba(188, 92, 255, 0.5)',
            gradTo: 'rgba(188, 92, 255, 0.5)',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            tooltipFontSize: '16',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipBorderWidth: '3',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
};


/***/ }),

/***/ "./src/app/@theme/theme.module.ts":
/*!****************************************!*\
  !*** ./src/app/@theme/theme.module.ts ***!
  \****************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/security */ "./node_modules/@nebular/security/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes */ "./src/app/@theme/pipes/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/@theme/layouts/index.ts");
/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/theme.default */ "./src/app/@theme/styles/theme.default.ts");
/* harmony import */ var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/theme.cosmic */ "./src/app/@theme/styles/theme.cosmic.ts");
/* harmony import */ var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/theme.corporate */ "./src/app/@theme/styles/theme.corporate.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.service */ "./src/app/@theme/services/api.service.ts");
/* harmony import */ var _services_app_toastr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/app-toastr.service */ "./src/app/@theme/services/app-toastr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "./src/app/@theme/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/print.service */ "./src/app/@theme/services/print.service.ts");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/@theme/components/permission/permission.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var BASE_MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
var NB_MODULES = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRouteTabsetModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbUserModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbActionsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSearchModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCheckboxModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbPopoverModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbContextMenuModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
    _nebular_security__WEBPACK_IMPORTED_MODULE_5__["NbSecurityModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbProgressBarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCalendarModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCalendarRangeModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAccordionModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbWindowModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSpinnerModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbRadioModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCalendarKitModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
    ngx_papaparse__WEBPACK_IMPORTED_MODULE_16__["PapaParseModule"]
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"],
    _components__WEBPACK_IMPORTED_MODULE_6__["TinyMCEComponent"],
    _layouts__WEBPACK_IMPORTED_MODULE_8__["SampleLayoutComponent"],
    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"],
    _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_19__["PermissionComponent"]
];
var ENTRY_COMPONENTS = [
    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmDialogComponent"],
    _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_19__["PermissionComponent"]
];
var PIPES = [
    _pipes__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["PluralPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["RoundPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["NumberWithCommasPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_7__["EvaIconsPipe"],
];
var NB_THEME_PROVIDERS = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({
    name: 'default',
}, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_10__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_11__["CORPORATE_THEME"]]).providers.concat(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSidebarModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbWindowModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrModule"].forRoot().providers, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbChatModule"].forRoot({
    messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
}).providers, [
    _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
    _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
    _services_app_toastr_service__WEBPACK_IMPORTED_MODULE_14__["AppToastrService"],
    _services_print_service__WEBPACK_IMPORTED_MODULE_18__["PrintService"],
]);
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule_1 = ThemeModule;
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    var ThemeModule_1;
    ThemeModule = ThemeModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: BASE_MODULES.concat(NB_MODULES),
            exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
            declarations: COMPONENTS.concat(PIPES),
            entryComponents: ENTRY_COMPONENTS.slice(),
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_components_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./@theme/components/print-layout/print-layout.component */ "./src/app/@theme/components/print-layout/print-layout.component.ts");
/* harmony import */ var _theme_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@theme/components/invoice/invoice.component */ "./src/app/@theme/components/invoice/invoice.component.ts");
/* harmony import */ var _theme_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@theme/guard/auth-guard.service */ "./src/app/@theme/guard/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [_theme_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#NgxAuthModule',
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
    {
        path: 'print',
        outlet: 'print',
        component: _theme_components_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrintLayoutComponent"],
        children: [
            { path: 'invoice/:invoiceIds', component: _theme_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"] }
        ]
    },
    {
        path: 'export',
        component: _theme_components_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_2__["PrintLayoutComponent"],
        children: [
            { path: 'invoice', component: _theme_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"] }
        ]
    }
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@core/utils/analytics.service */ "./src/app/@core/utils/analytics.service.ts");
/* harmony import */ var _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme/components/menu/menu.service */ "./node_modules/@nebular/theme/components/menu/menu.service.js");
/* harmony import */ var _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./@theme/services/auth.service */ "./src/app/@theme/services/auth.service.ts");
/* harmony import */ var _theme_services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@theme/services/print.service */ "./src/app/@theme/services/print.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */





var AppComponent = /** @class */ (function () {
    function AppComponent(analytics, menuService, authService, printService) {
        var _this = this;
        this.analytics = analytics;
        this.menuService = menuService;
        this.authService = authService;
        this.printService = printService;
        this.menuService.onItemClick()
            .subscribe(function (event) {
            _this.onContecxtItemSelection(event.item.title);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser")) {
            var user = JSON.parse(localStorage.getItem("currentUser"));
            var user_permission = JSON.parse(localStorage.getItem("currentUserPermission"));
            var token = JSON.parse(localStorage.getItem("currentUserToken"));
            this.authService.currentUser.next({ 'user': user, 'user_permission': user_permission, 'token': token });
        }
        this.analytics.trackPageViews();
    };
    AppComponent.prototype.onContecxtItemSelection = function (title) {
        if (title === 'Log Out') {
            this.authService.logout();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-app',
            template: '<div [class.isPrinting]="printService.isPrinting">  <router-outlet></router-outlet><router-outlet id="print1" name="print"></router-outlet></div>',
        }),
        __metadata("design:paramtypes", [_core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"], _nebular_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["NbMenuService"],
            _theme_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _theme_services_print_service__WEBPACK_IMPORTED_MODULE_4__["PrintService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _theme_helpers_jwt_interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@theme/helpers/jwt.interceptors */ "./src/app/@theme/helpers/jwt.interceptors.ts");
/* harmony import */ var _theme_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./@theme/guard/auth.guard */ "./src/app/@theme/guard/auth.guard.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _theme_components_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./@theme/components/print-layout/print-layout.component */ "./src/app/@theme/components/print-layout/print-layout.component.ts");
/* harmony import */ var _theme_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./@theme/components/invoice/invoice.component */ "./src/app/@theme/components/invoice/invoice.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _theme_components_print_layout_print_layout_component__WEBPACK_IMPORTED_MODULE_13__["PrintLayoutComponent"],
                _theme_components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [
                _theme_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _theme_helpers_jwt_interceptors__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"], useValue: '/' },
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api: 'https://journey360.ai/api',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/harshit/Desktop/ngx-wireframe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map