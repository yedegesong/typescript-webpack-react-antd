/**
 * Created by apple on 16/8/3.
 */
var path = require('path');
var fs = require('fs');
var viewPath = path.resolve(__dirname, 'view');
var fileNames = fs.readdirSync(viewPath, function(err, files){
    if(err){console.log(err);return false;};
    return files;
});


function titleCase3(s) {
    return s.toLowerCase().split(/\s+/).map(function(item, index) {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join(' ');
}
fileNames.forEach(function(v){
    var regtsx = /(?:\w*)(?=.ejs)/;
    var chunksContainer = titleCase3(v.match(regtsx)[0]) + 'Container';
    console.log(chunksContainer)
    /*console.log({
        template: './view/' + v,
        filename:'./pages/' + (v.match(regtsx)[0]) +'.html',
        chunks:['common',chunksContainer],
    })*/

})