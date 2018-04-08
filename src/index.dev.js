import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';

import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './styles/index.less';
import Home from './components/home';

if (module.hot) {
    module.hot.accept(() => {
        ReactDom.render(
            <AppContainer>
                <Provider store={createStore(reducer)}>
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
        <Provider store={createStore(reducer)}>
            <MuiThemeProvider>
                <Home />
            </MuiThemeProvider>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)