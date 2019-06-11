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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-slider {\n    position: relative;\n    height: calc(100vh - 96px) !important;\n}\n\n.about-slider .carousel-fixed-item {\n    position: absolute;\n    top: calc(140px);\n    left: 0;\n}\n\n.about-slider .carousel-item {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.about-slider .carousel-item:before {\n  content: \"\";\n  position: fixed;\n  top: 0; bottom: 0; left: 0; right: 0; \n  background: rgba(0, 45, 84, 0.2);\n  pointer-events: none;\n}\n\n.about-slider .carousel-item div {\n    position: absolute;\n    bottom: 10%;\n    font-size: 1.6em;\n    font-weight: 700;\n}\n\n.about-desc {\n    font-weight: 700;\n    font-size: 1.6em;\n}\n\n.history-item {\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 12px;\n    margin-top: 20px !important;\n    margin-bottom: 20px !important;\n    overflow: hidden;\n}\n\n.history-item .history-image {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.history-item .history-image img {\n    display: none;\n}\n\n.history-content {\n    height: 100%;\n    padding: 20px !important;\n    overflow-y: auto;\n}\n\n.history-title {\n    font-size: 3em;\n    padding: 16px;\n    width: 100%;\n    height: 600px;\n    display: table-cell;\n    vertical-align: bottom;\n    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n}\n\n.history-desc {\n    font-size: 1.4em;\n    opacity: 0.7;\n}\n\n@media only screen and (max-width: 1400px) {\n\n    .about-slider .carousel-fixed-item {\n        top: calc(80px);\n    }\n\n    .about-slider {\n        height: calc(100vh - 78px) !important;\n    }\n    \n    .history-desc {\n        font-size: 1em;\n    }\n\n    .history-title {\n        height: 400px;\n    }\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.about-slider {\n    /* remove some height to account for address bar */\n    height: 700px !important;\n}\n\n.about-desc {\n    max-width: 100%;\n}\n\n.history-item {\n    display: block;\n}\n\n.history-item .history-image img {\n    display: block;\n    width: 100%;\n}\n\n.history-item .history-image {\n    background: none !important;\n}\n\n.history-title {\n    height: initial !important;\n    text-shadow: none;\n}\n\n.about-slider .carousel-item .page-container {\n    font-size: 1.4em;\n    line-height: 1.4;\n}\n\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container igreen white-text japanese-violet\">\n  \n  <div class=\"nav-top\">\n    <a routerLink=\"/sponsors\"><i class=\"material-icons white-text\">keyboard_arrow_up</i></a>\n  </div>\n  \n</div>\n\n\n<div class=\"about-slider carousel carousel-slider\">\n  <div class=\"carousel-fixed-item page-container\">\n    <div class=\"page-title white-text bold\">ABOUT US</div>\n  </div>\n  <div *ngFor=\"let item of aboutDesc\">\n    <a class=\"carousel-item\" [style.backgroundImage]=\"'url(' + (isMobile() ? item.mobileImage : item.image) + ')'\" [href]=\"item.href\">\n      <div class=\"page-container white-text monserrat bold\" [innerHTML]=\"item.desc\"></div>\n    </a>\n  </div>\n</div>\n\n<div class=\"page-container igreen white-text japanese-violet\">\n\n  <div class=\"page-content\">\n    <br /><br /><br />\n    <div class=\"history-item\" *ngFor=\"let item of history\">\n      <div class=\"row\">\n        <div class=\"history-image\" [style.backgroundImage]=\"'url(' + item.image + ')'\">\n          <img src=\"{{ item.image }}\"/>\n          <div class=\"history-title azuki iwhite-text\">{{ item.year }}</div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"history-content\">\n          <div class=\"history-desc monserrat\" [innerHTML]=\"item.desc\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/contact-us\"><i class=\"material-icons white-text\">keyboard_arrow_down</i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: sliderCurrent, sliderEvent, sliderNext, aboutInit, AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCurrent", function() { return sliderCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderEvent", function() { return sliderEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderNext", function() { return sliderNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutInit", function() { return aboutInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABOUT = __webpack_require__(/*! ../../assets/data/about.json */ "./src/assets/data/about.json");
var sliderCurrent = 0;
var sliderEvent;
function sliderNext() {
    sliderEvent = setTimeout(function () {
        var element = document.querySelectorAll('.about-slider')[0];
        var instance = materialize_css__WEBPACK_IMPORTED_MODULE_1__["Carousel"].getInstance(element);
        if (sliderCurrent !== instance.center) {
            aboutInit();
            return;
        }
        instance.next();
        sliderCurrent = (sliderCurrent + 1) % ABOUT.about_desc.length;
        sliderNext();
    }, ABOUT.about_desc[sliderCurrent].delay * 1000);
}
function aboutInit() {
    clearTimeout(sliderEvent);
    var elements = document.querySelectorAll('.about-slider');
    var instance = materialize_css__WEBPACK_IMPORTED_MODULE_1__["Carousel"].getInstance(elements[0]);
    if (instance) {
        sliderCurrent = instance.center;
    }
    else {
        sliderCurrent = 0;
        var slider = materialize_css__WEBPACK_IMPORTED_MODULE_1__["Carousel"].init(elements, {
            fullWidth: true,
            indicators: true
        });
    }
    sliderNext();
}
var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this.aboutDesc = ABOUT.about_desc;
        this.history = ABOUT.history;
        this.slider = undefined;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_4__["isMobile"];
        this.titleService.setTitle('Incident 2019 - About');
    }
    AboutComponent.prototype.ngOnInit = function () {
        document.addEventListener('DOMContentLoaded', function () {
            aboutInit();
        });
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_3__["whiteHeader"])();
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("IncidentPage => HomePage,\n                StatisticsPage => IncidentPage,\n                EventsPage => StatisticsPage,\n                iCarePage => EventsPage,\n                SponsorsPage => iCarePage,\n                AboutPage => SponsorsPage,\n                ContactUsPage => AboutPage,\n                ContactUsPage => HomePage", [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(+100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("HomePage => IncidentPage,\n                IncidentPage => StatisticsPage,\n                StatisticsPage => EventsPage,\n                EventsPage => iCarePage,\n                iCarePage => SponsorsPage,\n                SponsorsPage => AboutPage,\n                SponsorsPage => ContactUsPage,\n                AboutPage => ContactUsPage", [
        /* order */
        /* 1 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        /* 2 */ Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    bottom: '0',
                    transform: 'translateY(0%)'
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-background></app-background>\n<app-header></app-header>\n<div [@routerTransition]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</div>\n<app-footer *ngIf=\"!isMobile()\"></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: isHome, getPath, isMobile, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHome", function() { return isHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function isHome() {
    return window.location.pathname === '/';
}
function getPath() {
    var path = window.location.pathname.replace('/', '');
    return path === '' ? 'home' : path;
}
function isMobile() {
    return window.outerWidth <= 800;
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isMobile = isMobile;
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                _animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]
            ]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _icare_icare_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icare/icare.component */ "./src/app/icare/icare.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _incident_incident_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./incident/incident.component */ "./src/app/incident/incident.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _fourohfour_fourohfour_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fourohfour/fourohfour.component */ "./src/app/fourohfour/fourohfour.component.ts");
/* harmony import */ var _fivehundred_fivehundred_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fivehundred/fivehundred.component */ "./src/app/fivehundred/fivehundred.component.ts");
/* harmony import */ var _verzeo_verzeo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./verzeo/verzeo.component */ "./src/app/verzeo/verzeo.component.ts");
/* harmony import */ var _cse_cse_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cse/cse.component */ "./src/app/cse/cse.component.ts");
/* harmony import */ var _civil_civil_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./civil/civil.component */ "./src/app/civil/civil.component.ts");
/* harmony import */ var _mech_mech_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mech/mech.component */ "./src/app/mech/mech.component.ts");
/* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./management/management.component */ "./src/app/management/management.component.ts");
/* harmony import */ var _ece_ece_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ece/ece.component */ "./src/app/ece/ece.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { TestimonialsComponent } from './testimonials/testimonials.component';


















var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: {
            title: 'Incident 2019',
            animation: 'HomePage'
        },
    },
    {
        path: 'incident',
        component: _incident_incident_component__WEBPACK_IMPORTED_MODULE_14__["IncidentComponent"],
        data: {
            title: 'Incident 2019 - Incident',
            animation: 'IncidentPage'
        }
    },
    {
        path: 'statistics',
        component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"],
        data: {
            title: 'Incident 2019 - Statistics',
            animation: 'StatisticsPage'
        }
    },
    {
        path: 'events',
        component: _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
        data: {
            title: 'Incident 2019 - Events',
            animation: 'EventsPage'
        }
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        data: {
            title: 'Incident 2019 - About',
            animation: 'AboutPage'
        }
    },
    {
        path: 'icare',
        component: _icare_icare_component__WEBPACK_IMPORTED_MODULE_9__["IcareComponent"],
        data: {
            title: 'Incident 2019 - iCare',
            animation: 'iCarePage'
        }
    },
    {
        path: 'sponsors',
        component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_10__["SponsorsComponent"],
        data: {
            title: 'Incident 2019 - Sponsors',
            animation: 'SponsorsPage'
        }
    },
    {
        path: 'contact-us',
        component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
        data: {
            title: 'Incident 2019 - Contact Us',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships',
        component: _verzeo_verzeo_component__WEBPACK_IMPORTED_MODULE_19__["VerzeoComponent"],
        data: {
            title: 'Incident 2019 - verzeo',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships/cse',
        component: _cse_cse_component__WEBPACK_IMPORTED_MODULE_20__["CseComponent"],
        data: {
            title: 'Incident 2019 - cse',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships/mech',
        component: _mech_mech_component__WEBPACK_IMPORTED_MODULE_22__["MechComponent"],
        data: {
            title: 'Incident 2019 - mech',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships/civil',
        component: _civil_civil_component__WEBPACK_IMPORTED_MODULE_21__["CivilComponent"],
        data: {
            title: 'Incident 2019 - civil',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships/management',
        component: _management_management_component__WEBPACK_IMPORTED_MODULE_23__["ManagementComponent"],
        data: {
            title: 'Incident 2019 - management',
            animation: 'ContactUsPage'
        }
    },
    {
        path: 'internships/ece',
        component: _ece_ece_component__WEBPACK_IMPORTED_MODULE_24__["EceComponent"],
        data: {
            title: 'Incident 2019 - ece',
            animation: 'ContactUsPage'
        }
    },
    {
        path: '404',
        component: _fourohfour_fourohfour_component__WEBPACK_IMPORTED_MODULE_17__["FourohfourComponent"],
        data: {
            title: 'Incident 2019 - Error 404',
            animation: ''
        }
    }, {
        path: '500',
        component: _fivehundred_fivehundred_component__WEBPACK_IMPORTED_MODULE_18__["FivehundredComponent"],
        data: {
            title: 'Incident 2019 - Error 500',
            animation: ''
        }
    },
    { path: '**', component: _fourohfour_fourohfour_component__WEBPACK_IMPORTED_MODULE_17__["FourohfourComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"],
                // TestimonialsComponent,
                _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _icare_icare_component__WEBPACK_IMPORTED_MODULE_9__["IcareComponent"],
                _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_10__["SponsorsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
                _incident_incident_component__WEBPACK_IMPORTED_MODULE_14__["IncidentComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_16__["BackgroundComponent"],
                _fourohfour_fourohfour_component__WEBPACK_IMPORTED_MODULE_17__["FourohfourComponent"],
                _fivehundred_fivehundred_component__WEBPACK_IMPORTED_MODULE_18__["FivehundredComponent"],
                _verzeo_verzeo_component__WEBPACK_IMPORTED_MODULE_19__["VerzeoComponent"],
                _cse_cse_component__WEBPACK_IMPORTED_MODULE_20__["CseComponent"],
                _civil_civil_component__WEBPACK_IMPORTED_MODULE_21__["CivilComponent"],
                _mech_mech_component__WEBPACK_IMPORTED_MODULE_22__["MechComponent"],
                _management_management_component__WEBPACK_IMPORTED_MODULE_23__["ManagementComponent"],
                _ece_ece_component__WEBPACK_IMPORTED_MODULE_24__["EceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-image {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: -100;\n    background: url(/assets/images/bg-grayscale.jpg) no-repeat center center fixed;\n    background-size: cover;\n}"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-image\" id=\"background-image\"></div>"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        if (window.outerWidth <= 800
            && navigator.userAgent.indexOf('Safari') !== -1
            && navigator.userAgent.indexOf('Android') === -1
            && navigator.userAgent.indexOf('Chrome') === -1
            && navigator.userAgent.indexOf('Mozilla') === -1) {
            // Safari doesn't support fixed background images, remove the image.
            jquery__WEBPACK_IMPORTED_MODULE_1__('.background-image').css({ background: '#D3D3D3' });
        }
    };
    BackgroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/civil/civil.component.css":
/*!*******************************************!*\
  !*** ./src/app/civil/civil.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.m8 li {\n    list-style-type: disc !important;\n    padding-right: 24px !important;\n}\n\ndiv.col, li, h6 {\n    font-size: 1.1em;\n}\n\n@media only screen and (max-width: 1400px) {\n\ndiv.col, li, h6 {\n    font-size: 1.0em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.col.m8 li {\n    padding-right: 0;\n}\n\n}"

/***/ }),

/***/ "./src/app/civil/civil.component.html":
/*!********************************************!*\
  !*** ./src/app/civil/civil.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container monserrat blue-yonder white-text\">\n  <br>\n  <br>\n  <br>\n  <div class=\"page-title\">CIVIL / ARCHITECTURE</div>\n  <div class=\"row\">\n    <br>\n    <br>\n    <h3 class=\"azuki\" style=\"text-align:left\">ERP</h3>\n    <div class=\"col s12 m8\">\n      <h6>What you will learn?</h6>\n      <ul>\n        <li>Get to learn about the streamline and management of the workflow through the organization because of a\n          single integrated system.\n        </li>\n        <li>Gain a thorough knowledge about courses like SAP, Oracle EBS, and Microsoft NA</li>\n        <li>Get introduced with the dynamic ERP training process and reap the ERP system benefits for any organization.\n        </li>\n      </ul>\n      <h6>What you will get?</h6>\n      <ul>\n        <li>Project Letter issued on successful submission </li>\n        <li>Guaranteed Internship in one of the 300+ companies</li>\n      </ul>\n      <h6>Projects</h6>\n      <ul>\n        <li>One Minor Project</li>\n        <li>One Major Project</li>\n      </ul>\n      <br>\n      <br>\n\n      <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n        Internship</a>\n      &nbsp;\n      <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n        Internship</a>\n      <br>\n      <br>\n    </div>\n    <img src=\"/assets/images/departments/ERP.jpg\" class=\"col s12 m4 rounded-image \" alt=\"\">\n  </div>\n  <div class=\"row\">\n    <br>\n    <br>\n    <h3 class=\"azuki\" style=\"text-align:left\">Structural Analysis of high rise building</h3>\n    <div class=\"col s12 m8\">\n      <h6>What you will learn?</h6>\n      <ul>\n        <li>Learn about the high rise buildings which are stiffened by braced flames as well as shear walls.\n\n        </li>\n        <li>Use an analytical method for the analysis of a real high rise structure.\n        </li>\n        <li>Learn about the loading distribution of the external force among the various bracings.\n\n        </li>\n      </ul>\n      <h6>What you will get?</h6>\n      <ul>\n        <li>Project Letter issued on successful submission </li>\n        <li>Guaranteed Internship in one of the 300+ companies</li>\n      </ul>\n      <h6>Projects</h6>\n      <ul>\n        <li>One Minor Project</li>\n        <li>One Major Project</li>\n      </ul>\n      <br>\n      <br>\n\n      <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n        Internship</a>\n      &nbsp;\n      <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n        Internship</a>\n      <br>\n      <br>\n    </div>\n    <img src=\"/assets/images/departments/Structural Analysis.jpg\" class=\"col s12 m4 rounded-image \" alt=\"\">\n  </div>\n  <div class=\"row\">\n    <br>\n    <br>\n    <h3 class=\"azuki\" style=\"text-align:left\">Construction Planning & Management</h3>\n    <div class=\"col s12 m8\">\n      <h6>What you will learn?</h6>\n      <ul>\n        <li>Learn and understand the building adaptation management.\n\n        </li>\n        <li>Get to know the different sustainability challenges that are faced in building adaptations.\n\n        </li>\n        <li>Apply the project management tools which help in making decisions about the building adaptations.\n\n        </li>\n      </ul>\n      <h6>What you will get?</h6>\n      <ul>\n        <li>Project Letter issued on successful submission </li>\n        <li>Guaranteed Internship in one of the 300+ companies</li>\n      </ul>\n      <h6>Projects</h6>\n      <ul>\n        <li>One Minor Project</li>\n        <li>One Major Project</li>\n      </ul>\n      <br>\n      <br>\n\n      <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n        Internship</a>\n      &nbsp;\n      <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n        Internship</a>\n      <br>\n      <br>\n    </div>\n      <img src=\"/assets/images/departments/Construction Planning.jpg\" class=\"col s12 m4 rounded-image \" alt=\"\">\n  </div>\n  <div class=\"row\">\n    <br>\n    <br>\n    <h3 class=\"azuki\" style=\"text-align:left\">Automobile - CAD</h3>\n    <div class=\"col s12 m8\">\n      <h6>What you will learn?</h6>\n      <ul>\n        <li>Learn the fundamentals of primary fields of engineering. </li>\n        <li>Get to know about the techniques as well as applications of the designing process.\n        </li>\n        <li>Learn to design, build as well as assess a prototype which solves an engineering problem.\n        </li>\n      </ul>\n      <h6>What you will get?</h6>\n      <ul>\n        <li>Project Letter issued on successful submission </li>\n        <li>Guaranteed Internship in one of the 300+ companies</li>\n      </ul>\n      <h6>Projects</h6>\n      <ul>\n        <li>One Minor Project</li>\n        <li>One Major Project</li>\n      </ul>\n      <br>\n      <br>\n\n      <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n        Internship</a>\n      &nbsp;\n      <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n        Internship</a>\n      <br>\n      <br>\n    </div>\n    <img src=\"/assets/images/departments/cad.jpg\" class=\"col s12 m4 rounded-image \" alt=\"\">\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/civil/civil.component.ts":
/*!******************************************!*\
  !*** ./src/app/civil/civil.component.ts ***!
  \******************************************/
/*! exports provided: CivilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CivilComponent", function() { return CivilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CivilComponent = /** @class */ (function () {
    function CivilComponent() {
    }
    CivilComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    CivilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-civil',
            template: __webpack_require__(/*! ./civil.component.html */ "./src/app/civil/civil.component.html"),
            styles: [__webpack_require__(/*! ./civil.component.css */ "./src/app/civil/civil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CivilComponent);
    return CivilComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n    border: 1px solid rgba(0, 0, 0, 0.5);\n    border-radius: 16px;\n    padding: 48px 0 48px 0;\n}\n\n@media only screen and (min-width: 700px) {\n\n    .contact-us form, .contact-us .contact-mobile {\n        display: inline-block;\n        width: 600px;\n    }\n\n}\n\n.contact-us h4 {\n    font-weight: 700;\n}\n\n/* label color */\n\n.contact-us .input-field label {\n    color: black;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n/* label focus color */\n\n.contact-us .input-field input:focus + label, .contact-us .input-field textarea:focus + label {\n    color: black;\n    opacity: 1;\n}\n\n/* label underline focus color */\n\n.contact-us .input-field input:focus, .contact-us .input-field textarea:focus {\n    border-bottom: 1px solid black;\n    box-shadow: 0 1px 0 0 black;\n}\n\n/* valid color */\n\n.contact-us .input-field input.valid, .contact-us .input-field textarea.valid {\n    border-bottom: 1px solid black;\n    box-shadow: 0 1px 0 0 black;\n}\n\n/* invalid color */\n\n.contact-us .input-field input.invalid, .contact-us .input-field textarea.invalid {\n    border-bottom: 1px solid black;\n    box-shadow: 0 1px 0 0 black;\n}\n\n/* icon prefix focus color */\n\n.contact-us .input-field .prefix.active {\n    color: black;\n}\n\n@media only screen and (max-width: 700px) {\n\n    .contact-us {\n        border: 0;\n    }\n\n    .contact-us .form {\n        width: 100%;\n    }\n\n}"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact page-container iblue black-text\">\n\n  <div class=\"nav-top\">\n    <a routerLink=\"/about\"><i class=\"material-icons black-text\">keyboard_arrow_up</i></a>\n  </div>\n\n  <div class=\"page-content\">\n        \n    <div class=\"page-title\">CONTACT US</div>\n\n    <br /><br /><br />\n    <div class=\"contact-us center-align monserrat\">\n      <form action=\"https://formspree.io/incidentconvenor@nitk.edu.in\" method=\"POST\">\n        <div class=\"row left-align\">\n          <h4 class=\"black-textt\">We would be happy to talk to you...</h4>\n        </div>\n        <br />\n        <div class=\"input-field\">\n          <input placeholder=\"\" id=\"name\" name=\"name\" type=\"text\" class=\"validate\">\n          <label for=\"name\">Full Name</label>\n        </div>\n        <div class=\"input-field\">\n          <input placeholder=\"\" id=\"_replyto\" name=\"_replyto\" type=\"email\" class=\"validate\">\n          <label for=\"_replyto\">Email</label>\n        </div>\n        <div class=\"input-field\">\n          <input placeholder=\"\" id=\"mobile\" name=\"mobile\" type=\"number\">\n          <label for=\"mobile\">Phone Number (Optional)</label>\n        </div>\n        <div class=\"input-field\">\n          <input placeholder=\"\" id=\"purpose\" name=\"purpose\" type=\"text\" class=\"validate\">\n          <label for=\"purpose\">Purpose</label>\n        </div>\n        <div class=\"input-field\">\n          <!-- <input placeholder=\"\" id=\"content\" name=\"content\" type=\"text\" class=\"validate\"> -->\n          <!-- <label for=\"content\">What would you like to say?</label> -->\n          <textarea placeholder=\"\" id=\"content\" name=\"content\" class=\"materialize-textarea\"></textarea>\n          <label for=\"content\">What would you like to say?</label>\n        </div>\n        <div class=\"row center-align\">\n          <input class=\"mbtn\" type=\"submit\" value=\"Send\">\n        </div>\n      </form>\n    </div>\n\n    <br /><br /><br />\n\n    <div class=\"contact-us center-align\">\n      <div class=\"contact-mobile left-align\">\n        <h4 class=\"black-textt\"><b class=\"monserrat\">Or call us at</b> : <span style=\"font-weight: 300\"><br><b>Inci Office:</b><br>Darshan +91&nbsp;8861&nbsp;832&nbsp;038<br><br><b>Event Coordinators:</b><br>Sashibhushan +91&nbsp;9538&nbsp;806&nbsp;063<br>Kaushik Nayak +91&nbsp;8660&nbsp;272&nbsp;327</span></h4>\n      </div>\n    </div>\n\n    <br /><br /><br />\n\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/\"><i class=\"material-icons black-text\" style=\"transform: scale(0.5);\">replay</i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(titleService) {
        this.titleService = titleService;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_5__["isMobile"];
        this.titleService.setTitle('Incident 2019 - Contact Us');
    }
    ContactusComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["blackHeader"])();
        jquery__WEBPACK_IMPORTED_MODULE_3__('.contact .nav-top a').click(_about_about_component__WEBPACK_IMPORTED_MODULE_4__["aboutInit"]);
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/cse/cse.component.css":
/*!***************************************!*\
  !*** ./src/app/cse/cse.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.m8 li {\n    list-style-type: disc !important;\n    padding-right: 24px !important;\n}\n\ndiv.col, li, h6 {\n    font-size: 1.1em;\n}\n\n@media only screen and (max-width: 1400px) {\n\ndiv.col, li, h6 {\n    font-size: 1.0em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.col.m8 li {\n    padding-right: 0;\n}\n\n}"

/***/ }),

/***/ "./src/app/cse/cse.component.html":
/*!****************************************!*\
  !*** ./src/app/cse/cse.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container blue-yonder white-text monserrat\">\n    <br>\n    <br>\n    <br>\n    <div class=\"page-title\">COMPUTER SCIENCE</div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Machine Learing</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Gain mastery over algorithms, principles, and applications of Machine Learning through live\n                    projects.\n                </li>\n                <li>Learn the statistical aspects of Machine Learning and implement models like vector machines, naive\n                    Bayes, random forest classifier and a lot more.</li>\n                <li>Get a thorough approach regarding the time series modelling as well as supervised and unsupervised\n                    learning along with recommendation engine.\n                </li>\n            </ul>\n\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Certification from Microsoft (MTA/Python)</li>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n        </div>\n        <br>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/machine.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Web Development</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Gain knowledge about PHP and develop a complete CMS with PHP and integrate database via the MySQLi\n                    extension.\n                </li>\n                <li>Learn Python Django and fundamentals of MySQL and PHP.</li>\n                <li>Learn comprehensive web development and get introduced to fundamentals of HTML and XML and\n                    understand the concept of linking pages.\n                </li>\n            </ul>\n\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Certification from Microsoft (MTA/Python/Any of the selected Topic)</li>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/web.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Microsoft Azure Cloud Computing</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn to design and implement Web Apps.</li>\n                <li>Manage network services and create workflows with Logic apps. </li>\n                <li>Learn to design and implement cloud services and learn the interchange of data from one device to\n                    another via cloud.\n                </li>\n            </ul>\n\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Certification from Microsoft (Cloud Computing)</li>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n            <br>\n            <br>\n            \n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n                <br>\n                <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/microsoft.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">AR/VR</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn to design the VR applications with Unity 3D.</li>\n                <li>Learn to design and develop your own VR app.</li>\n                <li>Implement the working of OpenGL in creating the realistic looking applications.</li>\n                <li>Learn about the hardware components of AR / VR and get familiar with their working.\n                </li>\n            </ul>\n\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n            <br>\n            <br>\n            \n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n                <br>\n                <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/virtual.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Cyber Security</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn thoroughly about the reverse engineering and cyber security landscape.</li>\n                <li>Learn to manage and monitor network cyber security attacks.</li>\n                <li>Get an in-depth knowledge about the computer forensics and malware and advanced persistent threats.\n                </li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n            <br>\n            <br>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Cyber Security.jpg\" alt=\"\">\n    </div>\n    <br>\n    <br>\n\n</div>"

/***/ }),

/***/ "./src/app/cse/cse.component.ts":
/*!**************************************!*\
  !*** ./src/app/cse/cse.component.ts ***!
  \**************************************/
/*! exports provided: CseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CseComponent", function() { return CseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CseComponent = /** @class */ (function () {
    function CseComponent() {
    }
    CseComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    CseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cse',
            template: __webpack_require__(/*! ./cse.component.html */ "./src/app/cse/cse.component.html"),
            styles: [__webpack_require__(/*! ./cse.component.css */ "./src/app/cse/cse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CseComponent);
    return CseComponent;
}());



/***/ }),

/***/ "./src/app/ece/ece.component.css":
/*!***************************************!*\
  !*** ./src/app/ece/ece.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.m8 li {\n    list-style-type: disc !important;\n    padding-right: 24px !important;\n}\n\ndiv.col, li, h6 {\n    font-size: 1.1em;\n}\n\n@media only screen and (max-width: 1400px) {\n\ndiv.col, li, h6 {\n    font-size: 1.0em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.col.m8 li {\n    padding-right: 0;\n}\n\n}"

/***/ }),

/***/ "./src/app/ece/ece.component.html":
/*!****************************************!*\
  !*** ./src/app/ece/ece.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container blue-yonder white-text monserrat\">\n    <br>\n    <br>\n    <br>\n    <div class=\"page-title\">ELECTRONICS & COMMUNICATION</div>\n    <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Internet of things</h3>\n        <div class=\"col s12 m8\">\n                <h6>What you will learn?</h6>\n                <ul><li>Learn how to implement the data analytics in stored data to inform the device management and other actions.</li>\n                      <li> Build IoT data visualizations which would facilitate businesses to gain operational insights.</li>\n                       <li>Apply the concepts of machine learning to IoT data and improve business services.</li>\n                       </ul>\n                <h6>What you will get?</h6>\n                <ul><li>Project Letter issued on successful submission </li>\n           <li>Guaranteed Internship in one of the 300+ companies</li></ul>\n                <h6>Projects</h6>\n                <ul><li>One Minor Project</li>\n                <li>One Major Project</li></ul>\n                <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                    Internship</a>\n                &nbsp;\n                <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                    Internship</a>\n        <br></div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/IOT.jpg\" alt=\"\">\n    </div>\n        <div class=\"row\">\n        <br>\n        <br>\n        <h3 class=\"azuki\" style=\"text-align:left\">Robotics</h3>\n        <div class=\"col s12 m8\">\n                <h6>What you will learn?</h6>\n                <ul>\n<li>                        Learn how to manipulate robot arms and get introduced with kinematic chains, differential kinematics as well as forward and inverse kinematics.\n</li>                            \n<li>    Represent the 2D and 3D spatial relationships.\n</li>                            \n<li>Learn to design complete robot systems.</li>\n                        <li>Learn how to program and navigate mobile robots.</li>\n                        <li>Develop applications for robots.</li>\n                         </ul>\n                <h6>What you will get?</h6>\n                <ul><li>Project Letter issued on successful submission </li>\n<li>Guaranteed Internship in one of the 300+ companies</li></ul>\n                <h6>Projects</h6>\n                <ul><li>One Minor Project</li>\n                <li>One Major Project</li></ul>\n                <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                    Internship</a>\n                &nbsp;\n                <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                    Internship</a><br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Robotics.jpg\" alt=\"\">\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/ece/ece.component.ts":
/*!**************************************!*\
  !*** ./src/app/ece/ece.component.ts ***!
  \**************************************/
/*! exports provided: EceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EceComponent", function() { return EceComponent; });
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

var EceComponent = /** @class */ (function () {
    function EceComponent() {
    }
    EceComponent.prototype.ngOnInit = function () {
    };
    EceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ece',
            template: __webpack_require__(/*! ./ece.component.html */ "./src/app/ece/ece.component.html"),
            styles: [__webpack_require__(/*! ./ece.component.css */ "./src/app/ece/ece.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EceComponent);
    return EceComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-link {\n    opacity: 0;\n    cursor: pointer;\n    font-size: 1.5em;\n    transition: opacity 300ms ease-out;\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\n.events-listing {\n    width: 100%;\n    padding: 9vw;\n    display: none;\n    transition: opacity 300ms ease-out;\n}\n\n.events-listing.active {\n    display: block;\n}\n\n.events-listing .col {\n    padding: 10px !important;\n}\n\n.events-listing .events-listing-item {\n    display: flex;\n    margin-top: 20px !important;\n    border-radius: 16px;\n    flex-direction: column;\n    cursor: pointer;\n    overflow: hidden;\n    background: white;\n}\n\n.events-listing .events-listing-item .image {\n    width: 100%;\n    height: 300px;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.events-listing .events-listing-item .icon *, .events-listing .events-listing-item .icon img {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.events-listing .events-listing-item .icon i {\n    font-size: 6em;\n}\n\n.events-listing .events-listing-item .title {\n    font-size: 2.4em;\n    padding: 6px 16px 6px 16px;\n    color: #063862;\n}\n\n.events-listing .events-listing-item:hover {\n    background-color: rgb(255, 255, 255, 0.5)\n}\n\n.events-listing .row .title {\n    font-size: 3em;\n}\n\n.events-listing .row .col {\n    text-align: left;\n    font-size: 1.6em;\n}\n\n.events-listing .row {\n    display: flex;\n    margin-top: 48px !important;\n}\n\n.events-listing .row:nth-child(2n+1) {\n    direction: rtl;\n}\n\n.events-listing .row .col img {\n    width: 100%;\n    border-radius: 16px;\n}\n\n.events-listing .events-page-desc {\n    padding-top: 32px;\n    font-size: 1.8em;\n}\n\n.events-listing .ltr {\n    direction: ltr;\n}\n\n.events-listing iframe {\n    width: 100%;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (4/12) );\n}\n\n@media only screen and (max-width: 1400px) {\n\n.back-link {\n    font-size: 1.2em;\n}\n\n.events-listing .events-listing-item .image {\n    height: 240px;\n}\n\n.events-listing .events-page-desc {\n    font-size: 1.4em;\n}\n\n.events-listing .row .col {\n    font-size: 1.2em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.events-listing {\n    width: 100%;\n}\n\n.events-listing .col {\n    width: 100%;\n    padding: 0 !important;\n}\n\n.events-listing .row {\n    display: block;\n}\n\n.events-stay-tuned div {\n    height: 600px;\n}\n\n.events-listing iframe {\n    padding-top: 16px;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (12/12) )\n}\n\n}"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"incident page-container iorange black-text\">\n\n    <div class=\"nav-top\">\n      <a routerLink=\"/statistics\"><i class=\"material-icons black-text\">keyboard_arrow_up</i></a>\n    </div>\n    \n    <div class=\"page-content\">\n\n      <div class=\"page-title\">EVENTS</div>\n      <br />\n      <a class=\"mbtn back-link monserrat\" unselectable=\"on\">\n        &lt; Back to Events\n      </a>\n\n      <div class=\"category-list events-listing row active azuki\">\n        <div class=\"col s12 m4\" *ngFor=\"let item of categories\">\n          <a class=\"events-listing-item\" href=\"events#{{ item.hash }}\">\n            <div class=\"image\" [style.backgroundImage]=\"'url(assets/images/events/' + item.image + ')'\"></div>\n            <div class=\"title\">{{ item.name }}</div>\n          </a>\n        </div>\n      </div>\n\n      <div *ngFor=\"let key of eventKeys\">\n        <div class=\"{{ key }}-list events-listing row\">\n          <div *ngIf=\"getCategoryFromHash(key).page_desc\" class=\"events-page-desc monserrat\" [innerHTML]=\"getCategoryFromHash(key).page_desc\">\n          </div>\n          <div class=\"row\" *ngFor=\"let item of events[key]\">\n            <div *ngIf=\"item.image\" class=\"col s12 m4\">\n              <img src=\"/assets/images/events/{{ item.image }}\"/>\n            </div>\n            <div *ngIf=\"item.youtube\" class=\"col s12 m4 inci-vid monserrat\"  >\n              <iframe class=\"\" [src]=\"getSafeUrl(item.youtube)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                  allowfullscreen></iframe>\n            </div>\n            <div class=\"col s12 monserrat\" [class.m8]=\"item.image || item.youtube\">\n              <div class=\"title azuki\">{{ item.name }}</div>\n              <div class=\"ltr\" [innerHTML]=\"item.desc\"></div>\n              <div class=\"ltr\" *ngIf=\"item.contact\" [innerHTML]=\"'<b>Contact: </b>' + item.contact\"></div>\n              <br />\n              <a class=\"mbtn\" *ngIf=\"item.rules\" href=\"{{ item.rules }}\" target=\"_blank\">Rules</a>\n              &nbsp;&nbsp;\n              <a class=\"mbtn\" *ngIf=\"item.register\" href=\"{{ item.register }}\">Register</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div *ngFor=\"let key of eventKeys\">\n        <div *ngFor=\"let item of events[key]\">\n          <div id=\"{{item.hash}}\" class=\"modal bottom-sheet\">\n            <div class=\"modal-content black-text\">\n              <h4>{{ item.name }}</h4>\n              <p>{{ item.desc }}</p>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n      <br /><br /><br />\n\n    </div>\n\n    <br />\n    <a class=\"mbtn back-link monserrat\" unselectable=\"on\">\n      &lt; Back to Events\n    </a>\n    <br />\n    <br />\n    <br />\n\n    <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n    <div class=\"nav-down\">\n      <a routerLink=\"/icare\"><i class=\"material-icons black-text\">keyboard_arrow_down</i></a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EVENT = __webpack_require__(/*! ../../assets/data/events.json */ "./src/assets/data/events.json");
var EVENTS = EVENT.events;
var CATEGORIES = EVENT.categories;
var instance;
function getCategoryFromHash(hash) {
    for (var _i = 0, CATEGORIES_1 = CATEGORIES; _i < CATEGORIES_1.length; _i++) {
        var item = CATEGORIES_1[_i];
        if (item.hash === hash) {
            return item;
        }
    }
}
function getCategoryNameFromHash(hash) {
    return getCategoryFromHash(hash).name;
}
function handleHashChange() {
    var hash = location.hash.replace('#', '');
    jquery__WEBPACK_IMPORTED_MODULE_2__('.events-listing').css('opacity', '0');
    jquery__WEBPACK_IMPORTED_MODULE_2__('html, body').animate({ scrollTop: 0 }, 300);
    setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.events-listing').removeClass('active');
        if (hash === '') {
            instance.list = CATEGORIES;
            jquery__WEBPACK_IMPORTED_MODULE_2__('.category-list').addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.category-list').css('opacity', '1');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.page-title').text('EVENTS');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.back-link').css('opacity', '0');
        }
        else {
            instance.list = EVENTS[hash];
            jquery__WEBPACK_IMPORTED_MODULE_2__('.' + hash + '-list').addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.' + hash + '-list').css('opacity', '1');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.page-title').text(getCategoryNameFromHash(hash).toUpperCase());
            jquery__WEBPACK_IMPORTED_MODULE_2__('.back-link').css('opacity', '1');
        }
    }, 310);
}
window.onhashchange = handleHashChange;
var EventsComponent = /** @class */ (function () {
    function EventsComponent(titleService, sanitizer) {
        this.titleService = titleService;
        this.sanitizer = sanitizer;
        this.categories = CATEGORIES;
        this.events = EVENTS;
        this.eventKeys = Object.keys(EVENTS);
        this.list = undefined;
        this.modalTitle = 'title';
        this.modalText = 'text';
        this.isDevMode = _angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"];
        this.getCategoryFromHash = getCategoryFromHash;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_5__["isMobile"];
        this.titleService.setTitle('Incident 2019 - Events');
    }
    EventsComponent.prototype.listIsCategory = function () {
        return this.list === CATEGORIES;
    };
    EventsComponent.prototype.setModalTitleText = function (event) {
        this.modalTitle = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).attr('data-title');
        this.modalText = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).attr('data-text');
    };
    EventsComponent.prototype.getSafeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    EventsComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_4__["blackHeader"])();
        instance = this;
        instance.list = undefined;
        handleHashChange();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var elems = document.querySelectorAll('.modal');
            materialize_css__WEBPACK_IMPORTED_MODULE_3__["Modal"].init(elems, {});
            jquery__WEBPACK_IMPORTED_MODULE_2__('a[data-target="modal"]').click(this.setModalTitleText);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.back-link').click(function () { location.hash = ''; });
            handleHashChange();
        });
        if (instance.list === undefined) {
            instance.list = CATEGORIES;
        }
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/fivehundred/fivehundred.component.css":
/*!*******************************************************!*\
  !*** ./src/app/fivehundred/fivehundred.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n    min-height: 100vh;\n}"

/***/ }),

/***/ "./src/app/fivehundred/fivehundred.component.html":
/*!********************************************************!*\
  !*** ./src/app/fivehundred/fivehundred.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"incident page-container straw black-text\">\n\n  <br />\n  <br />\n  <br />\n  <br />\n\n  <div class=\"page-content\">\n    <h1 class=\"page-title\">We couldn't serve you.</h1>\n    <div class=\"row\">\n      <div class=\"col s12 monserrat\">\n        Its <b>Error 500</b>. There was an internal error whose reason can't be determined. Try again in some time or go back to home.\n        <br>\n        <br>\n        <br>\n        <a routerLink=\"/\" class=\"mbtn\">BACK TO HOME</a>\n      </div>\n    </div>\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/statistics\"><i class=\"material-icons black-text\"></i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fivehundred/fivehundred.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fivehundred/fivehundred.component.ts ***!
  \******************************************************/
/*! exports provided: FivehundredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivehundredComponent", function() { return FivehundredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FivehundredComponent = /** @class */ (function () {
    function FivehundredComponent() {
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["isMobile"];
    }
    FivehundredComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["blackHeader"])();
    };
    FivehundredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fivehundred',
            template: __webpack_require__(/*! ./fivehundred.component.html */ "./src/app/fivehundred/fivehundred.component.html"),
            styles: [__webpack_require__(/*! ./fivehundred.component.css */ "./src/app/fivehundred/fivehundred.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FivehundredComponent);
    return FivehundredComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-social {\n  position: fixed;\n  bottom: 2vh;\n  left: calc((9vw - 64px) / 2);\n  transition: all 400ms ease-in-out;\n}\n\n.footer-social.invert, .mobile-footer-social.invert  {\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n\n.footer-social li img {\n  height: 54px;\n}\n\n.footer-social li img:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n.mobile-footer-social {\n  width: 100%;\n  text-align: center;\n}\n\n.mobile-footer-social li {\n  display: inline;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"!isMobile()\" class=\"footer-social\">\n<li><a href=\"{{ social.fb.link }}\" target=\"_blank\"><img src=\"{{ social.fb.image }}\"/></a></li>\n<li><a href=\"{{ social.yt.link }}\" target=\"_blank\"><img src=\"{{ social.yt.image }}\"/></a></li>\n<li><a href=\"{{ social.tw.link }}\" target=\"_blank\"><img src=\"{{ social.tw.image }}\"/></a></li>\n<li><a href=\"{{ social.ig.link }}\" target=\"_blank\"><img src=\"{{ social.ig.image }}\"/></a></li>\n</ul>\n\n<ul *ngIf=\"isMobile()\" class=\"mobile-footer-social\">\n    <li><a href=\"{{ social.fb.link }}\" target=\"_blank\"><img src=\"{{ social.fb.image }}\" /></a></li>\n    <li><a href=\"{{ social.yt.link }}\" target=\"_blank\"><img src=\"{{ social.yt.image }}\" /></a></li>\n    <li><a href=\"{{ social.tw.link }}\" target=\"_blank\"><img src=\"{{ social.tw.image }}\" /></a></li>\n    <li><a href=\"{{ social.ig.link }}\" target=\"_blank\"><img src=\"{{ social.ig.image }}\" /></a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: whiteFooter, blackFooter, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteFooter", function() { return whiteFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackFooter", function() { return blackFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SOCIAL = __webpack_require__(/*! ../../assets/data/social.json */ "./src/assets/data/social.json");
function whiteFooter() {
    setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.footer-social').removeClass('invert');
        jquery__WEBPACK_IMPORTED_MODULE_2__('.mobile-footer-social').removeClass('invert');
    }, 0);
}
function blackFooter() {
    setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.footer-social').addClass('invert');
        jquery__WEBPACK_IMPORTED_MODULE_2__('.mobile-footer-social').addClass('invert');
    }, 0);
}
var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.social = SOCIAL;
        this.isHome = _app_component__WEBPACK_IMPORTED_MODULE_1__["isHome"];
        this.getPath = _app_component__WEBPACK_IMPORTED_MODULE_1__["getPath"];
        this.isMobile = function () { return window.outerWidth <= 800; };
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (val.url === '/') {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.footer-social').hide('fast');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_2__('.footer-social').show('fast');
                }
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/fourohfour/fourohfour.component.css":
/*!*****************************************************!*\
  !*** ./src/app/fourohfour/fourohfour.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\n    min-height: 100vh;\n}"

/***/ }),

