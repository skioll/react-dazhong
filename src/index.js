import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '_containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from '_store/configureStore';

import '_assets/styles/base.scss';
import '_assets/font/font.scss';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}><App/></Provider>
), document.getElementById('root'));

registerServiceWorker();
