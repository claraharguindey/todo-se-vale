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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-drag>\n</app-drag>\n\n"

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
        this.title = 'estructura';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _drag_drag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drag/drag.component */ "./src/app/drag/drag.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _drag_drag_component__WEBPACK_IMPORTED_MODULE_5__["DragComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drag/drag.component.css":
/*!*****************************************!*\
  !*** ./src/app/drag/drag.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.item {\n  width: 100px;\n  height: 100px;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-size: cover;\n  background-position:center;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.supermercado {\n    background-image:url(http://elcorreoweb.es/documents/10157/0/600x400/0c0/0d0/none/10703/MMGH/image_content_18371851_20161013123345.jpg);\n    margin-left: 15px;\n  }\n.salvame {\n    background-image: url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/salvame-okupa-01-1555066635.jpg);\n    margin: 10px;\n  }\n.cuestionar {\n    background-image: url(https://i.pinimg.com/564x/e9/b7/2f/e9b72f967873d6ab9a07a5a6e7b50440.jpg);\n  }\n.okupa {\n    background-image: url(http://www.alarmas.es/wp-content/uploads/2010/09/270px-Okupa.svg_.png);\n    background-size: contain;\n  }\n.zoologico {\n    background-image: url(https://media.giphy.com/media/tGAMlYun7ScLe/giphy.gif);\n    margin-left: 10px;\n  }\n.juego {\n    background-image: url(https://media.giphy.com/media/4zsqnMRn7fHgs/giphy.gif);\n  }\n.topmanta {\n    background-image:url(https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/03/24/15219235977667.jpg);\n  }\n.purpu {\n    margin: 10px;\n    background-image:url(https://media.giphy.com/media/3d63YDxRJRtkZepvGm/giphy.gif);\n\n  }\n.dinerito {\n    margin: 10px;\n    background-image:url(https://media.giphy.com/media/LCdPNT81vlv3y/giphy.gif);\n  }\n.desobediencia {\n    background-image:url(https://media.giphy.com/media/45kYOBsgz6a5y/giphy.gif);\n  }\n.zara {\n    background-image: url(https://www.economiadigital.es/uploads/s1/10/23/07/8/Tienda%20Zara_15_970x597.jpg);\n    margin-left: 10px;\n  }\n.museo {\n    background-image:url(https://media.giphy.com/media/nE7VJcZOrW0V5yhEys/giphy.gif);\n    margin-left: 10px;\n\n  }\n.item:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    width: 110px;\n    height: 110px;\n  }\n.boundary{\n    width: 160px;\n    height: 110px;\n    margin-left: 10px;\n  }\n.boundary2{\n    width: 110px;\n    height: 110px;\n    margin-left: 10px;\n  }\n.text {\n    display: inline;\n    text-align: center;\n    font-family: 'Courier New', Courier, monospace;\n  }\n.column1 {\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 20px;\n}\n.a{\n  font-size: 15px;\n  font-style: normal;\n  font-family: 'Times New Roman', Times, serif;\n}\np{\n  font-size: 50px;\n  font-style: italic;\n  position: absolute;\n  min-height: 100vh;\n  padding-top: 200px;\n  z-index: 100;\n  font-family: 'Courier New', Courier, monospace;\n  background-color: white;\n  text-align: center;\n  width: 100%;\n\n  background-image: url(https://cdn.sitly.com/blogs/es/2019/01/regalos-para-ni%C3%B1os-de-5-y-6-a%C3%B1os-alfombra-juego.jpg);\n  background-repeat: no-repeat;\n}\nspan{\n  background-color: white;\n}\nbutton{\n  margin-top: 50px;\n  color: yellow;\n  background-color: white;\n  background-image: url(https://media.giphy.com/media/2dmiD02aM9zX3Gw2oS/giphy.gif);\n  background-size: cover;\n}\n.cat{\n  background-image: url(https://media.giphy.com/media/5dyi5lnOgxeQU/giphy.gif);\n  background-size: cover;\n  background-position-y: center;\n  color:white;\n}\n.loco{\n  background-image: url(https://media.giphy.com/media/EiNnTTIaeMuZy/giphy.gif);\n  background-size: cover;\n color:white;\n}\n.purpurina{\n  background-image: url(https://media.giphy.com/media/xUA7aP7yh66HnR7Jug/giphy.gif);\n}\n.ew{\n  background-image: url(https://media.giphy.com/media/l1J9GghIKeow18lfW/giphy.gif);\n  background-size: contain;\n}\n.welcome {\n  background-image: url(https://media.giphy.com/media/xUA7aKACOczZ8VSZLa/giphy.gif);\n  background-size: cover;\n  background-position-y: center;\n  color:white;\n}\n.delfin{\n  background-image: url(https://media.giphy.com/media/pjMZ2LGonHFu/giphy.gif);\n  background-size: cover;\n  color:white;\n}\n.wrapper {\n  background-image: url(https://cdn.sitly.com/blogs/es/2019/01/regalos-para-ni%C3%B1os-de-5-y-6-a%C3%B1os-alfombra-juego.jpg);\n  background-position-x: center;\n  background-repeat: no-repeat;\n  background-size: 70%;\n  background-color: white;\n  color:black;\n  margin: 30px;\n  position: relative;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhZy9kcmFnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVEQUF1RDtFQUN2RDs7NkNBRTJDO0VBQzNDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLHVJQUF1STtJQUN2SSxpQkFBaUI7RUFDbkI7QUFFQTtJQUNFLG1IQUFtSDtJQUNuSCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLDhGQUE4RjtFQUNoRztBQUNBO0lBQ0UsNEZBQTRGO0lBQzVGLHdCQUF3QjtFQUMxQjtBQUVBO0lBQ0UsNEVBQTRFO0lBQzVFLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsNEVBQTRFO0VBQzlFO0FBRUE7SUFDRSwyR0FBMkc7RUFDN0c7QUFDQTtJQUNFLFlBQVk7SUFDWixnRkFBZ0Y7O0VBRWxGO0FBQ0E7SUFDRSxZQUFZO0lBQ1osMkVBQTJFO0VBQzdFO0FBQ0E7SUFDRSwyRUFBMkU7RUFDN0U7QUFFQTtJQUNFLHdHQUF3RztJQUN4RyxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGdGQUFnRjtJQUNoRixpQkFBaUI7O0VBRW5CO0FBQ0E7SUFDRTs7a0RBRThDO0lBQzlDLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4Q0FBOEM7RUFDaEQ7QUFFQTtFQUNBLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLFlBQVk7QUFDZDtBQUdBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7O0VBRVgsMkhBQTJIO0VBQzNILDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpRkFBaUY7RUFDakYsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSw0RUFBNEU7RUFDNUUsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFDQTtFQUNFLDRFQUE0RTtFQUM1RSxzQkFBc0I7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7RUFDRSxpRkFBaUY7QUFDbkY7QUFDQTtFQUNFLGdGQUFnRjtFQUNoRix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLGlGQUFpRjtFQUNqRixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsMkVBQTJFO0VBQzNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQTtFQUNFLDJIQUEySDtFQUMzSCw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kcmFnL2RyYWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLml0ZW0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnN1cGVybWVyY2FkbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cDovL2VsY29ycmVvd2ViLmVzL2RvY3VtZW50cy8xMDE1Ny8wLzYwMHg0MDAvMGMwLzBkMC9ub25lLzEwNzAzL01NR0gvaW1hZ2VfY29udGVudF8xODM3MTg1MV8yMDE2MTAxMzEyMzM0NS5qcGcpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLnNhbHZhbWUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QuczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvc2FsdmFtZS1va3VwYS0wMS0xNTU1MDY2NjM1LmpwZyk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5jdWVzdGlvbmFyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC9lOS9iNy8yZi9lOWI3MmY5Njc4NzNkNmFiOWEwN2E1YTZlN2I1MDQ0MC5qcGcpO1xuICB9XG4gIC5va3VwYSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly93d3cuYWxhcm1hcy5lcy93cC1jb250ZW50L3VwbG9hZHMvMjAxMC8wOS8yNzBweC1Pa3VwYS5zdmdfLnBuZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB9XG5cbiAgLnpvb2xvZ2ljbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL3RHQU1sWXVuN1NjTGUvZ2lwaHkuZ2lmKTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5qdWVnbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzR6c3FuTVJuN2ZIZ3MvZ2lwaHkuZ2lmKTtcbiAgfVxuXG4gIC50b3BtYW50YSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9lMDAtZWxtdW5kby51ZWNkbi5lcy9hc3NldHMvbXVsdGltZWRpYS9pbWFnZW5lcy8yMDE4LzAzLzI0LzE1MjE5MjM1OTc3NjY3LmpwZyk7XG4gIH1cbiAgLnB1cnB1IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvM2Q2M1lEeFJKUnRrWmVwdkdtL2dpcGh5LmdpZik7XG5cbiAgfVxuICAuZGluZXJpdG8ge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9MQ2RQTlQ4MXZsdjN5L2dpcGh5LmdpZik7XG4gIH1cbiAgLmRlc29iZWRpZW5jaWEge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzQ1a1lPQnNnejZhNXkvZ2lwaHkuZ2lmKTtcbiAgfVxuXG4gIC56YXJhIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cuZWNvbm9taWFkaWdpdGFsLmVzL3VwbG9hZHMvczEvMTAvMjMvMDcvOC9UaWVuZGElMjBaYXJhXzE1Xzk3MHg1OTcuanBnKTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAubXVzZW8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL25FN1ZKY1pPclcwVjV5aEV5cy9naXBoeS5naWYpO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gIH1cbiAgLml0ZW06YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLmJvdW5kYXJ5e1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgLmJvdW5kYXJ5MntcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIH1cblxuICAuY29sdW1uMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5cbi5he1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG5cbnB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnNpdGx5LmNvbS9ibG9ncy9lcy8yMDE5LzAxL3JlZ2Fsb3MtcGFyYS1uaSVDMyVCMW9zLWRlLTUteS02LWElQzMlQjFvcy1hbGZvbWJyYS1qdWVnby5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuc3BhbntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbntcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6IHllbGxvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS8yZG1pRDAyYU05elgzR3cyb1MvZ2lwaHkuZ2lmKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhdHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhLzVkeWk1bG5PZ3hlUVUvZ2lwaHkuZ2lmKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIGNvbG9yOndoaXRlO1xufVxuLmxvY297XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9FaU5uVFRJYWVNdVp5L2dpcGh5LmdpZik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gY29sb3I6d2hpdGU7XG59XG4ucHVycHVyaW5he1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEveFVBN2FQN3loNjZIblI3SnVnL2dpcGh5LmdpZik7XG59XG4uZXd7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9sMUo5R2doSUtlb3cxOGxmVy9naXBoeS5naWYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi53ZWxjb21lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL3hVQTdhS0FDT2N6WjhWU1pMYS9naXBoeS5naWYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi5kZWxmaW57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9wak1aMkxHb25IRnUvZ2lwaHkuZ2lmKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6d2hpdGU7XG59XG5cbi53cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnNpdGx5LmNvbS9ibG9ncy9lcy8yMDE5LzAxL3JlZ2Fsb3MtcGFyYS1uaSVDMyVCMW9zLWRlLTUteS02LWElQzMlQjFvcy1hbGZvbWJyYS1qdWVnby5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjpibGFjaztcbiAgbWFyZ2luOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/drag/drag.component.html":
/*!******************************************!*\
  !*** ./src/app/drag/drag.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div>\n      <p *ngIf=\"!open\"> <span><span class=\"welcome\">¡Bienvenidaaaa!</span>\n          <br> Esta ciudad es una ciudad <span class=\"loco\">LIBRE</span> que será <span class=\"purpurina\">lo que tú quieras que sea</span>. Arrastra sobre el mapa aquellos elementos que <span class=\"delfin\">quieres</span> que formen parte de esta ciudad maravillosa y <span class=\"ew\">LIBRE </span>  <span class=\"cat\">LIBREEEEE</span> TODO SE VALEE!!!!!!!</span> <br>\n  <button (click)=\"open=!open\">IR A LA CIUDAD</button>\n  <a class=\"a\" href=\"https://www.desmusea.com/micropolix\" target=\"_blank\"> <br>ir a desmusea</a>\n\n      </p>\n\n\n    <div class=\"item supermercado\" cdkDrag>\n    </div>\n    <div class=\"text\">\n        supermercado\n      </div>\n\n    <div class=\"item dinerito\" cdkDrag>\n    </div>\n    <div class=\"text\">\n        más dinerito\n      </div>\n\n       <div class=\"item zoologico\" cdkDrag>\n      </div>\n      <div class=\"text\" >\n          zoologico\n        </div>\n\n\n      <div class=\"boundary\">\n\n        <div class=\"item topmanta\" cdkDragBoundary=\".boundary\" cdkDrag>\n        </div>\n      </div>\n      <div class=\"text\">\n          topmanta\n        </div>\n\n\n    <div class=\"boundary\">\n\n      <div class=\"item okupa\" cdkDragBoundary=\".boundary\" cdkDrag>\n      </div>\n    </div>\n    <div class=\"text\">\n        jóvenes okupas\n      </div>\n\n    <div class=\"boundary\">\n      <div class=\"item cuestionar\" cdkDragBoundary=\".boundary\" cdkDrag>\n      </div>\n    </div>\n  </div>\n  <div class=\"text\">\n      cuestionar algo\n    </div>\n\n  <div class=\"column1\">\n\n    <div class=\"item purpu\" cdkDrag>\n    </div>\n    <div class=\"text\">\n        creatividad\n      </div>\n\n\n      <div class=\"item zara\" cdkDrag>\n      </div>\n      <div class=\"text\">\n          zara\n        </div>\n\n\n    <div class=\"boundary2\">\n    <div class=\"item juego\" cdkDragBoundary=\".boundary2\" cdkDrag>\n    </div>\n  </div>\n  <div class=\"text\">\n      juego libre\n    </div>\n\n\n\n      <div class=\"item museo\" cdkDrag>\n    </div>\n    <div class=\"text\">\n        museo\n      </div>\n\n\n      <div class=\"item salvame\" cdkDrag>\n      </div>\n      <div class=\"text\">\n          salvame okupa\n        </div>\n\n\n    <div class=\"boundary2\">\n      <div class=\"item desobediencia\" cdkDragBoundary=\".boundary2\" cdkDrag>\n      </div>\n    </div>\n    <div class=\"text\">\n        desobediencia\n      </div>\n\n  </div>\n\n\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/drag/drag.component.ts":
/*!****************************************!*\
  !*** ./src/app/drag/drag.component.ts ***!
  \****************************************/
/*! exports provided: DragComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragComponent", function() { return DragComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DragComponent = /** @class */ (function () {
    function DragComponent() {
    }
    DragComponent.prototype.ngOnInit = function () {
    };
    DragComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drag',
            template: __webpack_require__(/*! ./drag.component.html */ "./src/app/drag/drag.component.html"),
            styles: [__webpack_require__(/*! ./drag.component.css */ "./src/app/drag/drag.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DragComponent);
    return DragComponent;
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

module.exports = __webpack_require__(/*! /home/clara/Escritorio/todo-se-vale/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map