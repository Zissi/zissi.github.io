(function(e){function a(a){for(var i,r,s=a[0],u=a[1],c=a[2],m=0,d=[];m<s.length;m++)r=s[m],n[r]&&d.push(n[r][0]),n[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);p&&p(a);while(d.length)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],i=!0,s=1;s<t.length;s++){var u=t[s];0!==n[u]&&(i=!1)}i&&(o.splice(a--,1),e=r(r.s=t[0]))}return e}var i={},n={app:0},o=[];function r(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)r.d(t,i,function(a){return e[a]}.bind(null,i));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var p=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"0166":function(e,a,t){e.exports=t.p+"media/rotkehlchen.f487908b.ogg"},"04b2":function(e,a,t){e.exports=t.p+"img/amsel.cb69bb53.jpg"},"0f13":function(e,a,t){e.exports=t.p+"media/turmfalke.0ef8931b.mp3"},"16f8":function(e,a,t){e.exports=t.p+"img/höckerschwan.bed491a2.jpg"},"1a5e":function(e,a,t){e.exports=t.p+"media/amsel.11230e3b.ogg"},2210:function(e,a,t){e.exports=t.p+"media/eisvogel.c3f46a03.mp3"},2227:function(e,a,t){e.exports=t.p+"media/nebelkrähe.76b1993e.mp3"},"25e0":function(e,a,t){e.exports=t.p+"media/bachstelze.424bb9f0.mp3"},2658:function(e,a,t){e.exports=t.p+"media/kohlmeise.56917dbc.ogg"},"34d1":function(e,a,t){e.exports=t.p+"img/baumläufer.a4a83dd7.jpg"},"38b7":function(e,a,t){e.exports=t.p+"media/star.9b463475.mp3"},"38c5":function(e,a,t){e.exports=t.p+"img/spatz.1aba27a9.jpg"},"3ab7":function(e,a,t){e.exports=t.p+"media/zilpzalp.38057dd3.ogg"},"42a4":function(e,a,t){e.exports=t.p+"media/baumläufer.74b3bdaf.mp3"},"432f":function(e,a,t){e.exports=t.p+"img/turmfalke.7fd99f34.jpg"},4355:function(e,a,t){e.exports=t.p+"media/mauersegler.b9d56502.ogg"},"45f4":function(e,a,t){e.exports=t.p+"media/haubentaucher.1a1548b8.mp3"},4729:function(e,a,t){e.exports=t.p+"img/kohlmeise.63497f92.jpg"},"4b9f":function(e,a,t){e.exports=t.p+"media/girlitz.5a4fadb2.mp3"},"4d0a":function(e,a,t){e.exports=t.p+"media/kranich.242ae00c.mp3"},"4d38":function(e,a,t){"use strict";var i=t("efce"),n=t.n(i);n.a},"4eba":function(e,a,t){e.exports=t.p+"media/höckerschwan.2c22b47d.mp3"},"53fe":function(e,a,t){e.exports=t.p+"img/ringeltaube.c159fc4a.jpg"},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var i=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar is-success",attrs:{role:"navigation","aria-label":"main navigation"}},[t("div",{staticClass:"navbar-brand"},[t("a",{staticClass:"navbar-item"},[e._v("Bbirds – Berliner Vögel")]),t("a",{staticClass:"navbar-burger burger",class:{"is-active":e.showMenu},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(a){e.showMenu=!e.showMenu}}},[t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}}),t("span",{attrs:{"aria-hidden":"true"}})])]),t("div",{staticClass:"navbar-menu",class:{"is-active":e.showMenu},attrs:{id:"navbarBasicExample"}},[t("div",{staticClass:"navbar-start"},[t("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[t("a",{staticClass:"navbar-link"},[e._v("Spielmodus")]),t("div",{staticClass:"navbar-dropdown"},[t("a",{staticClass:"navbar-item",on:{click:function(a){e.playmode="pictures"}}},[e._v("Bilder")]),t("a",{staticClass:"navbar-item",on:{click:function(a){e.playmode="sounds"}}},[e._v("Sound")]),t("a",{staticClass:"navbar-item",on:{click:function(a){e.playmode="both"}}},[e._v("Beides")])])])])])]),t("Quiz",{attrs:{birds:e.birds,playmode:e.playmode}})],1)},o=[],r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"quiz has-text-centered",attrs:{id:"quiz"}},["pictures"===e.playmode||"both"===e.playmode?t("div",{staticClass:"vogelbild"},[t("img",{attrs:{alt:"Vogelbild",src:e.answers[e.solution_idx].image}})]):e._e(),"sounds"===e.playmode||"both"===e.playmode?t("div",{staticClass:"vogelsound"},[t("audio",{ref:"player",attrs:{controls:"",autoplay:""}},[t("source",{attrs:{src:e.answers[e.solution_idx].audio.fileName,type:"audio/ogg"}}),e._v("\n        Your browser does not support the audio element.\n    ")])]):e._e(),t("div",{staticClass:"answers-container"},e._l(e.answers,function(a,i){return t("AnswerButton",{key:a.name,ref:"answerButton",refInFor:!0,attrs:{answer:a.name,isSolution:i===e.solution_idx}})}),1),t("div",{staticClass:"next-button-container"},[t("button",{staticClass:"button is-rounded is-outlined is-medium",on:{click:function(a){return e.next()}}},[e._v("Next")])])])},s=[],u=(t("6762"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"answer-button-container"},[t("button",{ref:"button",staticClass:"button is-info is-light is-outlined is-medium is-rounded",on:{click:e.check}},[e._v(e._s(e.answer))])])}),c=[],p={name:"AnswerButton",props:{answer:String,isSolution:Boolean},methods:{check:function(e){this.isSolution?(e.target.classList.add("is-success"),e.target.classList.remove("is-outlined")):(e.target.classList.remove("is-outlined"),e.target.classList.add("is-danger"))},reset:function(){this.$refs.button.classList.remove("is-success"),this.$refs.button.classList.remove("is-danger"),this.$refs.button.classList.add("is-outlined")}}},m=p,d=(t("4d38"),t("2877")),l=Object(d["a"])(m,u,c,!1,null,"75599e18",null),f=l.exports,g={name:"Quiz",components:{AnswerButton:f},props:{birds:Array,playmode:String},data:function(){return{answers:this.choices(),solution_idx:Math.floor(4*Math.random())}},mounted:function(){this.$watch("answers",function(){this.$refs.player.load()})},methods:{next:function(){this.solution_idx=Math.floor(4*Math.random()),this.answers=this.choices();for(var e=0;e<this.$refs.answerButton.length;e+=1)this.$refs.answerButton[e].reset()},choices:function(){var e=[];while(e.length<4){var a=Math.floor(Math.random()*this.birds.length),t=this.birds[a];e.includes(t)||e.push(t)}return e}}},b=g,h=(t("7285"),Object(d["a"])(b,r,s,!1,null,"7bdc6a46",null)),x=h.exports,v={name:"app",components:{Quiz:x},data:function(){return{showMenu:!1,playmode:"both",birds:[{name:"Rotkehlchen",image:t("fe5b"),audio:{fileName:t("0166"),attribution:"Vladimir Yu. Arkhipov, Arkhivov"}},{name:"Kohlmeise",image:t("4729"),audio:{fileName:t("2658"),attribution:"Dengis Chantal"}},{name:"Star",image:t("86a7"),audio:{fileName:t("38b7"),attribution:"Bodo Sonnenburg"}},{name:"Schwanzmeise",image:t("d2fc"),audio:{fileName:t("9e8e"),attribution:"Beatrix Saadi-Varchmin"}},{name:"Blaumeise",image:t("8004"),audio:{fileName:t("dac9"),attribution:"Aubrey John Williams"}},{name:"Mauersegler",image:t("b9f0"),audio:{fileName:t("4355"),attribution:"Jugrü"}},{name:"Stockente",image:t("9875"),audio:{fileName:t("d2ba"),attribution:"Jonathon Jongsma"}},{name:"Turmfalke",image:t("432f"),audio:{fileName:t("0f13"),attribution:"Sonnenburg"}},{name:"Nachtigall",image:t("8561"),audio:{fileName:t("9f4d"),attribution:"Sonnenburg"}},{name:"Kranich",image:t("6fd7"),audio:{fileName:t("4d0a"),attribution:"Stephan Risch"}},{name:"Feldlerche",image:t("ec43"),audio:{fileName:t("7b8d"),attribution:"Guido Gerding"}},{name:"Amsel",image:t("04b2"),audio:{fileName:t("1a5e"),attribution:"Anton"}},{name:"Buchfink",image:t("5f55"),audio:{fileName:t("7965"),attribution:"Herr Küppers"}},{name:"Bachstelze",image:t("9e63"),audio:{fileName:t("25e0"),attribution:"Herr Küppers"}},{name:"Grünspecht",image:t("f12b"),audio:{fileName:t("b0d1"),attribution:"Marie-Lan Taÿ Pamart"}},{name:"Buntspecht",image:t("6a63"),audio:{fileName:t("b942"),attribution:"Herr Küppers"}},{name:"Mönchsgrasmücke",image:t("884c"),audio:{fileName:t("d252"),attribution:"Aubrey John Williams "}},{name:"Spatz",image:t("38c5"),audio:{fileName:t("f716"),attribution:"Aubrey John Williams"}},{name:"Zaunkönig",image:t("eb6c"),audio:{fileName:t("f0f8"),attribution:"Marie-Lan Taÿ Pamart"}},{name:"Zilpzalp",image:t("f8c4"),audio:{fileName:t("3ab7"),attribution:"T.Voekler"}},{name:"Blässhuhn",image:t("753a"),audio:{fileName:t("e0e7"),attribution:"Jorge Leitão"}},{name:"Höckerschwan",image:t("16f8"),audio:{fileName:t("4eba"),attribution:"Stanislas Wroza"}},{name:"Nebelkrähe",image:t("8d56"),audio:{fileName:t("2227"),attribution:"Jorge Leitão"}},{name:"Nebelkrähe",image:t("8d56"),audio:{fileName:t("2227"),attribution:"Jorge Leitão"}},{name:"Eichelhäher",image:t("abdf"),audio:{fileName:t("ea88"),attribution:"Vladimir Yu. Arkhipov, Arkhivov"}},{name:"Elster",image:t("697e"),audio:{fileName:t("d20f"),attribution:"Lars Edenius"}},{name:"Haubentaucher",image:t("ff72"),audio:{fileName:t("45f4"),attribution:"Stein Ø. Nilsen"}},{name:"Ringeltaube",image:t("53fe"),audio:{fileName:t("e28c"),attribution:"Sleepytomcat (Jens Kraglund)"}},{name:"Dohle",image:t("c26a"),audio:{fileName:t("7b46"),attribution:"Jorge Leitão"}},{name:"Eisvogel",image:t("e613"),audio:{fileName:t("2210"),attribution:"Bertrand Dallet"}},{name:"Baumläufer",image:t("34d1"),audio:{fileName:t("42a4"),attribution:"Twan Mols"}},{name:"Hausrotschwanz",image:t("aec5"),audio:{fileName:t("db11"),attribution:"Waithamai"}},{name:"Graureiher",image:t("c447"),audio:{fileName:t("5c85"),attribution:"brickegickel"}},{name:"Girlitz",image:t("f7dd"),audio:{fileName:t("4b9f"),attribution:"Niels Poul Dreyer"}},{name:"Lachmöwe",image:t("bbce"),audio:{fileName:t("a70d"),attribution:"Aladdin"}}]}}},w=v,k=Object(d["a"])(w,n,o,!1,null,null,null),j=k.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c85":function(e,a,t){e.exports=t.p+"media/graureiher.a57ed33a.mp3"},"5f55":function(e,a,t){e.exports=t.p+"img/buchfink.438e8f42.jpg"},"665a":function(e,a,t){},"697e":function(e,a,t){e.exports=t.p+"img/elster.600d66a1.jpg"},"6a63":function(e,a,t){e.exports=t.p+"img/buntspecht.93b2e2c8.jpg"},"6fd7":function(e,a,t){e.exports=t.p+"img/kranich.7fea5eff.jpg"},7285:function(e,a,t){"use strict";var i=t("665a"),n=t.n(i);n.a},"753a":function(e,a,t){e.exports=t.p+"img/blässhuhn.3591493b.jpg"},7965:function(e,a,t){e.exports=t.p+"media/buchfink.be90e8b3.ogg"},"7b46":function(e,a,t){e.exports=t.p+"media/dohle.6a370d66.mp3"},"7b8d":function(e,a,t){e.exports=t.p+"media/feldlerche.1dffd1b4.ogg"},8004:function(e,a,t){e.exports=t.p+"img/blaumeise.ffc839eb.jpg"},8561:function(e,a,t){e.exports=t.p+"img/nachtigall.426dd9a6.jpg"},"86a7":function(e,a,t){e.exports=t.p+"img/stare.5248396e.jpg"},"884c":function(e,a,t){e.exports=t.p+"img/mönchsgrasmücke.0d1c1e0d.jpg"},"8d56":function(e,a,t){e.exports=t.p+"img/nebelkrähe.5685b372.jpg"},9875:function(e,a,t){e.exports=t.p+"img/stockente.a7900078.jpg"},"9e63":function(e,a,t){e.exports=t.p+"img/bachstelze.6d25c7e1.jpg"},"9e8e":function(e,a,t){e.exports=t.p+"media/schwanzmeise.ce50c795.mp3"},"9f4d":function(e,a,t){e.exports=t.p+"media/nachtigall.9e68af4b.ogg"},a70d:function(e,a,t){e.exports=t.p+"media/lachmöwe.6796ace9.mp3"},abdf:function(e,a,t){e.exports=t.p+"img/eichelhäher.1f58ff6c.jpg"},aec5:function(e,a,t){e.exports=t.p+"img/hausrotschwanz.a220c828.jpg"},b0d1:function(e,a,t){e.exports=t.p+"media/grünspecht.6d23cb4d.mp3"},b942:function(e,a,t){e.exports=t.p+"media/buntspecht.cfe1be0a.ogg"},b9f0:function(e,a,t){e.exports=t.p+"img/mauersegler.76c77abb.jpg"},bbce:function(e,a,t){e.exports=t.p+"img/lachmöwe.c3dd07f7.jpg"},c26a:function(e,a,t){e.exports=t.p+"img/dohle.baf0e22a.jpg"},c447:function(e,a,t){e.exports=t.p+"img/graureiher.78e1471a.jpg"},d20f:function(e,a,t){e.exports=t.p+"media/elster.7d558bc6.mp3"},d252:function(e,a,t){e.exports=t.p+"media/mönchsgrasmücke.09d0e9da.ogg"},d2ba:function(e,a,t){e.exports=t.p+"media/stockente.449210ce.ogg"},d2fc:function(e,a,t){e.exports=t.p+"img/schwanzmeise.a68d7254.jpg"},dac9:function(e,a,t){e.exports=t.p+"media/blaumeise.3aa46092.ogg"},db11:function(e,a,t){e.exports=t.p+"media/hausrotschwanz.40584b8a.ogg"},e0e7:function(e,a,t){e.exports=t.p+"media/blässhuhn.57dee925.mp3"},e28c:function(e,a,t){e.exports=t.p+"media/ringeltaube.3650abf1.ogg"},e613:function(e,a,t){e.exports=t.p+"img/eisvogel.850ab2ef.jpg"},ea88:function(e,a,t){e.exports=t.p+"media/eichelhäher.5c8bc29a.ogg"},eb6c:function(e,a,t){e.exports=t.p+"img/zaunkönig.d592c306.jpg"},ec43:function(e,a,t){e.exports=t.p+"img/feldlerche.89627764.jpg"},efce:function(e,a,t){},f0f8:function(e,a,t){e.exports=t.p+"media/zaunkönig.f155fc12.mp3"},f12b:function(e,a,t){e.exports=t.p+"img/grünspecht.75774276.jpg"},f716:function(e,a,t){e.exports=t.p+"media/spatz.adaf5976.ogg"},f7dd:function(e,a,t){e.exports=t.p+"img/girlitz.e6235760.jpg"},f8c4:function(e,a,t){e.exports=t.p+"img/zilpzalp.4fddc9df.jpg"},fe5b:function(e,a,t){e.exports=t.p+"img/rotkehlchen.4bdba1e7.png"},ff72:function(e,a,t){e.exports=t.p+"img/haubentaucher.69489a24.jpg"}});
//# sourceMappingURL=app.99ebdbf3.js.map