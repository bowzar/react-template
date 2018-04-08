import React, { Component, } from 'react';

import { StoplightContainer } from './stoplight-container';
import { ButtonsContainer } from './buttons-container';

import "../../styles/home.less";

export default class Home extends Component {
    render() {
        return (
            <div className={"home"}>
                <StoplightContainer />
                <ButtonsContainer />
            </div>);
    }
}