var needle = require('needle');

var sCookie = 'https://ati.su/';
var httpOptions ={
	captcha: null,
	login: "ega3001",
	password: "raexedae4j",
	remember: false
}
// Инициализация
needle.get(sCookie, function(err, res){
    if (err || res.statusCode !== 200){
    	console.log(res.body);
        throw err || res.statusCode;
	}
    httpOptions.cookie = res.cookies;
    console.log(httpOptions);
	var sCookie = 'https://id.ati.su/api/auth/';
	needle.post(sCookie, httpOptions, function(err, res){
	    if (err || res.statusCode !== 200){
	    	console.log(res.body);
	        throw err || res.statusCode;
		}
	    console.log('success:'+res.body);
	});
});