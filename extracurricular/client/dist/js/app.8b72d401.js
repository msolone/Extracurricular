(function(e){function t(t){for(var a,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0bd427ea":"63753b7f","chunk-3b0a94b0":"5fd0ad0d","chunk-210dd452":"3d2a23f8","chunk-5a27ccb8":"7c18438d","chunk-77368da0":"15be02a9","chunk-4fbddc00":"2109486f","chunk-66dfea02":"76d85f76","chunk-735d8c4b":"f1da887c","chunk-d2581178":"e3dea487","chunk-f51eb66a":"d01bc660"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0bd427ea":1,"chunk-210dd452":1,"chunk-5a27ccb8":1,"chunk-77368da0":1,"chunk-4fbddc00":1,"chunk-66dfea02":1,"chunk-735d8c4b":1,"chunk-d2581178":1,"chunk-f51eb66a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0bd427ea":"1f651a0a","chunk-3b0a94b0":"31d6cfe0","chunk-210dd452":"f130dbdc","chunk-5a27ccb8":"37134d6b","chunk-77368da0":"e40ac74c","chunk-4fbddc00":"21445ef7","chunk-66dfea02":"03f26092","chunk-735d8c4b":"a4bd5318","chunk-d2581178":"df4be731","chunk-f51eb66a":"2bd09edb"}[e]+".css",o=u.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var c=r[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){c=l[i],s=c.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.request=a,n(r)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var s,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e),s=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[e]=void 0}};var h=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,l.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),o=n.n(a);o.a},"1aec":function(e,t,n){"use strict";var a=n("eca0"),o=n.n(a);o.a},"41cb":function(e,t,n){"use strict";var a=n("2b0e"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Loading...")])},i=[],c=(n("cadf"),n("551c"),n("097d"),{name:"callback",props:["auth"],data:function(){return this.auth.handleAuthentication(),{}}}),u=c,s=(n("1aec"),n("2877")),l=Object(s["a"])(u,r,i,!1,null,null,null);l.options.__file="Callback.vue";var d=l.exports;a["a"].use(o["a"]);t["a"]=new o["a"]({mode:"history",routes:[{path:"/",name:"LogIn",component:function(){return n.e("chunk-0bd427ea").then(n.bind(null,"9ddf"))}},{path:"/home",name:"Home",component:function(){return n.e("chunk-d2581178").then(n.bind(null,"bb51"))}},{path:"/home/take_attendance/:TeamId",name:"TakeAttendance",component:function(){return Promise.all([n.e("chunk-3b0a94b0"),n.e("chunk-210dd452")]).then(n.bind(null,"632d"))}},{path:"/home/team_attendance_history/:TeamId",name:"TeamAttendanceHistory",component:function(){return Promise.all([n.e("chunk-3b0a94b0"),n.e("chunk-5a27ccb8")]).then(n.bind(null,"1a26"))}},{path:"/home/player_attendance_history/:playerId",name:"PlayerAttendanceHistory",component:function(){return Promise.all([n.e("chunk-3b0a94b0"),n.e("chunk-77368da0")]).then(n.bind(null,"e136"))}},{path:"/home/add_team/",name:"AddTeam",component:function(){return n.e("chunk-4fbddc00").then(n.bind(null,"31ec"))}},{path:"/home/add_player/",name:"AddPlayer",component:function(){return n.e("chunk-f51eb66a").then(n.bind(null,"fd4d"))}},{path:"/home/remove_team/",name:"RemoveTeam",component:function(){return n.e("chunk-66dfea02").then(n.bind(null,"52d0"))}},{path:"/home/remove_player/",name:"RemovePlayer",component:function(){return n.e("chunk-735d8c4b").then(n.bind(null,"9be8"))}},{path:"/callback",name:"callback",component:d}]})},"42f6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav",{attrs:{team:e.team}}),n("router-view",{attrs:{auth:e.auth,authenticated:e.authenticated,team:e.team}}),n("footer",{staticClass:"footer"})],1)},r=[],i=n("ee69"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("hr"),n("section",{staticClass:"header_inner"},[n("router-link",{staticClass:"logo",attrs:{to:"/home"}},[n("h1",[e._v("E")]),n("h3",[e._v("xtracurricular")])]),n("div",{staticClass:"dropdown"},[e._m(0),n("div",{staticClass:"dropdown-menu dropdown-menu-header",attrs:{"aria-labelledby":"dropdownMenu1"}},[n("div",{staticClass:"dropdown-item"},[e._v(e._s(e.user.given_name)+" "+e._s(e.user.family_name))]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/home"}},[e._v("Home")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"TakeAttendance",params:{TeamId:this.team.id}}}},[e._v("Attendance")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"TeamAttendanceHistory",params:{TeamId:this.team.id}}}},[e._v("History")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/home/player_attendance_history/1"}},[e._v("Search")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/home"}},[e._v("Change Team")]),n("router-link",{staticClass:"dropdown-item",attrs:{to:"/"},on:{click:function(t){e.logout()}}},[e._v("Log Out")])],1)])],1),n("hr")])},u=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("img",{attrs:{src:n("daef"),alt:"logo"}})])}],s=new i["a"],l=s.login,d=s.logout,h=s.authenticated,f=s.authNotifier,m={name:"Nav",props:{team:Object},watch:{team:function(e,t){console.log("Prop changed: ",e," | was: ",t)}},data:function(){var e=this;return f.on("authChange",function(t){e.authenticated=t.authenticated}),{auth:s,authenticated:h,footerOff:!1,user:{given_name:"",family_name:""},teamId:0}},mounted:function(){var e=this;console.log("selected team in nav:",this.team),this.auth.getProfile(function(t,n){console.log({err:t,user:n}),e.user=n})},methods:{login:l,logout:d}},p=m,b=(n("5b49"),n("2877")),g=Object(b["a"])(p,c,u,!1,null,null,null);g.options.__file="Nav.vue";var v=g.exports,k=new i["a"],_=k.login,y=k.logout,w=k.authenticated,T=k.authNotifier,A={components:{Nav:v},data:function(){var e=this;return T.on("authChange",function(t){e.authenticated=t.authenticated}),{auth:k,authenticated:w,footerOff:!1,team:{id:0,name:"",update:function(e,t){console.log("updating selected team",{id:e,name:t}),this.id=e,this.name=t}},user:{given_name:"",family_name:""}}},mounted:function(){var e=this;this.auth.getProfile(function(t,n){console.log({err:t,user:n}),e.user=n})},methods:{login:_,logout:y}},O=A,P=(n("034f"),Object(b["a"])(O,o,r,!1,null,null,null));P.options.__file="App.vue";var C=P.exports,S=n("41cb"),j=n("9f7b");a["a"].config.productionTip=!1,a["a"].use(j["a"]),new a["a"]({router:S["a"],render:function(e){return e(C)}}).$mount("#app")},"5b49":function(e,t,n){"use strict";var a=n("42f6"),o=n.n(a);o.a},c21b:function(e,t,n){},daef:function(e,t,n){e.exports=n.p+"img/white_triple_bar2.571fdec1.png"},eca0:function(e,t,n){},ee69:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n("a481");var a=n("c665"),o=n("aa9a"),r=n("a322"),i=(n("cadf"),n("551c"),n("097d"),n("b0af")),c=n("ba10"),u=n.n(c),s=n("41cb"),l=function(){function e(){Object(a["a"])(this,e),Object(r["a"])(this,"authenticated",this.isAuthenticated()),Object(r["a"])(this,"authNotifier",new u.a),Object(r["a"])(this,"userProfile",void 0),Object(r["a"])(this,"auth0",new i["a"].WebAuth({domain:"michaelsolone.auth0.com",clientID:"UGUByEkhEARxvxFIfnAOnTwc6G2VbWBX",redirectUri:"http://extracurricular.site/callback",responseType:"token id_token",scope:"openid profile"})),this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getProfile=this.getProfile.bind(this)}return Object(o["a"])(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;console.log("here"),this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?(e.setSession(n),s["a"].replace("Home")):t&&(s["a"].replace("Home"),console.log(t))})}},{key:"setSession",value:function(e){var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime());localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),this.authNotifier.emit("authChange",{authenticated:!0})}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),this.userProfile=null,this.authNotifier.emit("authChange",!1),s["a"].replace("Home")}},{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}},{key:"getAccessToken",value:function(){var e=localStorage.getItem("access_token");if(!e)throw new Error("No Access Token found");return e}},{key:"getProfile",value:function(e){var t=this,n=this.getAccessToken();this.auth0.client.userInfo(n,function(n,a){a&&(t.userProfile=a),e(n,a)})}}]),e}()}});
//# sourceMappingURL=app.8b72d401.js.map