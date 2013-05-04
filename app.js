#!/usr/bin/env node
var http = require('http');
http.createServer(function (req, res) {
    var info = '';
    req.addListener('data',function (chunk) {
        info += chunk;
    }).addListener('end', function () {
        console.log(info);
    });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
}).listen(3000);