/***/ "./src/app/fourohfour/fourohfour.component.html":
/*!******************************************************!*\
  !*** ./src/app/fourohfour/fourohfour.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"incident page-container straw black-text\">\n\n  <br />\n  <br />\n  <br />\n  <br />\n\n  <div class=\"page-content\">\n    <h1 class=\"page-title\">Such an empty field!!!</h1>\n    <div class=\"row\">\n      <div class=\"col s12 m8 monserrat\">\n        Its <b>Error 404</b>. You have wandered off limits. There seems to be nothing here. Try going back to home and find your way. Or GET me any query and I'll let you play an adventure.\n        <br>\n        <br>\n        <br>\n        <a routerLink=\"/\" class=\"mbtn\">BACK TO HOME</a>\n      </div>\n    </div>\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/statistics\"><i class=\"material-icons black-text\"></i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/fourohfour/fourohfour.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fourohfour/fourohfour.component.ts ***!
  \****************************************************/
/*! exports provided: FourohfourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourohfourComponent", function() { return FourohfourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FourohfourComponent = /** @class */ (function () {
    function FourohfourComponent(titleService) {
        this.titleService = titleService;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_3__["isMobile"];
        this.titleService.setTitle('Incident 2019 - Error 404');
    }
    FourohfourComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["blackHeader"])();
    };
    FourohfourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fourohfour',
            template: __webpack_require__(/*! ./fourohfour.component.html */ "./src/app/fourohfour/fourohfour.component.html"),
            styles: [__webpack_require__(/*! ./fourohfour.component.css */ "./src/app/fourohfour/fourohfour.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], FourohfourComponent);
    return FourohfourComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    max-height: 120px;\n    z-index: 110;\n}\n\n.header .nav-links {\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 27vw;\n    height: 100%;\n    overflow-y: scroll;\n    font-size: 2.6em;\n    background: rgba(0, 0, 0, 0.64);\n    margin: 0;\n    padding: 7% 16px 7% 16px;\n    text-align: center;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    transition: all 300ms ease-out;\n}\n\n.header .nav-links li {\n    padding: 7% 16px 7% 16px;\n    width: 100%;\n}\n\n.header .nav-links a {\n    color: white;\n}\n\n.header .nav-links a.active {\n    color: rgba(255, 255, 255, 0.45);\n}\n\n.header .nav-links a.active:hover {\n    text-decoration: none;\n    cursor: default;\n}\n\n.header .nav-links a:hover {\n    text-decoration: underline;\n}\n\n.header i {\n    position: fixed;\n    top: 0;\n    right: 0px;\n    padding: 32px;\n    color: white;\n    z-index: 1000;\n    font-size: 3em;\n    cursor: pointer;\n    transition: all 900ms ease-out;\n}\n\n.header .header-logo img {\n    height: 60px;\n}\n\n.header .header-logo .logo {\n    position: absolute;\n    left: 0;\n    top: 24px;\n    padding-left: calc((9vw - 43px) / 2);\n    padding-right: calc((9vw - 43px) / 2);\n}\n\n.header .header-logo .logo.animated {\n    transition: padding 500ms ease-in-out, height 500ms ease-out, width 500ms ease-out, left 500ms ease-out, top 500ms ease-in, -webkit-transform 500ms ease-in-out;\n    transition: padding 500ms ease-in-out, transform 500ms ease-in-out, height 500ms ease-out, width 500ms ease-out, left 500ms ease-out, top 500ms ease-in;\n    transition: padding 500ms ease-in-out, transform 500ms ease-in-out, height 500ms ease-out, width 500ms ease-out, left 500ms ease-out, top 500ms ease-in, -webkit-transform 500ms ease-in-out;\n}\n\n.header .header-logo .text {\n    position: absolute;\n    top: 24px;\n    left: 9vw;\n    transition: all 900ms ease-out;\n}\n\n.header .header-logo .text {\n    transition: all 400ms ease-out;\n    box-sizing: border-box;\n}\n\n.header.invert .header-logo .text {\n    -webkit-filter: invert(100%);\n            filter: invert(100%);\n}\n\n.header .header-logo .text.small {\n    -webkit-transform: translate(calc(-9vw), 60px);\n            transform: translate(calc(-9vw), 60px);\n    width: 9vw;\n    height: auto;\n    padding: 14px;\n}\n\n.header.invert i {\n    color: black;\n}\n\n.has-divider {\n    border-top: 1px solid white;\n}\n\n.header .register-label {\n    color: white;\n    opacity: 0.8;\n}\n\n/* Mac Pro 13in */\n\n@media only screen and (min-width: 1400px) and (-webkit-min-device-pixel-ratio: 1), only screen and (min-width: 1400px) and (min-resolution: 96dpi) {\n\n}\n\n@media only screen and (max-width: 1400px) {\n\n.header {\n    max-height: 80px;\n}\n\n.header .header-logo .logo, .header .header-logo .text {\n    top: 16px;\n}\n\n.header .header-logo img {\n    height: 48px;\n}\n\n.header .header-logo .logo {\n    padding-left: calc((9vw - 27.5px) / 2);\n    padding-right: calc((9vw - 27.5px) / 2);\n}\n\n.header .nav-links {\n    font-size: 1.8em;\n    padding: 5% 16px 5% 16px;\n}\n\n.header .nav-links li {\n    padding: 5% 16px 5% 16px;\n}\n\n.header i {\n    right: 0px;\n    padding: 24px;\n    font-size: 2em;\n}\n\n.header .header-logo .text.small {\n    -webkit-transform: translate(calc(-9vw), 48px);\n            transform: translate(calc(-9vw), 48px);\n    padding: 8px;\n}\n\n}\n\n@media only screen and (max-width: 700px) {\n\n.header { /* Safari */\n    transition: max-height 700ms ease-out;\n}\n\n.header .nav-links {\n    width: 75vw;\n}\n\n.header .header-logo .text, .header .header-logo .text.small {\n    top: 133px;\n    left: 0;\n    padding: 4px;\n    height: 9vw;\n    width: auto;\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    -webkit-transform: rotate(270deg) translateX(-100%);\n            transform: rotate(270deg) translateX(-100%);\n}\n\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a routerLink=\"/\" class=\"header-logo\">\n    <img class=\"logo\" src=\"/assets/images/landing-logo.png\" />\n    <img class=\"text\" src=\"/assets/images/header-logo-text.png\" />\n  </a>  \n  <i class=\"material-icons\">menu</i>  \n  <ul class=\"nav-links azuki\">\n    <li><a routerLink=\"/\" routerLinkActive=\"active\" class=\"home\" [routerLinkActiveOptions]=\"{ exact: true }\">HOME</a></li>\n    <li><a routerLink=\"/incident\" routerLinkActive=\"active\" class=\"incident\">INCIDENT</a></li>\n    <li><a routerLink=\"/statistics\" routerLinkActive=\"active\" class=\"statistics\">STATISTICS</a></li>\n    <li><a routerLink=\"/events\" routerLinkActive=\"active\" class=\"events\">EVENTS</a></li>\n    <li><a routerLink=\"/icare\" routerLinkActive=\"active\" class=\"icare\">i-CARE</a></li>\n    <li><a routerLink=\"/sponsors\" routerLinkActive=\"active\" class=\"sponsors\">SPONSORS</a></li>\n    <li><a routerLink=\"/about\" routerLinkActive=\"active\" class=\"about\">ABOUT</a></li>\n    <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\" class=\"contact-us\">CONTACT US</a></li>\n    <li class=\"has-divider\">\n      <a routerLink=\"/internships\" routerLinkActive=\"active\" class=\"internship\">INTERNSHIP OPPORTUNITIES</a>\n    </li>\n    <li class=\"has-divider register-label monserrat\">\n      <a href=\"/register\" class=\"contact-us\">Register</a>\n    </li>\n    <li><a href=\"/register/\">SIGN UP</a></li>\n    <li><a href=\"/register/events/\">EVENTS</a></li>\n    <li><a href=\"/register/accommodation/\">ACCOMMODATION</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: bigLogo, blackHeader, whiteHeader, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigLogo", function() { return bigLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackHeader", function() { return blackHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteHeader", function() { return whiteHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SOCIAL = __webpack_require__(/*! ../../assets/data/social.json */ "./src/assets/data/social.json");
function toggleMenu() {
    var navLinks = jquery__WEBPACK_IMPORTED_MODULE_4__('.header .nav-links');
    var i = jquery__WEBPACK_IMPORTED_MODULE_4__('.header i');
    var isClosed = i.html() === 'menu';
    var translate = isClosed ? '0' : '100';
    var iHTML = isClosed ? 'close' : 'menu';
    i.html(iHTML);
    i.attr('style', isClosed ? 'color: white;' : '');
    setTimeout(function () {
        navLinks.css('transform', 'translateX(' + translate + '%)');
    }, 0);
}
function bigLogo() {
    jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .text').hide('fast');
    jquery__WEBPACK_IMPORTED_MODULE_4__('.header').css({ position: 'absolute' });
    // This is a hack. Initially the logo has a negative
    // top, we wait for it to become positive. Just like I'm
    // waiting for my life to become positive.
    jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
        var logoInterval = setInterval(function () {
            var logo = document.getElementById('home-logo');
            var home = document.getElementById('home');
            var landing = document.getElementById('landing');
            console.log(jquery__WEBPACK_IMPORTED_MODULE_4__(landing).offset().top, jquery__WEBPACK_IMPORTED_MODULE_4__(home).innerHeight());
            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.landing').offset().top < 0 || jquery__WEBPACK_IMPORTED_MODULE_4__('.landing').offset().top == jquery__WEBPACK_IMPORTED_MODULE_4__('.landing .title').offset().top) {
                return;
            }
            jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .logo').css({
                height: jquery__WEBPACK_IMPORTED_MODULE_4__(logo).height(),
                top: jquery__WEBPACK_IMPORTED_MODULE_4__(landing).offset().top - jquery__WEBPACK_IMPORTED_MODULE_4__(home).offset().top + jquery__WEBPACK_IMPORTED_MODULE_4__(landing).css('padding-top'),
                left: '50%',
                transform: 'translateX(-50%)',
                padding: 0
            });
            clearInterval(logoInterval);
        }, 6);
    });
}
function blackHeader() {
    setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.header').addClass('invert');
        Object(_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["blackFooter"])();
    }, 0);
}
function whiteHeader() {
    setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.header').removeClass('invert');
        Object(_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["whiteFooter"])();
    }, 0);
}
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.isHome = _app_component__WEBPACK_IMPORTED_MODULE_1__["isHome"];
        this.social = SOCIAL;
        this.getPath = _app_component__WEBPACK_IMPORTED_MODULE_1__["getPath"];
        this.bigLogo = bigLogo;
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (val.url === '/') {
                    console.log();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.header').attr('style', '');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .text').show('fast');
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .logo').attr('style', '');
                }
                window.scrollTo({
                    top: 0,
                    left: 0,
                });
            }
        });
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .logo').addClass('animated');
        }, 600);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__('.header i').click(toggleMenu);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.header .nav-links a').click(toggleMenu);
        jquery__WEBPACK_IMPORTED_MODULE_4__('.header .about').click(_about_about_component__WEBPACK_IMPORTED_MODULE_3__["aboutInit"]);
        var aTop = jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .text').height();
        jquery__WEBPACK_IMPORTED_MODULE_4__(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__(this).scrollTop() >= 1.3 * aTop) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .text').addClass('small');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.header .header-logo .text').removeClass('small');
            }
        });
        if (location.search.length > 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__["getScript"]('/assets/launch-zork.js', function () { });
        }
        else {
            console.log('You didn\'t GET me anything :(');
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n    position: relative;\n    color: white;\n    min-height: 100vh;\n}\n\n.home .landing {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    text-align: center;\n}\n\n.home .landing .tap {\n    padding-bottom: 8vh;\n    font-size: 2em;\n}\n\n.home .landing .duration {\n    padding-bottom: 4vh;\n    font-size: 2.6em;\n}\n\n.home .landing .theme-title {\n    padding-bottom: 4vh;\n    font-size: 2.2em;\n}\n\n.home .landing .title {\n    padding-top: 4vh;\n    padding-bottom: 2vh;\n    margin: 0;\n    padding: 0;\n    font-size: 8em;\n}\n\n.home .landing .logo {\n    height: 40vh;\n    opacity: 0;\n}\n\n@media only screen and (max-width: 1400px) {\n\n.home .landing .tap {\n    padding-bottom: 8vh;\n    font-size: 1.2em;\n}\n\n.home .landing .duration {\n    padding-bottom: 4vh;\n    font-size: 1.4em;\n}\n\n.home .landing .theme-title {\n    padding-bottom: 4vh;\n    font-size: 1.2em;\n}\n\n.home .landing .title {\n    padding-top: 4vh;\n    padding-bottom: 2vh;\n    margin: 0;\n    padding: 0;\n    font-size: 5em;\n    line-height: 0.8;\n}\n\n.home .landing .logo {\n    height: 40vh;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.home {\n    position: static;\n    box-sizing: border-box;\n}\n\n.home .landing {\n    margin: 0;\n    position: static;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    box-sizing: border-box;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n\n.home .landing .title {\n    padding-top: 4vh;\n}\n\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"page-container home center-align monserrat ired\">\n    <div id=\"landing\" class=\"landing\">\n        <img id=\"home-logo\" class=\"logo\" src=\"/assets/images/landing-logo.png\"/>\n        <h1 class=\"title azuki\">INCIDENT 2019</h1>\n        <div class=\"theme-title\">ECHOES OF THE ORIENT</div>\n        <div class=\"duration\">Feb 28th to March 3rd</div>\n        <div class=\"tap\">\n            <a class=\"mbtn mbtn-white\" routerLink=\"incident\">TAP HERE TO EXPLORE</a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle('Incident 2019');
    }
    HomeComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["whiteHeader"])();
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["bigLogo"])();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/icare/icare.component.css":
/*!*******************************************!*\
  !*** ./src/app/icare/icare.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icare .row {\n    margin-top: 48px !important;\n    margin-bottom: 48px !important;\n}\n\n.icare-desc {\n    font-size: 2em;\n}\n\n.icare img {\n    width: 100%;\n}\n\n.icare-desc:nth-child(1) {\n    padding-right: 24px !important;\n}\n\n.icare-desc:nth-child(2) {\n    padding-left: 24px !important;\n}\n\n.icare-backdrop {\n    width: 100%;\n}\n\n.icare iframe {\n    width: 100%;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (4/12) );\n}\n\n@media only screen and (max-width: 1400px) {\n\n.icare-desc {\n    font-size: 1.6em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.icare-desc {\n    max-width: 100%;\n}\n\n.icare-desc:nth-child(1) {\n    padding-right: 0 !important;\n}\n\n.icare-desc:nth-child(2) {\n    padding-left: 0 !important;\n}\n\n.icare .valign-wrapper {\n    display: block;\n}\n\n.icare iframe {\n    padding-top: 16px;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (12/12) )\n}\n\n}"

/***/ }),

