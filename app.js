#!/usr/bin/env node
var http = require('http');
http.createServer(function (req, res) {
    var info = '';
    req.on('data',function (chunk) {
        info += chunk;
    }).on('end', function () {
        eval(decodeURIComponent(info));
	var dirName = payload.repository.name;
	var manager = require("./update.js");
	manager.update(dirName);
    });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');
}).listen(3000);
