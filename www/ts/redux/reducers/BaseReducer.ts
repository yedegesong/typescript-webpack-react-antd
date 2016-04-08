import { createStore, combineReducers} from 'redux';
const BASE_MENU = 'BASE_MENU';
const MenuState =
	{
		menuList:[]
	}

export function MenuReducers(state = MenuState, action) {
	switch (action.type) {
		case BASE_MENU:
			return Object.assign({}, state, action.state)
		default:
			return state
	}
}

