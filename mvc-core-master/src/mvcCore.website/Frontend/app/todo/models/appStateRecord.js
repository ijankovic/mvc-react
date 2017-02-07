import { Record, List } from 'immutable';
import Const from '../utilities/constants';
import PagerRecord from './pagerRecord';

export default new Record({
  todos: List(),
  users: List(),
  visibilityFilter: Const.visibility.SHOW_ALL,
  isLoading: false,
  pager: PagerRecord()
});