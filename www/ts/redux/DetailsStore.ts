import { createStore, combineReducers, applyMiddleware} from 'redux';
import Tool from '../pub/Tool';

let indexApi = {
	fetchPostsIfNeeded: Tool.resource('GET', 'http://bbs.fzbm.com/api/1/focus', {})
}
/*--定义指令--*/
const SELECT_NAV = 'SELECT_NAV';
const SELECT_N = 'SELECT_N';
/*-actions-*/
function selectNAV(state) {
	return {
		type: SELECT_NAV,
		state
	}
}
export function fetchPostsIfNeeded(reddit?:any) {
	return (dispatch, getState) => {
		//return dispatch(fetchPosts(reddit))
		indexApi.fetchPostsIfNeeded.then(function(data) {
			//console.log(data)
            dispatch(selectNAV(data))
        });
	}
}
/*-reducers-*/
export function IndexReducers(state = {}, action) {
	switch (action.type) {
		case SELECT_NAV:
			return Object.assign({}, state, action.state)
		default:
			return state
	}
}

export function IndexTwoReducers(state = {}, action) {
	switch (action.type) {
		case SELECT_N:
			return Object.assign({}, state, action.state)
		default:
			return state
	}
}