import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Tool from '../../pub/Tool';
//公用头部，菜单数据监听
import {MenuReducers} from '../reducers/BaseReducer';
export function BaseStore(reducers) {
	let _reducers = Tool.assign(reducers, {MenuReducers });
	const Reducers = combineReducers(_reducers);
	const store = createStore(
		Reducers,
		applyMiddleware(thunkMiddleware)
	);
	return store;
}