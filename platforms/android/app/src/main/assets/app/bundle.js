require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-app",
            template: "<page-router-outlet></page-router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};;
    if (false) {}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/http-client/index.js");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app.routing.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_4__["NativeScriptModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_3__["NativeScriptHttpClientModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["NativeScriptRouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_1__["NativeScriptUIListViewModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ].concat(_app_routing__WEBPACK_IMPORTED_MODULE_7__["navigatableComponents"]),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigatableComponents", function() { return navigatableComponents; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./login/login.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./list/list.component.ts");


var routes = [
    { path: "", component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: "list", component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] }
];
var navigatableComponents = [
    _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]
];


/***/ }),

/***/ "./list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".add-bar {\r\n  background-color: #CB1D00;\r\n  padding: 5;\r\n}\r\n.add-bar Image {\r\n  height: 25;\r\n  vertical-align: center;\r\n  margin-left: 10;\r\n  margin-right: 10;\r\n}\r\n.add-bar TextField {\r\n  padding: 10;\r\n}\r\nLabel {\r\n  background-color: white;\r\n  border-bottom-width: 1;\r\n  border-bottom-color: gray;\r\n  color: black;\r\n}\r\n.delete-view {\r\n  background-color: #CB1D00;\r\n  padding: 20;\r\n}\r\n.delete-view Image {\r\n  color: white;\r\n}\r\nListView {\r\n  opacity: 0;\r\n}\r\n.visible {\r\n  animation-name: show;\r\n  animation-duration: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n@keyframes show {\r\n  from { opacity: 0; }\r\n  to { opacity: 1; }\r\n}"

/***/ }),

/***/ "./list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Groceries\"></ActionBar>\r\n\r\n<GridLayout rows=\"auto, *\">\r\n\r\n    <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\r\n        <TextField #groceryTextField [(ngModel)]=\"grocery\"\r\n            hint=\"Enter a grocery item\" col=\"0\">\r\n        </TextField>\r\n        <Image src=\"~/images/add.png\" (tap)=\"add()\" col=\"1\"></Image>\r\n    </GridLayout>\r\n\r\n    <RadListView row=\"1\" [items]=\"groceryList\" [class.visible]=\"listLoaded\"\r\n        swipeActions=\"true\"\r\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\">\r\n\r\n        <ng-template let-item=\"item\">\r\n            <Label [text]=\"item.name\" class=\"p-15\"></Label>\r\n        </ng-template>\r\n\r\n        <GridLayout *tkListItemSwipeTemplate columns=\"*, auto\">\r\n            <StackLayout id=\"delete-view\" col=\"1\" (tap)=\"delete($event)\"\r\n                class=\"delete-view\">\r\n                <Image src=\"~/images/delete.png\"></Image>\r\n            </StackLayout>\r\n        </GridLayout>\r\n        <ActivityIndicator [busy]=\"isLoading\"\r\n            [visibility]=\"isLoading ? 'visible' : 'collapse'\" row=\"1\"\r\n            horizontalAlignment=\"center\" verticalAlignment=\"center\">\r\n        </ActivityIndicator>\r\n    </RadListView>\r\n\r\n</GridLayout>"

/***/ }),

/***/ "./list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/grocery/grocery.service.ts");


