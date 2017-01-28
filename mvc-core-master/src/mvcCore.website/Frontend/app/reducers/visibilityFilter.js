import Const from '../utilities/constants';

export const visibilityFilter = (state = Const.visibility.SHOW_ALL, action) => {
    switch (action.type) {
        case Const.actions.SET_VISBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}