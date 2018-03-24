import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import {HashRouter} from 'react-router-dom';
import './index.css';
import '../../lib/index.min.css';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <Component/>
            </HashRouter>
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp)
    })
}