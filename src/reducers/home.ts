import { handleActions } from 'utils/redux-actions'
import { produce } from 'immer'
import * as actions from 'actions/home'

const initState = {
  loading: false,
  error: null,
  data: null
}

export default handleActions({
  [String(actions.getData)] (state: any) {
    return produce(state, (draftState: any) => {
      draftState.loading = true
    })
  },
  [String(actions.setInfo)] (state: any, action: any) {
    return produce(state, (draftState: any) => {
      draftState.data = action.payload
    })
  },
  [String(actions.getDataError)] (state: any, action: any) {
    return produce(state, (draftState: any) => {
      draftState.error = action.payload
    })
  }
}, initState)
