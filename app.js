var http=require('http');
var express=require('express');
var app=express();
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('./public'));
app.use(express.responseTime());
app.use(app.router);
app.use(express.errorHandler());
app.get("/",function(req,res){
	res.render('index');
});
app.get('/say-hello',function(req,res){
	res.render('hello');
});
app.get('/test',function(req,res){
	res.send('this is a test');
});
http.createServer(app).listen(3000,function(){
	console.log('Express app started');
});