var ListComponent = /** @class */ (function () {
    function ListComponent(groceryService) {
        this.groceryService = groceryService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var rightItem = swipeView.getViewById("delete-view");
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.left = 0;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    ListComponent.prototype.delete = function (args) {
        var _this = this;
        var grocery = args.object.bindingContext;
        this.groceryService.delete(grocery.id)
            .subscribe(function () {
            var index = _this.groceryList.indexOf(grocery);
            _this.groceryList.splice(index, 1);
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("groceryTextField", { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-list",
            template: __importDefault(__webpack_require__("./list/list.component.html")).default,
            providers: [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]],
            styles: [__importDefault(__webpack_require__("./list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_grocery_grocery_service__WEBPACK_IMPORTED_MODULE_1__["GroceryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./login/login.component.css":
/***/ (function(module, exports) {

module.exports = "FlexboxLayout {\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-size: cover;\r\n  background-image: url(\"~/images/background.jpg\");\r\n}\r\nStackLayout {\r\n  width: 300;\r\n  padding: 10 16;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\nImage {\r\n  margin-bottom: 20;\r\n  height: 70;\r\n}\r\nButton, TextField {\r\n  margin-bottom: 10;\r\n}\r\n.btn-primary {\r\n  background-color: #CB1D00;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n}\r\nTextField {\r\n  placeholder-color: #C4AFB4;\r\n  color: black;\r\n}\r\n\r\n.dark {\r\n  background-color: #301217;\r\n}\r\n.dark TextField {\r\n  color:  #C4AFB4;\r\n}"

/***/ }),

/***/ "./login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<FlexboxLayout>\r\n    <StackLayout class=\"form\" [class.dark]=\"!isLoggingIn\">\r\n        <Image src=\"~/images/logo.png\"></Image>\r\n\r\n        <TextField hint=\"Email Address\" keyboardType=\"email\"\r\n            autocorrect=\"false\" autocapitalizationType=\"none\"\r\n            [(ngModel)]=\"user.email\" class=\"input input-border\"></TextField>\r\n        <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"\r\n            class=\"input input-border\"></TextField>\r\n\r\n        <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\"\r\n            class=\"btn btn-primary\" (tap)=\"submit()\"></Button>\r\n        <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\"\r\n            (tap)=\"toggleDisplay()\"></Button>\r\n    </StackLayout>\r\n</FlexboxLayout>"

/***/ }),

/***/ "./login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/user/user.model.ts");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./shared/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new _shared_user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.user.email = "my.test.account@nativescript.org";
        this.user.password = "mypassword";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function (exception) {
            if (exception.error && exception.error.description) {
                alert(exception.error.description);
            }
            else {
                alert(exception);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "gr-login",
            providers: [_shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]],
            template: __importDefault(__webpack_require__("./login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__("./login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (false) {}
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        


Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"name":"nativescript-template-ng-groceries","version":"3.0.0","main":"main.js"};

/***/ }),

/***/ "./shared/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiUrl = "https://baas.kinvey.com/";
    Config.appKey = "kid_HyHoT_REf";
    Config.authHeader = "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ";
    Config.token = "";
    return Config;
}());



/***/ }),

/***/ "./shared/grocery/grocery.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grocery", function() { return Grocery; });
var Grocery = /** @class */ (function () {
    function Grocery(id, name) {
        this.id = id;
        this.name = name;
    }
    return Grocery;
}());



/***/ }),

/***/ "./shared/grocery/grocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryService", function() { return GroceryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");
/* harmony import */ var _grocery_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./shared/grocery/grocery.model.ts");






var GroceryService = /** @class */ (function () {
    function GroceryService(http) {
        this.http = http;
        this.baseUrl = _config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "appdata/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/Groceries";
    }
    GroceryService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = {
            "sort": "{\"_kmd.lmt\": 1}"
        };
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](grocery._id, grocery.Name));
            });
            return groceryList;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": "Kinvey " + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token
        };
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    GroceryService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _grocery_model__WEBPACK_IMPORTED_MODULE_5__["Grocery"](data._id, name);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    GroceryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GroceryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroceryService);
    return GroceryService;
}());



/***/ }),

