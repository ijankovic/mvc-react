import Immutable from 'immutable';
import Const from '../utilities/constants';

export const pager = (state = Immutable.Record(), action) => {
  switch (action.type) {
  case Const.actions.UPDATE_PAGE:
    return state.set('page', action.page);
  case Const.actions.UPDATE_TOTAL:
    return state.set('total', action.total);
  default:
    return state;
  }
};