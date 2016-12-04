import Tool from '../pub/Tool';
import LocalStorage from '../pub/LocalStorage';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */


const GET_FORM = 'GET_FORM';
const GET_PROVINCES = 'GET_PROVINCES';
const GET_CITYS = 'GET_CITYS';
const GET_AREA = 'GET_AREA';
declare var window: any;

let citys = null;
let Ontext = (data) => {
	return { type: GET_FORM, data }
}

let OnProvinces = (province) => {
	return { type: GET_PROVINCES, province }
}

let OnCitys = (city) => {
	return { type: GET_CITYS, city }
}

let OnArea = (area) => {
	return { type: GET_AREA, area }
}

export let ChangeDataAction = (data) => {
	return (dispatch, getState) => {
		dispatch(Ontext(data))
	}
}

export let getProvincesAction = () => {
	return (dispatch, getState) => {
		let province = [];
		let _data = LocalStorage.get('city_data');
		for (let t in _data) {
			province.push({
				label: t,
				value: t
			})
		}
		dispatch(OnProvinces(province));
	}
}

export let getCityAction = (value) => {
	return (dispatch, getState) => {
		let city = [];
		let _data = LocalStorage.get('city_data');
		for (let t in _data) {
			if(t == value){
				citys = _data[t];
				for(let c in citys){
					city.push({
						label: c,
						value: c
					})
				}
			}
		}
		dispatch(OnCitys(city));
	}
}

export let getAreaAction = (value) => {
	let area = [];
	return (dispatch, getState) => {
		for (let t in citys) {
			if(value === t){
				citys[t].forEach((v)=>{
					area.push({
						label: v,
						value: v
					})
				})
			}
		}
		dispatch(OnArea(area));
}
}
export let getCitysAction = () => {
	$.getScript('http://127.0.0.1:9090/lib/area.js', function (prov) {
		LocalStorage.add('city_data', window.prov);
	})
}

const HeaderState =
	{
		province: [],
		city: [],
		area: []
	}
export function FormLinkageReducer(state = HeaderState, action) {
	switch (action.type) {
		case GET_PROVINCES:
			return Tool.assign({}, state, { province: action.province});
			case GET_CITYS:
			return Tool.assign({}, state, { city: action.city,area:[]});
			case GET_AREA:
			return Tool.assign({}, state, { area: action.area });
		default:
			return state
	}
}