/***/ "./shared/user/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./shared/config.ts");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        if (!user.email || !user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Please provide both an email address and password.");
        }
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey, JSON.stringify({
            username: user.email,
            email: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.prototype.getCommonHeaders = function () {
        return {
            "Content-Type": "application/json",
            "Authorization": _config__WEBPACK_IMPORTED_MODULE_4__["Config"].authHeader
        };
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["Config"].apiUrl + "user/" + _config__WEBPACK_IMPORTED_MODULE_4__["Config"].appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _config__WEBPACK_IMPORTED_MODULE_4__["Config"].token = data._kmd.authtoken;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleErrors));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAucm91dGluZy50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0EseUU7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQTBDO0FBTTFDO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBSnhCLCtEQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVB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RCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLDhDQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyw4Q0FBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUN2QyxDQUFDLElBQUksQ0FDRiwwREFBRyxDQUFDLGtCQUFRLElBQUksZUFBUSxFQUFSLENBQVEsQ0FBQyxFQUN6QiwwREFBRyxDQUFDLGNBQUk7WUFDSiw4Q0FBTSxDQUFDLEtBQUssR0FBUyxJQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7UUFDN0MsQ0FBQyxDQUFDLEVBQ0YsaUVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQ2hDLENBQUM7SUFDTixDQUFDOztnQkEvQ3lCLCtEQUFVOztJQUQzQixXQUFXO1FBRHZCLGdFQUFVLEVBQUU7eUNBRWlCLCtEQUFVO09BRDNCLFdBQVcsQ0FpRHZCO0lBQUQsa0JBQUM7Q0FBQTtBQWpEdUIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWFwcFwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH0iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxuICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iLCJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBMaXN0Q29tcG9uZW50IH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgIExpc3RDb21wb25lbnRcclxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmFkZC1iYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXHJcXG4gIHBhZGRpbmc6IDU7XFxyXFxufVxcclxcbi5hZGQtYmFyIEltYWdlIHtcXHJcXG4gIGhlaWdodDogMjU7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXHJcXG59XFxyXFxuLmFkZC1iYXIgVGV4dEZpZWxkIHtcXHJcXG4gIHBhZGRpbmc6IDEwO1xcclxcbn1cXHJcXG5MYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDE7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBncmF5O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4uZGVsZXRlLXZpZXcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NCMUQwMDtcXHJcXG4gIHBhZGRpbmc6IDIwO1xcclxcbn1cXHJcXG4uZGVsZXRlLXZpZXcgSW1hZ2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5MaXN0VmlldyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4udmlzaWJsZSB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2hvdztcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzaG93IHtcXHJcXG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XFxyXFxuICB0byB7IG9wYWNpdHk6IDE7IH1cXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXHJcXG5cXHJcXG4gICAgPEdyaWRMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwiYWRkLWJhclxcXCI+XFxyXFxuICAgICAgICA8VGV4dEZpZWxkICNncm9jZXJ5VGV4dEZpZWxkIFsobmdNb2RlbCldPVxcXCJncm9jZXJ5XFxcIlxcclxcbiAgICAgICAgICAgIGhpbnQ9XFxcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXFxcIiBjb2w9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgPC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiAodGFwKT1cXFwiYWRkKClcXFwiIGNvbD1cXFwiMVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICA8UmFkTGlzdFZpZXcgcm93PVxcXCIxXFxcIiBbaXRlbXNdPVxcXCJncm9jZXJ5TGlzdFxcXCIgW2NsYXNzLnZpc2libGVdPVxcXCJsaXN0TG9hZGVkXFxcIlxcclxcbiAgICAgICAgc3dpcGVBY3Rpb25zPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwicC0xNVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxyXFxuXFxyXFxuICAgICAgICA8R3JpZExheW91dCAqdGtMaXN0SXRlbVN3aXBlVGVtcGxhdGUgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCI+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJkZWxldGUtdmlld1xcXCIgY29sPVxcXCIxXFxcIiAodGFwKT1cXFwiZGVsZXRlKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkZWxldGUtdmlld1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2RlbGV0ZS5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBbYnVzeV09XFxcImlzTG9hZGluZ1xcXCJcXHJcXG4gICAgICAgICAgICBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGluZyA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIHJvdz1cXFwiMVxcXCJcXHJcXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG4gICAgPC9SYWRMaXN0Vmlldz5cXHJcXG5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5Lm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyb2NlcnlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9ncm9jZXJ5L2dyb2Nlcnkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1saXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbGlzdC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbR3JvY2VyeVNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuXHJcbiAgICBncm9jZXJ5ID0gXCJcIjtcclxuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gICAgQFZpZXdDaGlsZChcImdyb2NlcnlUZXh0RmllbGRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5U2VydmljZTogR3JvY2VyeVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdyb2NlcnlTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChsb2FkZWRHcm9jZXJpZXM6IFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ncm9jZXJ5LnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIHRleHRGaWVsZC5kaXNtaXNzU29mdElucHV0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChncm9jZXJ5T2JqZWN0OiBHcm9jZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcclxuICAgICAgICB2YXIgc3dpcGVWaWV3ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PihcImRlbGV0ZS12aWV3XCIpO1xyXG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcclxuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gMDtcclxuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcclxuICAgICAgICBsZXQgZ3JvY2VyeSA9IDxHcm9jZXJ5PmFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeVNlcnZpY2UuZGVsZXRlKGdyb2NlcnkuaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ncm9jZXJ5TGlzdC5pbmRleE9mKGdyb2NlcnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gXCJGbGV4Ym94TGF5b3V0IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxyXFxufVxcclxcblN0YWNrTGF5b3V0IHtcXHJcXG4gIHdpZHRoOiAzMDA7XFxyXFxuICBwYWRkaW5nOiAxMCAxNjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbkltYWdlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwO1xcclxcbiAgaGVpZ2h0OiA3MDtcXHJcXG59XFxyXFxuQnV0dG9uLCBUZXh0RmllbGQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTA7XFxyXFxufVxcclxcbi5idG4tcHJpbWFyeSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0IxRDAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblRleHRGaWVsZCB7XFxyXFxuICBwbGFjZWhvbGRlci1jb2xvcjogI0M0QUZCNDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMTIxNztcXHJcXG59XFxyXFxuLmRhcmsgVGV4dEZpZWxkIHtcXHJcXG4gIGNvbG9yOiAgI0M0QUZCNDtcXHJcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEZsZXhib3hMYXlvdXQ+XFxyXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9ybVxcXCIgW2NsYXNzLmRhcmtdPVxcXCIhaXNMb2dnaW5nSW5cXFwiPlxcclxcbiAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiPjwvSW1hZ2U+XFxyXFxuXFxyXFxuICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVtYWlsIEFkZHJlc3NcXFwiIGtleWJvYXJkVHlwZT1cXFwiZW1haWxcXFwiXFxyXFxuICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIlxcclxcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVxcXCJ1c2VyLmVtYWlsXFxcIiBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIj48L1RleHRGaWVsZD5cXHJcXG4gICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiUGFzc3dvcmRcXFwiIHNlY3VyZT1cXFwidHJ1ZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIucGFzc3dvcmRcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuXFxyXFxuICAgICAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgKHRhcCk9XFxcInN1Ym1pdCgpXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1xcXCJcXHJcXG4gICAgICAgICAgICAodGFwKT1cXFwidG9nZ2xlRGlzcGxheSgpXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgPC9TdGFja0xheW91dD5cXHJcXG48L0ZsZXhib3hMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJnci1sb2dpblwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSBcIm15LnRlc3QuYWNjb3VudEBuYXRpdmVzY3JpcHQub3JnXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJteXBhc3N3b3JkXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcclxuICAgICAgICAgICAgICAgIChleGNlcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhjZXB0aW9uLmVycm9yICYmIGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChleGNlcHRpb24uZXJyb3IuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGV4Y2VwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGNlcHRpb24uZXJyb3IgJiYgZXhjZXB0aW9uLmVycm9yLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGV4Y2VwdGlvbi5lcnJvci5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXhjZXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tIFwiLi9hcHAubW9kdWxlXCI7XG5cbmVuYWJsZVByb2RNb2RlKCk7XG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTsiLCJleHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgc3RhdGljIGFwaVVybCA9IFwiaHR0cHM6Ly9iYWFzLmtpbnZleS5jb20vXCI7XG4gIHN0YXRpYyBhcHBLZXkgPSBcImtpZF9IeUhvVF9SRWZcIjtcbiAgc3RhdGljIGF1dGhIZWFkZXIgPSBcIkJhc2ljIGEybGtYMGg1U0c5VVgxSkZaam8xTVRreE1ESmxaV0ZoTXpRME16TXlPREZqTjJNeU9ETTNNR1E1T1RJek1RXCI7XG4gIHN0YXRpYyB0b2tlbiA9IFwiXCI7XG59IiwiZXhwb3J0IGNsYXNzIEdyb2Nlcnkge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5Lm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5U2VydmljZSB7XHJcbiAgICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9Hcm9jZXJpZXNcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgICAgLy8gS2ludmV5LXNwZWNpZmljIHN5bnRheCB0byBzb3J0IHRoZSBncm9jZXJpZXMgYnkgbGFzdCBtb2RpZmllZCB0aW1lLiBEb27igJl0IHdvcnJ5IGFib3V0IHRoZSBkZXRhaWxzIGhlcmUuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgXCJzb3J0XCI6IFwie1xcXCJfa21kLmxtdFxcXCI6IDF9XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9KS5waXBlKFxyXG4gICAgICAgICAgICBtYXAoKGRhdGE6IFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LnB1c2gobmV3IEdyb2NlcnkoKDxhbnk+Z3JvY2VyeSkuX2lkLCAoPGFueT5ncm9jZXJ5KS5OYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJLaW52ZXkgXCIgKyBDb25maWcudG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgR3JvY2VyeSgoPGFueT5kYXRhKS5faWQsIG5hbWUpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCArIFwiL1wiICsgaWQsXHJcbiAgICAgICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgICAgICkucGlwZShcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgICAgIGlmICghdXNlci5lbWFpbCB8fCAhdXNlci5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcIlBsZWFzZSBwcm92aWRlIGJvdGggYW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogQ29uZmlnLmF1dGhIZWFkZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvbG9naW5cIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICAgICAgKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpLFxyXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb25maWcudG9rZW4gPSAoPGFueT5kYXRhKS5fa21kLmF1dGh0b2tlblxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==