import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as homeActions from 'actions/home'

class Index extends Component<any, any> {
  static async getInitialProps (props: any) {
    const { isServer } = props.ctx
    // store.dispatch(getData())
    return { isServer }
  }
  componentDidMount(): void {
    console.log(this.props)
    this.props.actions.getData()
  }

  render() {

    return (
      <div>
        Hello Next.js
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
}))(Index)