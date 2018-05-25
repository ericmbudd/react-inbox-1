import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { getAllMessages } from './actions/getAllMessages'
import { Provider } from 'react-redux'
import App from './App'


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
