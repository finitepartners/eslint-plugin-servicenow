/**
 * @fileoverview ServiceNow lint rules
 * @author Arnoud Kooi
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// eslint-disable-next-line no-path-concat
module.exports.rules = requireIndex(__dirname + '/rules');
