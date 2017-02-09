import { Record, List } from 'immutable';
import Const from '../utilities/constants';
import PagerRecord from './pagerRecord';
import FilterRecord from './filterRecord';

export default new Record({
  todos: List(),
  filter: FilterRecord(),
  visibilityFilter: Const.visibility.SHOW_ALL,
  isLoading: false,
  pager: PagerRecord()
});