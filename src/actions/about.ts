import { createAction } from 'redux-actions'

export const setInfo = createAction('about/SET_INFO')
export const getData = createAction('about/GET_DATA')
export const getDataError = createAction('about/GET_DATA_ERROR')
