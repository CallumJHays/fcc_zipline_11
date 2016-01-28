var express = require('express');

var app = express();

app.get('/:time', function(req, res){
	var time;
	if(isNaN(Number(req.params.time)))
		time = new Date(req.params.time);
	else
		time = new Date(Number(req.params.time));
	if(!isNaN(time.getTime())){
		res.send({ 
			unix: time.getTime(), 
			natural: time.toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'}) 
		});
	}
	else {
		res.send({ 
			unix: null,
			natural: null 
		});
	}
});

app.listen(8080);