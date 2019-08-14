(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
"use strict";

// ------------------------------------
//
// Theme
//
// ------------------------------------
var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

(function ($) {
  // eslint-disable-line no-unused-vars
  if (typeof window.Theme == 'undefined') window.Theme = {};
  Theme = {
    settings: {},

    /*
     * Theme init
     */
    init: function init() {
      this.example();
      console.log('Theme initilised');
    },
    example: function example() {
      console.log('Start Working!');
    }
  };
  module.exports = Theme;
})(jQuery);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
"use strict";

var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var Theme = require('./modules/theme'); //var Sliders = require('./modules/sliders');


jQuery(document).ready(function ($) {
  // eslint-disable-line no-unused-vars
  Theme.init(); //Sliders.init();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modules/theme":1}]},{},[2])


//# sourceMappingURL=bundle.js.map
