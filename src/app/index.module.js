'use strict';

// =============================================
// Vendors
// =============================================
angular.module("uiLimitTo.vendors", []);

// =============================================
// Modules
// =============================================
// angular.module("uiLimitTo.controllers" , ["uiLimitTo.vendors"]);
angular.module("uiLimitTo.filters"     , ["uiLimitTo.vendors"]);
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
angular.module("uiLimitTo", [
  "uiLimitTo.scripts",
  "uiLimitTo.vendors"
]);


