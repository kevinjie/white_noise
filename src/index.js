import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const config = {
  onUpdate(reg) {
    if (true) { // TODO: 这里一般要用户同意之后才skipWaiting
      try {
        reg.waiting.postMessage({ type: 'SKIP_WAITING' })
      } catch (error) {
        window.location.reload() 
      }
    }
  }
}
serviceWorker.register(config);
