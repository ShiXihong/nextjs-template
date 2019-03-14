import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from 'actions/home'
import { getTestData } from 'utils/api'

function* getHomeData () {
  try {
    const data = yield call(getTestData)
    yield put(actions.setInfo(data))
  } catch (err) {
    yield put(actions.getDataError(err))
  }
}

export default function* intlSaga() {
  yield takeEvery(String(actions.getData), getHomeData)
}
