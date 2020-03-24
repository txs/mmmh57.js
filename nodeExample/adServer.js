
var http=require('http');
var server=http.createServer(function(req,res){
        if(req.url=='/'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<html><body>This is Home Page.</body></html>');
            res.end();
        }else if(req.url=='/student'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<html><body>This is student Page.</body></html>');
            res.end();
        }else if(req.url=='/admin'){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write('<html><body>This is admin Page.</body></html>');
            res.end();
        }else
            res.end('Invalid Request!');
 
});
 
server.listen(3000);
console.log('Node.js web server at port 3000 is running..')
console.log('Try / or /student or /admin')
