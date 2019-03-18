import App, {Container} from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import createStore from 'store'

class MyApp extends App<any, any> {
  static async getInitialProps({Component, ctx}: { Component: any, ctx: any }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }
    return { pageProps }
  }

  render() {
    // @ts-ignore
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))