/**
 * 本地缓存 类
 */
export default class LocalStorage {
    constructor() {

    }
    /**
     * 默认获取是否支持本地缓存
     * @returns {Storage}
     */
    static getLocalStorage() {
        if (!localStorage) {
            throw new Error('Need localStorage');
        }
        return localStorage;
    }

    /**
     * 添加本地缓存
     */
    static add(key: string, value: any, expired?: number) {
        if (value === undefined) {
            value = null;
        }

        let localStorage = this.getLocalStorage();
        let _expired = this.getExp(key, expired);
        let obj = {
            data: value,
            expired: _expired,
            time: +new Date().getTime()
        };
        localStorage.setItem(key, JSON.stringify(obj));
    }

    /**
     * 获取本地缓存的KEY,过期的回调函数,返回过期前的数据.
     * @param key
     * @param callback
     * @returns {null}
       */
    static get(key: string, callback?: any) {
        let localStorage = this.getLocalStorage();
        let _value = localStorage.getItem(key);
        if (_value) {
            let JSON_VALUE = JSON.parse(_value);
            let now = new Date().getTime();
            //如果过期执行的方法
            if (JSON_VALUE.expired && JSON_VALUE.expired!=0&&JSON_VALUE.expired - now < 0) {
                callback ? callback(JSON_VALUE):function(){};
                this.remove(key);
            } else {
                return JSON_VALUE.data;
            }
        }
        return null;
    }

    /**
    * d更新本地缓存,存在就更新 不存在就返回NULL;
    * @param key
    * @param value
    * @param expired
      * @returns {null}
      */
    static update(key, value, expired) {
        let json = JSON.parse(localStorage.getItem(key));
        console.log(json)
        if (json != null) {
            let _expired = this.getExp(expired, key);
            let obj = {
                data: value,
                expired: _expired,
                time: +new Date().getTime()
            };
            localStorage.setItem(key, JSON.stringify(obj));
        } else {
            return null;
        }
    }

    /**
      * 删除相对应KEY的本地缓存
      * @param key
        */
    static remove(key: string) {
        let localStorage = this.getLocalStorage();
        localStorage.removeItem(key);
    }

    /**
     * 清除所有本地缓存
     */
    static clear() {
        let localStorage = this.getLocalStorage();
        localStorage.clear();
    }

    static getExp(key: string, expired?: number) {
        //当过期
        if (expired == 0) {
            let _this = this;
            window.onbeforeunload = function() {
                _this.remove(key);
            }
        } else if (typeof expired == 'number' || !isNaN(Number(expired))) {

            //expired = 1455033600000;
            expired = new Date(new Date().getTime() + expired * (24 * 60 * 60 * 1000)).getTime();
        }
        return expired;
    }

}