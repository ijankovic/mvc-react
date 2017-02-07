import Immutable from 'immutable';
import Const from '../utilities/constants';
import NameIdRecord from '../../controls/models/NameIdRecord';


export const users = (state = Immutable.List(), action) => {
  switch (action.type) {
  case Const.actions.ADD_USERS:
    return state.concat(action.users.map(u => new NameIdRecord(u)));
  default:
    return state;
  }
}