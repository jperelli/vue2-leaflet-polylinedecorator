(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet"),require("leaflet-polylinedecorator"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["leaflet","leaflet-polylinedecorator","vue2-leaflet"],t):"object"==typeof exports?exports.Vue2LeafletPolylinedecorator=t(require("leaflet"),require("leaflet-polylinedecorator"),require("vue2-leaflet")):e.Vue2LeafletPolylinedecorator=t(e.leaflet,e["leaflet-polylinedecorator"],e["vue2-leaflet"])})(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=7)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null);e.exports=n.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r(5);var i=r(6),a={paths:{type:Array,default:function(){return[]}},patterns:{type:Array,default:function(){return[]}},visible:{type:Boolean,custom:!0,default:!0}};t.default={name:"LPolylineDecorator",props:a,data:function(){return{ready:!1}},mounted:function(){var e=o.default.polyline(this.paths),t={patterns:this.patterns};this.mapObject=o.default.polylineDecorator(e,t),o.default.DomEvent.on(this.mapObject,this.$listeners),(0,i.propsBinder)(this,this.mapObject,a),this.ready=!0,this.parentContainer=(0,i.findRealParent)(this.$parent),this.parentContainer.addLayer(this,!this.visible)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{setVisible:function(e,t){e!=t&&(e?this.parentContainer.addLayer(this):this.parentContainer.removeLayer(this))},addLatLng:function(e){this.mapObject.addLatLng(e)}}}},function(e,t){e.exports=function(e,t,r,n){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var l="function"==typeof i?i.options:i;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r),n){var u=l.computed||(l.computed={});Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}})}return{esModule:o,exports:i,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet-polylinedecorator")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletPolylinedecorator.js.map