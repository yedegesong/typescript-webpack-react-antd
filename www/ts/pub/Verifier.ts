/**
 * 表单验证模块
 * @type {{require: {test: (function(any, any): (boolean|boolean)), tip: string}, minLength: {test: (function(any, any): boolean), tip: string}, maxLength: {test: (function(any, any): any|boolean), tip: string}, number: {test: (function(any): boolean), tip: string}, mobile: {test: (function(any): any|boolean), tip: string}, select: {test: (function(any, any): boolean), tip: string}}}
 */

var VERIFIERS = {
    require: {
        /**
         * 实际需验证文本域的值,验证参数值
         * @type {any|boolean|boolean}
         */
        test: (value, verifierValue) => {
            if (!verifierValue) {
                return true;
            }
            if (!value) {
                return false;
            }
            return value.toString().trim().length > 0;
        },
        tip: '不能为空'
    },
    require2: {
        /**
         * 验证文本域不能为空以及不能存在特殊字符
         * @type {any|boolean|boolean}
         */
        test: (value) => {
            
            return (/[^\u4e00-\u9fa5]/).test(value.toString().trim());
        },
        tip: '格式不对'
    },
    require3: {
        /**
         * 实际需验证文本域的值,验证参数值
         * @type {any|boolean|boolean}
         */
        test: (value) => {
            
            return (/^[\w\W]{6,16}$/).test(value.toString().trim());
        },
        tip: '格式不对'
    },
    password:{
        test: (value, verifierValue) => {
            if (!verifierValue) {
                return true;
            }
            if (!value) {
                return false;
            }
            return value.toString().trim().length > 0;
        },
        tip: '不能为空'
    },
    minLength: {
        test: (value, verifierValue) => {
            return value && value.toString().trim().length >= verifierValue;
        },
        tip: '长度不能小于{value}位'
    },
    maxLength: {
        test: (value, verifierValue) => {
            // console.log('maxLength',r,v);
            return value && value.toString().trim().length < verifierValue;
        },
        tip: '长度不能大于{value}位'
    },
    number: {
        test: (value) => {
            // console.log('number',r,v);
            return (/^\d+$/).test(value.toString().trim());
        },
        tip: '只能为数字'
    },
    confusion_number: {
        test: (value) => {
            return (/(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,16}$/).test(value.toString().trim());
        },
        tip: '请输入正确的格式'
    },
    mobile: {
        test: (value) => {
            return value && ((/^((1[378][0-9]{9})|(15[89][0-9]{8}))$/).test(value.toString().trim()));
        },
        tip: '手机号码格式不正确'
    },
    email: {
        test: (value) => {
            return value && ((/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value.toString().trim()));
        },
        tip: '格式不对'
    },
    select: {
        test: (value, verifierValue) => {
            if (value != verifierValue) {
                return true;
            } else {
                return false;
            }
        },
        tip: '不能为空'
    },
    /*复选框组验证*/
    group:{
        test: (value, verifierValue) => {
            if (parseInt(value.length) + 1 > verifierValue) {
                return true;
            } else {
                return false;
            }
        },
        tip: '选择不能小于{value}个'
    },
    bank: {
        test: (value) => {
            return value && ((/^\d{16}|\d{19}$/).test(value.toString().trim()));
        },
        tip: '格式不对'
    }
};

/**
 * 成功返回 true,失败返回 tips
 * @param verifierName
 * @param value
 * @param verifierValue
 * @returns true||string
 */
let verify = (verifierName, value, verifierValue) => {
    //console.log(verifierName,value,verifierValue);
    if (verifierName === 'test') {
        if (verifierValue.test && !verifierValue.test(value)) {
            return verifierValue.tip || 'fail';
        }
        return true;
    }
    /**
        外部传递进来的Verifier_Config 与内部的配置匹配
    **/
    let verifier = VERIFIERS[verifierName];
    if (verifier && verifier.test) {
        /**
         * 实际需验证文本域的值,验证参数值
         * @type {any|boolean|boolean}
         */
        let r = verifier.test(value, verifierValue);
        if (!r) {
            return verifier.tip.replace('{value}', verifierValue);
        }
    }
    return true;
};


let verifyConfig = (input, verifyConfigs, immediately = false) => {
    let result = [];
    /**
     * 循环遍历验证配置
     */
    for (let configName in verifyConfigs) {
        //config_name:home
        let verifyConfig = verifyConfigs[configName];
        /**
         * 循环验证单个配置
         */
        for (let verifierName in verifyConfig) {
            let verifyConfigValue = verifyConfig[verifierName];
            /**
             * 表示单个验证的键值,(参数2)表示实际表单域的值,表示配置单个验证的值
             * @type {string|string|string|string|string|string|any|boolean|string}
             */
            let verifyOneResult   = verify(verifierName, input[configName], verifyConfigValue);

            if (typeof verifyOneResult == 'string') {

                let tips:any = verifyConfig['name'] + verifyOneResult;
                tips = {name: configName, tips};
                if (immediately) {
                    return [tips];
                }
                result.push(tips);


            }

        }
    }

    return result;
};

const Verifier = {
    verifyConfig,
    verify
};

export default Verifier;