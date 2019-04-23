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

  componentDidMount(): void {
    //页面加载时、及改变窗口尺寸时设置html的fontSize
    this.onSetRootFontSize()
    window.onresize = () => {
      this.onSetRootFontSize()
    }
  }

  onSetRootFontSize = () => {
    let clientWidth = document.documentElement.clientWidth;
    if (clientWidth > 750) {
      clientWidth = 750
    }
    document.documentElement.style.fontSize = clientWidth / 46.875 + 'px';
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