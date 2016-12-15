import Tool from '../pub/Tool';
/**
 * 菜单父键和值,二级菜单键和值,菜单切换状态,菜单数据
 * @type {{parentActive: {parentkey: number, parentvalue: string}, childActive: {childkey: number, childvalue: string}, menuSwitch: boolean, menuList: Array}}
 */
const PUSH_IMG = 'PUSH_IMG';
let img_arr = [];

const base_images_path = 'http://127.0.0.1:3000/uploads/';
let Ontext = (imagesList) => {
	return { type: PUSH_IMG, imagesList }
}

export let ImageListAction = (store,filename) => {
	img_arr.push({url:`${base_images_path}${filename}`});
	store.dispatch(Ontext(img_arr));
}

const UploadState =
	{
		imagesList:[]
	}
export function UploadReducer(state = UploadState, action) {
	switch (action.type) {
		case PUSH_IMG:
			return Tool.assign({}, state, { imagesList: action.imagesList });
		default:
			return state
	}
}



