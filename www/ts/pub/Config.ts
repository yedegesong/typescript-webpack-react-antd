interface Config {
    TelBaseUrl :string;
    ApiBaseUrl :string;
    version :string;
    appType:number;
    varName:string;
    UploadBaseUrl: string;
    ImagesBaseUrl: string;
    BaseUrl: string;
    FilesUploadUrl: string;
    fileBaseUrl: string;
}

//let prefix = 'http://192.168.1.160:60018/';
let prefix = 'http://127.0.0.1:9090/';
//let prefix = 'http://yedegesong.github.io/ERP/';
/**
 * 配置项  
 * TelBaseUrl => 配置模板路径
 * ApiBaseUrl => 配置API路径
 * UploadBaseUrl => 图片上传地址
   ImagesBaseUrl => 图片路径
 */
const Config:Config = {
    //TelBaseUrl: 'http://127.0.0.1:6060/pages/',
    BaseUrl: prefix,
    TelBaseUrl: `${prefix}pages/`,
    ApiBaseUrl: `${prefix}act`,
    UploadBaseUrl:`${prefix}upload`,
    FilesUploadUrl: `${prefix}uploadFile`,
    ImagesBaseUrl: 'http://192.168.1.159:80//',
    fileBaseUrl: `http://cwgjad1.api1.cheweiguanjia.com/`,
    version:'1.1.0',
    appType:102,
    varName:'1.0.0'
}
export default Config;
//export default config;