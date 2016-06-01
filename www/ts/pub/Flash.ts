/**
 * 对象存储以及推送
 */
let flash_data     = null;
let set_data       = (data)=> {
    flash_data = data;
};

/**
 * 数据被提取之后就自动删除
 * @returns {*}
 */
let get_data = ()=> {
    let result = null;
    result     = flash_data;
    flash_data = null;
    return result;
};

const Flash = {
    get: get_data,
    set: set_data
};


export default Flash;
