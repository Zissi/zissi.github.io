(function(e){function n(n){for(var r,a,u=n[0],s=n[1],c=n[2],l=0,p=[];l<u.length;l++)a=u[l],i[a]&&p.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(n);while(p.length)p.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var s=t[u];0!==i[s]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={app:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var f=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),i=t.n(r);i.a},"2f4c":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Quiz",{attrs:{msg:e.message,birds:e.birds}})],1)},o=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"quiz",attrs:{id:"quiz"}},[t("h1",[e._v(e._s(e.msg))]),t("img",{attrs:{alt:"Stare am Alex",src:e.birds[0].image,width:"50%",height:"50%"}}),e._l(e.answers,function(n){return t("ul",{key:n.name},[t("li",[t("button",{on:{click:function(t){return e.choose(n)}}},[e._v(e._s(n.name))])])])}),t("button",{on:{click:function(n){return e.next()}}},[e._v("Next")])],2)},u=[],s={name:"Quiz",props:{msg:String,birds:Array},data:function(){return{answers:[this.birds[0]]}},methods:{choose:function(e){return e},next:function(){this.answers=[this.birds[4]]}}},c=s,f=(t("f37a"),t("2877")),l=Object(f["a"])(c,a,u,!1,null,"47622fa8",null),p=l.exports,d={name:"app",components:{Quiz:p},data:function(){return{message:"Welcome to BBirds",birds:[{name:"Rotkehlchen",image:t("86a7")},{name:"Amsel"},{name:"Star"},{name:"Kranich"},{name:"Blaumeise"},{name:"Mauersegler"}]}}},m=d,h=(t("034f"),Object(f["a"])(m,i,o,!1,null,null,null)),b=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,n,t){},"86a7":function(e,n,t){e.exports=t.p+"img/stare.5248396e.jpg"},f37a:function(e,n,t){"use strict";var r=t("2f4c"),i=t.n(r);i.a}});
//# sourceMappingURL=app.93095f7c.js.map