var fs = require('fs');

var input = fs.createReadStream('./helloDir/big.txt');
input.on('data', function(data){
	console.log('------------------------------读取数据：' + data);
});
input.on('end', function(){
	console.log('读取数据结束！');
});