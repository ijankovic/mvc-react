import { Record } from 'immutable';
import Const from '../utilities/constants';

export default new Record({
  total:0,
  page: Const.pager.PAGE,
  pageSize: Const.pager.PAGE_SIZE
});