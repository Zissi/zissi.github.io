(function(e){function t(t){for(var r,u,a=t[0],s=t[1],c=t[2],f=0,p=[];f<a.length;f++)u=a[f],i[u]&&p.push(i[u][0]),i[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},i={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},3230:function(e,t,n){"use strict";var r=n("c502"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Quiz",{attrs:{msg:e.message,birds:e.birds}})],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quiz",attrs:{id:"quiz"}},[r("h1",[e._v(e._s(e.msg))]),r("img",{attrs:{alt:"Stare am Alex",src:n("86a7"),width:"50%",height:"50%"}}),e._l(e.answers,function(t){return r("ul",{key:t.id},[r("li",[r("button",{on:{click:function(n){return e.choose(t)}}},[e._v(e._s(t.name))])])])}),r("button",{on:{click:function(t){return e.next()}}},[e._v("Next")])],2)},a=[],s={name:"Quiz",props:{msg:String,birds:Array},data:function(){return{answers:[this.birds[0]],picture:"../assets/stare.jpg"}},methods:{choose:function(e){return e},next:function(){this.answers=[this.birds[4]]}}},c=s,l=(n("3230"),n("2877")),f=Object(l["a"])(c,u,a,!1,null,"c7f257b6",null),p=f.exports,d={name:"app",components:{Quiz:p},data:function(){return{message:"Welcome to BBirds",birds:[{id:1,name:"Rotkehlchen"},{id:2,name:"Amsel"},{id:3,name:"Star"},{id:4,name:"Kranich"},{id:1,name:"Blaumeise"},{id:2,name:"Mauersegler"}]}}},m=d,h=(n("034f"),Object(l["a"])(m,i,o,!1,null,null,null)),b=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,t,n){},"86a7":function(e,t,n){e.exports=n.p+"img/stare.5248396e.jpg"},c502:function(e,t,n){}});
//# sourceMappingURL=app.40c0619d.js.map