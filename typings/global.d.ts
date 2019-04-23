// typings

declare type ErrorMessage = string

declare type Locale = 'en' | 'zh'

// interfaces

declare interface Config {
  ENV: string,
  GATEWAY_API_URL: string
  WEBSOCKET_API_URL: string
}

declare interface RootState {
  local?: any
}

declare interface RootProps {
  actions?: any,
  isServer?: boolean
}

// declare interface FetchOptions {
//   headers: object
//   method: FetchMethod
//   body?: string | FormData
// }

declare interface Window {
  __PRELOADED_STATE__?: RootState
  __PRELOADED_CHUNKS__?: string[]
  Intl?: any
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  tvWidget?: any
}

declare interface Process extends NodeJS.Process {
  release: {
    name: string
  }
}

declare interface NodeModule {
  hot?: any
}

declare interface HTMLHeadElement {
  append: any
}

// modules

declare module '*.scss' {
  const styles: any
  export = styles
}

declare module '*.css' {
  const styles: any
  export = styles
}

declare module '*.png' {
  const file: any
  export = file
}

declare module '*messages' {
  const file: any
  export = file
}

declare module '*production' {
  const config: Config
  export = config
}

declare module 'env' {
  const config: Config
  export = config
}

declare module 'transit-immutable-js' {
  const transit: any
  export = transit
}
declare module 'koa-combine-routers' {
  const combine: any
  export  = combine
}

declare module 'redux-form/es/immutable' {
  interface Form {
    reducer: any
    change: any
    reset: any
    stopSubmit: any
  }

  const form: Form
  export = form
}

declare module 'react-cookie' {
  const cookie: any
  export = cookie
}

declare module 'isomorphic-fetch' {
  const fetch: any
  export = fetch
}

declare module 'intl' {
  const file: any
  export = file
}

declare module 'intl/locale-data/jsonp/en.js' {
  const file: any
  export = file
}

declare module 'intl/locale-data/jsonp/zh.js' {
  const file: any
  export = file
}

declare module 'reducers' {
  const file: any
  export = file
}

declare module 'sagas' {
  const file: any
  export = file
}

declare module 'actions/*.tsx' {
  const file: any
  export = file
}

declare module 'utils' {
  const file: any
  export = file
}

declare module 'store' {
  const file: any
  export = file
}

declare module 'routes/async' {
  interface Bundles {
    [key: string]: any
  }

  const bundles: Bundles
  export = bundles
}
