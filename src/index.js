import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConnectedApp from './containers/ConnectedApp'
import store from './configureStore'
import * as serviceWorker from './serviceWorker'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
