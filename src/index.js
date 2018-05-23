import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

ReactDOM.render(
  <Provider store={ store }>
    <Toolbar />
    <MessageList />
  </Provider>
, document.getElementById('root'))
registerServiceWorker();
