interface Config {
    TelBaseUrl :string;
    ApiBaseUrl :string;
    version :string;
    appType:number;
    varName:string;
    UploadBaseUrl: string;
}
/**
 * 配置项  
 * TelBaseUrl => 配置模板路径
 * ApiBaseUrl => 配置API路径
 * UploadBaseUrl => 
 */
const Config:Config = {
    TelBaseUrl: 'http://127.0.0.1:9090/pages/',
   //TelBaseUrl: 'http://192.168.1.160:60018/pages/',
    ApiBaseUrl: 'http://192.168.1.160:60018/advert/act',
    UploadBaseUrl: 'http://192.168.1.160:60018/advert/upload',
    version:'1.1.0',
    appType:102,
    varName:'1.0.0'
}
export default Config;
//export default config;