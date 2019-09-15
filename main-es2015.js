(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n\r\n<section>\r\n    <router-outlet></router-outlet>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bird/bird.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bird/bird.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n\r\n<button (click)=\"cambiarTitulo()\">Boton</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cat/cat.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cat/cat.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">{{title}}</h1>\r\n\r\n<div class= \"container\" *ngFor=\"let cat of cats\">\r\n    <h2>{{cat.name}}</h2>\r\n    <img src=\"{{cat.img}}\">\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dog/dog.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dog/dog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">{{title}}</h1>\r\n\r\n<div  *ngFor=\"let dog of dogs\" class = \"container\">\r\n    <img src=\"{{dog}}\" />\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div id=\"logoNav\">JS</div>\r\n    <ul id=\"navButtons\">\r\n        <li><a href=\"#\" [routerLink]=\"['/cats']\" [routerLinkActive]=\"['active']\">{{cats}}</a></li>\r\n        <li><a href=\"#\" [routerLink]=\"['/dogs']\" [routerLinkActive]=\"['active']\">{{dogs}}</a></li>\r\n        <li><a href=\"#\" [routerLink]=\"['/birds']\" [routerLinkActive]=\"['active']\">{{birds}}</a></li>\r\n        <li><a href=\"#\" [routerLink]=\"['/notes']\" [routerLinkActive]=\"['active']\">{{notes}}</a></li>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/note/note.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/note/note.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"formNote\">\r\n    <form #formNote>\r\n        <input type=\"text\" name=\"title\" placeholder=\"TITLE\" autocomplete=\"off\"/>\r\n        <br>\r\n        <textarea rows=\"5\" name=\"body\" placeholder=\"BODY\" autocomplete=\"off\"></textarea>\r\n        <br>\r\n    </form>  \r\n    <button class=\"btnAddNote\"(click)=\"onAddNote(formNote)\">Add Note</button>\r\n    <button class=\"btnAddNote\" (click)=\"onCopyNote(formNote)\">Copy</button>\r\n    <button class=\"btnAddNote\" (click)=\"onDeleteNote(formNote)\">Delete</button>\r\n</div>\r\n\r\n\r\n<div *ngFor=\"let note of notes\"\r\n    [class] = \"note.visible ? 'note' : 'notVisible'\">\r\n    <h3>{{note.title}}</h3>\r\n    <textarea disabled=\"true\" #textNote>{{note.body}}</textarea>\r\n    <br>\r\n    <button class=\"btnNote\" (click)=\"onCopyNotes(textNote)\">Copy</button>\r\n    <button class=\"btnNote\" (click)=\"onDelete(note)\">Delete</button>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'testApp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dog_dog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dog/dog.component */ "./src/app/components/dog/dog.component.ts");
/* harmony import */ var _components_cat_cat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cat/cat.component */ "./src/app/components/cat/cat.component.ts");
/* harmony import */ var _components_bird_bird_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bird/bird.component */ "./src/app/components/bird/bird.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_dog_dog_component__WEBPACK_IMPORTED_MODULE_8__["DogComponent"],
            _components_cat_cat_component__WEBPACK_IMPORTED_MODULE_9__["CatComponent"],
            _components_bird_bird_component__WEBPACK_IMPORTED_MODULE_10__["BirdComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _components_note_note_component__WEBPACK_IMPORTED_MODULE_12__["NoteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
        ],
        providers: [
            _app_routing__WEBPACK_IMPORTED_MODULE_3__["appRoutingProviders"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dog_dog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dog/dog.component */ "./src/app/components/dog/dog.component.ts");
/* harmony import */ var _components_cat_cat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cat/cat.component */ "./src/app/components/cat/cat.component.ts");
/* harmony import */ var _components_bird_bird_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bird/bird.component */ "./src/app/components/bird/bird.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");






const appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'dogs', component: _components_dog_dog_component__WEBPACK_IMPORTED_MODULE_2__["DogComponent"] },
    { path: 'cats', component: _components_cat_cat_component__WEBPACK_IMPORTED_MODULE_3__["CatComponent"] },
    { path: 'birds', component: _components_bird_bird_component__WEBPACK_IMPORTED_MODULE_4__["BirdComponent"] },
    { path: 'notes', component: _components_note_note_component__WEBPACK_IMPORTED_MODULE_5__["NoteComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/bird/bird.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/bird/bird.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmlyZC9iaXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/bird/bird.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/bird/bird.component.ts ***!
  \***************************************************/
/*! exports provided: BirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdComponent", function() { return BirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirdComponent = class BirdComponent {
    constructor() {
        this.title = "Titulo para Bird";
    }
    ngOnInit() {
    }
    cambiarTitulo() {
        this.title = "Alguien ha dado click";
    }
};
BirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bird',
        template: __webpack_require__(/*! raw-loader!./bird.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bird/bird.component.html"),
        styles: [__webpack_require__(/*! ./bird.component.css */ "./src/app/components/bird/bird.component.css")]
    })
], BirdComponent);



/***/ }),

