import { createSelector } from 'reselect';

const makeSelectMenus = () => createSelector(
  (globalState) => globalState.get('menus')
);

export {
	makeSelectMenus
};
