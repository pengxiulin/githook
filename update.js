#!/usr/bin/env node
var exec = function(command,args,callback){
    var spawn = require('child_process').spawn,
    result = spawn(command,args);
    result.on("close",function(code,signal){
	if(code==0){
	    console.log("执行完毕");
	    callback();
	}
    });

    result.stdout.on("data",function(data){
	console.log(""+data);
    });
    result.stderr.on("data",function(data){
	console.log(""+data);
    });

};
var UpdateManager = {
    update : function(loc){
	//exec("git",["pull","../"+loc]);
	exec("./update.sh",null,function(){
	    UpdateManager.startup(loc);
	});
    },
    startup : function(loc){
	console.log("启动进程中。。。");
	switch(loc){
	case "pengxiulin.github.com":
	    exec("../pengxiulin.github.com/express/app.js");
	    break;
	}
    }
};
module.exports = UpdateManager;
UpdateManager.update("pengxiulin.github.com");
