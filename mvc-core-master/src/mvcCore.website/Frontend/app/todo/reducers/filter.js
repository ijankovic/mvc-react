import Immutable from 'immutable';
import Const from '../utilities/constants';
//import NameIdRecord from '../../controls/models/NameIdRecord';


export const filter = (state = Immutable.Record(), action) => {

  switch (action.type) {
  case Const.actions.UPDATE_FILTER:
    return state.set(action.name, action.value);
  default:
    return state;
  }
};