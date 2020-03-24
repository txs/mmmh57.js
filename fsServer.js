var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('15-3.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(3000);

console.log('15-3 page loaded on localhost:3000')