/***/ "./src/app/components/cat/cat.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/cat/cat.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0L2NhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cat/cat.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/cat/cat.component.ts ***!
  \*************************************************/
/*! exports provided: CatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatComponent", function() { return CatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CatComponent = class CatComponent {
    constructor() {
        this.cat1 = {
            "name": "lola",
            "img": "https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg"
        };
        this.cat2 = {
            "name": "Stella",
            "img": "https://spectator.imgix.net/content/uploads/2019/04/Notes-on.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550"
        };
        this.cat3 = {
            "name": "Penny",
            "img": "https://i.ytimg.com/vi/eNeRyBUCGV4/maxresdefault.jpg"
        };
        this.cat4 = {
            "name": "Ruby",
            "img": "https://dcist.com/wp-content/uploads/sites/3/2019/04/Gem2-1500x1346.jpg"
        };
        this.cats = [
            this.cat1,
            this.cat2,
            this.cat3,
            this.cat4
        ];
        this.title = "Who's the loveliest?";
    }
    ngOnInit() {
    }
};
CatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cat',
        template: __webpack_require__(/*! raw-loader!./cat.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cat/cat.component.html"),
        styles: [__webpack_require__(/*! ./cat.component.css */ "./src/app/components/cat/cat.component.css")]
    })
], CatComponent);



/***/ }),

/***/ "./src/app/components/dog/dog.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/dog/dog.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9nL2RvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dog/dog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/dog/dog.component.ts ***!
  \*************************************************/
/*! exports provided: DogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DogComponent", function() { return DogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DogComponent = class DogComponent {
    constructor() {
        this.dog1 = "https://thehappypuppysite.com/wp-content/uploads/2019/04/How-Long-Do-Pugs-Live-long.jpg";
        this.dog2 = "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000937/Beagle-On-White-07.jpg";
        this.dog3 = "https://estaticos.muymascotas.es/media/cache/760x570_thumb/uploads/images/article/594779795bafe8f2ca3c986a/dalmata-perro-playa_0.jpg";
        this.dog4 = "https://2.bp.blogspot.com/-pbdNn_1TOyI/V14_6BIJXGI/AAAAAAAAF2o/ZLRrUxl6G4AgMnWsattnhTdaoHGPwq9FwCKgB/s1600/Alaskan_Malamute_Lead_Shot.jpg";
        this.dog5 = "https://media.daysoftheyear.com/20171223105712/golden-retriever-day.jpg";
        this.dog6 = "https://i.pinimg.com/originals/be/ed/c6/beedc6d9083c8267b743c112ad68e3a7.jpg";
        this.dogs = [
            this.dog1,
            this.dog2,
            this.dog3,
            this.dog4,
            this.dog5,
            this.dog6
        ];
        this.title = "Which is your favorite?";
    }
    ngOnInit() {
    }
};
DogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dog',
        template: __webpack_require__(/*! raw-loader!./dog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dog/dog.component.html"),
        styles: [__webpack_require__(/*! ./dog.component.css */ "./src/app/components/dog/dog.component.css")]
    })
], DogComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    constructor() {
        this.cats = "Cats";
        this.dogs = "Dogs";
        this.birds = "Birds";
        this.notes = "Notes";
    }
    ngOnInit() {
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/note/note.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/note/note.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/note/note.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/note/note.component.ts ***!
  \***************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/note */ "./src/app/models/note.ts");



let NoteComponent = class NoteComponent {
    constructor() {
        this.note = new src_app_models_note__WEBPACK_IMPORTED_MODULE_2__["Note"]('', '', true);
        this.notes = [];
        this.show = true;
    }
    ngOnInit() {
        console.log(localStorage);
        this.keys = Object.keys(localStorage);
        console.log(this.keys);
        for (let i = 0; i < localStorage.length; i++) {
            this.note = JSON.parse(localStorage.getItem(this.keys[i]));
            this.notes.push(this.note);
        }
    }
    onAddNote(form) {
        if (form.title.value !== '' && form.body.value !== '') {
            this.note = {
                title: form.title.value,
                body: form.body.value,
                visible: true
            };
            localStorage.setItem(form.title.value, JSON.stringify(this.note));
            this.notes.push(this.note);
            form.reset();
        }
    }
    onCopyNote(form) {
        form.body.select();
        document.execCommand("copy");
    }
    onDeleteNote(form) {
        form.reset();
    }
    onCopyNotes(text) {
        text.disabled = false;
        text.select();
        document.execCommand("copy");
        text.disabled = true;
    }
    onDelete(note) {
        note.visible = false;
        localStorage.removeItem(note.title);
    }
};
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note',
        template: __webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/note/note.component.html"),
        styles: [__webpack_require__(/*! ./note.component.css */ "./src/app/components/note/note.component.css")]
    })
], NoteComponent);



/***/ }),

/***/ "./src/app/models/note.ts":
/*!********************************!*\
  !*** ./src/app/models/note.ts ***!
  \********************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
class Note {
    constructor(title, body, visible) {
        this.title = title;
        this.body = body;
        this.visible = visible;
    }
}
Note.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Boolean }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\documents\proyectos\angular\notesapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map