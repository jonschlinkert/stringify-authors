/*!
 * stringify-authors <https://github.com/jonschlinkert/stringify-authors>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var should = require('should');
var toString = require('./');

// easier to test this way
function stringify(authors, opts) {
  var res = toString(authors, opts);
  return res.join(', ');
}

describe('options:', function () {
  it('should throw an error in strict mode:', function () {
    (function () {
      stringify(undefined, {strict: true})
    }).should.throw('stringify-authors expects an object or array.');
  });

  it('should omit the given properties:', function () {
    var authors = [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}, {name: 'Brian Woodward', url: 'https://github.com/doowb', email: 'brian.woodward@sellside.com'}];

    stringify(authors, {omit: ['email', 'url']}).should.equal('Jon Schlinkert, Brian Woodward');
    stringify(authors, {omit: ['email', 'name']}).should.equal('(https://github.com/jonschlinkert), (https://github.com/doowb)');
    stringify(authors, {omit: ['email']}).should.equal('Jon Schlinkert (https://github.com/jonschlinkert), Brian Woodward (https://github.com/doowb)');
  });
});

describe('array: multiple authors:', function () {
  it('should stringify name:', function () {
    var authors = [{name: 'Jon Schlinkert'}, {name: 'Brian Woodward'}];
    stringify(authors).should.equal('Jon Schlinkert, Brian Woodward');
  });

  it('should stringify email:', function () {
    var authors = [{email: 'jon.schlinkert@sellside.com'}, {email: 'brian.woodward@sellside.com'}];
    stringify(authors).should.equal('<jon.schlinkert@sellside.com>, <brian.woodward@sellside.com>');
  });

  it('should stringify url:', function () {
    var authors = [{url: 'https://github.com/jonschlinkert'}, {url: 'https://github.com/doowb'}];
    stringify(authors).should.equal('(https://github.com/jonschlinkert), (https://github.com/doowb)');
  });

  it('should stringify name and url:', function () {
    var authors = [{name: 'Jon Schlinkert', url: 'https://github.com/jonschlinkert'}, {name: 'Brian Woodward', url: 'https://github.com/doowb'}];
    stringify(authors).should.equal('Jon Schlinkert (https://github.com/jonschlinkert), Brian Woodward (https://github.com/doowb)');
  });

  it('should stringify name and email:', function () {
    var authors = [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com'}, {name: 'Brian Woodward', email: 'brian.woodward@sellside.com'}];
    stringify(authors).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com>, Brian Woodward <brian.woodward@sellside.com>');
  });

  it('should stringify email and url:', function () {
    var authors = [{email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}, {url: 'https://github.com/doowb', email: 'brian.woodward@sellside.com'}];
    stringify(authors).should.equal('<jon.schlinkert@sellside.com> (https://github.com/jonschlinkert), <brian.woodward@sellside.com> (https://github.com/doowb)');
  });

  it('should stringify name, email and url:', function () {
    var authors = [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}, {name: 'Brian Woodward', url: 'https://github.com/doowb', email: 'brian.woodward@sellside.com'}];
    stringify(authors).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert), Brian Woodward <brian.woodward@sellside.com> (https://github.com/doowb)');
  });
});

describe('array: one author:', function () {
  it('should stringify name:', function () {
    var authors = [{name: 'Jon Schlinkert'}];
    stringify(authors).should.equal('Jon Schlinkert');
  });

  it('should stringify email:', function () {
    var authors = [{email: 'jon.schlinkert@sellside.com'}];
    stringify(authors).should.equal('<jon.schlinkert@sellside.com>');
  });

  it('should stringify url:', function () {
    var authors = [{url: 'https://github.com/jonschlinkert'}];
    stringify(authors).should.equal('(https://github.com/jonschlinkert)');
  });

  it('should stringify name and url:', function () {
    var authors = [{name: 'Jon Schlinkert', url: 'https://github.com/jonschlinkert'}];
    stringify(authors).should.equal('Jon Schlinkert (https://github.com/jonschlinkert)');
  });

  it('should stringify name and email:', function () {
    var authors = [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com'}];
    stringify(authors).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com>');
  });

  it('should stringify email and url:', function () {
    var authors = [{email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}];
    stringify(authors).should.equal('<jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
  });

  it('should stringify name, email and url:', function () {
    var authors = [{name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'}];
    stringify(authors).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
  });
});

describe('object', function () {
  it('should stringify name:', function () {
    var author = {name: 'Jon Schlinkert'};
    stringify(author).should.equal('Jon Schlinkert');
  });

  it('should stringify email:', function () {
    var author = {email: 'jon.schlinkert@sellside.com'};
    stringify(author).should.equal('<jon.schlinkert@sellside.com>');
  });

  it('should stringify url:', function () {
    var author = {url: 'https://github.com/jonschlinkert'};
    stringify(author).should.equal('(https://github.com/jonschlinkert)');
  });

  it('should stringify name and url:', function () {
    var author = {name: 'Jon Schlinkert', url: 'https://github.com/jonschlinkert'};
    stringify(author).should.equal('Jon Schlinkert (https://github.com/jonschlinkert)');
  });

  it('should stringify name and email:', function () {
    var author = {name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com'};
    stringify(author).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com>');
  });

  it('should stringify email and url:', function () {
    var author = {email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'};
    stringify(author).should.equal('<jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
  });

  it('should stringify name, email and url:', function () {
    var author = {name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com', url: 'https://github.com/jonschlinkert'};
    stringify(author).should.equal('Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
  });
});

