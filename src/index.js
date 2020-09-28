import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'

/**
 * react-redux 'Provider 컴포넌트'의 store props를 통해서 redux의 store를 공급. 
 * --> 즉 이 Provider 컴포넌트 하위의 모든 컴포넌트들은 (따로 import를 시키지않아도) 이 redux store에 접근할 수 있게 된다.  
 */
ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
