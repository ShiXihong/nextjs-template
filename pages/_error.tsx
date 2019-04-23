import React, { Component } from 'react'
// import axios from 'utils/axios'

interface State extends RootState{

}

interface Props extends RootProps{
  statusCode?: number
  err?: any
}

export default  class Page extends Component<Props, State> {
  static async getInitialProps({ res, err }: {res: any, err: any}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    console.log('error getInitialProps', statusCode, err)
    // axios.post('http://localhost:3000/api/logger', { statusCode, err })
    return { statusCode, err }
  }

  render() {
    const {statusCode, err} = this.props
    return (
      <p>
        {statusCode
          ? `An error ${this.props.statusCode} occurred on server${err}`
          : `An error occurred on client(${err})`}
      </p>
    )
  }
}
