(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={dashboard:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([1,"chunk-vendors"]),a()})({1:function(t,e,a){t.exports=a("a863")},"38df":function(t,e,a){},a863:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=a("2c82"),s=a("522d"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard_cover"},[t._m(0),a("div",{staticClass:"main"},[a("div",{staticClass:"main-cover"},[a("div",{staticClass:"title"},[t._v("Company List")]),a("div",{staticClass:"table-controls"},[a("div",[t._v(" Search Company: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_text,expression:"search_text"}],staticClass:"text",attrs:{type:"text"},domProps:{value:t.search_text},on:{input:function(e){e.target.composing||(t.search_text=e.target.value)}}})]),a("div",{staticClass:"pagination"},[t._v(" Go to page:"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.start_page,expression:"start_page"}],staticClass:"number",attrs:{type:"number",min:"0",max:t.companies.length/t.records_per_page},domProps:{value:t.start_page},on:{input:function(e){e.target.composing||(t.start_page=e.target.value)}}})]),t._m(1)]),a("div",[t.getTable.length>0?a("table",[t._m(2),t._l(t.getTable,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.website))]),a("td",[a("a",{staticClass:"comapany-link",attrs:{href:"/company.html?id="+e.id,target:"_blank"}},[t._v("View Details")])])])}))],2):a("div",{staticStyle:{width:"100%","text-align":"center","margin-top":"40px","font-size":"25px"}},[t._v(" No Data Found. ")])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"holder"},[n("img",{staticClass:"logo",attrs:{src:a("cf05"),height:"40px"}}),n("span",{staticClass:"logo-text"},[t._v("Nova")]),n("span",{staticClass:"logo-sub-text"},[t._v("Benefits")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"/signup.html"}},[a("input",{staticClass:"add-button",attrs:{type:"button",value:"Add company "}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticStyle:{width:"200px"}},[t._v("Company Name")]),a("th",{staticStyle:{width:"250px"}},[t._v("Website")]),a("th",{staticStyle:{width:"100px"}},[t._v("Link")])])}],c=(a("4de4"),a("caad"),a("fb6a"),a("b0c0"),a("ac1f"),a("2532"),a("841c"),a("8785")),l=a("9530"),u=a.n(l);function p(){var t=Object(c["a"])(["\n      query {\n        companies {\n          id\n          name\n          website\n        }\n      }\n    "]);return p=function(){return t},t}var d={name:"dashboard",components:{},data:function(){return{companies:[],search_text:"",start_page:0,records_per_page:5}},apollo:{companies:u()(p())},methods:{search:function(t){return""==this.search_text||!!t["name"].toLowerCase().includes(this.search_text.toLowerCase())}},computed:{getTable:function(){return this.filterMatches.slice(this.start_page*this.records_per_page,this.start_page*this.records_per_page+this.records_per_page)},filterMatches:function(){return this.companies.filter(this.search)}},mounted:function(){}},f=d,h=(a("f030"),a("2877")),v=Object(h["a"])(f,i,o,!1,null,"19fcdf3c",null),m=v.exports,_=new r["a"]({uri:"https://a2cc9743db76.ngrok.io/graphql"});n["a"].use(s["a"]);var g=new s["a"]({defaultClient:_}),b=new n["a"]({template:'\n    <div class="main">\n    <dashboard></dashboard>\n     </div>\n    ',components:{dashboard:m},apolloProvider:g});b.$mount("#app")},cf05:function(t,e,a){t.exports=a.p+"img/logo.7047ee4b.png"},f030:function(t,e,a){"use strict";a("38df")}});
//# sourceMappingURL=dashboard.f1c4b95e.js.map