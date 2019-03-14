import { handleActions } from 'utils/redux-actions'
import * as actions from 'actions/home'

const initState = {
  loading: false,
  error: null,
  text: '222222222222222'
}

export default handleActions({
  [String(actions.getData)] (state: any) {
    return { ...state, loading: true }
  },
  [String(actions.setInfo)] (state: any, action: any) {
    return { ...state, text: action.payload}
  },
  [String(actions.getDataError)] (state: any, action: any) {
    return { ...state, error: action.payload }
  }
}, initState)
