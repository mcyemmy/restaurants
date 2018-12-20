(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/restaurant-list/restaurant-list.component */ "./src/app/component/restaurant-list/restaurant-list.component.ts");
/* harmony import */ var _component_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/restaurant-detail/restaurant-detail.component */ "./src/app/component/restaurant-detail/restaurant-detail.component.ts");





var routes = [
    {
        path: '',
        children: [
            { path: '', component: _component_restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_3__["RestaurantListComponent"] },
            { path: 'list', component: _component_restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_3__["RestaurantListComponent"] },
            { path: 'detail/:value', component: _component_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_4__["RestaurantDetailComponent"] },
            { path: '**', redirectTo: '/list' },
            { path: '', redirectTo: '/list', pathMatch: 'full' }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'restaurants';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/restaurant-list/restaurant-list.component */ "./src/app/component/restaurant-list/restaurant-list.component.ts");
/* harmony import */ var _component_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/restaurant-detail/restaurant-detail.component */ "./src/app/component/restaurant-detail/restaurant-detail.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _component_restaurant_list_restaurant_list_component__WEBPACK_IMPORTED_MODULE_9__["RestaurantListComponent"],
                _component_restaurant_detail_restaurant_detail_component__WEBPACK_IMPORTED_MODULE_10__["RestaurantDetailComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"navigate\" [ngClass]=\"{hide: hidenElement === true}\" (click)=\"gotToPreviousPage()\">\r\n    <img src=\"assets/navigate.png\">\r\n  </div>\r\n  <div class=\"banner\">Lunch Tyme</div>\r\n  <div class=\"directory\">\r\n    <img src=\"assets/directory.png\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/header/header.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  height: 65px;\n  padding: 10px;\n  color: #fff;\n  font-weight: bold;\n  background: #43e895;\n  align-items: flex-end; }\n  .container .navigate img, .container .directory img {\n    align-self: flex-start; }\n  .container .navigate {\n    cursor: pointer;\n    width: 10px;\n    padding-right: 10px;\n    padding-left: 10px; }\n  .container .navigate img {\n      width: 10px;\n      height: 20px; }\n  .container .directory img {\n    width: 40px;\n    height: 40px; }\n  .container .banner {\n    width: 70%;\n    text-align: center;\n    align-self: center;\n    margin-top: 25px; }\n  .container .hide {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9DOlxcVXNlcnNcXGFvdGV5b3dvXFxEcm9wYm94XFxwcm9qZWN0c1xcYm90dGxlLXJvY2tldHMtZXhhbVxccmVzdGF1cmFudHMvc3JjXFxhcHBcXGNvbXBvbmVudFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsYUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixzQkFBcUIsRUE0QnhCO0VBbkNEO0lBVVEsdUJBQXNCLEVBQ3pCO0VBWEw7SUFhUSxnQkFBZTtJQUNmLFlBQVc7SUFDWCxvQkFBbUI7SUFDbkIsbUJBQWtCLEVBS3JCO0VBckJMO01Ba0JZLFlBQVc7TUFDWCxhQUFZLEVBQ2Y7RUFwQlQ7SUF1QlEsWUFBVztJQUNYLGFBQVksRUFDZjtFQXpCTDtJQTJCUSxXQUFVO0lBQ1YsbUJBQWtCO0lBQ2xCLG1CQUFrQjtJQUNsQixpQkFBZ0IsRUFDbkI7RUEvQkw7SUFpQ1EsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmOyAvLyBDb3VsZCBiZSAkd2hpdGUgaWYgSSB1c2VkIHZhcmlhYmxlcy5zY3NzXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICM0M2U4OTU7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgLm5hdmlnYXRlIGltZywgLmRpcmVjdG9yeSBpbWcge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAubmF2aWdhdGUge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXJlY3RvcnkgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuICAgIC5oaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.hidenElement = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.gotToPreviousPage = function () {
        this.router.navigate(['/list']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "hidenElement", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/component/restaurant-detail/restaurant-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/component/restaurant-detail/restaurant-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div #gmap class=\"map\"></div>\r\n<div class=\"info\">\r\n  <p *ngIf=\"name\">{{ name }}</p>\r\n  <p *ngIf=\"name\">{{ restaurantDetail[0].category }}</p>\r\n</div>\r\n<div class=\"address\">\r\n  <p *ngIf=\"address\">{{ address }}</p>\r\n  <p *ngIf=\"formattedAddress\">{{ formattedAddress }}</p>\r\n</div>\r\n<div class=\"contact\">\r\n  <p *ngIf=\"phone\">{{ phone }}</p>\r\n  <p *ngIf=\"twitter\">@{{ twitter }}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/restaurant-detail/restaurant-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/component/restaurant-detail/restaurant-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  width: 100%;\n  height: 180px; }\n\n.info {\n  height: 30px;\n  background: #34b379;\n  color: #fff;\n  padding: 20px 10px 20px; }\n\n.info :nth-child(1) {\n    font-weight: bold;\n    font-size: 16px; }\n\n.info p {\n    margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Jlc3RhdXJhbnQtZGV0YWlsL0M6XFxVc2Vyc1xcYW90ZXlvd29cXERyb3Bib3hcXHByb2plY3RzXFxib3R0bGUtcm9ja2V0cy1leGFtXFxyZXN0YXVyYW50cy9zcmNcXGFwcFxcY29tcG9uZW50XFxyZXN0YXVyYW50LWRldGFpbFxccmVzdGF1cmFudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFVO0VBQ1YsY0FDSixFQUFDOztBQUNEO0VBQ0ksYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsd0JBQXVCLEVBVTFCOztBQWREO0lBT1Esa0JBQWlCO0lBQ2pCLGdCQUFlLEVBQ2xCOztBQVRMO0lBWVEsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Jlc3RhdXJhbnQtZGV0YWlsL3Jlc3RhdXJhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjE4MHB4XHJcbn1cclxuLmluZm8ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM0YjM3OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4IDIwcHg7XHJcblxyXG4gICAgOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/component/restaurant-detail/restaurant-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/component/restaurant-detail/restaurant-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: RestaurantDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantDetailComponent", function() { return RestaurantDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_call_Api_Once_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/call-Api-Once.service */ "./src/app/service/call-Api-Once.service.ts");




var RestaurantDetailComponent = /** @class */ (function () {
    function RestaurantDetailComponent(callApiOnceService, activatedRoute, router) {
        this.callApiOnceService = callApiOnceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restaurants = [];
        this.restaurantDetail = [];
        this.noData = false;
    }
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        this.getRestaurantData();
    };
    RestaurantDetailComponent.prototype.getRestaurantData = function () {
        var _this = this;
        // Receive restaurant data from restaurant listing component
        this.subscription = this.callApiOnceService.getApiData().subscribe(function (res) {
            if (res) {
                _this.restaurants = res;
                var restaurantName_1 = _this.activatedRoute.snapshot.params.value;
                restaurantName_1 = restaurantName_1.replace(/-/g, " ").toLowerCase();
                _this.restaurantDetail = _this.restaurants.filter(function (item) { return (item.name).toLowerCase() === restaurantName_1; });
                // Check for undefined before assigning value because some restaurants does not have the required value
                _this.name = (_this.restaurantDetail[0].name) ? _this.restaurantDetail[0].name : '';
                _this.category = (_this.restaurantDetail[0].category) ? _this.restaurantDetail[0].category : '';
                _this.address = (_this.restaurantDetail[0].location) ? _this.restaurantDetail[0].location.address : '';
                _this.formattedAddress = (_this.restaurantDetail[0].location) ? _this.restaurantDetail[0].location.formattedAddress[1] : '';
                _this.phone = (_this.restaurantDetail[0].contact) ? _this.restaurantDetail[0].contact.formattedPhone : '';
                _this.twitter = (_this.restaurantDetail[0].contact) ? _this.restaurantDetail[0].contact.twitter : '';
                _this.loadMapData();
            }
            else {
                _this.noData = true;
                _this.router.navigate(['/list']);
            }
        }, function (error) {
            console.error(error);
            _this.noData = true;
        });
    };
    RestaurantDetailComponent.prototype.loadMapData = function () {
        var mapProp = {
            center: new google.maps.LatLng(this.restaurantDetail[0].location.lat, this.restaurantDetail[0].location.lat),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var infowindow = new google.maps.InfoWindow({});
        var marker, i = 0;
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.restaurantDetail[i].location.lat, this.restaurantDetail[i].location.lat),
            map: this.map
        });
        var restaurant = this.restaurantDetail[i];
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(restaurant.location.address + ' ' +
                    restaurant.location.formattedAddress[1] + ' ' +
                    restaurant.location.formattedAddress[2]);
                infowindow.open(this.map, marker);
            };
        })(marker, i));
    };
    RestaurantDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RestaurantDetailComponent.prototype, "gmapElement", void 0);
    RestaurantDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-detail',
            template: __webpack_require__(/*! ./restaurant-detail.component.html */ "./src/app/component/restaurant-detail/restaurant-detail.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-detail.component.scss */ "./src/app/component/restaurant-detail/restaurant-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_call_Api_Once_service__WEBPACK_IMPORTED_MODULE_3__["CallApiOnceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/restaurant-list/restaurant-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/restaurant-list/restaurant-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [hidenElement]=\"true\"></app-header>\r\n<main>\r\n  <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"2:1\" (window:resize)=\"onResize($event)\">\r\n      <mat-grid-tile \r\n        *ngFor=\"let item of restaurants\" \r\n        [ngStyle]=\"{'background': 'url(' + item.backgroundImageURL + ')'}\"\r\n        (click)=\"gotToDetailsPage(item.name)\">\r\n        <div class=\"info\">\r\n          <p>{{ item.name }}</p>\r\n          <p>{{ item.category }}</p>\r\n        </div>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n</main>\r\n\r\n\r\n\r\n\r\n  <!-- <ul>\r\n    <li *ngFor=\"let item of restaurants\" [ngStyle]=\"{'background': 'url(' + item.backgroundImageURL + ')'}\" class=\"restaurant-info\">\r\n      <p>{{ item.name }}</p>\r\n      <p>{{ item.category }}</p>\r\n    </li>\r\n  </ul> -->"

/***/ }),

