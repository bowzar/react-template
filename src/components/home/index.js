import React, { Component, } from 'react';
// import ReactDom from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import "./index.less";

export default class Home extends Component {
    render() {
        return (
            <div className={"home"}>
                <h1 className={"header"}> Hello, world, from HIDE !!!!!!</h1>
                <RaisedButton label="Default" />
            </div>);
    }
}