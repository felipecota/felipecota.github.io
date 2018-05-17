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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-bill/bill/bill-access/bill-access.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-access/bill-access.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-bill/bill/bill-access/bill-access.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-access/bill-access.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<span class=\"dropdown\">\n    <a href=\"#\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{'t14' | translate}} <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let b of bills | async\" (click)=\"onSelectBill(b)\">\n            <a>{{b.billname}}</a>\n        </li>\n    </ul>\n</span>    \n<br><br>   \n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t14' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"billname\" name=\"billname\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"pwd\">E-mail</label>  \n    <input type=\"text\" [disabled]=\"!selected\" class=\"form-control email\" [(ngModel)]=\"email\" name=\"email\">        \n</div>\n<button [disabled]=\"!selected\" class=\"btn btn-primary\" type=\"button\" (click)=\"Include()\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{'t3' | translate}}\n</button>       \n<br><br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div> \n<ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let m of members\">\n        {{ m.emailf }}\n        <span class=\"badge\" (click)=\"onRemove(m)\">X</span>    \n    </li>\n</ul>        \n "

/***/ }),

/***/ "./src/app/app-bill/bill/bill-access/bill-access.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-access/bill-access.component.ts ***!
  \********************************************************************/
/*! exports provided: BillAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillAccessComponent", function() { return BillAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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





var BillAccessComponent = /** @class */ (function () {
    function BillAccessComponent(appService, afAuth) {
        this.appService = appService;
        this.afAuth = afAuth;
    }
    BillAccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bills = this.appService.afs.collection('bills', function (ref) { return ref.where('access.' + _this.appService.user.email.replace(/\./g, '´'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (bills) {
            return bills
                .sort(function (a, b) { return a.payload.doc.data().billname.localeCompare(b.payload.doc.data().billname); })
                .map(function (bill) {
                var data = bill.payload.doc.data();
                var id = bill.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    BillAccessComponent.prototype.onSelectBill = function (b) {
        var _this = this;
        this.selected = true;
        this.erro = '';
        this.billname = b.billname;
        this.billkey = b.id;
        this.appService.afs.collection('bills').doc(this.billkey)
            .snapshotChanges()
            .forEach(function (bill) {
            if (bill.payload.exists) {
                var temp = [];
                for (var key in bill.payload.data().access) {
                    var format = key.replace(/´/g, '.').split("@");
                    if (format[0].length > 20)
                        format[0] = format[0].substr(0, 7) + "..." + format[0].substr(format[0].length - 7, 7);
                    temp.push({
                        email: key.replace(/´/g, '.'),
                        emailf: format[0] + "@" + format[1]
                    });
                }
                _this.members = temp;
            }
        });
    };
    BillAccessComponent.prototype.Include = function () {
        var _this = this;
        var email = this.email;
        // I neeed connection to check email
        if (!navigator.onLine)
            this.erro = this.appService.language.e12;
        else if (!email || email == '') {
            this.erro = this.appService.language.e8;
            navigator.vibrate([500]);
        }
        else {
            // Check if e-mail is already in the list
            this.afAuth.auth.fetchProvidersForEmail(email)
                .then(function (providers) {
                if (providers.length == 0) {
                    _this.erro = _this.appService.language.e8;
                }
                else {
                    _this.appService.afs.collection('bills').doc(_this.billkey).update((_a = {},
                        _a['access.' + email.toLowerCase().replace(/\./g, '´')] = true,
                        _a));
                    _this.erro = '';
                    _this.email = '';
                }
                var _a;
            });
        }
    };
    BillAccessComponent.prototype.onRemove = function (member) {
        if (!navigator.onLine)
            this.erro = this.appService.language.e12;
        else if (this.members.length > 1) {
            if (confirm(this.appService.language.m7))
                this.appService.afs.collection('bills').doc(this.billkey).update((_a = {},
                    _a['access.' + member.email.replace(/\./g, '´')] = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    _a));
        }
        else {
            this.erro = this.appService.language.e10;
        }
        var _a;
    };
    BillAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-access',
            template: __webpack_require__(/*! ./bill-access.component.html */ "./src/app/app-bill/bill/bill-access/bill-access.component.html"),
            styles: [__webpack_require__(/*! ./bill-access.component.css */ "./src/app/app-bill/bill/bill-access/bill-access.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], BillAccessComponent);
    return BillAccessComponent;
}());



/***/ }),

/***/ "./src/app/app-bill/bill/bill-detail/bill-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-detail/bill-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".collapse, .collapsing {\n  margin-top: 10px;\n}\n\n.btn {\n  margin-right: 4px;\n}"

/***/ }),

/***/ "./src/app/app-bill/bill/bill-detail/bill-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-detail/bill-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<span class=\"dropdown\">\n    <a href=\"#\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{'t14' | translate}} <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let b of bills | async\" (click)=\"onSelectBill(b)\">\n            <a>{{b.billname}}</a>\n        </li>\n    </ul>\n</span> \n<button [disabled]=\"!billselected\" (click)=\"backup()\" class=\"btn btn-primary\" type=\"button\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Backup\n</button>   \n<br><br>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t14' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"billname\" name=\"billname\">        \n</div>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div>\n<table *ngIf=\"billselected\" class=\"table\">\n    <thead>\n        <tr>\n        <th>{{'t22' | translate}}</th>\n        <th class=\"text-right\">{{'t23' | translate}}</th>\n        </tr>\n    </thead>\n    <tbody>     \n        <tr *ngFor=\"let m of members | async\" class=\"{{m.value > 0 ? 'info' : m.value < 0 ? 'danger' : 'success'}}\">\n            <td>{{m.emailf}}</td>\n            <td class=\"text-right\">{{m.value | number:'1.2-2'}}</td>\n        </tr>\n    </tbody>\n</table>\n<div *ngIf=\"billselected\" class=\"alert alert-warning\">\n    <strong>{{'t24' | translate}}:</strong> {{'m6' | translate}}\n</div>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let i of items | async\" data-toggle=\"collapse\" aria-expanded=\"false\" attr.data-target=\"#{{i.itemkey}}\">\n        {{(i.date | date:'dd/MM') + ' - ' + i.description}}\n        <div id=\"{{i.itemkey}}\" class=\"collapse\">\n            {{'t34' | translate}}: {{i.owner}}<br>\n            {{'t16' | translate}}: {{i.payer}}<br>\n            {{'t25' | translate}}: {{i.place}}<br>\n            {{'t26' | translate}}: {{i.type}}<br>\n            {{'t18' | translate}}: {{i.value | number:'1.2-2' }}<br>\n            {{'t35' | translate}}: {{i.multiplier | number:'1.3-3' }}<br>\n            {{'t36' | translate}}: {{i.calculated | number:'1.2-2' }}<br>\n            {{'t19' | translate}}:<br>\n            <span *ngFor=\"let b of i.benefited\">\n                {{b}}<br>\n            </span><br>\n            <button (click)=\"onRemove(i)\" class=\"btn btn-danger\" type=\"button\">\n                <span class=\"glyphicon glyphicon-trash\"></span> {{'t37' | translate}}\n            </button>\n            <button (click)=\"onEdit(i)\" class=\"btn btn-warning\" type=\"button\">\n                <span class=\"glyphicon glyphicon-pencil\"></span> {{'t38' | translate}}\n            </button>                     \n        </div>        \n    </li>    \n</ul>    "

/***/ }),

/***/ "./src/app/app-bill/bill/bill-detail/bill-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-detail/bill-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: BillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailComponent", function() { return BillDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bill.service */ "./src/app/app-bill/bill/bill.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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







var BillDetailComponent = /** @class */ (function () {
    function BillDetailComponent(appService, billService, route, router) {
        this.appService = appService;
        this.billService = billService;
        this.route = route;
        this.router = router;
        this.billselected = false;
    }
    BillDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.appService.isSignin);
        var b = {
            id: this.route.snapshot.paramMap.get('id1'),
            billname: this.route.snapshot.paramMap.get('id2')
        };
        if (b.id && b.billname)
            this.onSelectBill(b);
        this.bills = this.appService.afs.collection('bills', function (ref) { return ref.where('access.' + _this.appService.user.email.replace(/\./g, '´'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (bills) {
            return bills
                .sort(function (a, b) { return a.payload.doc.data().billname.localeCompare(b.payload.doc.data().billname); })
                .map(function (bill) {
                var data = bill.payload.doc.data();
                var id = bill.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    BillDetailComponent.prototype.onSelectBill = function (b) {
        var _this = this;
        this.billname = b.billname;
        this.billkey = b.id;
        this.billselected = true;
        this.appService.afs.collection('bills').doc(b.id)
            .snapshotChanges()
            .forEach(function (bill) {
            var items = [];
            var members = [];
            if (!bill.payload.exists || !bill.payload.data().items || Object.keys(bill.payload.data().items).length == 0) {
                _this.erro = _this.appService.language.m5;
            }
            else {
                for (var key in bill.payload.data().access) {
                    if (key.replace(/´/g, '.') != _this.appService.user.email) {
                        var format = key.replace(/´/g, '.').split("@");
                        if (format[0].length > 20)
                            format[0] = format[0].substr(0, 7) + "..." + format[0].substr(format[0].length - 7, 7);
                        members.push({
                            email: key.replace(/´/g, '.'),
                            emailf: format[0] + "@" + format[1],
                            value: 0
                        });
                    }
                }
                var data_1 = bill.payload.data();
                var _loop_1 = function (key) {
                    // Only show bills that's from my interest
                    var show = false;
                    data_1.items[key].benefited.forEach(function (b) {
                        var sn = data_1.items[key].payer == _this.appService.user.email && b != _this.appService.user.email;
                        var sp = data_1.items[key].payer != _this.appService.user.email && b == _this.appService.user.email;
                        var ow = data_1.items[key].owner == _this.appService.user.email;
                        var my = data_1.items[key].payer == _this.appService.user.email && b == _this.appService.user.email;
                        if (sn || sp || ow || my) {
                            show = true;
                            if (sn || sp) {
                                members.forEach(function (member) {
                                    if (member.email == (sn ? b : data_1.items[key].payer)) {
                                        var valuepp = (data_1.items[key].value * (data_1.items[key].multiplier != undefined ? data_1.items[key].multiplier : 1)) / data_1.items[key].benefited.length;
                                        if (sn)
                                            member.value += valuepp;
                                        else
                                            member.value -= valuepp;
                                    }
                                    ;
                                });
                            }
                        }
                        ;
                    });
                    if (show)
                        items.push({
                            benefited: data_1.items[key].benefited,
                            date: new Date(data_1.items[key].date.seconds * 1000),
                            description: data_1.items[key].description,
                            value: data_1.items[key].value,
                            multiplier: (data_1.items[key].multiplier != undefined ? data_1.items[key].multiplier : 1),
                            calculated: data_1.items[key].value * (data_1.items[key].multiplier != undefined ? data_1.items[key].multiplier : 1),
                            payer: data_1.items[key].payer,
                            place: data_1.items[key].place,
                            type: (_this.appService.language.name == "en_us" ?
                                data_1.items[key].type
                                    .replace('Diversos', 'Others')
                                    .replace('Transporte', 'Transportation')
                                    .replace('Hospedagem', 'Hosting')
                                    .replace('Passeios', 'Recreation')
                                    .replace('Taxas', 'Taxes')
                                    .replace('Alimentação', 'Food') :
                                data_1.items[key].type
                                    .replace('Others', 'Diversos')
                                    .replace('Transportation', 'Transporte')
                                    .replace('Hosting', 'Hospedagem')
                                    .replace('Recreation', 'Passeios')
                                    .replace('Taxes', 'Taxas')
                                    .replace('Food', 'Alimentação')),
                            owner: data_1.items[key].owner,
                            itemkey: key
                        });
                };
                for (var key in data_1.items) {
                    _loop_1(key);
                }
                ;
            }
            ;
            _this.members = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(members);
            _this.items = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items.sort(function (a, b) {
                if (a.date < b.date) {
                    return 1;
                }
                else if (a.date > b.date) {
                    return -1;
                }
                else {
                    return 0;
                }
            }));
        });
    };
    BillDetailComponent.prototype.onRemove = function (i) {
        if (i.owner != this.appService.user.email)
            alert(this.appService.language.m8);
        else if (confirm(this.appService.language.m7))
            this.appService.afs.collection('bills').doc(this.billkey).update((_a = {},
                _a['items.' + i.itemkey] = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                _a));
        var _a;
    };
    BillDetailComponent.prototype.onEdit = function (i) {
        if (i.owner != this.appService.user.email)
            alert(this.appService.language.m9);
        else {
            this.billService.item = {
                billkey: this.billkey,
                billname: this.billname,
                itemkey: i.itemkey,
                payer: i.payer,
                date: i.date,
                place: i.place,
                description: i.description,
                type: i.type,
                value: i.value,
                multiplier: i.multiplier,
                calculated: i.calculated,
                benefited: i.benefited
            };
            this.router.navigate(['/bill-item/edit']);
        }
    };
    BillDetailComponent.prototype.backup = function () {
        var subs = this.appService.afs.collection('bills').doc(this.billkey)
            .snapshotChanges()
            .subscribe(function (bill) {
            console.log(bill);
            var payload = bill.payload.data();
            var now = new Date();
            var data = new Blob([JSON.stringify(payload.items)], { type: 'text/plain' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.setAttribute('download', 'backup_realtimeapp_' + now.getFullYear() + now.getMonth() + now.getDate() + '.txt');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            subs.unsubscribe();
        });
    };
    BillDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-detail',
            template: __webpack_require__(/*! ./bill-detail.component.html */ "./src/app/app-bill/bill/bill-detail/bill-detail.component.html"),
            styles: [__webpack_require__(/*! ./bill-detail.component.css */ "./src/app/app-bill/bill/bill-detail/bill-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            _bill_service__WEBPACK_IMPORTED_MODULE_6__["BillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BillDetailComponent);
    return BillDetailComponent;
}());



/***/ }),

/***/ "./src/app/app-bill/bill/bill-form/bill-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-form/bill-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .input-group-btn {\n    display: inline-block;\n    margin: 0px;\n  }\n\n  .btn {\n    margin-right: 4px;\n  }"

/***/ }),

/***/ "./src/app/app-bill/bill/bill-form/bill-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-form/bill-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t14' | translate}}</label>  \n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"billname\" name=\"billname\">\n</div>\n<button class=\"btn btn-primary\" type=\"button\" (click)=\"Include()\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{'t3' | translate}}\n</button>\n<label class=\"input-group-btn\">\n    <span class=\"btn btn-primary\">\n        <span class=\"glyphicon glyphicon-upload\"></span> \n        {{'t40' | translate}} <input type=\"file\" #file (change)=\"fileChange($event); file.value = '';\" style=\"display: none;\" placeholder=\"\" accept=\".txt\">\n    </span>\n</label>\n<br><br>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let b of bills | async\">\n        {{ b.billname }}\n        <span class=\"badge\" (click)=\"onSelect(b.id, b.access)\">X</span>    \n    </li>\n</ul>  \n<br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n        {{erro}}\n</div>  "

/***/ }),

/***/ "./src/app/app-bill/bill/bill-form/bill-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-form/bill-form.component.ts ***!
  \****************************************************************/
/*! exports provided: BillFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillFormComponent", function() { return BillFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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




var BillFormComponent = /** @class */ (function () {
    function BillFormComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.billname = "";
    }
    BillFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bills = this.appService.afs.collection('bills', function (ref) { return ref.where('access.' + _this.appService.user.email.replace(/\./g, '´'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (bills) {
            return bills
                .sort(function (a, b) { return a.payload.doc.data().billname.localeCompare(b.payload.doc.data().billname); })
                .map(function (bill) {
                var data = bill.payload.doc.data();
                var id = bill.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    BillFormComponent.prototype.Include = function () {
        var d = new Date();
        var billkey = d.getFullYear() + '' + d.getMonth() + '' + d.getDay() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
        var billname = this.billname;
        this.billname = '';
        if (!billname || billname == '') {
            this.erro = this.appService.language.e6;
            navigator.vibrate([500]);
        }
        else {
            this.erro = '';
            this.appService.afs.collection('bills').doc(billkey).set({
                billname: billname,
                access: (_a = {},
                    _a[this.appService.user.email.replace(/\./g, '´')] = true,
                    _a)
            });
        }
        var _a;
    };
    BillFormComponent.prototype.onSelect = function (id, access) {
        if (Object.keys(access).length == 1) {
            this.erro = '';
            if (confirm(this.appService.language.m7))
                this.appService.afs.collection('bills').doc(id).delete();
        }
        else
            this.erro = this.appService.language.e15;
    };
    BillFormComponent.prototype.fileChange = function (event) {
        var _this = this;
        if (this.billname == '') {
            this.erro = this.appService.language.e6;
            navigator.vibrate([500]);
        }
        else {
            this.erro = '';
            var fileList = event.target.files;
            if (fileList.length > 0) {
                var reader_1 = new FileReader();
                reader_1.onload = function () {
                    var items = JSON.parse(reader_1.result);
                    var d = new Date();
                    var billkey = d.getFullYear() + '' + d.getMonth() + '' + d.getDay() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
                    var billname = _this.billname;
                    _this.appService.afs.collection('bills').doc(billkey).set({
                        billname: billname,
                        access: (_a = {},
                            _a[_this.appService.user.email.replace(/\./g, '´')] = true,
                            _a),
                        items: items
                    });
                    var _a;
                };
                reader_1.readAsText(fileList[0]);
            }
        }
    };
    BillFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-form',
            template: __webpack_require__(/*! ./bill-form.component.html */ "./src/app/app-bill/bill/bill-form/bill-form.component.html"),
            styles: [__webpack_require__(/*! ./bill-form.component.css */ "./src/app/app-bill/bill/bill-form/bill-form.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BillFormComponent);
    return BillFormComponent;
}());



/***/ }),

/***/ "./src/app/app-bill/bill/bill-item/bill-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-item/bill-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    margin-right: 4px;\n  }"

/***/ }),

/***/ "./src/app/app-bill/bill/bill-item/bill-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-item/bill-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<span class=\"dropdown\">\n    <a href=\"#\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{'t14' | translate}} <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let b of bills | async\" (click)=\"onSelectBill(b)\">\n            <a>{{b.billname}}</a>\n        </li>\n    </ul>\n</span> \n<span class=\"dropdown\">\n    <button [disabled]=\"!selected_bill\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">{{'t16' | translate}} <span class=\"caret\"></span></button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let m of members\" (click)=\"onSelectMember(m)\">\n            <a>{{m.emailf}}</a>\n        </li>\n    </ul>\n</span>    \n<br><br> \n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t14' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"billname\" name=\"billname\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t16' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"payer\" name=\"payer\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"date\">{{'t17' | translate}}</label>  \n    <input type=\"date\" [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"date\" name=\"date\">\n</div>\n<div class=\"form-group\">\n    <label for=\"description\">{{'t25' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"place\" name=\"place\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"description\">{{'t11' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"description\" name=\"description\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"type\">{{'t26' | translate}}</label>  \n    <select [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"type\" name=\"type\">\n        <option value=\"\">{{'t33' | translate}}</option>\n        <option>{{'t27' | translate}}</option>\n        <option>{{'t28' | translate}}</option>\n        <option>{{'t29' | translate}}</option>\n        <option>{{'t30' | translate}}</option>\n        <option>{{'t31' | translate}}</option>\n        <option>{{'t32' | translate}}</option>\n      </select>          \n</div>\n<div class=\"form-group\">\n    <label for=\"value\">{{'t18' | translate}}</label>\n    <div class=\"input-group\">\n        <input type=\"text\" [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"value\" (ngModelChange)=\"onChange()\" name=\"value\" placeholder=\"0,00\">\n    </div>    \n</div>\n<div class=\"form-group\">\n    <label for=\"value\">{{'t35' | translate}}</label>\n    <div class=\"input-group\">\n        <input type=\"text\" [disabled]=\"!selected_member\" class=\"form-control\" [(ngModel)]=\"multiplier\" (ngModelChange)=\"onChange()\" name=\"multiplier\" placeholder=\"0,00\">\n    </div>    \n</div>\n<div class=\"form-group\">\n    <label for=\"value\">{{'t36' | translate}}</label>\n    <div class=\"input-group\">\n        <input type=\"text\" disabled=\"disabled\" class=\"form-control\" [(ngModel)]=\"calculated\" name=\"calculated\" placeholder=\"0,00\">\n    </div>    \n</div>\n<div class=\"form-group\">\n    <label for=\"sel1\">{{'t19' | translate}}</label>\n    <select [disabled]=\"!selected_member\" [(ngModel)]=\"benefited\" multiple class=\"form-control\" id=\"sel1\">\n        <option *ngFor=\"let m of members\" [value]=\"m.email\">\n            {{m.email}}\n        </option>      \n    </select>\n</div>\n<button [disabled]=\"!selected_member\" (click)=\"Include()\" class=\"btn btn-primary\" type=\"button\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{ (editmode ? 't39' : 't3') | translate}}\n</button> \n<br><br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div>"

/***/ }),

/***/ "./src/app/app-bill/bill/bill-item/bill-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-bill/bill/bill-item/bill-item.component.ts ***!
  \****************************************************************/
/*! exports provided: BillItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillItemComponent", function() { return BillItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bill.service */ "./src/app/app-bill/bill/bill.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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






var BillItemComponent = /** @class */ (function () {
    function BillItemComponent(appService, billService, router, route, http) {
        this.appService = appService;
        this.billService = billService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.place = "";
        this.multiplier = "1";
    }
    BillItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.route.snapshot.paramMap.get('data');
        if (data && data == "edit" && this.billService.item != undefined) {
            this.onEdit(this.billService.item);
            this.editmode = true;
        }
        else {
            this.editmode = false;
            var d = new Date();
            this.date = d.getFullYear() + '-' + ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) + '-' + ((d.getDate()) < 10 ? '0' : '') + d.getDate();
            this.type = "";
        }
        this.bills = this.appService.afs.collection('bills', function (ref) { return ref.where('access.' + _this.appService.user.email.replace(/\./g, '´'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (bills) {
            return bills
                .sort(function (a, b) { return a.payload.doc.data().billname.localeCompare(b.payload.doc.data().billname); })
                .map(function (bill) {
                var data = bill.payload.doc.data();
                var id = bill.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    BillItemComponent.prototype.onEdit = function (data) {
        this.selected_member = true;
        this.payer = data.payer;
        this.place = data.place;
        this.type = data.type;
        var d = data.date;
        this.date = d.getFullYear() + '-' + ((d.getMonth() + 1) < 10 ? '0' : '') + (d.getMonth() + 1) + '-' + (d.getDate() < 10 ? '0' : '') + d.getDate();
        this.description = data.description;
        this.value = data.value + '';
        this.multiplier = data.multiplier + '';
        this.calculated = data.calculated;
        this.onSelectBill({
            billname: data.billname,
            id: data.billkey
        });
        this.benefited = data.benefited;
        this.itemkey = data.itemkey;
    };
    BillItemComponent.prototype.onSelectMember = function (m) {
        var _this = this;
        this.selected_member = true;
        this.payer = m.email;
        if (navigator.geolocation && this.place == "") {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en')
                    .subscribe(function (data) {
                    data['results'].forEach(function (result) {
                        result['address_components'].forEach(function (component) {
                            component['types'].forEach(function (type) {
                                //Double check if getCurrentPosition or http.get take too long
                                if (type == "locality" && _this.place == "") {
                                    _this.place = component['long_name'];
                                }
                            });
                        });
                    });
                });
            });
        }
    };
    BillItemComponent.prototype.onSelectBill = function (b) {
        var _this = this;
        this.selected_bill = true;
        this.erro = '';
        this.billname = b.billname;
        this.billkey = b.id;
        this.appService.afs.collection('bills').doc(this.billkey)
            .snapshotChanges()
            .forEach(function (bill) {
            if (bill.payload.exists) {
                var temp = [];
                for (var key in bill.payload.data().access) {
                    var format = key.replace(/´/g, '.').split("@");
                    if (format[0].length > 20)
                        format[0] = format[0].substr(0, 7) + "..." + format[0].substr(format[0].length - 7, 7);
                    temp.push({
                        email: key.replace(/´/g, '.'),
                        emailf: format[0] + "@" + format[1]
                    });
                }
                _this.members = temp;
            }
        });
    };
    BillItemComponent.prototype.onChange = function () {
        this.calculated = Number(this.value.replace(',', '.')) * Number(this.multiplier.replace(',', '.'));
    };
    BillItemComponent.prototype.Include = function () {
        if (!this.date || !this.description || this.description.trim() == '' || !this.value || Number(this.value) == NaN || Number(this.value) <= 0 || !this.benefited || this.benefited.length == 0 || !this.place || !this.type || this.type == "" || this.multiplier == "" || Number(this.multiplier) <= 0) {
            this.erro = this.appService.language.e14;
            navigator.vibrate([500]);
        }
        else {
            var date = this.date;
            var description = this.description;
            var value = this.value.replace(',', '.');
            var multiplier = this.multiplier.replace(',', '.');
            var payer = this.payer;
            var benefited = this.benefited;
            var place = this.place;
            var type = this.type;
            var d = new Date();
            this.date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            this.description = '';
            this.value = '';
            this.multiplier = '';
            this.payer = '';
            this.benefited = '';
            this.place = '';
            this.type = '';
            var itemkey = (this.editmode ? this.itemkey : d.getFullYear() + '' + d.getMonth() + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000));
            this.appService.afs.collection('bills').doc(this.billkey).update((_a = {},
                _a['items.' + itemkey] = {
                    payer: payer,
                    benefited: benefited,
                    date: new Date(Number(date.substring(0, 4)), Number(date.substring(5, 7)) - 1, Number(date.substring(8, 10))),
                    description: description,
                    value: Number(value),
                    multiplier: Number(multiplier),
                    place: place,
                    type: type,
                    owner: this.appService.user.email
                },
                _a));
            this.erro = '';
            this.router.navigate(['/bill-detail/' + this.billkey + '/' + this.billname]);
        }
        var _a;
    };
    BillItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bill-item',
            template: __webpack_require__(/*! ./bill-item.component.html */ "./src/app/app-bill/bill/bill-item/bill-item.component.html"),
            styles: [__webpack_require__(/*! ./bill-item.component.css */ "./src/app/app-bill/bill/bill-item/bill-item.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BillItemComponent);
    return BillItemComponent;
}());



/***/ }),

/***/ "./src/app/app-bill/bill/bill.module.ts":
/*!**********************************************!*\
  !*** ./src/app/app-bill/bill/bill.module.ts ***!
  \**********************************************/
/*! exports provided: BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-form/bill-form.component */ "./src/app/app-bill/bill/bill-form/bill-form.component.ts");
/* harmony import */ var _bill_access_bill_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill-access/bill-access.component */ "./src/app/app-bill/bill/bill-access/bill-access.component.ts");
/* harmony import */ var _bill_item_bill_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-item/bill-item.component */ "./src/app/app-bill/bill/bill-item/bill-item.component.ts");
/* harmony import */ var _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-detail/bill-detail.component */ "./src/app/app-bill/bill/bill-detail/bill-detail.component.ts");
/* harmony import */ var _translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../translate.module */ "./src/app/translate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BillModule = /** @class */ (function () {
    function BillModule() {
    }
    BillModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_3__["BillFormComponent"],
                _bill_access_bill_access_component__WEBPACK_IMPORTED_MODULE_4__["BillAccessComponent"],
                _bill_item_bill_item_component__WEBPACK_IMPORTED_MODULE_5__["BillItemComponent"],
                _bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_6__["BillDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _translate_module__WEBPACK_IMPORTED_MODULE_7__["TranslatePipeModule"]
            ]
        })
    ], BillModule);
    return BillModule;
}());



/***/ }),

