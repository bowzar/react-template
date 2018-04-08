import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers';

import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.less';
import Home from './components/home/index';

if (module.hot) {
    module.hot.accept(() => {
        ReactDom.render(
            <AppContainer>
                <Provider store={createStore(reducers)}>
                    <MuiThemeProvider>
                        <Home />
                    </MuiThemeProvider>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}

ReactDom.render(
    <AppContainer>
        <Provider store={createStore(reducers)}>
            <MuiThemeProvider>
                <Home />
            </MuiThemeProvider>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)