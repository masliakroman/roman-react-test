import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './store';

const store = new RootStore();

ReactDOM.render((
  <BrowserRouter>
    <Provider {...store}>
        <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
