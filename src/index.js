import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import RootStore from './store';

ReactDOM.render((
  <BrowserRouter>
    <Provider rootStore={new RootStore()}><App /></Provider>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