/***/ "./src/app/component/restaurant-list/restaurant-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/restaurant-list/restaurant-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-grid-tile {\n  cursor: pointer; }\n  ::ng-deep .mat-grid-tile figure.mat-figure {\n    align-items: flex-end;\n    justify-content: flex-start; }\n  ::ng-deep .mat-grid-tile figure.mat-figure .info {\n      color: #fff;\n      padding-left: 12px; }\n  ::ng-deep .mat-grid-tile figure.mat-figure .info :nth-child(1) {\n        font-weight: bold; }\n  ::ng-deep .mat-grid-tile figure.mat-figure .info :nth-child(2) {\n        font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Jlc3RhdXJhbnQtbGlzdC9DOlxcVXNlcnNcXGFvdGV5b3dvXFxEcm9wYm94XFxwcm9qZWN0c1xcYm90dGxlLXJvY2tldHMtZXhhbVxccmVzdGF1cmFudHMvc3JjXFxhcHBcXGNvbXBvbmVudFxccmVzdGF1cmFudC1saXN0XFxyZXN0YXVyYW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZSxFQWtCbEI7RUFwQkw7SUFLWSxzQkFBcUI7SUFDckIsNEJBQTJCLEVBYTlCO0VBbkJUO01BU2dCLFlBQVc7TUFDWCxtQkFBa0IsRUFRckI7RUFsQmI7UUFhb0Isa0JBQWlCLEVBQ3BCO0VBZGpCO1FBZ0JvQixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXN0YXVyYW50LWxpc3QvcmVzdGF1cmFudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtZ3JpZC10aWxlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGZpZ3VyZS5tYXQtZmlndXJlIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/restaurant-list/restaurant-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/restaurant-list/restaurant-list.component.ts ***!
  \************************************************************************/
