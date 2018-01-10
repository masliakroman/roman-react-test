import React, { Component } from 'react';
import logo from './logo.svg';

class Loader extends Component {
    render() {
        return(
            <div className="loader-container">
                <img src={logo} className="App-logo-loader" alt="logo" />
            </div>
        );
    }
}

export default Loader;
