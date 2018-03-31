import React, { Component } from 'react';
import ReactDom from 'react-dom';
import "./index.css";

class App extends Component {
    render() {
        return <h1 className="header"> Hello, world, from HIDE haha ! </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)