/***/ "./src/app/icare/icare.component.html":
/*!********************************************!*\
  !*** ./src/app/icare/icare.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icare page-container azure-white black-text\">\n\n  <div class=\"nav-top\">\n    <a routerLink=\"/events\"><i class=\"material-icons black-text\">keyboard_arrow_up</i></a>\n  </div>\n\n  <div class=\"page-content\">\n    <div class=\"page-title\">i-CARE</div>\n\n    <img class=\"rounded-image\" src=\"/assets/images/icare/icare_intro_1.jpg\"/>\n\n    <div class=\"icare\">\n      <div class=\"row valign-wrapper\">\n        <div class=\"col s12 m8 l8 valign icare-desc monserrat iblack-text\">\n          A lot of children belonging to the fishing community in Mangalore dropout of school to help their parents in their\n          daily chores.<br />\n          Beach school tries to reduce this student drop out by instilling in them, an interest towards practical science,\n          mathematics & astronomy.<br />\n        </div>\n        <div class=\"col s12 m4 l4 valign icare-desc-image\">\n          <img class=\"rounded-image\" src=\"/assets/images/icare/icare_intro.jpg\"/>\n        </div>\n      </div>\n      <div class=\"row valign-wrapper\">\n        <div class=\"col s12 m4 l4 valign icare-desc-image\">\n          <img class=\"rounded-image\" src=\"/assets/images/icare/school.jpg\"/>\n        </div>\n        <div class=\"col s12 m8 l8 valign icare-desc monserrat iblack-text\">\n          Volunteers of i-Care teach extra curricular activities like origami, dance to differently-abled children in Lion's\n          School,\n          Surathkal.<br />\n          We plan to have many more such uplifting i-Care activities in the future.\n        </div>\n      </div>\n    </div>\n\n    <br />\n    <h3 class=\"page-title\">Plastic Recycling</h3>\n    \n    <img class=\"rounded-image icare-backdrop\" src=\"/assets/images/icare/plastic-recycling.jpg\" />\n    \n    <div class=\"row\">\n      <div class=\"col s12 m8 icare-desc monserrat iblack-text\">\n        Team Incident in association with the Centre for system design, NITK Surathkal have come up with a plastic recycling\n        initiative where student volunteers of I-Care gather waste plastic alongside beaches and recycle them in the campus\n        using injection moulding to produce useful products like keychains, clips etc.\n      </div>\n      <div class=\"col s12 m4\">\n        <iframe src=\"https://www.youtube.com/embed/MW8ee4-V_Hk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n          allowfullscreen></iframe>\n      </div>\n      <br />\n      <br />\n    </div>\n\n    <br/>\n    <h3 class=\"page-title\">Beach Schooling</h3>\n    \n    <img class=\"rounded-image\" src=\"/assets/images/icare/beach_schooling.jpg\"/>\n\n    <div class=\"icare\">\n      <div class=\"row\">\n        <div class=\"col s12 icare-desc monserrat iblack-text\">\n          14 solar lamps were distributed to children of the beach school and 5 solar lamps to the children from NITK Kannada\n          Medium School to light up their homes on Children's Day.\n          <br/>\n          <br/>\n        </div>\n      </div>\n      <div class=\"row valign-wrapper\">\n        <div class=\"col s12 m4 l4 valign icare-desc-image\">\n          <img class=\"rounded-image\" src=\"/assets/images/icare/icare_distribution.jpg\" />\n        </div>\n        <div class=\"col s12 m8 l8 valign icare-desc monserrat iblack-text\">\n          35 additional solar lamps to tenth standard students of NITK Kannada Medium School to facilitate their preparations for\n          board examinations.\n        </div>\n      </div>\n      <br />\n      <br />\n      <div class=\"center-align\">\n        <!-- <a href=\"#!icare-site\" class=\"mbtn monserrat\">KNOW MORE - VISIT i-CARE WEBSITE</a> -->\n      </div>\n      <br />\n      <br />\n      <br />\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/sponsors\"><i class=\"material-icons black-text\">keyboard_arrow_down</i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/icare/icare.component.ts":
/*!******************************************!*\
  !*** ./src/app/icare/icare.component.ts ***!
  \******************************************/
