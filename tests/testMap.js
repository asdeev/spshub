var parcelRequire = undefined;
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aKwh":[function(require,module,exports) {
"use strict";function t(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.install=G,exports.createNamespacedHelpers=exports.mapActions=exports.mapGetters=exports.mapMutations=exports.mapState=exports.Store=exports.default=void 0;var e="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function n(t){e&&(t._devtoolHook=e,e.emit("vuex:init",t),e.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,n){e.emit("vuex:mutation",t,n)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function r(t){return null!==t&&"object"==typeof t}function i(t){return t&&"function"==typeof t.then}function s(t,e){if(!t)throw new Error("[vuex] "+e)}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},c={namespaced:{configurable:!0}};c.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){o(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,c);var u=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var o in n.modules){if(!e.getChild(o))return void 0;f(t.concat(o),e.getChild(o),n.modules[o])}}u.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},u.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},u.prototype.update=function(t){f([],this.root,t)},u.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new a(e,n);0===t.length?this.root=i:this.get(t.slice(0,-1)).addChild(t[t.length-1],i);e.modules&&o(e.modules,function(e,o){r.register(t.concat(o),e,n)})},u.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p,h={assert:function(t){return"function"==typeof t},expected:"function"},l={assert:function(t){return"function"==typeof t||"object"==typeof t&&"function"==typeof t.handler},expected:'function or object with "handler" function'},d={getters:h,mutations:h,actions:l};function m(t,e){Object.keys(d).forEach(function(n){if(e[n]){var r=d[n];o(e[n],function(e,o){s(r.assert(e),v(t,n,o,e,r.expected))})}})}function v(t,e,n,o,r){var i=e+" should be "+r+' but "'+e+"."+n+'"';return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(o)+"."}var _=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!=typeof window&&window.Vue&&G(window.Vue);var o=t.plugins;void 0===o&&(o=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new u(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var i=this,s=this.dispatch,a=this.commit;this.dispatch=function(t,e){return s.call(i,t,e)},this.commit=function(t,e,n){return a.call(i,t,e,n)},this.strict=r;var c=this._modules.root.state;x(this,c,[],this._modules.root),w(this,c),o.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:p.config.devtools)&&n(this)};exports.Store=_;var y={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;x(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var r=t._vm;t.getters={};var i=t._wrappedGetters,s={};o(i,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:s}),p.config.silent=a,t.strict&&C(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function x(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=S(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(a,c,o.state)})}var u=o.context=$(t,s,n);o.forEachMutation(function(e,n){O(t,s+n,e,u)}),o.forEachAction(function(e,n){var o=e.root?n:s+n,r=e.handler||e;j(t,o,r,u)}),o.forEachGetter(function(e,n){E(t,s+n,e,u)}),o.forEachChild(function(o,i){x(t,e,n.concat(i),o,r)})}function $(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=k(n,o,r),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:o?t.commit:function(n,o,r){var i=k(n,o,r),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return M(t,e)}},state:{get:function(){return S(t.state,n)}}}),r}function M(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function O(t,e,n,o){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,o.state,e)})}function j(t,e,n,o){(t._actions[e]||(t._actions[e]=[])).push(function(e,r){var s=n.call(t,{dispatch:o.dispatch,commit:o.commit,getters:o.getters,state:o.state,rootGetters:t.getters,rootState:t.state},e,r);return i(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function E(t,e,n,o){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)})}function C(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return r(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function G(e){p&&e===p||t(p=e)}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},_.prototype.commit=function(t,e,n){var o=this,r=k(t,e,n),i=r.type,s=r.payload,a=(r.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(a,o.state)}))},_.prototype.dispatch=function(t,e){var n=this,o=k(t,e),r=o.type,i=o.payload,s={type:r,payload:i},a=this._actions[r];if(a){try{this._actionSubscribers.filter(function(t){return t.before}).forEach(function(t){return t.before(s,n.state)})}catch(c){0}return(a.length>1?Promise.all(a.map(function(t){return t(i)})):a[0](i)).then(function(t){try{n._actionSubscribers.filter(function(t){return t.after}).forEach(function(t){return t.after(s,n.state)})}catch(c){0}return t})}},_.prototype.subscribe=function(t){return g(t,this._subscribers)},_.prototype.subscribeAction=function(t){return g("function"==typeof t?{before:t}:t,this._actionSubscribers)},_.prototype.watch=function(t,e,n){var o=this;return this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},_.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},_.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),x(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},_.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=S(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),b(this)},_.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},_.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(_.prototype,y);var A=T(function(t,e){var n={};return L(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=U(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n});exports.mapState=A;var N=T(function(t,e){var n={};return L(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.commit;if(t){var i=U(this.$store,"mapMutations",t);if(!i)return;o=i.context.commit}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n});exports.mapMutations=N;var P=T(function(t,e){var n={};return L(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[r]},n[o].vuex=!0}),n});exports.mapGetters=P;var H=T(function(t,e){var n={};return L(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var o=this.$store.dispatch;if(t){var i=U(this.$store,"mapActions",t);if(!i)return;o=i.context.dispatch}return"function"==typeof r?r.apply(this,[o].concat(e)):o.apply(this.$store,[r].concat(e))}}),n});exports.mapActions=H;var V=function(t){return{mapState:A.bind(null,t),mapGetters:P.bind(null,t),mapMutations:N.bind(null,t),mapActions:H.bind(null,t)}};function L(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function T(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function U(t,e,n){var o=t._modulesNamespaceMap[n];return o}exports.createNamespacedHelpers=V;var B={Store:_,install:G,version:"3.1.0",mapState:A,mapMutations:N,mapGetters:P,mapActions:H,createNamespacedHelpers:V},D=B;exports.default=D;
},{}],"mht/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={name:"AppNavigation",props:{navigation:{type:Object,required:!0,default:function(){return{}}}}};exports.default=e;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-toolbar",{staticClass:"app-navigation__toolbar"},[n("v-toolbar-side-icon",{staticClass:"app-navigation__icon"},[t._v("+")]),t._v(" "),n("v-toolbar-items",{staticClass:"app-navigation__pages"},t._l(t.navigation.pages,function(a){return n("v-btn",{key:a.id,attrs:{flat:"",to:a.page}},[t._v(" "+t._s(a.name)+" ")])}),1)],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"Vd+q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={name:"AppFooter",props:{footer:{type:Object,required:!0,default:{}}}};exports.default=e;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"app-footer__social-media primary"},[a("strong",{staticClass:"app-footer__subheading subheading white--text"},[t._v("Get connected with us on social media!")]),t._v(" "),a("v-spacer"),t._v(" "),t._l(t.footer.links,function(e){return a("v-btn",{key:e.id,staticClass:"mx-3",attrs:{href:e.link,target:"_blank",dark:"",icon:""}},[a("v-icon",{attrs:{size:"24"}},[t._v(t._s(e.icon))])],1)})],2),t._v(" "),a("v-card-actions",{staticClass:"app-footer__copyright secondary white--text justify-end"},[t._v(" SPSHub "+t._s((new Date).getFullYear())+" ")])],1)],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"/3yu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("vuex"),t=o(require("./components/AppNavigation")),r=o(require("./components/AppFooter"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){u(e,t,r[t])})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={components:{AppNavigation:t.default,AppFooter:r.default},computed:n({},(0,e.mapState)({navigation:"navigation",footer:"footer"})),name:"App"};exports.default=a;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("AppNavigation",{attrs:{navigation:this.navigation}}),this._v(" "),e("router-view"),this._v(" "),e("AppFooter",{attrs:{footer:this.footer}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"vuex":"aKwh","./components/AppNavigation":"mht/","./components/AppFooter":"Vd+q"}],"rQWo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("../src/App")),r=o(require("../src/components/AppFooter")),t=o(require("../src/components/AppNavigation"));function o(e){return e&&e.__esModule?e:{default:e}}var p={App:e.default,AppFooter:r.default,AppNavigation:t.default};exports.default=p;
},{"../src/App":"/3yu","../src/components/AppFooter":"Vd+q","../src/components/AppNavigation":"mht/"}]},{},["rQWo"], null)
//# sourceMappingURL=/testMap.js.map
