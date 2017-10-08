export const addMenu = (type) => {
	return {
		type: 'ADD_MENU',
		payload: {
			id: Date.now(),
			type
		}
	};
};

export const setMenus = (menus) => {
	return {
		type: 'SET_MENUS',
		payload: {
			menus
		}
	};
};

export const getMenus = () => {
	return {
		type: 'GET_MENUS'
	};
};