/*! exports provided: IcareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IcareComponent", function() { return IcareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IcareComponent = /** @class */ (function () {
    function IcareComponent(titleService) {
        this.titleService = titleService;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_3__["isMobile"];
        this.titleService.setTitle('Incident 2019 - iCare');
    }
    IcareComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_2__["blackHeader"])();
    };
    IcareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icare',
            template: __webpack_require__(/*! ./icare.component.html */ "./src/app/icare/icare.component.html"),
            styles: [__webpack_require__(/*! ./icare.component.css */ "./src/app/icare/icare.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], IcareComponent);
    return IcareComponent;
}());



/***/ }),

/***/ "./src/app/incident/incident.component.css":
/*!*************************************************!*\
  !*** ./src/app/incident/incident.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".incident .inci-desc {\n    font-size: 2em;\n    padding-right: 24px !important;\n}\n\n.incident .inci-vid {\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (4/12) );\n}\n\n.incident .inci-vid iframe {\n    width: 100%;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (4/12) );\n}\n\n@media only screen and (max-width: 1400px) {\n\n.incident .inci-desc {\n    font-size: 1.6em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.incident .inci-vid iframe {\n    padding-top: 16px;\n    min-height: calc( 0.5625 * (100vw - 2*9vw) * (12/12) )\n}\n\n}"

/***/ }),