/***/ "./src/app/app-bill/bill/bill.service.ts":
/*!***********************************************!*\
  !*** ./src/app/app-bill/bill/bill.service.ts ***!
  \***********************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
var BillService = /** @class */ (function () {
    function BillService() {
    }
    BillService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BillService);
    return BillService;
}());



/***/ }),

/***/ "./src/app/app-list/list/list-access/list-access.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/app-list/list/list-access/list-access.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-list/list/list-access/list-access.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-list/list/list-access/list-access.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<span class=\"dropdown\">\n    <a href=\"#\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{'t5' | translate}} <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let l of lists | async\" (click)=\"onSelectList(l)\">\n            <a>{{l.listname}}</a>\n        </li>\n    </ul>\n</span>  \n<br><br>   \n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t5' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"listname\" name=\"listname\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"pwd\">E-mail</label>  \n    <input type=\"text\" [disabled]=\"!selected\" class=\"form-control email\" [(ngModel)]=\"email\" name=\"email\">        \n</div>\n<button [disabled]=\"!selected\" class=\"btn btn-primary\" type=\"button\" (click)=\"Include()\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{'t3' | translate}}\n</button>       \n<br><br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div> \n<ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let m of members\">\n        {{ m.email }}\n        <span class=\"badge\" (click)=\"onRemove(m)\">X</span>    \n    </li>\n</ul>        \n "

