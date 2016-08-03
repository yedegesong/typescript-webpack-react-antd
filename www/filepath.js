/**
 * 引入文件入口 - 模块 自动读取ts/controller 已tsx结尾的文件
 * 文件主入口目录 键key表示 编译出需要引入的JS文件名 值value 表示 需要待编译的tsx文件
 * @type {{index: string, details: string}}
 */
var path = require('path');
var fs = require('fs');
var controllerPath = path.join(__dirname,'ts','controller');
//读取目录夹内容
var files_names= {};
var regtsx = /(.*).tsx/;
var fileNames = fs.readdirSync(controllerPath, function(err, files){
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

//console.log(files_names);
/*module.exports = {
  HelloWordContainer:"HelloWordContainer",
  LoginContainer:"LoginContainer",
  ApiContainer : "ApiContainer",
  ButtonContainer:"ButtonContainer",
  FormContainer:"FormContainer",
  TipsContainer:"TipsContainer",
  ToastContainer:"ToastContainer",
  MaskContainer:"MaskContainer",
  DialogContainer:"DialogContainer",
  UploadContainer:"UploadContainer",
  TabsContainer:"TabsContainer",
  GridContainer:"GridContainer",
  EchartsContainer:"EchartsContainer",
  CardContainer:"CardContainer",
  TableContainer:"TableContainer",
  FormVerifierContainer:"FormVerifierContainer",
  FormDataBackfillContainer:"FormDataBackfillContainer",
  PaginationContainer:"PaginationContainer"
}*/

module.exports = files_names;