/***/ "./src/app/incident/incident.component.html":
/*!**************************************************!*\
  !*** ./src/app/incident/incident.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"incident page-container igreen black-text\">\n\n  <div class=\"nav-top\">\n    <a routerLink=\"/\"><i class=\"material-icons black-text\">keyboard_arrow_up</i></a>\n  </div>\n\n  <div class=\"page-content\">\n    <h1 class=\"page-title\">INCIDENT</h1>\n    <div class=\"row\">\n      <div class=\"col s12 m8 inci-desc monserrat\">\n        Incident is the annual cultural festival of the National Institute of Technology Karnataka, Surathkal. From its humble\n        beginnings in the 1980s with a budget of just ₹10000, Incident has grown into the second largest cultural festival in\n        South India, attracting a footfall of over 40,000 from 200 colleges across the country. Incident's prestigious stage\n        has\n        seen some of India’s greatest talents and has also been a launchpad for new upcoming artists. Boasting a plethora of\n        high quality events spanning across multiple days, this is a celebration you would not want to miss.\n      </div>\n      <div class=\"col s12 m4 inci-vid\">\n        <iframe class=\"\" src=\"https://www.youtube.com/embed/cet_oPDryQY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n          allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/statistics\"><i class=\"material-icons black-text\">keyboard_arrow_down</i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/incident/incident.component.ts":
/*!************************************************!*\
  !*** ./src/app/incident/incident.component.ts ***!
  \************************************************/
/*! exports provided: IncidentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentComponent", function() { return IncidentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncidentComponent = /** @class */ (function () {
    function IncidentComponent(titleService) {
        this.titleService = titleService;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["isMobile"];
        this.titleService.setTitle('Incident 2019 - Incident');
    }
    IncidentComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["blackHeader"])();
    };
    IncidentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incident',
            template: __webpack_require__(/*! ./incident.component.html */ "./src/app/incident/incident.component.html"),
            styles: [__webpack_require__(/*! ./incident.component.css */ "./src/app/incident/incident.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], IncidentComponent);
    return IncidentComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-container {\n    display: table-cell;\n    height: 70vh;\n    width: 100%;\n    padding: 0 176px 0 176px;\n    vertical-align: middle;\n    \n}\n\n.landing-logo .landing-inci {\n    font-size: 8em;\n    font-weight: 700;\n    display: table-cell;\n    line-height: 1em;\n    padding: 0 8px 0 8px;\n}\n\n.landing-logo .landing-nitk {\n    display: inline-block;\n    position: relative;\n    font-size: 2em;\n    font-weight: 700;\n    padding: 0 8px 0 8px;\n}\n\n.landing-vid {\n    min-height: calc( 0.5625 * (100vw - 2*176px) / 2 );\n}\n\n.landing-vid iframe {\n    width: 100%;\n    min-height: calc( 0.5625 * (100vw - 2*176px) / 2 );\n}\n\n.landing-desc {\n    font-size: 1.6em;\n    font-weight: 700;\n    padding: 0 32px 0 8px;\n}\n\n.landing-triangle {\n    display: block;\n    margin-top:-100px;\n    border-style: solid;\n    border-width: 0 0 300px 100vw;\n    border-color: transparent transparent #002D54 transparent;\n    z-index: -1;\n}\n\n.landing-backdrop {\n    position: absolute;\n    top: 10%;\n    right: 8%;\n    height: 60%;\n}\n\n@media only screen and (max-width: 1400px) {\n\n.landing-container {\n    padding: 0 152px 0 152px;\n}\n\n.landing-logo {\n    left: 152px;\n}\n\n.landing-logo .landing-inci {\n    font-size: 6em;\n    padding: 0 16px0 16px;\n}\n\n.landing-logo .landing-nitk {\n    font-size: 1.6em;\n    padding: 0 16px0 16px;\n}\n\n.landing-desc {\n    font-size: 1.2em;\n    right: 152px;\n    bottom: 16%;\n    padding: 0 24px 0 8px;\n}\n\n.landing-triangle {\n    border-width: 0 0 200px 100vw;\n}\n\n.landing-vid {\n    min-height: calc( 0.5625 * (100vw - 2*176px) / 2 );\n}\n\n.landing-vid iframe {\n    width: 100%;\n    min-height: calc( 0.5625 * (100vw - 2*176px) / 2 );\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.landing-container {\n    display: block;\n    padding: 0 16px 0 16px;\n    height: auto;\n}\n\n.landing-logo {\n    position: static;\n    padding: 16% 0 16% 0;\n}\n\n.landing-logo .landing-inci {\n    font-size: 4em;\n}\n\n.landing-logo .landing-nitk {\n    font-size: 1.2em;\n}\n\n.landing-vid {\n    width: 100vw;\n    margin-top: 16px;\n    margin-left: -16px;\n    margin-bottom: -8px;\n}\n\n.landing-play {\n    display: none;\n}\n\n.landing-desc {\n    position: static;\n    width: 100%;\n}\n\n.landing-triangle {\n    display: none;\n}\n\n.landing-backdrop {\n    display: none;\n}\n\n.landing-vid {\n    min-height: 56.25vw;\n    width: 100vw;\n    margin-top: 16px !important;\n    margin-left: -16px !important;\n    margin-bottom: -8px !important;\n    padding: 0 !important;\n}\n\n.landing-vid iframe {\n    width: 100vw;\n    min-height: 56.25vw;\n}\n\n\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"landing-container\">\n  <div class=\"row\">\n    <div class=\"col s12 m6\">\n      <div class=\"landing-logo monserrat iblack-text\">\n        <span class=\"landing-inci\">INCIDENT</span>\n        <span class=\"landing-nitk\">NITK SURATHKAL - MARCH 2019</span>\n      </div>\n\n      <div class=\"landing-desc monserrat iblack-text\">\n        Incident is the annual cultural festival of the National Institute of Technology Karnataka, Surathkal. From its humble\n        beginnings in the 1980s with a budget of just ₹10000, Incident has grown into the second largest cultural festival in\n        South India, attracting a footfall of over 40,000 from 200 colleges across the country. Incident's prestigious stage has\n        seen some of India’s greatest talents and has also been a launchpad for new upcoming artists. Boasting a plethora of\n        high quality events spanning across multiple days, this is a celebration you would not want to miss.\n      </div>\n    </div>\n    \n    <div class=\"col s12 m6 landing-vid\">\n      <!-- <a href=\"https://youtu.be/cet_oPDryQY\" target=\"_blank\"><img class=\"landing-img\" src=\"/assets/images/inci_night.jpg\"/></a> -->\n      <iframe class=\"\" src=\"https://www.youtube.com/embed/cet_oPDryQY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n\n<div class=\"landing-triangle\"></div>\n\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/management/management.component.css":
/*!*****************************************************!*\
  !*** ./src/app/management/management.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.m8 li {\n    list-style-type: disc !important;\n    padding-right: 24px !important;\n}\n\ndiv.col, li, h6 {\n    font-size: 1.1em;\n}\n\n@media only screen and (max-width: 1400px) {\n\ndiv.col, li, h6 {\n    font-size: 1.0em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.col.m8 li {\n    padding-right: 0;\n}\n\n}"

/***/ }),

/***/ "./src/app/management/management.component.html":
/*!******************************************************!*\
  !*** ./src/app/management/management.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container monserrat blue-yonder white-text\">\n    <br> <br> <br>\n    <div class=\"page-title\">MANAGEMENT & COMMERCE</div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Bitcoin</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn about the concept of Bitcoin in the Cypherpunk movement and Libertarian ideals along with the\n                    significance of Bitcoin.\n\n                </li>\n                <li>Learn the mechanics and working of Bitcoin.</li>\n                <li>Get introduced with concepts like the Bitcoin network, cryptography, Bitcoin script, privacy as well\n                    as hash commitment schemes.\n                </li>\n                <li>Learn the real world aspects of Bitcoin and get introduced with the wallet and mining in the Bitcoin\n                    network.\n                </li>\n\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Bitcoin.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Human Resources</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Discuss and evaluate the theories of managing human resources which are applicable in various\n                    sectors.\n\n                </li>\n                <li>Analyze human resources functions and employee motivation in different fields.</li>\n                <li>Study the impacts as well as the factors which affect the development of the organizational culture.\n                </li>\n                <li>Evaluate the HR research journals to identify the methodologies.\n\n                </li>\n\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Human Resources.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Technical Analysis</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn about the different concepts of trading and boost your trading IQ.</li>\n                <li>Get to know about the different trading strategies and learn how to implement them in business\n                    sectors.</li>\n                <li>Connect with traders and learn the different methods.</li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Technical Analysis.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Business Analytics</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn about the basic data types along with surveys and data visualization.</li>\n                <li>Get familiar with the popular descriptive statistics and basic probability concepts.</li>\n                <li>Learn the basic excel modelling building for cost, revenue and profit.</li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Business Analytics.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Lean Operations</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn the principles of Lean and Lean Maturity Matrix.</li>\n                <li>Get to know about the types of waste common in organizations.</li>\n                <li>Work with different Lean tools, metrics and techniques.</li>\n\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Lean Operations.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Finance</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Understand the role of Corporate Finance.</li>\n                <li>Understand the concept of financial markets thoroughly and individual’s need for funds.</li>\n                <li>Use capital budgeting tools for evaluating investments.</li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Finance.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Marketing</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn about the demands forecasting using the customer base models.</li>\n                <li>Learn the market segmentation methods as well as practices for identifying the potential customer\n                    segments.</li>\n                <li>Understand proper calculation of optimal pricing for products to get the best ROI.</li>\n\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Marketing.jpg\" alt=\"\">\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Journalism</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Understand and identify the newsworthy issues.</li>\n                <li>Learn reporting, editing and define the possibilities of mobile platforms and other such kind of\n                    tools.</li>\n                <li>Learn about the ethical and the safest media practices.</li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://form.jotform.me/91071868198469\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n            &nbsp;\n            <a href=\"https://form.jotform.me/91072130472447\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br>\n            <br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/journalism.jpg\" alt=\"\">\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/management/management.component.ts":
/*!****************************************************!*\
  !*** ./src/app/management/management.component.ts ***!
  \****************************************************/
/*! exports provided: ManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function() { return ManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagementComponent = /** @class */ (function () {
    function ManagementComponent() {
    }
    ManagementComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    ManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-management',
            template: __webpack_require__(/*! ./management.component.html */ "./src/app/management/management.component.html"),
            styles: [__webpack_require__(/*! ./management.component.css */ "./src/app/management/management.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagementComponent);
    return ManagementComponent;
}());



/***/ }),

/***/ "./src/app/mech/mech.component.css":
/*!*****************************************!*\
  !*** ./src/app/mech/mech.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col.m8 li {\n    list-style-type: disc !important;\n    padding-right: 24px !important;\n}\n\ndiv.col, li, h6 {\n    font-size: 1.1em;\n}\n\n@media only screen and (max-width: 1400px) {\n\ndiv.col, li, h6 {\n    font-size: 1.0em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.col.m8 li {\n    padding-right: 0;\n}\n\n}"

/***/ }),

/***/ "./src/app/mech/mech.component.html":
/*!******************************************!*\
  !*** ./src/app/mech/mech.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container monserrat blue-yonder white-text\">\n    <br><br><br>\n    <div class=\"page-title\">MECHANICAL / AUTOMOBILE</div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Automobile - CAD</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn the fundamentals of primary fields of engineering. </li>\n                <li>Get to know about the techniques as well as applications of the designing process.\n                </li>\n                <li>Learn to design, build as well as assess a prototype which solves an engineering problem.\n                </li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://nitk_surathkal.formstack.com/forms/online_internship_program\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n                &nbsp;\n            <a href=\"https://nitk_surathkal.formstack.com/forms/hybrid_internship_program\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br><br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/cad.jpg\" alt=\"\"><br>\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">IC Engine Design And Development</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn the dismantling as well as assembling of an engine.\n                </li>\n                <li>Learn the assembling and dismantling of a 4 stroke IC engine.</li>\n                <li>Get familiar with concepts and working of braking, ignition and exhaust systems.</li>\n                <li>Learn about advanced topics on Engine Control Unit, Sensors and Actuators. </li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://nitk_surathkal.formstack.com/forms/online_internship_program\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n                &nbsp;\n            <a href=\"https://nitk_surathkal.formstack.com/forms/hybrid_internship_program\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br><br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/IC Enginee Design And Development.jpg\" alt=\"\"><br>\n    </div>\n    <div class=\"row\">\n        <h3 class=\"azuki\" style=\"text-align:left\">Robotics</h3>\n        <div class=\"col s12 m8\">\n            <h6>What you will learn?</h6>\n            <ul>\n                <li>Learn how to manipulate robot arms and get introduced to kinematic chains, differential kinematics\n                    as well as forward and inverse kinematics.\n                </li>\n                <li>Represent the 2D and 3D spatial relationships.</li>\n                <li>Learn to design complete robot systems.</li>\n                <li>Learn how to program and navigate mobile robots.</li>\n                <li>Develop applications for robots.</li>\n            </ul>\n            <h6>What you will get?</h6>\n            <ul>\n                <li>Project Letter issued on successful submission </li>\n                <li>Guaranteed Internship in one of the 300+ companies</li>\n            </ul>\n            <h6>Projects</h6>\n            <ul>\n                <li>One Minor Project</li>\n                <li>One Major Project</li>\n            </ul>\n\n            <a href=\"https://nitk_surathkal.formstack.com/forms/online_internship_program\" class=\"mbtn mbtn-white\">Online\n                Internship</a>\n                &nbsp;\n            <a href=\"https://nitk_surathkal.formstack.com/forms/hybrid_internship_program\" class=\"mbtn mbtn-white\">Offline\n                Internship</a>\n            <br><br>\n        </div>\n        <img class=\"col s12 m4 rounded-image\" src=\"/assets/images/departments/Robotics.jpg\" alt=\"\"><br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/mech/mech.component.ts":
/*!****************************************!*\
  !*** ./src/app/mech/mech.component.ts ***!
  \****************************************/
/*! exports provided: MechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MechComponent", function() { return MechComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MechComponent = /** @class */ (function () {
    function MechComponent() {
    }
    MechComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    MechComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mech',
            template: __webpack_require__(/*! ./mech.component.html */ "./src/app/mech/mech.component.html"),
            styles: [__webpack_require__(/*! ./mech.component.css */ "./src/app/mech/mech.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MechComponent);
    return MechComponent;
}());



/***/ }),

