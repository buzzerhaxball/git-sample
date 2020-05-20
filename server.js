const http = require('http');

http.createServer(function (req, res) {
    res.write('Test');
    res.end();
}).listen(3000);