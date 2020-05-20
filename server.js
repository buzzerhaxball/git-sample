const http = require('http');

http.createServer(function (req, res) {
    res.write('Pr test');
    res.end();
}).listen(3000);
