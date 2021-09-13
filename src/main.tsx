import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import Router from './pages/router';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
/* 以下文件可根据需要引入 */

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
)
