import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setInfo } from 'actions/home'

@connect()
export default class extends Component {
  static async getInitialProps (props: any) {
    const { store, isServer } = props.ctx
    store.dispatch(setInfo(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(loadData())
    }

    return { isServer }
  }
  render() {
    return (
      <div>
        Hello Next.js
      </div>
    )
  }
}