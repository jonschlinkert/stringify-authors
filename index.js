/*!
 * stringify-authors <https://github.com/jonschlinkert/stringify-authors>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var stringify = require('stringify-author');
var filter = require('filter-object');

module.exports = function stringifyAuthors(authors, options) {
  if (authors !== 'object' && options && options.strict) {
    throw new Error('stringify-authors expects an object or array.');
  }

  authors = !Array.isArray(authors) ? [authors] : authors;

  var res = authors.map(function(ele) {
    return stringify(filter(ele, options && options.filter));
  });

  return res.join((options && options.sep) || ', ');
};
