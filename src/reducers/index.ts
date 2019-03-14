import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import home from './home'

export default combineReducers({
  router,
  home
})