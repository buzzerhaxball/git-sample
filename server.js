const http = require('http');

http.createServer(function (req, res) {
    res.write('Merhaba');
    res.end();
}).listen(3000);