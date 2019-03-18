import React, {Component} from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as aboutActions from "actions/about"
import style from './style.scss'
// import * as homeActions from "../../src/actions/home";

interface State extends RootState{
}

interface Props extends RootProps{
  home?: any
}

class About extends Component<Props, State> {
  static async getInitialProps (props: any) {
    const { isServer } = props.ctx
    return { isServer }
  }

  render() {
    const { home, isServer } = this.props
    const data = (home && home.data) || []

    return (
      <div className={style.test}>
        <p>{isServer}</p>
        <p>从store 过来的数据</p>
        <div className={style.tdHeader}>
          <p>Name</p>
          <p>User Name</p>
          <p>Email</p>
        </div>
        {
          data.map((item: any) => (
            <div className={style.item} key={Math.random()}>
              <p>{item.name}</p>
              <p>{item.username}</p>
              <p>{item.email}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect((state: any) => ({
  home: state.home
}), (dispatch: any) => ({
  actions: bindActionCreators({
    ...aboutActions
  }, dispatch)
}))(About)