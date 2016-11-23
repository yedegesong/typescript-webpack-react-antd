import Tool from '../pub/Tool';
import Api from '../pub/Api';
const GET_FORM = 'GET_FORM';
const GET_LIST = 'GET_LIST';
const GET_TREE = 'GET_TREE';

let OnSubmitDate = (submitDate) => {
	return { type: GET_FORM, submitDate }
}

let OnQueryList = (data) => {
	return { type: GET_LIST, data }
}

export let submitAction = (data) => {
	return (dispatch, getState) => {
		dispatch(OnSubmitDate(data));
	}
}

export let userAccessAction = (opts,fn) =>{
	Api.userAccess({userIds:opts.userIds,access:opts.access}).then(function(callbackData){
		console.log(callbackData)
		fn(callbackData);
	})
}
/**
 * 根据条件搜索出相关人员
 */
export let queryListAction = (store,opts) => {
		let data = [
				
  		];
		  //获取列表并且转换成自己想要的数据
		Api.queryList({departmentId:opts.id}).then(function (callbackData) {
			$.each(callbackData.data,(keyIndex,value)=>{
				data.push({
					key:value.userId,
					username:value.nickName,
					account:value.account,
					role:value.roleName,
					roleId:value.roleId,
					access:value.access,
					department:value.departmentName,
					leader:value.leader,
					departmentId:value.departmentId,
					departmentName:value.departmentName
				})
			});
			
			store.dispatch(OnQueryList(data));
		});
}

/**
 * 获取公司组织架构
 */
export let queryTreeAction = (opts,callback) => {
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
		Api.queryTree(opts).then(function (callbackData) {
			callbackData.data.forEach(element => {
				new_tree_data.push({
					id:element.departmentId,
					pid:element.parentId,
					pId:element.parentId,
					name:element.departmentName
				})
			});
			callback(tree_data.concat(new_tree_data));
		});
}


/**
 * 添加部门
 */
export let addDepartmentAction = (opts,callback) => {
	
		Api.addDepartment(opts).then(function (callbackData) {
			callback(callbackData);
		});
	
}

/**
 * 删除部门
 */
export let deleteDepartmentAction = (opts,callback) => {
	
		Api.deleteDepartment(opts).then(function (callbackData) {
			callback(callbackData)
		});
}

/**
 * 编辑部门
 */
export let editDepartmentAction = (opts,callback) => {
	
		Api.editDepartment(opts).then(function (callbackData) {
			callback(callbackData)
		});
}

/**
 * 获取角色列表
 */
export let listRoleAction = (opts,fn) => {
	
		Api.listRole(opts).then(function(callbackData){
				fn(callbackData);
			})
}

/**
 * 添加用户
 */
export let addUserAction = (opts,fn) => {
		Api.addUser(opts).then(function(callbackData){
				fn(callbackData);
			})
}

/**
 * 编辑用户
 */
export let editUserAction = (opts,fn) => {
	
		/*Api.editUser(opts).then(function(callbackData){
				fn(callbackData);
			})*/
}

/**
 * 
 */
const UserManagement =
	{
		submitDate: {
			type: 'erp'
		},
		data: [
		]
	}
export function UserManagementReducer(state = UserManagement, action) {
	switch (action.type) {
		case GET_FORM:
			return Tool.assign({}, state, { submitDate: action.submitDate });
		case GET_LIST:
			return Tool.assign({}, state, { data: action.data });
		default:
			return state
	}
}



