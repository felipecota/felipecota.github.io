webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),o=u("wQAS"),r=u("B66y"),i=u("W6q7"),a=u("q4dy"),c=u("qbdv"),s=u("fc+i"),d=u("bm2B"),_=u("CPp0"),f=u("BkNc"),p=u("Kfbv"),m=u("Rfiw"),g=u("axsj"),v=u("6cxu"),h=u("Npun"),b=u("9K4f"),k=u("DCJI"),y=u("YJVo");u.d(l,"a",function(){return C});var C=t.b(e.a,[o.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[r.a,i.a,a.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,c.a,c.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,s.b,s.c,[c.c]),t.d(6144,t.p,null,[s.b]),t.d(4608,s.d,s.e,[]),t.d(5120,s.f,function(n,l,u,t){return[new s.g(n),new s.h(l),new s.i(u,t)]},[c.c,c.c,c.c,s.d]),t.d(4608,s.j,s.j,[s.f,t.q]),t.d(135680,s.k,s.k,[c.c]),t.d(4608,s.l,s.l,[s.j,s.k]),t.d(6144,t.r,null,[s.l]),t.d(6144,s.m,null,[s.k]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,s.n,s.n,[c.c]),t.d(4608,s.o,s.o,[c.c]),t.d(4608,d.a,d.a,[]),t.d(4608,_.a,_.a,[]),t.d(4608,_.b,_.c,[]),t.d(5120,_.d,_.e,[]),t.d(4608,_.f,_.f,[_.a,_.b,_.d]),t.d(4608,_.g,_.h,[]),t.d(5120,_.i,_.j,[_.f,_.g]),t.d(5120,f.a,f.b,[f.c]),t.d(4608,f.d,f.d,[]),t.d(6144,f.e,null,[f.d]),t.d(135680,f.f,f.f,[f.c,t.t,t.u,t.v,f.e]),t.d(4608,f.g,f.g,[]),t.d(5120,f.h,f.i,[f.j]),t.d(5120,t.w,function(n){return[n]},[f.h]),t.d(5120,p.a,m.a,[p.b,g.a]),t.d(4608,v.a,v.a,[p.a]),t.d(4608,h.a,h.a,[]),t.d(512,c.d,c.d,[]),t.d(1024,t.x,s.p,[]),t.d(1024,t.y,function(){return[f.k()]},[]),t.d(512,f.j,f.j,[t.v]),t.d(1024,t.z,function(n,l,u){return[s.q(n,l),f.l(u)]},[[2,s.r],[2,t.y],f.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,s.s,s.s,[[3,s.s]]),t.d(512,d.b,d.b,[]),t.d(512,d.c,d.c,[]),t.d(512,_.k,_.k,[]),t.d(1024,f.m,f.n,[[3,f.c]]),t.d(512,f.o,f.p,[]),t.d(512,f.q,f.q,[]),t.d(256,f.r,{},[]),t.d(1024,c.e,f.s,[c.f,[2,c.g],f.r]),t.d(512,c.h,c.h,[c.e]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,f.t,function(){return[[{path:"",redirectTo:"/list",pathMatch:"full"},{path:"list",component:b.a},{path:"form",component:k.a}]]},[]),t.d(1024,f.c,f.u,[t.D,f.o,f.q,c.h,t.v,t.t,t.u,f.t,f.r,[2,f.v],[2,f.w]]),t.d(512,f.x,f.x,[[2,f.m],[2,f.c]]),t.d(512,y.a,y.a,[]),t.d(512,g.b,g.b,[]),t.d(512,e.a,e.a,[]),t.d(256,p.b,{apiKey:"AIzaSyAT0RaduvnW2j2B_wXq8wW7VN6I6Ju37hE",authDomain:"simplesapprealtime-60890.firebaseapp.com",databaseURL:"https://simplesapprealtime-60890.firebaseio.com",projectId:"simplesapprealtime-60890",storageBucket:"",messagingSenderId:"598037447832"},[]),t.d(256,g.a,void 0,[])])})},0:function(n,l,u){n.exports=u("cDNt")},"9K4f":function(n,l,u){"use strict";var t=u("B2Lq");u.d(l,"a",function(){return e});var e=function(){function n(n){this.angularFire=n,this.people=n.list("people")}return n.prototype.ngOnInit=function(){},n.prototype.onSelect=function(n){navigator.onLine&&this.angularFire.list("people").remove(n).then(function(){return console.log("person removed: "+n)})},n.ctorParameters=function(){return[{type:t.a}]},n}()},B66y:function(n,l,u){"use strict";function t(n){return i._26(0,[(n()(),i._27(0,null,null,4,"li",[],null,null,null,null,null)),(n()(),i._28(null,["\n  "," "])),(n()(),i._27(0,null,null,1,"span",[["class","badge"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.onSelect(n.context.$implicit.$key)&&t}return t},null,null)),(n()(),i._28(null,["X"])),(n()(),i._28(null,["\n"]))],null,function(n,l){n(l,1,0,l.context.$implicit.firstname+" "+l.context.$implicit.lastname)})}function e(n){return i._26(0,[(n()(),i._27(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._28(null,["\n  Registered List\n"])),(n()(),i._28(null,["\n"])),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._28(null,["\n"])),(n()(),i._27(0,null,null,5,"ul",[["class","people"]],null,null,null,null,null)),(n()(),i._28(null,["\n"])),(n()(),i._30(16777216,null,null,2,null,t)),i._29(802816,null,0,a.p,[i.X,i._8,i.l],{ngForOf:[0,"ngForOf"]},null),i._31(131072,a.o,[i.U]),(n()(),i._28(null,["\n"]))],function(n,l){var u=l.component;n(l,8,0,i._32(l,8,0,i._33(l,9).transform(u.people)))},null)}function o(n){return i._26(0,[(n()(),i._27(0,null,null,1,"app-list",[],null,null,null,e,_)),i._29(114688,null,0,c.a,[s.a],null,null)],function(n,l){n(l,1,0)},null)}var r=u("R46R"),i=u("/oeL"),a=u("qbdv"),c=u("9K4f"),s=u("6cxu");u.d(l,"a",function(){return f});var d=[r.a],_=i._25({encapsulation:0,styles:d,data:{}}),f=i._34("app-list",c.a,o,{},{},[])},B91n:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},DCJI:function(n,l,u){"use strict";var t=u("B2Lq");u.d(l,"a",function(){return e});var e=function(){function n(n){this.angularFire=n}return n.prototype.ngOnInit=function(){},n.prototype.form_submit=function(n){var l=this;this.angularFire.list("people").map(function(n){return n.length}).subscribe(function(n){return l.tamanho=n}),""==n.controls.firstname.value&&""==n.controls.lastname.value?this.erro="First and Last name are required":this.tamanho>=5?this.erro="Max of 5 person":(this.angularFire.list("people").push({firstname:n.controls.firstname.value,lastname:n.controls.lastname.value}).then(function(n){return console.log("person inserted: "+n.key)}),n.controls.firstname.setValue(""),n.controls.lastname.setValue(""),this.erro="")},n.ctorParameters=function(){return[{type:t.a}]},n}()},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".modal[_ngcontent-%COMP%]{display:block}.modal-content[_ngcontent-%COMP%]{background-color:#ca2727;color:#fff}"]},Npun:function(n,l,u){"use strict";var t=u("bKpL"),e=(u.n(t),u("Dqrr"));u.n(e);u.d(l,"a",function(){return o});var o=function(){function n(){this.isConnected=t.Observable.merge(t.Observable.of(navigator.onLine),t.Observable.fromEvent(window,"online").map(function(){return!0}),t.Observable.fromEvent(window,"offline").map(function(){return!1}))}return n.ctorParameters=function(){return[]},n}()},R46R:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".selected[_ngcontent-%COMP%]{background-color:#cfd8dc!important;color:#fff}.people[_ngcontent-%COMP%]{margin:0 0 2em 0;list-style-type:none;padding:0;width:200px}.people[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;position:relative;left:0;background-color:#eee;margin:.5em;padding:10px 0 6px 10px;border-radius:4px}.people[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc!important;color:#fff}.people[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.people[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;top:-3px}.people[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{color:#fff;background-color:#115288;position:relative;margin-left:.8em;border-radius:0 4px 4px 0;float:right;padding:12px 16px;top:-10px}"]},W6q7:function(n,l,u){"use strict";function t(n){return i._26(0,[(n()(),i._27(0,null,null,1,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),i._28(null,["\n    ","\n  "]))],null,function(n,l){n(l,1,0,l.component.erro)})}function e(n){return i._26(0,[(n()(),i._27(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),i._28(null,[" \n  People Registration\n"])),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._28(null,["\n"])),(n()(),i._27(0,null,null,33,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0,e=n.component;if("submit"===l){t=!1!==i._33(n,6).onSubmit(u)&&t}if("reset"===l){t=!1!==i._33(n,6).onReset()&&t}if("submit"===l){t=!1!==e.form_submit(i._33(n,6))&&t}return t},null,null)),i._29(16384,null,0,c.d,[],null,null),i._29(16384,[["f",4]],0,c.e,[[8,null],[8,null]],null,null),i._36(2048,null,c.f,null,[c.e]),i._29(16384,null,0,c.g,[c.f],null,null),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,5,"input",[["class","form-control"],["name","firstname"],["ngModel",""],["placeholder","First Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==i._33(n,11)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==i._33(n,11).onTouched()&&t}if("compositionstart"===l){t=!1!==i._33(n,11)._compositionStart()&&t}if("compositionend"===l){t=!1!==i._33(n,11)._compositionEnd(u.target.value)&&t}return t},null,null)),i._29(16384,null,0,c.h,[i.P,i.Q,[2,c.i]],null,null),i._36(1024,null,c.j,function(n){return[n]},[c.h]),i._29(671744,null,0,c.k,[[2,c.f],[8,null],[8,null],[2,c.j]],{name:[0,"name"],model:[1,"model"]},null),i._36(2048,null,c.l,null,[c.k]),i._29(16384,null,0,c.m,[c.l],null,null),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,5,"input",[["class","form-control"],["name","lastname"],["ngModel",""],["placeholder","Last Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==i._33(n,20)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==i._33(n,20).onTouched()&&t}if("compositionstart"===l){t=!1!==i._33(n,20)._compositionStart()&&t}if("compositionend"===l){t=!1!==i._33(n,20)._compositionEnd(u.target.value)&&t}return t},null,null)),i._29(16384,null,0,c.h,[i.P,i.Q,[2,c.i]],null,null),i._36(1024,null,c.j,function(n){return[n]},[c.h]),i._29(671744,null,0,c.k,[[2,c.f],[8,null],[8,null],[2,c.j]],{name:[0,"name"],model:[1,"model"]},null),i._36(2048,null,c.l,null,[c.k]),i._29(16384,null,0,c.m,[c.l],null,null),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._28(null,["\n  "])),(n()(),i._27(0,null,null,2,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(n()(),i._27(0,null,null,0,"span",[["class","glyphicon glyphicon-floppy-disk"]],null,null,null,null,null)),(n()(),i._28(null,[" Save"])),(n()(),i._28(null,["       \n  "])),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._27(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),i._28(null,["\n  "])),(n()(),i._30(16777216,null,null,1,null,t)),i._29(16384,null,0,s.n,[i.X,i._8],{ngIf:[0,"ngIf"]},null),(n()(),i._28(null,["  \n"]))],function(n,l){var u=l.component;n(l,13,0,"firstname","");n(l,22,0,"lastname",""),n(l,36,0,u.erro)},function(n,l){n(l,4,0,i._33(l,8).ngClassUntouched,i._33(l,8).ngClassTouched,i._33(l,8).ngClassPristine,i._33(l,8).ngClassDirty,i._33(l,8).ngClassValid,i._33(l,8).ngClassInvalid,i._33(l,8).ngClassPending),n(l,10,0,i._33(l,15).ngClassUntouched,i._33(l,15).ngClassTouched,i._33(l,15).ngClassPristine,i._33(l,15).ngClassDirty,i._33(l,15).ngClassValid,i._33(l,15).ngClassInvalid,i._33(l,15).ngClassPending),n(l,19,0,i._33(l,24).ngClassUntouched,i._33(l,24).ngClassTouched,i._33(l,24).ngClassPristine,i._33(l,24).ngClassDirty,i._33(l,24).ngClassValid,i._33(l,24).ngClassInvalid,i._33(l,24).ngClassPending)})}function o(n){return i._26(0,[(n()(),i._27(0,null,null,1,"app-form",[],null,null,null,e,f)),i._29(114688,null,0,a.a,[d.a],null,null)],function(n,l){n(l,1,0)},null)}var r=u("YtwQ"),i=u("/oeL"),a=u("DCJI"),c=u("bm2B"),s=u("qbdv"),d=u("6cxu");u.d(l,"a",function(){return p});var _=[r.a],f=i._25({encapsulation:0,styles:_,data:{}}),p=i._34("app-form",a.a,o,{},{},[])},YJVo:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},YtwQ:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".form-control[_ngcontent-%COMP%]{max-width:200px}"]},"aR8+":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),o=u("+h1B"),r=u("fc+i");e.a.production&&u.i(t.a)(),u.i(r.a)().bootstrapModuleFactory(o.a)},nexV:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return i._26(0,[(n()(),i._27(0,null,null,24,"div",[],null,null,null,null,null)),(n()(),i._28(null,["\n    "])),(n()(),i._27(0,null,null,19,"div",[["class","modal fade in"],["id","myModal"],["role","dialog"]],null,null,null,null,null)),(n()(),i._28(null,["\n        "])),(n()(),i._27(0,null,null,16,"div",[["class","modal-dialog modal-sm"]],null,null,null,null,null)),(n()(),i._28(null,["\n        "])),(n()(),i._27(0,null,null,13,"div",[["class","modal-content"]],null,null,null,null,null)),(n()(),i._28(null,["\n            "])),(n()(),i._27(0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),i._28(null,["\n            "])),(n()(),i._27(0,null,null,1,"h4",[["class","modal-title text-center"]],null,null,null,null,null)),(n()(),i._28(null,["APP OFFLINE"])),(n()(),i._28(null,["\n            "])),(n()(),i._28(null,["\n            "])),(n()(),i._27(0,null,null,4,"div",[["class","modal-body text-center"]],null,null,null,null,null)),(n()(),i._28(null,["\n            "])),(n()(),i._27(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),i._28(null,["No internet connection detected"])),(n()(),i._28(null,["\n            "])),(n()(),i._28(null,["\n        "])),(n()(),i._28(null,["\n        "])),(n()(),i._28(null,["\n    "])),(n()(),i._28(null,["\n    "])),(n()(),i._27(0,null,null,0,"div",[["class","modal-backdrop in"]],null,null,null,null,null)),(n()(),i._28(null,["\n"]))],null,null)}function e(n){return i._26(0,[(n()(),i._27(0,null,null,4,"div",[["class","jumbotron text-center"]],null,null,null,null,null)),(n()(),i._28(null,["\n    "])),(n()(),i._27(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i._28(null,["",""])),(n()(),i._28(null,["\n"])),(n()(),i._28(null,["\n"])),(n()(),i._27(0,null,null,1,"app-people",[],null,null,null,a.a,a.b)),i._29(49152,null,0,c.a,[],null,null),(n()(),i._28(null,["\n"])),(n()(),i._30(16777216,null,null,2,null,t)),i._29(16384,null,0,s.n,[i.X,i._8],{ngIf:[0,"ngIf"]},null),i._31(131072,s.o,[i.U])],function(n,l){var u=l.component;n(l,10,0,!i._32(l,10,0,i._33(l,11).transform(u.isConnected)))},function(n,l){n(l,3,0,l.component.title)})}function o(n){return i._26(0,[(n()(),i._27(0,null,null,1,"app-root",[],null,null,null,e,p)),i._29(49152,null,0,d.a,[_.a],null,null)],null,null)}var r=u("NhKt"),i=u("/oeL"),a=u("zPVF"),c=u("B91n"),s=u("qbdv"),d=u("wQAS"),_=u("Npun");u.d(l,"a",function(){return m});var f=[r.a],p=i._25({encapsulation:0,styles:f,data:{}}),m=i._34("app-root",d.a,o,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},wQAS:function(n,l,u){"use strict";var t=u("Npun");u.d(l,"a",function(){return e});var e=function(){function n(n){this.appService=n,this.title="realtimeapp v1.6",this.isConnected=this.appService.isConnected}return n.ctorParameters=function(){return[{type:t.a}]},n}()},zPVF:function(n,l,u){"use strict";function t(n){return r._26(0,[(n()(),r._27(0,null,null,17,"ul",[["class","nav nav-tabs"]],null,null,null,null,null)),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),r._29(1720320,null,2,i.y,[i.c,r.Q,r.P,r.U],{routerLinkActive:[0,"routerLinkActive"]},null),r._35(603979776,1,{links:1}),r._35(603979776,2,{linksWithHrefs:1}),(n()(),r._27(0,null,null,2,"a",[["routerLink","/list"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==r._33(n,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),r._29(671744,[[2,4]],0,i.z,[i.c,i.a,a.e],{routerLink:[0,"routerLink"]},null),(n()(),r._28(null,["List"])),(n()(),r._28(null,["\n    "])),(n()(),r._27(0,null,null,6,"li",[["routerLinkActive","active"]],null,null,null,null,null)),r._29(1720320,null,2,i.y,[i.c,r.Q,r.P,r.U],{routerLinkActive:[0,"routerLinkActive"]},null),r._35(603979776,3,{links:1}),r._35(603979776,4,{linksWithHrefs:1}),(n()(),r._27(0,null,null,2,"a",[["routerLink","/form"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var t=!0;if("click"===l){t=!1!==r._33(n,15).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),r._29(671744,[[4,4]],0,i.z,[i.c,i.a,a.e],{routerLink:[0,"routerLink"]},null),(n()(),r._28(null,["New Person"])),(n()(),r._28(null,["\n"])),(n()(),r._28(null,["\n"])),(n()(),r._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._29(212992,null,0,i.A,[i.q,r.X,r.e,[8,null],r.U],null,null),(n()(),r._28(null,["\n"]))],function(n,l){n(l,3,0,"active");n(l,7,0,"/list");n(l,11,0,"active");n(l,15,0,"/form"),n(l,20,0)},function(n,l){n(l,6,0,r._33(l,7).target,r._33(l,7).href),n(l,14,0,r._33(l,15).target,r._33(l,15).href)})}function e(n){return r._26(0,[(n()(),r._27(0,null,null,1,"app-people",[],null,null,null,t,d)),r._29(49152,null,0,c.a,[],null,null)],null,null)}var o=u("nexV"),r=u("/oeL"),i=u("BkNc"),a=u("qbdv"),c=u("B91n");u.d(l,"b",function(){return d}),l.a=t;var s=[o.a],d=r._25({encapsulation:0,styles:s,data:{}});r._34("app-people",c.a,e,{},{},[])}},[0]);