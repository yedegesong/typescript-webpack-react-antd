import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Tool from '../../pub/Tool';
//公用头部，菜单数据监听
import HeaderReducer from '../reducers/HeaderReducer';
import MenuReducers from '../reducers/MenuReducer';
let store;
export function BaseStore(reducers) {
	if (store){
		return store;
	}
	let _reducers = Tool.assign(reducers, { HeaderReducer, MenuReducers });
	//合并所有要监听reducers 派生器
	const Reducers = combineReducers(_reducers);
	store = createStore(
		Reducers,
		applyMiddleware(thunkMiddleware)
	);
	return store;
}