var http = require('http');
var _url = 'http://cnodejs.org/getstart';
http.get(_url, function(res){
		var body = [];
		console.log(res.statusCode);
		console.log(res.headers);
		res.on('data', function(chunk){
			body.push(chunk);
		});
		res.on('end', function(){
			body = Buffer.concat(body);
			console.log(body.toString());
		});
	});