/***/ "./src/app/sponsors/sponsors.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sponsor-item {\n    float: none;\n    width: 20%;\n    padding: 16px !important;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.sponsor-item .image {\n    width: 100%;\n    height: 120px;\n    margin-bottom: 8px;\n    vertical-align: middle;\n    position: relative;\n}\n\n.sponsor-item .image img {\n    max-width: 98%;\n    max-height: 120px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n\n.sponsor-item .title {\n    font-size: 1.6em;\n    font-weight: 500;\n}\n\n@media only screen and (max-width: 800px) {\n\n.sponsor-item .title {\n    font-size: 1.2em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.sponsor-item {\n    width: 50%;\n}\n\n}"

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.html":
/*!**************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sponsor page-container black-text pastel-grey\">\n\n  <div class=\"nav-top\">\n    <a routerLink=\"/icare\"><i class=\"material-icons black-text\">keyboard_arrow_up</i></a>\n  </div>\n\n  <div class=\"page-content\">\n    <div *ngIf=\"!isHome()\" class=\"page-title iblack-text\">PREVIOUS SPONSORS<br /><br /></div>\n\n    <div class=\"center-align monserrat\">\n      <div>\n        <h4 *ngIf=\"isHome()\" class=\" iblack-text\">\n          <b>OUR PROUD SPONSORS</b>\n        </h4>\n        <div class=\"row center-align\">\n          <div class=\"col sponsor-item\" *ngFor=\"let sponsor of sponsors.main\">\n            <div class=\"image\"><img src=\"{{ sponsor.image }}\" /></div>\n            <div class=\"title\">{{ sponsor.name }}</div>\n          </div>\n\n          <span *ngIf=\"!isHome()\">\n            <div class=\"col sponsor-item\" *ngFor=\"let sponsor of sponsors.all\">\n              <div class=\"image\"><img src=\"{{ sponsor.image }}\" /></div>\n              <div class=\"title\">{{ sponsor.name }}</div>\n            </div>\n          </span>\n        </div>\n        <br /><br />\n        <a *ngIf=\"isHome()\" routerLink=\"/sponsors\" class=\"mbtn \">SEE ALL SPONSORS</a>\n        <a *ngIf=\"!isHome()\" routerLink=\"/contact-us\" class=\"mbtn\">WANT TO SPONSOR? - CONTACT US</a>\n        <br /><br /><br />\n      </div>\n    </div>\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/about\"><i class=\"material-icons black-text\">keyboard_arrow_down</i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SPONSORS = __webpack_require__(/*! ../../assets/data/sponsors.json */ "./src/assets/data/sponsors.json");
var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(titleService) {
        this.titleService = titleService;
        this.sponsors = SPONSORS;
        this.isHome = _app_component__WEBPACK_IMPORTED_MODULE_1__["isHome"];
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_1__["isMobile"];
        if (!Object(_app_component__WEBPACK_IMPORTED_MODULE_1__["isHome"])()) {
            this.titleService.setTitle('Incident 2019 - Sponsors');
        }
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_3__["blackHeader"])();
        jquery__WEBPACK_IMPORTED_MODULE_5__('.nav-down a').click(_about_about_component__WEBPACK_IMPORTED_MODULE_4__["aboutInit"]);
    };
    SponsorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.component.html */ "./src/app/sponsors/sponsors.component.html"),
            styles: [__webpack_require__(/*! ./sponsors.component.css */ "./src/app/sponsors/sponsors.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistics .page-content img {\n    height: calc(100vh - 2*101px);    \n}\n\n@media only screen and (max-width: 1400px) {\n\n.statistics .page-content img {\n    height: calc(100vh - 2*84px);\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.statistics .page-content img {\n    width: 100%;\n    height: auto;\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n}"

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statistics page-container burgundy white-text\">\n\n  <div class=\"nav-top\">\n    <a routerLink=\"/incident\"><i class=\"material-icons white-text\">keyboard_arrow_up</i></a>\n  </div>\n\n  <div *ngIf=\"!isMobile()\" class=\"page-content center\">\n    <img src=\"/assets/images/statistics/statistics.png\">\n  </div>\n  \n  <div *ngIf=\"isMobile()\" class=\"page-content center\">\n    <div class=\"page-title left-align\">OUTREACH</div>\n    <img src=\"/assets/images/statistics/statistics1.png\">\n    <img src=\"/assets/images/statistics/statistics2.png\">\n    <img src=\"/assets/images/statistics/statistics3.png\">\n    <img src=\"/assets/images/statistics/statistics4.png\">\n    <img src=\"/assets/images/statistics/statistics5.png\">\n    <img src=\"/assets/images/statistics/statistics6.png\">\n  </div>\n\n  <app-footer *ngIf=\"isMobile()\"></app-footer>\n\n  <div class=\"nav-down\">\n    <a routerLink=\"/events\"><i class=\"material-icons white-text\">keyboard_arrow_down</i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(titleService) {
        this.titleService = titleService;
        this.isMobile = _app_component__WEBPACK_IMPORTED_MODULE_2__["isMobile"];
        this.titleService.setTitle('Incident 2019 - Statistics');
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/verzeo/verzeo.component.css":
/*!*********************************************!*\
  !*** ./src/app/verzeo/verzeo.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-link {\n    opacity: 0;\n    cursor: pointer;\n    font-size: 1.5em;\n    transition: opacity 300ms ease-out;\n    -webkit-user-select: none; /* Safari */        \n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* IE10+/Edge */\n    user-select: none; /* Standard */\n}\n\n.events-listing {\n    width: 100%;\n    padding: 9vw;\n    display: none;\n    transition: opacity 300ms ease-out;\n}\n\n.events-listing.active {\n    display: block;\n}\n\n.events-listing .col {\n    padding: 10px !important;\n}\n\n.events-listing .events-listing-item {\n    display: flex;\n    margin-top: 20px !important;\n    border-radius: 16px;\n    flex-direction: column;\n    cursor: pointer;\n    overflow: hidden;\n    background: white;\n}\n\n.events-listing .events-listing-item .image {\n    width: 100%;\n    height: 320px;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.events-listing .events-listing-item .icon *, .events-listing .events-listing-item .icon img {\n    position: absolute;\n    top: 50%;\n    left: 16px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.events-listing .events-listing-item .icon i {\n    font-size: 6em;\n}\n\n.events-listing .events-listing-item .title {\n    font-size: 2.4em;\n    padding: 6px 16px 6px 16px;\n    color: #063862;\n}\n\n.events-listing .events-listing-item:hover {\n    background-color: rgb(255, 255, 255, 0.5)\n}\n\n.events-listing .row .title {\n    font-size: 3em;\n}\n\n.events-listing .row .col {\n    text-align: left;\n    font-size: 1.6em;\n}\n\n.events-listing .row {\n    display: flex;\n    margin-top: 48px !important;\n}\n\n.events-listing .row:nth-child(2n+1) {\n    direction: rtl;\n}\n\n.events-listing .row .col img {\n    width: 100%;\n    border-radius: 16px;\n}\n\n.events-listing .events-page-desc {\n    padding-top: 32px;\n    font-size: 1.8em;\n}\n\n.events-listing .ltr {\n    direction: ltr;\n}\n\n@media only screen and (max-width: 1400px) {\n\n.back-link {\n    font-size: 1.2em;\n}\n\n.events-listing .events-listing-item .image {\n    height: 240px;\n}\n\n.events-listing .events-page-desc {\n    font-size: 1.4em;\n}\n\n.events-listing .row .col {\n    font-size: 1.2em;\n}\n\n}\n\n@media only screen and (max-width: 800px) {\n\n.events-listing {\n    width: 100%;\n}\n\n.events-listing .col {\n    width: 100%;\n    padding: 0 !important;\n}\n\n.events-listing .row {\n    display: block;\n}\n\n.events-stay-tuned div {\n    height: 600px;\n}\n\n.events-listing .events-listing-item .image {\n    height: 360px;\n}\n\n}"

/***/ }),

/***/ "./src/app/verzeo/verzeo.component.html":
/*!**********************************************!*\
  !*** ./src/app/verzeo/verzeo.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-container blue-yonder white-text\">\n\n  <br/>\n  <br/>\n  <br/>\n\n  <div class=\"page-title\">INCIDENT'19 - INTERNSHIP OPPORTUNITIES</div>\n\n  <h5>\n        Last date to register for internships : 1<sup>st</sup> May.\n</h5>\n\n  <div class=\"category-list events-listing row active azuki\">\n    <div class=\"col s12 m4\" *ngFor=\"let item of categories\">\n      <a class=\"events-listing-item\" routerLink=\"/internships/{{ item.hash }}\">\n        <div class=\"image\" [style.backgroundImage]=\"'url(assets/images/departments/' + item.img + ')'\"></div>\n      </a>\n    </div>\n  </div>\n\n  <br />\n  <br />\n  <br />\n\n</div>\n"

/***/ }),

/***/ "./src/app/verzeo/verzeo.component.ts":
/*!********************************************!*\
  !*** ./src/app/verzeo/verzeo.component.ts ***!
  \********************************************/
/*! exports provided: VerzeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerzeoComponent", function() { return VerzeoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EVENT = __webpack_require__(/*! ../../assets/data/verzeo.json */ "./src/assets/data/verzeo.json");
var CATEGORIES = EVENT.categories;
var VerzeoComponent = /** @class */ (function () {
    function VerzeoComponent() {
        this.categories = CATEGORIES;
    }
    VerzeoComponent.prototype.ngOnInit = function () {
        Object(_header_header_component__WEBPACK_IMPORTED_MODULE_1__["whiteHeader"])();
    };
    VerzeoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verzeo',
            template: __webpack_require__(/*! ./verzeo.component.html */ "./src/app/verzeo/verzeo.component.html"),
            styles: [__webpack_require__(/*! ./verzeo.component.css */ "./src/app/verzeo/verzeo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerzeoComponent);
    return VerzeoComponent;
}());



/***/ }),

/***/ "./src/assets/data/about.json":
/*!************************************!*\
  !*** ./src/assets/data/about.json ***!
  \************************************/
/*! exports provided: about_desc, history, default */
/***/ (function(module) {

module.exports = {"about_desc":[{"href":"#one!","image":"/assets/images/about/intro.jpg","mobileImage":"/assets/images/about/intro.mob.jpg","desc":"Since its humble beginnings in the 1980s, Incident has grown to become the second largest cultural festival in India. Over the course of five spectacular days, Incident attracts over 40000 people across India. In recent years, Incident has seen some of India’s greatest talents grace its stage with their presence.","delay":15},{"href":"#two!","image":"/assets/images/about/more-than-fest.jpg","mobileImage":"/assets/images/about/more-than-fest.mob.jpg","desc":"But Incident is more than a festival.","delay":5},{"href":"#three!","image":"/assets/images/about/unseen-talents.jpg","mobileImage":"/assets/images/about/unseen-talents.mob.jpg","desc":"Incident is a launchpad; a platform for the unseen talents of the world.","delay":5},{"href":"#four!","image":"/assets/images/about/compassion.jpg","mobileImage":"/assets/images/about/compassion.mob.jpg","desc":"Incident is about compassion for our people and our environment.","delay":5},{"href":"#five!","image":"/assets/images/about/friendships-memories.jpg","mobileImage":"/assets/images/about/friendships-memories.mob.jpg","desc":"It is about the people, where friendships are born and memories made.","delay":5},{"href":"#six!","image":"/assets/images/about/connecting-people.jpg","mobileImage":"/assets/images/about/connecting-people.mob.jpg","desc":"Incident lays the foundation for new bridges, connecting people thousands of miles apart.","delay":6},{"href":"#seven!","image":"/assets/images/about/unknown-paths.jpg","mobileImage":"/assets/images/about/unknown-paths.mob.jpg","desc":"It is a spectacle, where every step taken is a new experience on an unknown path.<br/> Incident is a phenomenon.","delay":8}],"history":[{"year":"2018 - A Global Odyssey","image":"/assets/images/about/inci-18.jpg","desc":"<p>The thousands of cultures, languages and cuisines give our planet its profound beauty and joy. To truly be citizens of the world, we must experience, understand, appreciate and enjoy other cultures and their traditions. Incident’18, ‘A Global Odyssey’, was about bridging the gap between our world’s different cultures and traditions.</p><p>The hilarious Sahil Shah from EIC started off proceedings with an amazing set powered by his characterful jests and unique delivery. Folks from Sony set up a Sony Experience Zone, complete with PS4s, a VR Rig, foosball and more. NITK’s beach sky was adorned by hundreds of stunning kites as part of the Incident’s Kite Festival. </p><p>The second night kicked off with When Chai Met Toast’s soulful performance with their characteristic happy-go-lucky music followed by an ecstatic show by the Catalonian band, Itaca Band. Itaca Band’s signature high energy style, combining elements of reggae, rock, latin and electronic music, was complemented by the band’s own enthusiasm. </p><p>The festivities continued on the third day of Incident with Holi and Haute Couture. The Itaca band members joined in on the holi celebrations on the streets. Haute Couture was extravagant with universities across India participating in the prestigious fashion competition. </p><p>The fourth night was the Odyssey’s mantlepiece. Benny dayal performed for Popular Night, blowing the audience away with his charisma and skill. Incident was far from over though, with Promenade, the Slam Dunk Finals, Informalz and the Cultural Experience Zone set up by the British Council, the last few days of incident were a blur. </p><p>Incident wrapped up with Zaeden and Ritviz, their masterful mixes closing off the Odyssey. Incident’18, A Global Odyssey was about the people and their experiences and it truly lived up to its promises. </p> "},{"year":"2017 - A Coastal Carnival","image":"/assets/images/about/inci-17.jpg","desc":"<p>A metaphor for fun and limitless possibilities, our famous coastline seemed the perfect inspiration for our annual fete. And it was only apt that the 2017 edition was known as ‘A Coastal Carnival’.</p></p>Karthick Iyer started off proceedings with IndoSoul, a perfect blend of classical and contemporary music, mesmerizing us with his beautiful compositions. Flagship event Slam Dunk got underway early next day, as did Pulse, Informalz and a vintage car expo, before a mind-numbing performance by Baiju Dharmajan Syndicate, jam-packed with sublime original compositions and covers. And before anyone had any time to recover, Kerala based Eastern music band Masala Coffee put up an outstanding show. Covering popular songs in various languages and blending folk culture into their compositions, it was simply a night no one would ever forget.</p><p>2017 marked the beginning of Inci Talks, a gathering of renowned minds from across the country, with political leader Dr Jayaprakash Narayan, author and entrepreneur Mr Balaji Vishwanath and popular actor and former netball captain of the Indian national team, Prachi Tehlan addressing the audience. Business, literary, music and dance were all in full swing by Day 2, as Angad Singh Ranyal tickled our funny bones with his impeccable timing and punchlines with Seedhi Baat, No Bakwaas. </p><p>The Red Bull Tour Bus made its way into our college and in Lagori and Oceantied, it brought in one spectacular party. Haute Couture, with its signature exotic costumes and enchanting choreographies, wrapped up another amazing day, but Incident was far from over. With Promenade, Step Up, Bandish, Raagalaya, Spinshock and a Stunt Show from the Attitude Team, Day 4 was a blur before The Local Train won us over with their “Hindie” rock music. A Kite Festival at the beach, Tandav, EDM artists Lost Stories and DJ AceAxe all helped us reluctantly bid adieu to another breathtaking edition of Incident, an edition that raised the bar and our expectations for the years to come.</p>"},{"year":"2016 - Legends Awaken","image":"/assets/images/about/inci-16.jpg","desc":"<p>Kick-starting with Sand Melody, a beautiful sand painting performance by Raghavendra Hegde, Incident 2016 truly awakened the legends across NITK's coast. Followed by the Comedy Night, Kenny Sebastian's hilarious stand up comedy and his brilliant songs left us all laughing to our hearts content! Incident 2016 gave us a legendary lineup of bands and artists for Pronites events.</p><p>Indie bands like Junkyard Groove and Parvaaz had us grooving to their incredible and original music. LoudStreet Girls and SilverString Band owned the night with their extraordinary energy and amazing girlpower! SilverString girls with their upbeat bollywood melodies had the students pronging the dance floor till three in the morning. </p><p>For all the fashionistas of our college, Incident 2016 brought double the happiness with Haute Couture and Campus Princess Auditions held back to back! Campus Princess Audition in association with Miss India Organisation,Times Group provided a platform for our girls to have a shot at Miss Diva 2016 and possibly represent India at the Miss Universe 2016.</p><p>Along with the usual lineups of intriguing workshops,the immensely popular Shiamak Davar Dance Institute also held a Dance Workshop for all the amateur dance enthusiasts.A Fresh Face competition was also held among the 2016 freshers. Facebook was used as a platform to vote and support the confident, beautiful girls and boys of first year.</p><p>Incident 2016 topped off with a melodious performance by the Rehman sisters as they performed numerous bollywood and South Indian songs!</p>"},{"year":"2015 - High on Colour","image":"/assets/images/about/inci-15.jpg","desc":"<p>Incident 2015 was nothing short of spectacular, even by the standards set by the previous years. With Holi coinciding with Incident on the calendar, 'High on Colour’ encompassed the entire gamut of events that Incident had in store.</p><p>Incident 2015 had a record-breaking online presence with the ‘Mauka Mauka’ video, which garnered over 140,000 views. Also popular was the Inci Blog, featuring reviews of student eat-out hotspots in Mangalore, the inspiration behind the theme and as the fest progressed, the events covered by the Inci Press.</p><p>The Slam Dunk inauguration and a side-splitting performance by the East India Comedy were the highlights of Day 0 with EIC and their ‘Ghanta Awards’ setting the tone for the rest of the festivities. From the Kalakriti inauguration to the Word Games organized by the Literary, Stage & Debating Society to the Kite Fest – there was something for everyone. Haute Couture saw a record number of registrations and even requests to shift dates. The competition was pleasantly interrupted by Ukrainian belly dancer Sonia Nakti’s captivating performance, one that was simply the epitome of fluidity and grace. And with Holi, the theme literally came to life and the euphoria induced by dousing each other in colour leaked into the day’s events, from the dance competitions that showcased a myriad of vibrant performances to the Beach Events, electrified by the DJs battling it out in the DJ Wars. Thermal and a Quarter enthralled the crowd under a star-studded night-sky at the SAC with a wide array of songs. Come the next evening, a couple of dazzling stars had descended upon us, and as Vishal-Shekhar gave us all a night to remember, as we threw our hands in the air and screamed ourselves hoarse, there was something surreal about that day. Over at the basketball court, Slam Dunk ended in a nail-biting finish, right before the DJ night with Mightyfools and DJ ASen commenced, a perfect culmination to the incredible experience Incident 2015 had been. Staying true to the theme, Incident 2015 remains a kaleidoscope of indelible memories and experiences.</p>"}]};

/***/ }),

