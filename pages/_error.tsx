import React, { Component } from 'react'
// import Error from 'next/error'

interface State extends RootState{

}

interface Props extends RootProps{
  statusCode?: number
  err?: any
}

export default  class Page extends Component<Props, State> {
  static async getInitialProps({ res, err }: {res: any, err: any}) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    console.log('err', err)
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