
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './main.css';
import App from './App'
import moment from 'moment';
import 'moment/locale/zh-cn';
import store from './redux/store.js';
import { Provider } from 'react-redux'

moment.locale('zh-cn');


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
