interface ApiConfig {
    ApiBaseUrl :string;
}

//let prefix = 'http://192.168.1.160:60018/';
let prefix = 'http://text.com/';
/**
 * 配置项  
 * ApiBaseUrl => 配置API路径
 */
const ApiConfig: ApiConfig = {
    ApiBaseUrl: `${prefix}`
}
export default ApiConfig;
//export default config;