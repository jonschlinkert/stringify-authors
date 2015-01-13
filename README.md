# stringify-authors [![NPM version](https://badge.fury.io/js/stringify-authors.svg)](http://badge.fury.io/js/stringify-authors)

> Stringify an array or object of authors. Useful for adding authors, maintainers or contribuors to documentation or a readme.

## Install with [npm](npmjs.org)

```bash
npm i stringify-authors --save
```

## Usage

```js
var authors = require('stringify-authors');
```

Given an array of author objects:

```js
var authors = [{
  name: 'Jon Schlinkert',
  email: 'jon.schlinkert@sellside.com',
  url: 'https://github.com/jonschlinkert'
}, {
  name: 'Brian Woodward',
  url: 'https://github.com/doowb',
  email: 'brian.woodward@sellside.com'
}]
```

```js
// default separator is ', '
stringify(authors, {sep: '\n'});
```

results in:

```
Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)
Brian Woodward <brian.woodward@sellside.com> (https://github.com/doowb)
```

### Filter with glob patterns

```js
stringify(authors, {filter: 'name'});
//=> Jon Schlinkert, Brian Woodward

stringify(authors, {filter: '{name,url}', sep: '\n'});
// Jon Schlinkert (https://github.com/jonschlinkert)
// Brian Woodward (https://github.com/doowb)
```


## Run tests

Install dev dependencies:

```bash
node i -d && mocha
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/stringify-authors/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 12, 2015._