/***/ "./src/assets/data/events.json":
/*!*************************************!*\
  !*** ./src/assets/data/events.json ***!
  \*************************************/
/*! exports provided: events, categories, default */
/***/ (function(module) {

module.exports = {"events":{"beach":[{"name":"Kite Festival","image":"kite-fest.JPG","hash":"kite","desc":"Kite flying is a sport that brings out the little child in each one of us and lights up a smile on our face. As the kites fly higher and higher so does our spirit and cheerfulness. This Incident, join us as these colourful creative kites take to the air and paint the sky with joy! Come, fly a kite and travel back to your childhood! <br><b>Date: </b> 3rd March"},{"name":"Beach Informalz","image":"beach-informalz.jpg","hash":"informalz","desc":"Not finding any events to your taste? Bored out of your mind? No worries! All you gotta do is take a stroll to 'The Beach'. The Informalz is awaiting you! From mind-blowing games  to silly competitions between your buddies, the Beach Informalz offers a dose of fun and frolic that you cannot refuse! <br><b>Date: </b>  1st - 3rd March"}],"music":[{"name":"Unplugged","image":"unplugged.jpg","hash":"Unplugged","desc":" (Western Acoustic & A-cappella Band Competition)<br>A starry night. Gentle winds. A crackling bonfire. Waves on the beach. The strum of a guitar. String new notes and make new music. Mix melodies with your mind. Enthral your senses and expand your horizons. Experience contentment and enlightenment at Unplugged. Be it Western acoustic spectacle or an Acapella wonder, unplug your heart and let the music take over! <br><b>Date: </b> 1st March. <br><b>Prizes: </b> Worth 20K","register":"/register/events/","contact":"Spoorthi:  9071250165","rules":"https://drive.google.com/open?id=1lbiIfTxuCQaXAKJzV3XuTodgUgzVH6Owe0zYLKfY4kQ"},{"name":"Pulse","image":"pulse.jpg","hash":"Pulse","desc":"(Semi-Professional Western Rock Band Competition) <br>Have you ever dreamt of selling out Madison Square Garden? Ever wondered how it would feel to witness a full-house crowd chant your name? Team Incident provides just the experience and invites you to rule the stage at Pulse, the Western battle of bands. We promise you a crowd unlike anything you have ever seen and will ever see! What are you waiting for? Register today! <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 40K","register":"/register/events/","contact":"Sofia: 8095908965","rules":"https://drive.google.com/open?id=11-C8CSt7c2QMhph5K_J0nXpyhMvG9e-gCY5f2BRxSRE"},{"name":"Dhwanik","image":"dhwanik.jpg","hash":"Dhwanik","desc":"(Eastern Acoustic Band Competition)<br>This Incident allow your soul to marvel at the wonders of the Eastern music. Let the whimsical notes of the flute sweep you off your feet. Let the cheeky twang of a sitar snap at the strings of your heart. Let the lively beat of the tabla incite fire in your veins. Let Dhwanik, Incident's Eastern acoustic sensation, leave you craving for more. <br><b>Date: </b> 1st March. <br><b>Prizes: </b> Worth 20K","register":"/register/events/","contact":"Anthea: 9611947705","rules":"https://drive.google.com/open?id=1UHa94JT6luJfs8ClWXdU9tqftWlxIqJ2ZXGYBbQagew"},{"name":"Bandish","image":"bandish.JPG","hash":"Bandish","desc":"(Semi-Professional Hindustani and Carnatic Rock Band Competition)<br> Thermal and Quarter. Raghu Dixit Project. Thaikkudam Bridge. Let it be remembered in the pages of history that nobody does rock better than our desi boyz! Adorn your heart with the tricolour at Bandish, the Eastern rock phenomenon. Because who says only the Westerners should have all the fun? <br><b>Date: </b> 3rd March. <br><b>Prizes: </b> Worth 40K","register":"/register/events/","contact":"Navnika: 9880581172","rules":"https://drive.google.com/open?id=1_AxOkfL941k1g0q_uPU_foKN8Sc2Y_howJ-Ya8seufw"}],"dance":[{"name":"Tandav","image":"Tandav.JPG","hash":"Tandav","desc":"(Semi-professional Eastern and Contemporary Group Dance Competition) : Diversity defines India. So get ready to define it with your dancing talent as we present to you the Indian classical  dance competition, Tandav. Come, unite the East, West, North and the South on one stage with stupendous choreography and blend these Indian dance forms up into a wonderful story for the world to witness. <br><b>Date: </b> 3rd March. <br><b>Prizes: </b> Worth 45k","register":"/register/events/","rules":"https://docs.google.com/document/d/1OUjeVzBtgDpGu3-0f5ZodI9BVWYQtEZQnN4E4fCwMeA/edit","contact":"Chandan Mishra: 7892547029, Swathi Bhat: 8884597651"},{"name":"Promenade","image":"Promenade.JPG","hash":"Promenade","desc":"(Western Group Dance Competition) A leisurely stroll would seem so relieving, but what if you get to see your favourite dance moves creating it’s magic outside the dance floor? Presenting to you, the group Street dance competition, Promenade. So does your group have it to turn eyes around and make it an amazing dance Promenade? Join in and find out yourself. <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 45k","register":"/register/events/","rules":"https://docs.google.com/document/d/1OUjeVzBtgDpGu3-0f5ZodI9BVWYQtEZQnN4E4fCwMeA/edit","contact":"Vaibhav Rai: 8073368756"},{"name":"Step Up Duet","image":"Step-UP-duet.JPG","hash":"Step Up Duet","desc":"What’s better than watching a live story, enacted by two people, shaping up with that eye catching choreography? Let the two speak with their moves as Incident presents to you the duet version of Step Up where you step up the level with double the talent.So let the double magic come across! <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 10K","register":"/register/events/","rules":"https://docs.google.com/document/d/1OUjeVzBtgDpGu3-0f5ZodI9BVWYQtEZQnN4E4fCwMeA/edit","contact":"Shashank S: 7795980173"},{"name":"Step Up Solo","image":"Step-UP-Solo.JPG","hash":"Step Up solo","desc":"Step up the volume, step up the beats, step up the electrifying mood, step up those dance moves. Incident gives you a chance to take your talent one step higher with Step Up, the solo dance contest. So are you geared up to step up? Gyrate with your moves and prove it then. <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 7K","register":"/register/events/","rules":"https://docs.google.com/document/d/1OUjeVzBtgDpGu3-0f5ZodI9BVWYQtEZQnN4E4fCwMeA/edit","contact":"Gautham Sambath: 9946928155"}],"quiz_events":[{"name":"General Quiz","hash":"General_Quiz","desc":"A crowd roaring with applause, wondering how you know so much. The quizmaster, wondering if his next question will break your amazing streak of right questions. You, on the other hand confident, that you will sail past this last question and be the champion. As the environment get tense, and the he says, “Team 4, your last question is…”. You know the answer, you know the answer! But you’ve gotta be there to answer. So come and prove your Mettle. Show that your team is the best, be it any topic under the sun! This is the General quiz. <br><b>Quizmaster:</b> Lokesh Kaza <br><b>Teams of three.</b><br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 9K","register":"/register/events/","contact":"Dhruv: +919880547421"},{"name":"Asia Quiz - Inci Themed Quiz","hash":"India_Quiz","desc":"If you are confident with your trivia about Asia, this is your chance.If competition comes naturally to you, if your brain is dying for some activity and if you see thrill in do-or-die situations, we invite you to take part in the ultimate brain storming session. Watch while teams battle it out on the stage as answers fly back and forth with equal aplomb. <br><b>Teams of three.</b><br><b>Date: </b> 1st March. <br><b>Prizes: </b> Worth 6.5K","register":"/register/events/","contact":"Dhruv: +919880547421"},{"name":"MELAS Quiz","hash":"Melas_Quiz","desc":"Do you revel in your knowledge of obscure facts from the classic literary works to modern cinema? Is music and art something you hold dear? The MELAS Quiz is the perfect platform to bring forth your provice in cinema, literature, art, music, sports and everything that connects them. <br><b>Quizmaster:</b> Lokesh Kaza <br><b>Teams of three.</b><br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 9K","register":"/register/events/","contact":"Dhruv: +919880547421"},{"name":"Lone Wolf","hash":"Lone_Wolf","desc":"Do you know everything from the fun facts about Infinity War to the intricacies of global economics? Are you generally shunned among your peers from being a know it all? (OR does information unintentionally come out blurting whenever you open your mouth?) Well here you can actually win prizes for that! So come and embrace the chance to show the ignoramuses that information is the real wealth! <br><b>Date: </b> 1st March. <br><b>Prizes: </b> Worth 4.5K","register":"/register/events/","contact":"Dhruv: +919880547421"},{"name":"Biz Quiz","hash":"Biz_Quiz","desc":"Do people often claim that you are such a know-all? Well then, prove them right. Inci Biz Quiz tries to bring out your  knowledge treasure trove. Compete with the sharpest and fastest minds with a passion for the business world. Do you have the mettle to battle it out at the quiz-essential zone of Incident '19? <br><b>Teams of three.</b><br><b>Date: </b> 3rd March. <br><b> Prizes: </b> Worth 6.5K","register":"/register/events/"}],"biz_events":[{"name":"Mock Stock","hash":"mock_stock","desc":"Want to experience the excitement of making money on the stock market? Have never known what a share is and have only wondered how everybody buys shares and makes riches? Join the Mock Stock event of Incident ’19. You can play against the smartest of investors and make millions. So this Inci, trade your stocks the right way and become a millionaire! <br><b>Date: </b> 27th February - 1st March. <br><b>Prizes: </b> Worth 5K","register":"/register/events/"}],"gaming_events":[{"name":"Need For Speed","image":"nfs.jpg","hash":"need_for_speed","contact":"Harshith Kumar: +91 7760575030","desc":"If you can leave two black stripes from the exit of one corner to the braking zone of the next, you have enough horsepower. Speed has never killed anyone, suddenly becoming stationary is what gets you. So keep pressing the pedal, as NFS will make your adrenaline rush this Incident ‘19. <br><b>Date: </b>  1st - 3rd March"},{"name":"PUBG","image":"pubg.jpg","hash":"pubg","contact":"Harshith Kumar: +91 7760575030","desc":"Are you a PUBG wala? Then gather around and look out for the enemies ahead as you show off your shooting skills at Incident ‘19. Doesn't matter if you get an insane amount of kills, the last man standing will get the chicken dinner. <br><b>Date: </b> 1st - 3rd March"},{"name":"Counter Strike Global Offensive","image":"csgo.jpg","hash":"counter_strike_global_offensive","contact":"Harshith Kumar: +91 7760575030","desc":"Guns blazing, corpses lying around, ammo running low and it's 3 AM in the morning. Sounds too familiar? Incident '19 presents Counter-Strike, one of the most popular games in colleges! <br><b>Date: </b> 1st - 3rd March"},{"name":"Dota2","image":"dota.jpg","hash":"Dota2","contact":"Harshith Kumar: +91 7760575030","desc":"Incident '19 presents the action-packed multiplayer game, Defence of the Ancients. Get your buddies along with you to NITK and cherish the game that brought you all together! <br><b>Date: </b> 1st - 3rd March"}],"haute_couture":[{"name":"Haute Couture","image":"haute-couture_colorised.JPG","hash":"haute","desc":"A showcase of glamour and glitz where only the elite make it to the center stage. The viewers need to brace themselves to be mesmerized by the models with their diva skills, as they walk the ramp with elegance and beauty unparalleled. You have one round to bring out your creativity, so make the most of it! <br><b>Date: </b>  1st March. <br><b>Prizes: </b> Worth 85k","register":"/register/events/","rules":"https://drive.google.com/open?id=1xA5rz3ran_c8DKswWigxCPPiOXIEIgbY","contact":"Sadeeh Hassan: 08660234640"}],"sports":[{"name":"Slam Dunk","image":"SlamDunk.JPG","hash":"slam","desc":"Be part of a thrilling event where your heart will not just pound but dribble. This Incident, pit your team against the best to compete for victory, pride and glory in one of the most heated events. Also, there are skills contest involving long range shooting and emphatic dunks open for all participants. Let the cheers echo loud and far! <br><b>Date: </b>   28th February-3rd March. <br><b>Prizes: </b> Worth 75k","register":"/register/events/","rules":"https://docs.google.com/document/d/1VXO4E-bgqQbRxDxOWHwn5bpuVcsYClPn7uK7506yqio/edit?usp=drivesdk","contact":"Suraj Hegde: +91 9916329285"},{"name":"SpinShock","image":"SpinShock.JPG","hash":"shock","desc":"Enrichen the sportive atmosphere of our cultural fest with a blend of spin, precision and grace. Come grab this unique opportunity to etch your name in the sands of INCIDENT’s intercollegiate throwball competition. <br><b>Date: </b>  1st March. <br><b>Prizes: </b> Worth 10k","register":"/register/events/","contact":"Deeksha: +91 9483478462"}],"misc":[{"name":"Frames","image":"frames.jpg","hash":"frames","desc":"The biggest annual cultural festival of NIT Karnataka, Surathkal INCIDENT '19, is back again and FRAMES in association with Photography Club NITK, invites all those passionate photographers to participate in its online photography contest.It's a great opportunity to have your photographs exhibited during Expose, the photo exhibition which is a part of Incident' 19. Through this you can also compete with the other college photographers and show the people how creative you are to this world. <br><b>Date: </b> . <br><b>Prizes: </b> Worth 5k","rules":"https://drive.google.com/file/d/1WxMI673dHIcSzQHeqYI_fAJVJmsoIqHN/view","contact":"Sandeep: +917204855840"},{"name":"Expose","image":"expose.jpg","hash":"expose","desc":"A picture is Prizes Worth a thousand words, said a great, wise man. Be wired to experience breathtaking images, thought-provoking scenarios and some magnificent editing wonders. Treat your eyes to some iconic photography at Incident 2019’s very own Expose, the world through the lens. <br><b>Date: </b> 1st-3rd March"},{"name":"Hogathon","image":"hogathon.jpg","hash":"hogathon","contact":"Shashibhushan: +91 9538806063","desc":"As the name suggests, it is a challenge which is its own reward. The rules to this mouth-watering event are simple, eat fast, eat a lot. Feast on a variety of foodstuffs, each better than the previous one. Only the gastronomically gifted can make it to the end, may the food be with you. <br><b>Date: </b> 3rd March"},{"name":"Speech Triathlon","image":"","hash":"speak","desc":"A good orator is not only one who can stand in front of the crowd and say a few words, but one who can understand the impact his every utterance has. Come join the Speech Triathlon this Incident to put yourself through the three tests of time, Declamation, Commentary and Policy, to decide once and for all who will be the master of the stage in the Western Coast.<br><br><b>Rules:</b><br>Contestants are required to deliver a speech that has been delivered by a renowned .....<a href=https://docs.google.com/document/d/1B_QsIFFZmgTcaTSeINyPpXjawvRgawvJ5tNE-_gfspk/edit>Read more </a> <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 4k","contact":"Agnes: +91 96113 44476, Tirth: +91 99208 04880","register":"/register/events/"}],"pro_shows":[{"name":"Popular Night - Amaal Mallik ","hash":"pro1","desc":"Born into a musically gifted family, Amaal Mallik is the genius behind chart topping songs such as Sooraj Dooba Hain, Soch Na Sakhe and  Kar Gaye Chull. Having started his career at the age of 15, he is among the best talents Bollywood has to offer.<br><br> Amaal Mallik has been awarded the Filmfare Award For Best Music Director 2016 for his phenomenal music compositions in the film Roy.<br><br> This Incident '19, expect the Encore Night to be nothing short of phenomenal as Amaal Mallik takes the stage at NITK.<br><br><b>Date:</b> 3rd March<br><br> <b>Tickets can be bought at inci Office</b>       ","contact":"","youtube":"https://www.youtube.com/embed/-J_IhEg1jQo"},{"name":"Popular Night - Vineet Vincent : India's Biggest Beatboxer","hash":"pro2","desc":"Considered as India's biggest beatboxer with over 1250 shows in his credit since 2008, Vineet Vincent is also the MC of the biggest youth fest in India - Under 25.<br><br> He has performed with the Austrian beat boxing group Bauchklang in 2009 and the Boxettes in 2010 among many other artists and bands.<br><br>Vineeth represented India on the Judge's panel for the first ever ‘India Beatboxing championship.<br><br>Get ready to witness his electrifying presence!<br><br><b>Date:</b>3rd March<br>        ","contact":"","youtube":"https://youtube.com/embed/s1ftUw9JHVg"},{"name":"BDM Night","hash":"pro3","desc":"Come March 2nd, NITK is set to open its gates to a DJ, blogger, model and fashion enthusiast!<br><br>This all-round entertainer has experimented against a wide range of EDM genres. She is a trailblazer who stirs up a party wherever she goes!<br><br>Incident’19 welcomes you to feel the soulful rhythm, to surrender yourself and dance like never before to the beats of <b>DJ Shanaya</b>!  <br><br><b>Date:</b>2nd March<br>        ","contact":"","youtube":"https://youtube.com/embed/dWtuxPGsmUY"}],"inci_talks":[],"fineart":[{"name":"Kalakriti","image":"kalakriti.jpg","hash":"kala","desc":"Lose yourself to jaw-dropping, eye-popping and magical pieces of art and craft. Art forms ranging from sketches to paintings, origami, kirigami and other craftwork, Kalakriti is home to all. The artist in you is sure to be motivated and inspired by the spectacular creativity packaged into this exhibition! <br><b>Date: </b>  1st - 3rd March"},{"name":"Newspaper Costume Design","image":"newspaper-costume-design.jpg","hash":"newspaper","desc":"Do you think you have a knack for fashion designing? Then take this challenge of styling your partner by remodeling everyday newspaper into iconic party wear and watch the newspaper clad  mannequins walk the ram. <br><b>Date: </b> 2nd March. <br><b>Prizes: </b> Worth 3k","register":"/register/events/","contact":"Trisha: +91 8050007655"},{"name":"Body Painting","image":"face-painting-workshops.jpg","hash":"body","desc":"Get ready to turn your partners into canvas and showcase your expertise by painting them into realistic illustrations based on a spot theme! <br><b>Date: </b> 1st March. <br><b>Prizes: </b> Worth 3k","register":"/register/events/","contact":"Trisha: +91 8050007655"}],"workshops":[{"name":"Caricature making workshop","image":"","hash":"workshop1","desc":"Philanthropist, Dental Surgeon and Master Caricature Artist. Meet Varnodhar from Mangalore. A specialist in Live Caricatures, Digital Caricatures and paintings with different media he also contributes to various social causes and is a regular contributor at Comic Con India. Let the master artist teach you the tips and tricks of a perfect caricature this incident at his Caricature Workshop!!<br><b>Date: </b> 2nd March. <br><b>Time: </b> 2 PM - 5 PM","contact":"Shubham Vernekar: +91 88676 28183","register":"/register/events/"},{"name":"Dance workshop by Hip Hop International","image":"","hash":"workshop2","desc":"<br><b>Date: </b> 3rd March.<br><b>Time: </b> 10 AM - 12 AM","contact":"Karthik +91 99026 08277","register":"/register/events/"},{"name":"Mixed Martial Art (MMA) Workshop ","image":"","hash":"workshop2","desc":"Mixed Martial art is a full contact combat sport comprising of striking and grappling techniques which allows both standing and ground fight, using techniques from various Martial arts around the globe.<br><br>Incident presents <b>Mayhem MMA Workshop</b> by Coach Nithesh Kumar, a National Muay Thai Champion & MMA Fighter who is the Founder-Head Coach at<b> Monkey Mayhem Fight Club</b>, Mangalore, Karnataka. Monkey Mayhem specialises in MMA, Muay Thai (a.k.a.Thai boxing), Brazilian Jiu Jitsu, Western Boxing, Kickboxing and Functional Fitness. Nithesh has a fight record of zero loss and has trained more than 200 students.<br><br>Team Monkey Mayhem athletes are the only ones in and around Mangalore city to have marked their places in International platform. Don't miss this golden opportunity to train with National & International Fighters of Team Monkey Mayhem.<br><b>Date:</b> 1st March<br><b>Time:</b>10 AM to 12 PM","contact":"Preethan: +91 87624 91282","register":"/register/events/"}]},"categories":[{"name":"Dance Events","image":"dance.jpg","hash":"dance"},{"name":"Music Events","image":"music.jpg","hash":"music"},{"name":"Haute Couture","image":"haute-couture.jpg","hash":"haute_couture"},{"name":"Sports Events","image":"sports.jpg","hash":"sports"},{"name":"Beach Events","image":"beach.jpg","hash":"beach"},{"name":"Quiz Events","image":"quiz.jpg","hash":"quiz_events"},{"name":"Biz Events","image":"biz.jpg","hash":"biz_events"},{"name":"Gaming Events","image":"gaming.jpg","hash":"gaming_events"},{"name":"Potpourri","image":"misc.jpg","hash":"misc"},{"name":"Pro Shows","image":"pro-shows.jpg","hash":"pro_shows"},{"name":"Inci Talks","image":"talks.jpg","hash":"inci_talks","page_desc":"We believe passionately in the power of ideas to change attitudes, lives of the student community. The goal of this event is to bring together the greatest achievers and eminent personalities such as yourself to plant the seed of an idea in the minds of this generation to create a positive change in the society. <h3 class=\"azuki\"> Previous Speakers</h3>Jayaprakash Narayan (Loksatta Party Founder), Balaji Viswanathan (Highest followed person on Quora), Ricky Kej (Grammy award winning music composer), Dr Ullas Karanth (Renowned Environmentalist and Tiger expert), Ramaswami Balasubramaniam (Chairman of Grassroots Research And Advocacy Movement (GRAAM)) have adorned the stage of Inci-Talks in the previous editions."},{"name":"Fine Arts","image":"fineart.jpg","hash":"fineart"},{"name":"Workshops","image":"workshops.jpg","hash":"workshops"}]};

/***/ }),

