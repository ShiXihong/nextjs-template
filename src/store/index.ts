import { createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import rootReducer from 'reducers'
import rootSaga from 'sagas'

interface AppStore<S> extends Store<S> {
  close?: any
  sagaTask?: any
}

export default function configure(initialState?: RootState, history?: any): AppStore<RootState> {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(history)
  const middlewares = [routerMiddleware, sagaMiddleware]
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares))) as AppStore<RootState>

  store.sagaTask = sagaMiddleware.run(rootSaga)
  store.close = () => store.dispatch(END)

  return store
}
