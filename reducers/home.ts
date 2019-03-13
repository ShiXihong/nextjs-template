import { handleActions } from 'utils/redux-actions'
import * as actions from 'actions/home'

const initState = {
  text: '222222222222222'
}

export default handleActions({
  [actions.setInfo] (state: any, action: any) {
    state.locale = action.payload
  }
}, initState)
