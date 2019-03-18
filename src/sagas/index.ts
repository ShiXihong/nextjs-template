import { all, fork } from 'redux-saga/effects'
import { ENV } from 'env'
import homeSaga from './home'
import loggerSaga from './logger'

const sagas = {
  intlSaga: fork(homeSaga),
  loggerSaga: fork(loggerSaga)
}

if (ENV === 'production') {
  delete sagas.loggerSaga
}

export default function* rootSaga() {
  yield all(sagas)
}
