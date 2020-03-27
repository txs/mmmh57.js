const express = require('express')
var fs = require('fs');
const app = express()

app.use(express.static('dist'))
// app.get('/', function(req, res) {
//     res.send('Send root!')
// });
app.get('/about', function(req, res) {
    fs.readFile('../dist/about.html',function (err, data){
        // res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        console.log(data);
        
        res.send("Testing data");
        res.end();
    });
})
app.listen(3000, () => console.log('Listening on port 3000!'))