(function(t){function e(e){for(var o,a,c=e[0],i=e[1],s=e[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},u=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("router-view")],1)},u=[],a=(n("5c0b"),n("2877")),c={},i=Object(a["a"])(c,r,u,!1,null,null,null),s=i.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.go}},[t._v("go about")]),n("h1",[t._v(" "+t._s(t.count))]),n("div",[t._v(" "+t._s(t.msg))]),n("button",{on:{click:t.add}},[t._v("增加")]),n("button",{on:{click:t.aaaa}},[t._v("触发action")]),n("h1",[t._v("通过getter获取计算后的age："+t._s(t.getNumber))])])},m=[],h={props:["msg"],components:{},data:function(){return{id:65}},computed:{count:function(){return this.$store.state.count},getNumber:function(){return this.$store.getters.getterAge}},methods:{go:function(){this.$router.push({path:"/about",query:{id:this.id}})},add:function(){this.$store.commit("addCount",{num:2})},aaaa:function(){this.$store.dispatch("adds")}},created:function(){console.log(this.$store)},mounted:function(){}},v=h,b=Object(a["a"])(v,p,m,!1,null,"39c39313",null),g=b.exports,_={name:"home",components:{HelloWorld:g}},y=_,O=Object(a["a"])(y,f,d,!1,null,null,null),j=O.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" about ")])},$=[],x={props:{},components:{},data:function(){return{}},computed:{},methods:{},created:function(){},mounted:function(){}},k=x,P=Object(a["a"])(k,w,$,!1,null,"040f3ee4",null),S=P.exports;o["a"].use(l["a"]);var C=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:S}],E=new l["a"]({mode:"history",base:"/",routes:C}),M=E,T=n("2f62");o["a"].use(T["a"]);var A=new T["a"].Store({state:{count:10,age:0},getters:{getterAge:function(t){return t.age+=10}},mutations:{addCount:function(t,e){return t.count+=e.num}},actions:{adds:function(t){setTimeout((function(){t.commit("addCount",{num:2})}),3e3)}},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:M,store:A,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.7955ccff.js.map