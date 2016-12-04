import * as React from "react";
import classNames from "classnames";
import ComponentsConfig from "../ComponentsConfig";
import InputSelect from './InputSelect';
import LocalStorage from '../../pub/LocalStorage';
const css_prefix = ComponentsConfig.css_prefix;
declare var window: any;
let findKey = (elements, callback) => {
    var value, values = [], i, key;
    for (key in elements) {
        value = callback(elements[key], key);
        if (value != null) { values.push(value) }
    }
    return values;
}


export default class SelectLinkage extends React.Component<any, any> {
    /**
     * 表单布局 块布局(默认),水平布局(horizontal),行内布局(inline)
     * @type {{type: string}}
     */
    data: any;
    storage_city: any;
    constructor(props) {
        super(props);
        this.storage_city = null;
        this.data = {
            province: '-1',
            city: '-1',
            area: '-1'
        }
        this.state = {
            province: [],
            city: [],
            area: []
        }
    }

    changeProvince(data) {
        let province = []
        for (let keys in data) {
            province.push({
                label: keys,
                value: keys
            })
        }
        this.setState({
            province: province,
        })
    }

    /**
     * 选择省份
     */
    handleProvinceChange(value) {
        let city = [];
        this.data.province = value;
        this.data.city = '-1';
        this.data.area = '-1';
        let _data = LocalStorage.get('city_data');
        for (let keys in _data) {
            if (keys == value) {
                this.storage_city = _data[keys];
            }
        }

        for (let citys in this.storage_city) {
            city.push({
                label: citys,
                value: citys
            })
        }

        this.setState({
            city: city,
            area: []
        })

        if(this.props.callbackValue){
            this.props.callbackValue(this.data)
        }
    }
    /**
     * 选择城市
     */
    handleCityChange(value) {
        let area = [];
        this.data.city = value;
        this.data.area = '-1';
        let storage_city = this.storage_city;
        for (let citys in storage_city) {
            if (citys == value) {
                storage_city[citys].forEach((v) => {
                    area.push({
                        label: v,
                        value: v
                    })
                })
            }
        }
        this.setState({
            area: area
        })
        if(this.props.callbackValue){
            this.props.callbackValue(this.data)
        }
    }

    /**
     * 选择区域
     */
    handleAreaChange(value) {
        this.data.area = value;
        if(this.props.callbackValue){
            this.props.callbackValue(this.data)
        }
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        return (
            <div>
                <InputSelect data={this.state.province} value={this.data.province}
                    onChange={(event) => this.handleProvinceChange(event.target.value)} />
                <InputSelect data={this.state.city} value={this.data.city}
                    onChange={(event) => this.handleCityChange(event.target.value)} />
                <InputSelect data={this.state.area} value={this.data.area}
                    onChange={(event) => this.handleAreaChange(event.target.value)} />
            </div>
        );
    }

    componentDidMount(): void {
        if (!LocalStorage.get('city_data')) {
            $.getScript('/lib/area.js', function (prov) {
                LocalStorage.add('city_data', window.prov);
            })
        }

        let _data = LocalStorage.get('city_data');
        this.changeProvince(_data);
    }

    componentWillUnmount(): void {

    }

    /**
     * 解决二次渲染值回填
     */
    componentWillReceiveProps(nextProps) {

    }

}