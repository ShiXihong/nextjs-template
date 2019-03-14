import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getData } from 'actions/home'

class Index extends Component<any, any> {
  static async getInitialProps (props: any) {
    const { store, isServer } = props.ctx
    store.dispatch(getData())
    return { isServer }
  }
  componentDidMount(): void {
    console.log(this.props)
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
}))(Index)