import { fromJS, List } from 'immutable';

const initialState = fromJS({
  menus: List()
});
const menus = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_MENU':
			return state
				.updateIn(['menus'], arr => arr.push(fromJS(action.payload)));
			break;
		case 'SET_MENUS':
			return state
				.set('menus', fromJS(action.payload.menus));
			break;
		case 'GET_MENUS':
			return state.get('menus');
			break;
		default:
			return state;
	}
};

export default menus;
