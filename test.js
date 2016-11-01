'use strict';
var fs = require('fs');
var path = require('path');
/*var controllerSrc = path.resolve(__dirname,'www/ts/controller/');
var filepath = (function(){
    var files_names= {};
    var regtsx = /(.*).tsx/;
    var fileNames = fs.readdirSync(controllerSrc, function(err, files){
    if(err){console.log(err);return false;};
    return files
    });

    fileNames.forEach(function(v){
    var tsx = v.match(regtsx);
    if(tsx){
        if(!files_names[tsx]){
        files_names[tsx[1]] = tsx[1];
        }
    }
    });
    return files_names;
})();

console.log(fileNames)*/
 var fileNames = fs.readdirSync('./www');

    console.log(fileNames)