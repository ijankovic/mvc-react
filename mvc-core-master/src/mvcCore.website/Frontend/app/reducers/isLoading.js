import Const from '../utilities/constants';

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case Const.actions.SET_LOADING_STATE:
            return action.isLoading; 
        default:
            return state;
    }
}