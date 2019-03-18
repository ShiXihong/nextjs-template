import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import * as homeActions from 'actions/home'
import style from './style.scss'

interface State extends RootState{
}

interface Props extends RootProps{
  home?: any
}

class Home extends Component<Props, State> {
  static async getInitialProps (props: any) {
    const { isServer, store } = props.ctx
    // 服务器端需要获取的数据，在此调用
    store.dispatch(homeActions.getData())
    return { isServer }
  }
  componentDidMount(): void {
    // 不需要在服务端条用的数据，在此处调用
  }

  // render 中慎用window和document对象
  // 防止在服务器渲染的时候报错
  render() {
    const { home, isServer } = this.props
    const data = home && home.data
    return (
      <div className={style.home}>
        <p>{isServer}</p>
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
        <Link href="/about"><a>About</a></Link>
      </div>
    )
  }
}

export default connect((state: any) => ({
  home: state.home
}), (dispatch: any) => ({
  actions: bindActionCreators({
    ...homeActions
  }, dispatch)
}))(Home)