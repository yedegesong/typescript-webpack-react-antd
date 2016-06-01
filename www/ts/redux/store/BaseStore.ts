import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Tool from '../../pub/Tool';
//公用头部，菜单数据监听
import HeaderReducer from '../reducers/HeaderReducer';
import MenuReducers from '../reducers/MenuReducer';

export function BaseStore(reducers) {
	let _reducers = Tool.assign(reducers, { HeaderReducer, MenuReducers });
	//合并所有要监听reducers 派生器
	const Reducers = combineReducers(_reducers);
	const store = createStore(
		Reducers,
		applyMiddleware(thunkMiddleware)
	);
	return store;
}