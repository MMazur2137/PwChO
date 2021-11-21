var http = require('http');
var date_ob = new Date();
var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('IP: ' + req.connection.remoteAddress);
});

server.listen(4000,'0.0.0.0');
console.log('Port 4000');
console.log('Michal Mazur');
console.log(date_ob);