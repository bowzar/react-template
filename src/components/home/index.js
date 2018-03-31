import React, { Component, } from 'react';
// import ReactDom from 'react-dom';
import "./index.less";
import bk from "./SignInBackground.png";

const styles = {
    bgd: {
        background: `url(${bk}) no-repeat`,
    }
}

export default class Home extends Component {
    render() {
        return (
            <div className="home container" style={styles.bgd}>
                <h1 className="home header"> Hello, world, from HIDE !!!!!!!!!!! </h1>
            </div>);
    }
}