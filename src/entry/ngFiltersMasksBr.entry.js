
// ###
// # Module bundler
// ###

// Importing main module file
require('../app/index.module.js');

// Importing all component's scripts
var components = require.context('../app/components', true, /.(coffee|cjsx|js|jsx)$/);
components.keys().forEach(components);

var utils = require.context('../app/utils', true, /.(coffee|cjsx|js|jsx)$/);
utils.keys().forEach(utils);