/***/ }),

/***/ "./src/app/app-list/list/list-access/list-access.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-list/list/list-access/list-access.component.ts ***!
  \********************************************************************/
/*! exports provided: ListAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAccessComponent", function() { return ListAccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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





var ListAccessComponent = /** @class */ (function () {
    function ListAccessComponent(appService, afAuth) {
        this.appService = appService;
        this.afAuth = afAuth;
    }
    ListAccessComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.appService.afs.collection('lists', function (ref) { return ref.where('access.' + _this.appService.user.email.replace('.', '`'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (lists) {
            return lists
                .sort(function (a, b) { return a.payload.doc.data().listname.localeCompare(b.payload.doc.data().listname); })
                .map(function (list) {
                var data = list.payload.doc.data();
                var id = list.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    ListAccessComponent.prototype.onSelectList = function (l) {
        var _this = this;
        this.selected = true;
        this.erro = '';
        this.listname = l.listname;
        this.listkey = l.id;
        this.appService.afs.collection('lists').doc(this.listkey)
            .snapshotChanges()
            .forEach(function (list) {
            var temp = [];
            for (var key in list.payload.data().access) {
                temp.push({
                    email: key.replace('`', '.')
                });
            }
            _this.members = temp;
        });
    };
    ListAccessComponent.prototype.Include = function () {
        var _this = this;
        var email = this.email;
        // I neeed connection to check email
        if (!navigator.onLine)
            this.erro = this.appService.language.e12;
        else if (!email || email == '') {
            this.erro = this.appService.language.e8;
            navigator.vibrate([500]);
        }
        else {
            // Check if e-mail is already in the list
            this.afAuth.auth.fetchProvidersForEmail(email)
                .then(function (providers) {
                if (providers.length == 0) {
                    _this.erro = _this.appService.language.e8;
                }
                else {
                    _this.appService.afs.collection('lists').doc(_this.listkey).update((_a = {},
                        _a['access.' + email.toLowerCase().replace('.', '`')] = true,
                        _a));
                    _this.erro = '';
                    _this.email = '';
                }
                var _a;
            });
        }
    };
    ListAccessComponent.prototype.onRemove = function (member) {
        if (!navigator.onLine)
            this.erro = this.appService.language.e12;
        else if (this.members.length > 1) {
            if (confirm(this.appService.language.m7))
                this.appService.afs.collection('lists').doc(this.listkey).update((_a = {},
                    _a['access.' + member.email.replace('.', '`')] = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.delete(),
                    _a));
        }
        else {
            this.erro = this.appService.language.e10;
        }
        var _a;
    };
    ListAccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-access',
            template: __webpack_require__(/*! ./list-access.component.html */ "./src/app/app-list/list/list-access/list-access.component.html"),
            styles: [__webpack_require__(/*! ./list-access.component.css */ "./src/app/app-list/list/list-access/list-access.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], ListAccessComponent);
    return ListAccessComponent;
}());



/***/ }),

/***/ "./src/app/app-list/list/list-detail/list-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/app-list/list/list-detail/list-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  background-color: transparent;\n}"

/***/ }),

/***/ "./src/app/app-list/list/list-detail/list-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/app-list/list/list-detail/list-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"panel panel-primary\" *ngFor=\"let l of lists | async\">\n    <div class=\"panel-heading text-center\">{{l.listname}}</div>\n    <div class=\"panel-body\">\n        <ul class=\"list-group\">\n            <div *ngIf=\"l.items.length == 0\">\n                {{'m5' | translate}}\n            </div>            \n            <li class=\"list-group-item\" *ngFor=\"let i of l.items\">\n                <span class=\"badge\" (click)=\"onSelect(l,i.itemkey)\">X</span>                \n                {{ i.itemname + ' - ' + i.amount }}               \n            </li>\n          </ul>\n    </div>\n</div>\n<div *ngIf=\"len == 0\" class=\"alert alert-danger\">\n    {{'m4' | translate}}\n</div>\n"

/***/ }),

/***/ "./src/app/app-list/list/list-detail/list-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/app-list/list/list-detail/list-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ListDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDetailComponent", function() { return ListDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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




var ListDetailComponent = /** @class */ (function () {
    function ListDetailComponent(appService) {
        this.appService = appService;
    }
    ListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.appService.afs.collection('lists', function (ref) { return ref.where('access.' + _this.appService.user.email.replace('.', '`'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (lists) {
            _this.len = lists.length;
            return lists
                .sort(function (a, b) { return a.payload.doc.data().listname.localeCompare(b.payload.doc.data().listname); })
                .map(function (list) {
                var temp = [];
                var data = list.payload.doc.data();
                for (var key in data.items) {
                    temp.push({
                        itemkey: key,
                        itemname: data.items[key].itemname,
                        amount: data.items[key].amount
                    });
                }
                data.items = temp.sort(function (a, b) { return a.itemname.localeCompare(b.itemname); });
                var id = list.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    ListDetailComponent.prototype.onSelect = function (list, itemkey) {
        this.appService.afs.collection('lists').doc(list.id).update((_a = {},
            _a['items.' + itemkey] = firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.delete(),
            _a));
        var _a;
    };
    ListDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-detail',
            template: __webpack_require__(/*! ./list-detail.component.html */ "./src/app/app-list/list/list-detail/list-detail.component.html"),
            styles: [__webpack_require__(/*! ./list-detail.component.css */ "./src/app/app-list/list/list-detail/list-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ListDetailComponent);
    return ListDetailComponent;
}());



/***/ }),

/***/ "./src/app/app-list/list/list-form/list-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/app-list/list/list-form/list-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-list/list/list-form/list-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-list/list/list-form/list-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t5' | translate}}</label>  \n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"listname\" name=\"listname\">\n</div>\n<button class=\"btn btn-primary\" type=\"button\" (click)=\"Include()\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{'t3' | translate}}\n</button>       \n<br><br>\n<ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let l of lists | async\">\n        <span class=\"badge\" (click)=\"onSelect(l.id, l.items)\">X</span>            \n        {{ l.listname }}\n    </li>\n</ul>  \n<br>   \n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n        {{erro}}\n</div>      "

/***/ }),

/***/ "./src/app/app-list/list/list-form/list-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-list/list/list-form/list-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ListFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFormComponent", function() { return ListFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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




var ListFormComponent = /** @class */ (function () {
    function ListFormComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    ListFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.appService.afs.collection('lists', function (ref) { return ref.where('access.' + _this.appService.user.email.replace('.', '`'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (lists) {
            return lists
                .sort(function (a, b) { return a.payload.doc.data().listname.localeCompare(b.payload.doc.data().listname); })
                .map(function (list) {
                var data = list.payload.doc.data();
                var id = list.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    ListFormComponent.prototype.Include = function () {
        var d = new Date();
        var listkey = d.getFullYear() + '' + d.getMonth() + '' + d.getDay() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
        var listname = this.listname;
        this.listname = '';
        this.erro = '';
        if (!listname || listname == '') {
            this.erro = this.appService.language.e6;
            navigator.vibrate([500]);
        }
        else {
            this.appService.afs.collection('lists').doc(listkey).set({
                listname: listname,
                access: (_a = {},
                    _a[this.appService.user.email.replace('.', '`')] = true,
                    _a)
            });
        }
        var _a;
    };
    ListFormComponent.prototype.onSelect = function (id, items) {
        if (!items || Object.keys(items).length == 0)
            this.appService.afs.collection('lists').doc(id).delete();
        else
            this.erro = this.appService.language.e7;
    };
    ListFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-form',
            template: __webpack_require__(/*! ./list-form.component.html */ "./src/app/app-list/list/list-form/list-form.component.html"),
            styles: [__webpack_require__(/*! ./list-form.component.css */ "./src/app/app-list/list/list-form/list-form.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListFormComponent);
    return ListFormComponent;
}());



/***/ }),

/***/ "./src/app/app-list/list/list-item/list-item.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/app-list/list/list-item/list-item.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-list/list/list-item/list-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-list/list/list-item/list-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<span class=\"dropdown\">\n    <a href=\"#\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"true\">{{'t5' | translate}} <span class=\"caret\"></span></a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li *ngFor=\"let l of lists | async\" (click)=\"onSelect(l)\">\n            <a>{{l.listname}}</a>\n        </li>\n    </ul>\n</span>  \n<br><br>  \n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t5' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"true\" class=\"form-control\" [(ngModel)]=\"listname\" name=\"listname\">        \n</div>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t1' | translate}}</label>  \n    <input type=\"text\" [disabled]=\"!selected\" class=\"form-control\" [(ngModel)]=\"itemname\" name=\"itemname\">\n</div>\n<div class=\"form-group\">\n    <label for=\"pwd\">{{'t2' | translate}}</label>    \n    <input type=\"text\" [disabled]=\"!selected\" class=\"form-control\" [(ngModel)]=\"amount\" name=\"amount\">\n</div>\n<button [disabled]=\"!selected\" (click)=\"Include()\" class=\"btn btn-primary\" type=\"button\">\n    <span class=\"glyphicon glyphicon-floppy-disk\"></span> {{'t3' | translate}}\n</button>       \n<br><br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div>"

/***/ }),

/***/ "./src/app/app-list/list/list-item/list-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-list/list/list-item/list-item.component.ts ***!
  \****************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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




var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    ListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.appService.afs.collection('lists', function (ref) { return ref.where('access.' + _this.appService.user.email.replace('.', '`'), '==', true); })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (lists) {
            return lists
                .sort(function (a, b) { return a.payload.doc.data().listname.localeCompare(b.payload.doc.data().listname); })
                .map(function (list) {
                var data = list.payload.doc.data();
                var id = list.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
        this.erro = this.appService.language.m1;
    };
    ListItemComponent.prototype.onSelect = function (l) {
        this.selected = true;
        this.erro = '';
        this.listname = l.listname;
        this.listkey = l.id;
    };
    ListItemComponent.prototype.Include = function () {
        var itemname = this.itemname;
        var amount = this.amount;
        if (!itemname || itemname.trim() == '' || !amount || amount.trim() == '') {
            this.erro = this.appService.language.e1;
            navigator.vibrate([500]);
        }
        else {
            this.itemname = '';
            this.amount = '';
            var d = new Date();
            var itemkey = d.getFullYear() + '' + d.getMonth() + '' + d.getDay() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds() + '' + (Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
            this.appService.afs.collection('lists').doc(this.listkey).update((_a = {},
                _a['items.' + itemkey] = {
                    itemname: itemname,
                    amount: amount
                },
                _a));
            this.erro = '';
            this.router.navigate(['/list-detail']);
        }
        var _a;
    };
    ListItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/app-list/list/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.css */ "./src/app/app-list/list/list-item/list-item.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/app-list/list/list.module.ts":
/*!**********************************************!*\
  !*** ./src/app/app-list/list/list.module.ts ***!
  \**********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-detail/list-detail.component */ "./src/app/app-list/list/list-detail/list-detail.component.ts");
/* harmony import */ var _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-form/list-form.component */ "./src/app/app-list/list/list-form/list-form.component.ts");
/* harmony import */ var _list_access_list_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-access/list-access.component */ "./src/app/app-list/list/list-access/list-access.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/app-list/list/list-item/list-item.component.ts");
/* harmony import */ var _translate_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../translate.module */ "./src/app/translate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_3__["ListDetailComponent"],
                _list_form_list_form_component__WEBPACK_IMPORTED_MODULE_4__["ListFormComponent"],
                _list_access_list_access_component__WEBPACK_IMPORTED_MODULE_5__["ListAccessComponent"],
                _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__["ListItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _translate_module__WEBPACK_IMPORTED_MODULE_7__["TranslatePipeModule"]
            ]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".version {\n    float: right;    \n}\n\n.icone {\n    margin: 10px;\n    float: right;\n    cursor: pointer;\n}\n\n.flag {\n    float: left;\n    margin: 10px 0px 0px 10px;\n    cursor: pointer;\n}\n\n.home {\n    float: left;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icone\" *ngIf=\"(this.appService.isSignin | async)\">\n    <span class=\"glyphicon glyphicon-off\" [ngStyle]=\"{'color': (this.appService.isConnected | async) ? 'green' : 'red' }\" (click)=\"logout()\"></span>\n</div>\n<img class=\"flag\" src=\"/assets/images/flagBR.png\" (click)=\"language(1)\">\n<img class=\"flag\" src=\"/assets/images/flagUS.png\" (click)=\"language(2)\">\n<div class=\"jumbotron text-center\">    \n    <h1>{{title}}</h1>    \n    <div class=\"version\">{{version}}</div> \n    <span *ngIf=\"(router.url != '/menu' && this.appService.isSignin | async)\" class=\"home glyphicon glyphicon-home\" (click)=\"menu()\"></span>       \n</div>\n<div *ngIf=\"(this.appService.lists.indexOf(this.router.url.split('/')[1]) >= 0 && this.appService.isSignin | async)\">\n    <ul class=\"nav nav-tabs\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/list-detail\">{{'t12' | translate}}</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/list-item\">{{'t11' | translate}}</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/list-form\">{{'t10' | translate}}</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/list-access\">{{'t13' | translate}}</a></li>\n    </ul>\n</div>\n<div *ngIf=\"(this.appService.bills.indexOf(this.router.url.split('/')[1]) >= 0 && this.appService.isSignin | async)\">\n        <ul class=\"nav nav-tabs\">\n            <li routerLinkActive=\"active\"><a routerLink=\"/bill-detail\">{{'t12' | translate}}</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/bill-item\">{{'t11' | translate}}</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/bill-form\">{{'t15' | translate}}</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/bill-access\">{{'t13' | translate}}</a></li>\n        </ul>\n    </div>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(appService, afAuth, router) {
        this.appService = appService;
        this.afAuth = afAuth;
        this.router = router;
        this.title = 'realtimeapp';
        this.version = 'v8.0';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AppComponent.prototype.language = function (i) {
        this.appService.language_set(i);
    };
    AppComponent.prototype.menu = function () {
        this.router.navigate(['/menu']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../environments/firebase.config */ "./src/environments/firebase.config.ts");
/* harmony import */ var angularfire2_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/index */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_bill_bill_bill_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-bill/bill/bill.service */ "./src/app/app-bill/bill/bill.service.ts");
/* harmony import */ var _app_list_list_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-list/list/list.module */ "./src/app/app-list/list/list.module.ts");
/* harmony import */ var _app_bill_bill_bill_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-bill/bill/bill.module */ "./src/app/app-bill/bill/bill.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _translate_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./translate.module */ "./src/app/translate.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_17__["MenuComponent"]
            ],
            imports: [
                _translate_module__WEBPACK_IMPORTED_MODULE_15__["TranslatePipeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_list_list_list_module__WEBPACK_IMPORTED_MODULE_11__["ListModule"],
                _app_bill_bill_bill_module__WEBPACK_IMPORTED_MODULE_12__["BillModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_13__["LoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_index__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_firebase_config__WEBPACK_IMPORTED_MODULE_4__["FirebaseConfig"]),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"].enablePersistence()
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _app_bill_bill_bill_service__WEBPACK_IMPORTED_MODULE_10__["BillService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AuthGuard, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _app_list_list_list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-list/list/list-detail/list-detail.component */ "./src/app/app-list/list/list-detail/list-detail.component.ts");
/* harmony import */ var _app_list_list_list_form_list_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-list/list/list-form/list-form.component */ "./src/app/app-list/list/list-form/list-form.component.ts");
/* harmony import */ var _app_list_list_list_access_list_access_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-list/list/list-access/list-access.component */ "./src/app/app-list/list/list-access/list-access.component.ts");
/* harmony import */ var _app_list_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-list/list/list-item/list-item.component */ "./src/app/app-list/list/list-item/list-item.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
/* harmony import */ var _app_bill_bill_bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-bill/bill/bill-form/bill-form.component */ "./src/app/app-bill/bill/bill-form/bill-form.component.ts");
/* harmony import */ var _app_bill_bill_bill_access_bill_access_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-bill/bill/bill-access/bill-access.component */ "./src/app/app-bill/bill/bill-access/bill-access.component.ts");
/* harmony import */ var _app_bill_bill_bill_item_bill_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-bill/bill/bill-item/bill-item.component */ "./src/app/app-bill/bill/bill-item/bill-item.component.ts");
/* harmony import */ var _app_bill_bill_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-bill/bill/bill-detail/bill-detail.component */ "./src/app/app-bill/bill/bill-detail/bill-detail.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
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
    function AuthGuard(appService, router, route) {
        this.appService = appService;
        this.router = router;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.appService.isSignin) {
            localStorage.setItem('lastroute', state.url);
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_12__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());

var APP_ROUTES = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'login', component: _login_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'menu', component: _menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], canActivate: [AuthGuard] },
    { path: 'list-detail', component: _app_list_list_list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_3__["ListDetailComponent"], canActivate: [AuthGuard] },
    { path: 'list-form', component: _app_list_list_list_form_list_form_component__WEBPACK_IMPORTED_MODULE_4__["ListFormComponent"], canActivate: [AuthGuard] },
    { path: 'list-access', component: _app_list_list_list_access_list_access_component__WEBPACK_IMPORTED_MODULE_5__["ListAccessComponent"], canActivate: [AuthGuard] },
    { path: 'list-item', component: _app_list_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_6__["ListItemComponent"], canActivate: [AuthGuard] },
    { path: 'bill-form', component: _app_bill_bill_bill_form_bill_form_component__WEBPACK_IMPORTED_MODULE_8__["BillFormComponent"], canActivate: [AuthGuard] },
    { path: 'bill-access', component: _app_bill_bill_bill_access_bill_access_component__WEBPACK_IMPORTED_MODULE_9__["BillAccessComponent"], canActivate: [AuthGuard] },
    { path: 'bill-item', component: _app_bill_bill_bill_item_bill_item_component__WEBPACK_IMPORTED_MODULE_10__["BillItemComponent"], canActivate: [AuthGuard] },
    { path: 'bill-item/:data', component: _app_bill_bill_bill_item_bill_item_component__WEBPACK_IMPORTED_MODULE_10__["BillItemComponent"], canActivate: [AuthGuard] },
    { path: 'bill-detail', component: _app_bill_bill_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_11__["BillDetailComponent"], canActivate: [AuthGuard] },
    { path: 'bill-detail/:id1/:id2', component: _app_bill_bill_bill_detail_bill_detail_component__WEBPACK_IMPORTED_MODULE_11__["BillDetailComponent"], canActivate: [AuthGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [AuthGuard]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_language__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/language */ "./src/environments/language.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
var AppService = /** @class */ (function () {
    function AppService(afs, afAuth, router, route, ngZone) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        // list
        this.lists = ['list-detail', 'list-form', 'list-access', 'list-item'];
        this.bills = ['bill-detail', 'bill-form', 'bill-access', 'bill-item'];
        if (localStorage.getItem('lang')) {
            if (localStorage.getItem('lang') == 'ptbr')
                this.language = _environments_language__WEBPACK_IMPORTED_MODULE_5__["language_ptbr"];
            else
                this.language = _environments_language__WEBPACK_IMPORTED_MODULE_5__["language_en"];
        }
        else {
            localStorage.setItem('lang', 'ptbr');
            this.language = _environments_language__WEBPACK_IMPORTED_MODULE_5__["language_ptbr"];
        }
        this.isConnected = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return true; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return false; })));
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.user = user;
                _this.isSignin = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
                var lastroute_1 = localStorage.getItem('lastroute');
                if (lastroute_1 == "/login" || lastroute_1 == undefined)
                    lastroute_1 = "/menu";
                _this.ngZone.run(function () { return _this.router.navigate([lastroute_1]); });
            }
            else {
                _this.user = undefined;
                _this.isSignin = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                _this.router.navigate(["/login"]);
            }
        });
    }
    AppService.prototype.language_set = function (i) {
        if (i == 1) {
            localStorage.setItem('lang', 'ptbr');
            this.language = _environments_language__WEBPACK_IMPORTED_MODULE_5__["language_ptbr"];
        }
        else {
            localStorage.setItem('lang', 'en');
            this.language = _environments_language__WEBPACK_IMPORTED_MODULE_5__["language_en"];
        }
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/login/login-form/login-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email {\n    text-transform: lowercase;\n}\n\n.logo {\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    margin-right: 4px;\n}\n\n.btn {\n    margin-right: 4px;\n}"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"email\">Email:</label>\n  <input type=\"text\" class=\"form-control email\" required [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n</div>\n<div class=\"form-group\">\n  <label for=\"password\">{{'t6'|translate}}:</label>\n  <input type=\"password\" class=\"form-control email\" required [(ngModel)]=\"password\" name=\"password\" placeholder=\"{{'t6'|translate}}\">\n</div>  \n<button class=\"btn btn-primary\" (click)=\"login()\" type=\"button\">{{isLoggingIn ? ('t7'|translate) : ('t8'|translate)}}</button>\n<button class=\"btn btn-primary\" (click)=\"toggleDisplay()\" type=\"button\">{{isLoggingIn ? ('t8'|translate) : ('t9'|translate)}}</button>\n<br><br>\n<a href=\"javascript:void(0);\" (click)=\"forgot()\">{{'m2' | translate}}</a>\n<br><br>\n<div *ngIf=\"erro\" class=\"alert alert-danger\">\n    {{erro}}\n</div>\n<span>{{'t41' | translate}}</span><br><br>\n<img class=\"logo\" src=\"/assets/images/facebook.png\" (click)=\"loginWithFacebook()\">\n<img class=\"logo\" src=\"/assets/images/google.png\" (click)=\"loginWithGoogle()\">\n<img class=\"logo\" src=\"/assets/images/github.png\" (click)=\"loginWithGithub()\">\n<img class=\"logo\" src=\"/assets/images/twitter.png\" (click)=\"loginWithTwitter()\">"

/***/ }),

/***/ "./src/app/login/login-form/login-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.js");
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.isLoggingIn = true;
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.erro = '';
    };
    LoginFormComponent.prototype.loginWithFacebook = function () {
        this.loginSocial(new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.FacebookAuthProvider());
    };
    LoginFormComponent.prototype.loginWithGoogle = function () {
        this.loginSocial(new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.GoogleAuthProvider());
    };
    LoginFormComponent.prototype.loginWithGithub = function () {
        this.loginSocial(new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.GithubAuthProvider());
    };
    LoginFormComponent.prototype.loginWithTwitter = function () {
        this.loginSocial(new _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.TwitterAuthProvider());
    };
    LoginFormComponent.prototype.loginSocial = function (provider) {
        var _this = this;
        this.appService.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            if (_this.pendingMail == _this.appService.afAuth.auth.currentUser.email)
                _this.appService.afAuth.auth.currentUser.linkWithCredential(_this.pendingCred);
        })
            .catch(function (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                _this.pendingCred = error.credential;
                _this.pendingMail = error.email;
                // Get registered providers for this email.
                _this.appService.afAuth.auth.fetchProvidersForEmail(_this.pendingMail).then(function (providers) {
                    if (providers[0] == "password") {
                        _this.email = error.email;
                        _this.erro = _this.appService.language.e16;
                    }
                    else {
                        _this.erro = _this.appService.language.e17.replace('$input$', providers[0].replace('.com', ''));
                    }
                });
            }
        });
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        if (!this.email || !this.password) {
            this.erro = this.appService.language.e3;
            navigator.vibrate([500]);
        }
        else if (this.isLoggingIn)
            this.appService.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
                .then(function (user) {
                if (_this.pendingMail == _this.email) {
                    _this.appService.afAuth.auth.currentUser.linkWithCredential(_this.pendingCred);
                }
            })
                .catch(function (error) {
                _this.erro = _this.appService.language.e4;
            });
        else
            this.appService.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(function (ok) { })
                .catch(function (error) {
                if (error.code === "auth/email-already-in-use") {
                    _this.appService.afAuth.auth.fetchProvidersForEmail(_this.email).then(function (providers) {
                        _this.erro = _this.appService.language.e17.replace('$input$', providers[0].replace('.com', ''));
                        _this.pendingCred = _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth.EmailAuthProvider.credential(_this.email, _this.password);
                        _this.pendingMail = _this.email;
                    });
                }
                else
                    _this.erro = _this.appService.language.e4;
            });
    };
    LoginFormComponent.prototype.forgot = function () {
        var _this = this;
        if (!this.email) {
            this.erro = this.appService.language.e3;
            navigator.vibrate([500]);
        }
        else {
            this.appService.afAuth.auth.sendPasswordResetEmail(this.email).then(function () {
                _this.erro = _this.appService.language.m3;
            }).catch(function (err) {
                _this.erro = _this.appService.language.e13;
            });
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login/login-form/login-form.component.ts");
/* harmony import */ var _translate_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../translate.module */ "./src/app/translate.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _translate_module__WEBPACK_IMPORTED_MODULE_5__["TranslatePipeModule"]
            ],
            declarations: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]],
            providers: [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/menu.component.css":
/*!************************************!*\
  !*** ./src/app/menu.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    margin: 15px auto;\n    display: block;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/menu.component.html":
/*!*************************************!*\
  !*** ./src/app/menu.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" [routerLink]=\"['/list-detail']\" class=\"btn btn-primary\">{{'t20' | translate}}</button>\n<button type=\"button\" [routerLink]=\"['/bill-detail']\" class=\"btn btn-primary\">{{'t21' | translate}}</button>"

/***/ }),

