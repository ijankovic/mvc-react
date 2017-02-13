import { Record } from 'immutable';

export default new Record({
  id: 0,
  text: '',
  isCompleted: false,
  userId: null,
  isSelected: false,
  isDirty: false,
  defaultSubTask: 0,
  subtasks: [],
  customProperty:'n/A'
});