/*! exports provided: RestaurantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantListComponent", function() { return RestaurantListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/restaurant.service */ "./src/app/service/restaurant.service.ts");
/* harmony import */ var _service_call_Api_Once_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/call-Api-Once.service */ "./src/app/service/call-Api-Once.service.ts");





var RestaurantListComponent = /** @class */ (function () {
    function RestaurantListComponent(resService, callApiOnceService, router) {
        this.resService = resService;
        this.callApiOnceService = callApiOnceService;
        this.router = router;
        this.restaurants = [];
        this.noData = false;
    }
    RestaurantListComponent.prototype.ngOnInit = function () {
        this.getRestaurantData();
        this.breakpoint = (window.innerWidth < 415) ? 1 : 2;
    };
    RestaurantListComponent.prototype.onResize = function (event) {
        // Assign display column value to breakpoint based on viewport size
        this.breakpoint = (event.target.innerWidth < 415) ? 1 : 2;
    };
    RestaurantListComponent.prototype.getRestaurantData = function () {
        var _this = this;
        // Subscribe to restaurant data service
        this.subscription = this.resService.getRestaurants().subscribe(function (res) {
            if (res) {
                _this.restaurants = res['restaurants'];
            }
            else {
                _this.noData = true;
            }
        }, function (error) {
            console.error(error);
            _this.noData = true;
        });
    };
    RestaurantListComponent.prototype.gotToDetailsPage = function (event) {
        this.callApiOnceService.passApiData(this.restaurants);
        var path = event.replace(/\s/g, "-").toLowerCase();
        this.router.navigate(['/detail', path]);
    };
    RestaurantListComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    RestaurantListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurant-list',
            template: __webpack_require__(/*! ./restaurant-list.component.html */ "./src/app/component/restaurant-list/restaurant-list.component.html"),
            styles: [__webpack_require__(/*! ./restaurant-list.component.scss */ "./src/app/component/restaurant-list/restaurant-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_restaurant_service__WEBPACK_IMPORTED_MODULE_3__["RestaurantService"],
            _service_call_Api_Once_service__WEBPACK_IMPORTED_MODULE_4__["CallApiOnceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RestaurantListComponent);
    return RestaurantListComponent;
}());



/***/ }),

/***/ "./src/app/service/call-Api-Once.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/call-Api-Once.service.ts ***!
  \**************************************************/
/*! exports provided: CallApiOnceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallApiOnceService", function() { return CallApiOnceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CallApiOnceService = /** @class */ (function () {
    function CallApiOnceService() {
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    CallApiOnceService.prototype.passApiData = function (restaurantDetails) {
        this.state$.next(restaurantDetails);
    };
    CallApiOnceService.prototype.getApiData = function () {
        return this.state$.asObservable();
    };
    CallApiOnceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallApiOnceService);
    return CallApiOnceService;
}());



/***/ }),

/***/ "./src/app/service/restaurant.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/restaurant.service.ts ***!
  \***********************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RestaurantService = /** @class */ (function () {
    function RestaurantService(httpClient) {
        this.httpClient = httpClient;
    }
    RestaurantService.prototype.getRestaurants = function () {
        return this.httpClient
            .get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestaurantService);
    return RestaurantService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\aoteyowo\Dropbox\projects\bottle-rockets-exam\restaurants\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map