/***/ "./src/app/menu.component.ts":
/*!***********************************!*\
  !*** ./src/app/menu.component.ts ***!
  \***********************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
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

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/translate.module.ts":
/*!*************************************!*\
  !*** ./src/app/translate.module.ts ***!
  \*************************************/
/*! exports provided: TranslatePipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipeModule", function() { return TranslatePipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate.pipe */ "./src/app/translate.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TranslatePipeModule = /** @class */ (function () {
    function TranslatePipeModule() {
    }
    TranslatePipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            declarations: [_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
            exports: [_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]]
        })
    ], TranslatePipeModule);
    return TranslatePipeModule;
}());



/***/ }),

/***/ "./src/app/translate.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/translate.pipe.ts ***!
  \***********************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(appservice) {
        this.appservice = appservice;
    }
    TranslatePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        return this.appservice.language[value];
    };
    TranslatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'translate',
            pure: false
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], TranslatePipe);
    return TranslatePipe;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/environments/firebase.config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase.config.ts ***!
  \*********************************************/
/*! exports provided: FirebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseConfig", function() { return FirebaseConfig; });
var FirebaseConfig = {
    apiKey: "AIzaSyAT0RaduvnW2j2B_wXq8wW7VN6I6Ju37hE",
    authDomain: "simplesapprealtime-60890.firebaseapp.com",
    databaseURL: "https://simplesapprealtime-60890.firebaseio.com",
    projectId: "simplesapprealtime-60890",
    storageBucket: "",
    messagingSenderId: "598037447832"
};


/***/ }),

