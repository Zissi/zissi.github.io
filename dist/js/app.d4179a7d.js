(function(t){function e(e){for(var s,o,a=e[0],u=e[1],c=e[2],f=0,d=[];f<a.length;f++)o=a[f],i[o]&&d.push(i[o][0]),i[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),i=n.n(s);i.a},"432f":function(t,e,n){t.exports=n.p+"img/turmfalke.7fd99f34.jpg"},4729:function(t,e,n){t.exports=n.p+"img/kohlmeise.63497f92.jpg"},"4d38":function(t,e,n){"use strict";var s=n("efce"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("Quiz",{attrs:{birds:t.birds}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-success"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Bbirds – Berliner Vögel")])])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz",attrs:{id:"quiz"}},[n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("img",{attrs:{alt:"Vogelbild",src:t.answers[t.solution_idx].image}}),n("div",{staticClass:"answers-container"},t._l(t.answers,function(e,s){return n("AnswerButton",{key:e.name,ref:"answerButton",refInFor:!0,attrs:{answer:e.name,isSolution:s===t.solution_idx}})}),1),n("div",{staticClass:"next-button-container"},[n("button",{staticClass:"button is-rounded is-outlined is-medium",on:{click:function(e){return t.next()}}},[t._v("Next")])])])])])},a=[],u=(n("6762"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-button-container"},[n("button",{ref:"button",staticClass:"button is-info is-light is-outlined is-medium is-rounded",on:{click:t.check}},[t._v(t._s(t.answer))])])}),c=[],l={name:"AnswerButton",props:{answer:String,isSolution:Boolean},methods:{check:function(t){this.isSolution?(t.target.classList.add("is-success"),t.target.classList.remove("is-outlined")):(t.target.classList.remove("is-outlined"),t.target.classList.add("is-danger"))},reset:function(){this.$refs.button.classList.remove("is-success"),this.$refs.button.classList.remove("is-danger"),this.$refs.button.classList.add("is-outlined")}}},f=l,d=(n("4d38"),n("2877")),p=Object(d["a"])(f,u,c,!1,null,"75599e18",null),m=p.exports,h={name:"Quiz",components:{AnswerButton:m},props:{msg:String,birds:Array},data:function(){return{answers:this.choices(),solution_idx:Math.floor(4*Math.random())}},methods:{next:function(){this.solution_idx=Math.floor(4*Math.random()),this.answers=this.choices();for(var t=0;t<this.$refs.answerButton.length;t+=1)this.$refs.answerButton[t].reset()},choices:function(){var t=[];while(t.length<4){var e=Math.floor(Math.random()*this.birds.length),n=this.birds[e];t.includes(n)||t.push(n)}return t}}},g=h,b=(n("e532"),Object(d["a"])(g,o,a,!1,null,"26d7e902",null)),v=b.exports,w={name:"app",components:{Quiz:v},data:function(){return{message:"Welcome to BBirds",birds:[{name:"Rotkehlchen",image:n("fe5b")},{name:"Kohlmeise",image:n("4729")},{name:"Star",image:n("86a7")},{name:"Schwanzmeise",image:n("d2fc")},{name:"Blaumeise",image:n("8004")},{name:"Mauersegler",image:n("b9f0")},{name:"Stockente",image:n("9875")},{name:"Turmfalke",image:n("432f")}]}}},x=w,_=(n("034f"),Object(d["a"])(x,i,r,!1,null,null,null)),j=_.exports;n("92c6");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,n){},8004:function(t,e,n){t.exports=n.p+"img/blaumeise.ffc839eb.jpg"},"86a7":function(t,e,n){t.exports=n.p+"img/stare.5248396e.jpg"},9875:function(t,e,n){t.exports=n.p+"img/stockente.a7900078.jpg"},b9f0:function(t,e,n){t.exports=n.p+"img/mauersegler.76c77abb.jpg"},d2fc:function(t,e,n){t.exports=n.p+"img/schwanzmeise.a68d7254.jpg"},e532:function(t,e,n){"use strict";var s=n("ead9"),i=n.n(s);i.a},ead9:function(t,e,n){},efce:function(t,e,n){},fe5b:function(t,e,n){t.exports=n.p+"img/rotkehlchen.4bdba1e7.png"}});
//# sourceMappingURL=app.d4179a7d.js.map