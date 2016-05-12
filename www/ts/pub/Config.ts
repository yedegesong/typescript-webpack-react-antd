interface Config {
    TelBaseUrl :string;
    ApiBaseUrl :string;
    version :string;
    appType:number;
    varName:string;
    UploadBaseUrl: string;
    ImagesBaseUrl: string;
    BaseUrl: string;
}
/**
 * 配置项  
 * TelBaseUrl => 配置模板路径
 * ApiBaseUrl => 配置API路径
 * UploadBaseUrl => 图片上传地址
   ImagesBaseUrl => 图片上传路径
 */
const Config:Config = {
    TelBaseUrl: 'http://127.0.0.1:9090/pages/',
    BaseUrl: 'http://192.168.1.160:60018/',
    //TelBaseUrl: 'http://192.168.1.160:60018/pages/',
    ApiBaseUrl: 'http://192.168.1.160:60018/advert/act',
    UploadBaseUrl: 'http://192.168.1.160:60018/advert/upload',
    ImagesBaseUrl: 'http://192.168.1.159:80//',
    version:'1.1.0',
    appType:102,
    varName:'1.0.0'
}
export default Config;
//export default config;