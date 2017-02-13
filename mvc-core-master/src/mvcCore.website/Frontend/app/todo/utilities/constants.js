export default {
  actions: {
    ADD_TODO: 'ADD_TODO',
    ADD_TODOS: 'ADD_TODOS',
    ATTACH_TODOS:'ATTACH_TODOS',
    REMOVE_TODO: 'REMOVE_TODO',
    REMOVE_TODOS: 'REMOVE_TODOS',
    UPDATE_TODO: 'UPDATE_TODO',
    SET_VISBILITY_FILTER: 'SET_VISBILITY_FILTER',
    SET_LOADING_STATE: 'SET_LOADING_STATE',
    TOGGLE_TODO_SELECTION: 'TOGGLE_TODO_SELECTION',
    TOGGLE_ALL_SELECTIONS: 'TOGGLE_ALL_SELECTIONS',
    UPDATE_FILTER: 'UPDATE_FILTER',
    ADD_USERS: 'ADD_USERS',
    UPDATE_PAGE: 'UPDATE_PAGE',
    UPDATE_TOTAL: 'UPDATE_TOTAL',
    CLEAR_DIRTY_FLAG: 'CLEAR_DIRTY_FLAG'
  },
  visibility: {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  },
  alerts:{
    SUCCESS:'Successfully completed!'
  },
  pager:{
    PAGE: 1,
    PAGE_SIZE:8
  }
};