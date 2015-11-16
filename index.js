/*!
 * stringify-authors <https://github.com/jonschlinkert/stringify-authors>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var stringify = require('stringify-author');
var omit = require('object.omit');

module.exports = function stringifyAuthors(authors, options) {
  if (!authors || (!Array.isArray(authors) && typeof authors !== 'object')) {
    throw new Error('stringify-authors expects an object or array.');
  }

  authors = !Array.isArray(authors) ? [authors] : authors;
  options = options || {};
  var res = [];

  var len = authors.length, i = -1;
  while (++i < len) {
    var author = omit(authors[i], options.omit);
    res.push(stringify(author));
  }
  return res;
};
