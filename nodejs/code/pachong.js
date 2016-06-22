var http = require('http');
var cheerio = require('cheerio');

var options = {
	host: 'nba.sports.sina.com.cn',
	path: '/player.php?id=4390'
};
http.get(options, function(res){
	res.setEncoding('utf8');
	res.on('data', function(data){
		console.log(data);
	});
});

function showData(data) {
	$ = cheerio.load(data);
	var div = $('.gamecenter_content_l table .content_a .font');
}