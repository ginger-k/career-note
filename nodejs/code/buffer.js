var buf1 = new Buffer('你好');
var buf2 = new Buffer('node.js');
var buf = Buffer.concat([buf1,buf2]);
console.log(buf.toString());