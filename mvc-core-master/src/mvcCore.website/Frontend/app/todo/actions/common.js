import Const from '../utilities/constants';

export const setVisibilityFilter = (filter) => {
  return {
    type: Const.actions.SET_VISBILITY_FILTER,
    filter
  };
};

export const setLoadingState = (isLoading) => {
  return {
    type: Const.actions.SET_LOADING_STATE,
    isLoading
  };
};

export const setPagerPage = (page) => {
  return{
    type: Const.actions.UPDATE_PAGE,
    page
  };
};

export const setPagerTotal = (total) => {
  return{
    type: Const.actions.UPDATE_TOTAL,
    total
  };
};