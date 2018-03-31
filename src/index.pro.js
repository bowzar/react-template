import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.less';
import Home from './components/home/index';

ReactDom.render(
    <AppContainer>
        <MuiThemeProvider>
            <Home />
        </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
)