/***/ "./src/environments/language.ts":
/*!**************************************!*\
  !*** ./src/environments/language.ts ***!
  \**************************************/
/*! exports provided: config, language_ptbr, language_en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language_ptbr", function() { return language_ptbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language_en", function() { return language_en; });
var config = {
    max: 50
};
var language_ptbr = {
    name: 'pt_br',
    e1: 'Item e quantidade são obrigatórios',
    e2: 'Máximo de ' + config.max + ' itens',
    e3: 'E-mail e senham devem ser informados',
    e4: 'E-mail ou senha inválidos',
    e5: 'Senha é muito pequena',
    e6: 'Nome da lista deve ser informado',
    e7: 'Exclua os itens primeiro',
    e8: 'E-mail inválido, não cadastrado ou já incluso',
    e9: 'Acesso já criado',
    e10: 'Lista deve ter pelo menos 1 dono',
    e11: 'Lista deve estar vazia',
    e12: 'Você está offline, tente novamente mais tarde',
    e13: 'E-mail é inválido',
    e14: 'Todos os campos são obrigatórios',
    e15: 'Remova os acessos primeiro',
    e16: 'Conta já cadastrada! Para continuar, informe sua senha e clique em entrar.',
    e17: 'Conta $input$ já cadastrada! Faça seu login para vincular as contas.',
    t1: 'Nome',
    t2: 'Quantidade',
    t3: 'Incluir',
    t4: 'Novo Item',
    t5: 'Lista',
    t6: 'Senha',
    t7: 'Entrar',
    t8: 'Registrar',
    t9: 'Voltar',
    t10: 'Nova Lista',
    t11: 'Item',
    t12: 'Início',
    t13: 'Acesso',
    t14: 'Conta',
    t15: 'Nova Conta',
    t16: 'Pagador',
    t17: 'Data',
    t18: 'Valor',
    t19: 'Beneficiados',
    t20: 'Gerenciador de Listas',
    t21: 'Gerenciador de Contas',
    t22: 'Membros',
    t23: 'Saldo',
    t24: 'Atenção',
    t25: 'Local',
    t26: 'Natureza',
    t27: 'Transporte',
    t28: 'Hospedagem',
    t29: 'Taxas',
    t30: 'Passeios',
    t31: 'Alimentação',
    t32: 'Diversos',
    t33: 'Selecione',
    t34: 'Responsável',
    t35: 'Multiplicador',
    t36: 'Calculado',
    t37: 'Excluir',
    t38: 'Editar',
    t39: 'Salvar',
    t40: 'Restaurar',
    t41: 'Ou acesse com:',
    m1: 'Selecione uma lista',
    m2: 'Esqueci/Trocar minha senha',
    m3: 'E-mail para resetar senha enviado',
    m4: 'Nenhuma lista disponível',
    m5: 'Nenhum item foi adicionado',
    m6: 'Saldo negativo? Você deve dinheiro.',
    m7: 'Confirma exclusão?',
    m8: 'Somente o responsável pode excluir.',
    m9: 'Somente o responsável pode alterar.'
};
var language_en = {
    name: 'en_us',
    e1: 'Item name and amount are required',
    e2: 'Max of ' + config.max + ' items',
    e3: 'E-mail and password must be provided',
    e4: 'E-mail or password is wrong',
    e5: 'Passowrd must be at least 6 characters',
    e6: 'List name are required',
    e7: 'Itens must be removed first',
    e8: 'E-mail invalid, not registered or already included',
    e9: 'Access already exists',
    e10: 'List must have at least one owner',
    e11: 'List must be empty',
    e12: 'You are offline, try again later',
    e13: 'E-mail is invalid',
    e14: 'All fields are required',
    e15: 'Remove access from others users first',
    e16: 'This account already exists. Inform the password and sign in.',
    e17: 'Account $input$ already exists. Sign in to link it each other.',
    t1: 'Name',
    t2: 'Amount',
    t3: 'Include',
    t4: 'New Item',
    t5: 'List',
    t6: 'Password',
    t7: 'Sign in',
    t8: 'Sign up',
    t9: 'Back to login',
    t10: 'New List',
    t11: 'Item',
    t12: 'Home',
    t13: 'Access',
    t14: 'Bill',
    t15: 'New Bill',
    t16: 'Payer',
    t17: 'Date',
    t18: 'Value',
    t19: 'Benefited',
    t20: 'List Mananger',
    t21: 'Bill Mananger',
    t22: 'Members',
    t23: 'Balance',
    t24: 'Attention',
    t25: 'Place',
    t26: 'Type',
    t27: 'Transportation',
    t28: 'Hosting',
    t29: 'Taxes',
    t30: 'Recreation',
    t31: 'Food',
    t32: 'Others',
    t33: 'Select',
    t34: 'Owner',
    t35: 'Multiplier',
    t36: 'Calculated',
    t37: 'Remove',
    t38: 'Edit',
    t39: 'Save',
    t40: 'Restore',
    t41: 'Signin with:',
    m1: 'Select a list to continue',
    m2: 'Forgot/Change my password',
    m3: 'Reset password mail sent',
    m4: 'There is no list to display',
    m5: 'There is no item to display',
    m6: 'Negative balance? You owe money.',
    m7: 'Are you sure to delete?',
    m8: 'Only the owner is alowed to remove.',
    m9: 'Only the owner is alowed to edit.'
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/felipe/realtimeapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map