/***
 * 配置模块
 */
var AppConfig = {
  //网站的根目录
  pathToBuild:'www',
  //模板路径
  viewPath:'view',
  //项目控制器路径
  controllerPath:'ts/controller',
  //组件路径
  componentsSrc:'ts/components',
  //输出的路径
  output:'dist',
  //输出页面的文件夹名字
  htmlFileName:'pages',
  //公用样式配置
  addLinkCss:['/styles/iconfont.css',
  '/lib/zTree_v3-master/css/zTreeStyle/zTreeStyle.css',
  '/styles/app.css'],
  //公用脚本配置
  addmommonScript:[
    '/common/application.config.js',
    '/lib/jquery.min.js',
    '/lib/My97DatePicker/WdatePicker.js',
    '/lib/zTree_v3-master/js/jquery.ztree.core.js',
    '/lib/zTree_v3-master/js/jquery.ztree.excheck.js',
    '/lib/zTree_v3-master/js/jquery.ztree.exedit.js',
    '/lib/zTree_v3-master/js/jquery.ztree.exhide.js',
     '/lib/echarts.common.min.js']
}

module.exports = AppConfig;