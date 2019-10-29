/**
 * @fileoverview Don't use gr as variablename
 * @author Arnoud Kooi
 */

'use strict';

module.exports = {
  meta: {
    docs: {
      description: "Don't use ga as variablename",
      category: 'Fill me in',
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    return {
      Identifier(node) {
        if (node.name == 'ga') {
          context.report(node, "Don't use ga as name for a GlideAggregate variable");
        }
      }
    };
  }
};
