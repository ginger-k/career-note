var querystring = require('querystring');

var obj = querystring.parse('foo=bar&baz=qux&baz=quux&corge=中文', '&', '=');
console.log(obj);

console.log(querystring.escape('中文'));
console.log(querystring.unescape('%E4%B8%AD%E6%96%87'));