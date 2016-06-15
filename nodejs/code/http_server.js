var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
		name: 'byvoid',
		email: 'byvoid@byvoid.com',
		address: 'Zijing 2#, Tsinghua University',
	});
var options = {
		host: 'www.byvoid.com',
		path: '/application/node/post.php',
		method: 'POST',
			headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length' : contents.length
		}
	};

var req = http.request(options, function(res) {
		console.log(res.constructor.toString()); //IncomingMessage
		res.setEncoding('utf8');
		res.on('data', function (data) {
			console.log(data);
		});
	});

console.log(req); //ClientRequest
req.write(contents);
req.end();
