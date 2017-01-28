import { Record, List } from 'immutable'
import Const from '../utilities/constants'

export default new Record({
    todos: List(),
    visibilityFilter: Const.visibility.SHOW_ALL,
    isLoading: false
})