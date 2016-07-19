(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["uiLimitTo"] = factory();
	else
		root["uiLimitTo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// ###
	// # Module bundler
	// ###

	// Importing main module file
	__webpack_require__(2);

	// Importing all component's scripts
	var components = __webpack_require__(3);
	components.keys().forEach(components);

	var utils = __webpack_require__(6);
	utils.keys().forEach(utils);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// =============================================
	// Vendors
	// =============================================

	angular.module("uiLimitTo.vendors", []);

	// =============================================
	// Modules
	// =============================================
	// angular.module("uiLimitTo.controllers" , ["uiLimitTo.vendors"]);
	angular.module("uiLimitTo.filters", ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.factories"   , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.constants"   , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.services"    , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.directives"  , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.mocks"       , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.configs"     , ["uiLimitTo.vendors"]);
	// angular.module("uiLimitTo.providers"   , ["uiLimitTo.vendors"]);

	// =============================================
	// Scripts Module
	// =============================================
	angular.module("uiLimitTo.scripts", [
	// "uiLimitTo.controllers",
	// "uiLimitTo.constants",
	"uiLimitTo.filters"
	// "uiLimitTo.factories",
	// "uiLimitTo.services",
	// "uiLimitTo.directives",
	// "uiLimitTo.mocks",
	// "uiLimitTo.providers",
	// "uiLimitTo.configs"
	]);

	// =============================================
	// Main Module
	// =============================================
	angular.module("uiLimitTo", ["uiLimitTo.scripts", "uiLimitTo.vendors"]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./mainFilter/filter.js": 4,
		"./mainFilter/filter.spec.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	uiLimitToFilterProvider.$inject = ["$filter"];
	angular.module('uiLimitTo.filters').filter('uiLimitTo', uiLimitToFilterProvider);

	function uiLimitToFilterProvider($filter) {
	  return function (list, limitNumber, model, modelProperty, begin, options) {
	    limitNumber = limitNumber || 2;
	    options = options || {};
	    modelProperty = modelProperty || null;

	    var limitedList = $filter('limitTo')(list, limitNumber, begin);

	    var foundModel = limitedList.find(function (item) {
	      return modelProperty ? model[modelProperty] === item[modelProperty] : model === item;
	    });

	    if (!foundModel) {
	      limitedList.push(model);
	    }

	    return limitedList;
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	// empty (null-loader)
	"use strict";

/***/ },
/* 6 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ }
/******/ ])
});
;