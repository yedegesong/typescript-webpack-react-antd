import Tool from '../pub/Tool';
import Api from '../pub/Api';

const ROLE_LIST = 'ROLE_LIST';

/**
 * 显示列表
 */
let OnRoleList = (data) => {
	return { type: ROLE_LIST, data };
}
/**
 * 获取角色权限
 */
export let queryTreeAction = (opts, callback) => {
	let new_tree_data = [];
	/**
	 * 默认根树
	 */
	let tree_data = [
		/*{
			id: 1,
			pId: 0,
			pid:0,
			name: "车位管家"
		}*/
	];
	Api.listPrivilege().then(function (callbackData) {

		callbackData.data.forEach(element => {
			new_tree_data.push({
				id: element.privilegeId,
				pid: element.parentId,
				pId: element.parentId,
				name: element.privilegeName
			})
		});
		callback(tree_data.concat(new_tree_data));
	});
}

/**
 * 增加角色权限
 */
export let addRoleAction = (opts, callback) => {

	Api.addRole(opts).then(function () {
		callback();
				})
				//dispatch(OnRoleList(data))
}

/**
 * 获取角色列表
 */
export let listRoleAction = (opts) => {
	let new_arr = [];
	return (dispatch, getState) => {
		Api.listRole(opts).then(function (callbackData) {
			$.each(callbackData.data, function (indexKey, value) {
				new_arr.push({
					key: value.roleId,
					roleName: value.roleName,
					roleDesc: value.roleDesc
				})
			})
			callbackData.data = new_arr;
			dispatch(OnRoleList(callbackData))
		})
	}
}

/**
 * 删除角色权限
 */
export let delRoleAction = (opts, callback) => {

	Api.batchDeleteRole(opts).then(function () {
		callback();
				})

}

/**
 * 编辑角色权限
 */
export let editRoleAction = (opts, callback) => {
	
	Api.editRole(opts).then(function (callbackData) {
					callback(callbackData);
				})

}
/**
 * 获取当前用户角色
 */
export let queryPrivilegeRoleAction = (opts, callback) => {
	let new_arr = [];
	Api.queryPrivilegeRole(opts).then(function (callbackdata) {
		callbackdata.data.forEach(element => {
			new_arr.push({
				id: element.privilegeId,
				pid: element.parentId,
				pId: element.parentId,
				name: element.privilegeName
			})
		});

		callback(new_arr);
				})
				//dispatch(OnRoleList(data))
}

/**
 * 关键字检索角色列表
 */
export let queryRoleAction = (opts, callback) => {
	let new_arr = [];
	return (dispatch, getState) => {
		Api.queryRole(opts).then(function(callbackData){
			$.each(callbackData.data, function (indexKey, value) {
				new_arr.push({
					key: value.roleId,
					roleName: value.roleName,
					roleDesc: value.roleDesc
				})
			})
			callbackData.data = new_arr;
			dispatch(OnRoleList(callbackData))
		})
	}
}

const RoleManagement =
	{
		list_role_data: {
			data: [
				/*{
					key: '1',
					roleName: '小明',
					roleDesc: '描述描述'
            	}*/
			],
			next: false,
			num: 0,
			total: 0
		}
	}
export function RoleManagementReducer(state = RoleManagement, action) {
	switch (action.type) {
		case ROLE_LIST:
			return Tool.assign({}, state, { list_role_data: action.data });
		default:
			return state
	}
}