/***/ "./src/assets/data/social.json":
/*!*************************************!*\
  !*** ./src/assets/data/social.json ***!
  \*************************************/
/*! exports provided: fb, tw, yt, ig, default */
/***/ (function(module) {

module.exports = {"fb":{"link":"https://www.facebook.com/incidenttheofficialpage/","image":"/assets/images/social/fb.png"},"tw":{"link":"https://twitter.com/incident_nitk","image":"/assets/images/social/tw.png"},"yt":{"link":"https://www.youtube.com/channel/UC-_WeDFW_i7-GnGNJiun9_Q","image":"/assets/images/social/yt.png"},"ig":{"link":"https://www.instagram.com/incident_nitk/","image":"/assets/images/social/ig.png"}};

/***/ }),

/***/ "./src/assets/data/sponsors.json":
/*!***************************************!*\
  !*** ./src/assets/data/sponsors.json ***!
  \***************************************/
/*! exports provided: main, all, default */
/***/ (function(module) {

module.exports = {"main":[{"name":"Reliance Industries Limited","image":"/assets/images/sponsors/reliance.png","title":"Co Sponsor"},{"name":"Hindustan Petroleum","image":"/assets/images/sponsors/hindustan-petroleum.jpg","title":"Co Sponsor"},{"name":"Maruti Suzuki","image":"/assets/images/sponsors/colors-of-youth.jpg","title":"Co Sponsor"},{"name":"Coke Studio","image":"/assets/images/sponsors/coke-studio.png","title":"Co Sponsor"},{"name":"Airtel","image":"/assets/images/sponsors/airtel.png","title":"Co Sponsor"},{"name":"British Council","image":"/assets/images/sponsors/british-council.png","title":"Co Sponsor"},{"name":"KTM","image":"/assets/images/sponsors/ktm.png","title":"Co Sponsor"},{"name":"NestAway","image":"/assets/images/sponsors/nestaway.png","title":"Co Sponsor"},{"name":"Adani","image":"/assets/images/sponsors/adani.png","title":"Co Sponsor"},{"name":"Saavn","image":"/assets/images/sponsors/saavn.png","title":"Co Sponsor"},{"name":"Life Insurance Corporation of India","image":"/assets/images/sponsors/lic.png","title":"Co Sponsor"},{"name":"PlayStation","image":"/assets/images/sponsors/playstation.jpg","title":"Co Sponsor"},{"name":"Sephora","image":"/assets/images/sponsors/sephora.jpg","title":"Co Sponsor"},{"name":"ONGC-MRPL","image":"/assets/images/sponsors/mrpl.jpg","title":"Co Sponsor"},{"name":"Mysore Minerals Limited","image":"/assets/images/sponsors/mysore-minerals.jpg","title":"Co Sponsor"},{"name":"NITK Alumni Association","image":"/assets/images/sponsors/nitk-alumni-association.png","title":"Co Sponsor"}],"all":[{"name":"Bharat Petroleum","image":"/assets/images/sponsors/bharat-petroleum.png","title":"Co Sponsor"},{"name":"BookMyShow","image":"/assets/images/sponsors/bookmyshow.jpg","title":"Co Sponsor"},{"name":"Canara Bank","image":"/assets/images/sponsors/canara-bank-logo.png","title":"Co Sponsor"},{"name":"Comedy Central","image":"/assets/images/sponsors/comedy central.jpg","title":"Co Sponsor"},{"name":"Cosco Sports and Fitness","image":"/assets/images/sponsors/cosco.jpg","title":"Co Sponsor"},{"name":"DRNK lab","image":"/assets/images/sponsors/drnk lab.png","title":"Co Sponsor"},{"name":"The Forum Mall","image":"/assets/images/sponsors/forum.png","title":"Co Sponsor"},{"name":"Ideal Ice Cream","image":"/assets/images/sponsors/ideal-ice-cream.jpg","title":"Co Sponsor"},{"name":"IMFS - A KP Singh Foundation","image":"/assets/images/sponsors/imfs.jpg","title":"Co Sponsor"},{"name":"Namma TV","image":"/assets/images/sponsors/namma-tv.jpg","title":"Co Sponsor"},{"name":"Nestle","image":"/assets/images/sponsors/nestle.png","title":"Co Sponsor"},{"name":"Oh Campus","image":"/assets/images/sponsors/ohcampus.jpg","title":"Co Sponsor"},{"name":"Resonance Studio and Academy","image":"/assets/images/sponsors/resonance.jpg","title":"Co Sponsor"},{"name":"State Bank of India","image":"/assets/images/sponsors/sbi.png","title":"Co Sponsor"},{"name":"The Chopras","image":"/assets/images/sponsors/the-chopras.jpg","title":"Co Sponsor"},{"name":"Townscript","image":"/assets/images/sponsors/townscript.png","title":"Co Sponsor"},{"name":"Xoxoday","image":"/assets/images/sponsors/xoxoday.png","title":"Co Sponsor"},{"name":"Zebronics","image":"/assets/images/sponsors/zebronics.jpg","title":"Co Sponsor"},{"name":"Thomsun Music House","image":"/assets/images/sponsors/thomsun.jpg","title":"Co Sponsor"},{"name":"Vh1","image":"/assets/images/sponsors/vh1.png","title":"Co Sponsor"}]};

/***/ }),

/***/ "./src/assets/data/verzeo.json":
/*!*************************************!*\
  !*** ./src/assets/data/verzeo.json ***!
  \*************************************/
/*! exports provided: categories, default */
/***/ (function(module) {

module.exports = {"categories":[{"name":"CSE","icon":"<i class=material-icons iblack-text>group</i>","hash":"cse","img":"cs.jpg"},{"name":"CIVIL","icon":"<i class=material-icons iblack-text>music_note</i>","hash":"civil","img":"cv.jpg"},{"name":"MECH","icon":"<i class=material-icons iblack-text>music_note</i>","hash":"mech","img":"mc.jpg"},{"name":"MANAGEMENT","icon":"<i class=material-icons iblack-text>music_note</i>","hash":"management","img":"mg.jpg"},{"name":"ECE","icon":"<i class=material-icons iblack-text>music_note</i>","hash":"ece","img":"ec.jpg"}]};

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

module.exports = __webpack_require__(/*! /home/manan/FOSSEE/Incident2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map