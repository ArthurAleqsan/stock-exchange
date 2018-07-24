import React, { Component } from 'react';
import './../styles/Content.css';
import Currency from "./Currency";

class Main extends Component {
    render() {
        return (
                <div className="main-container">
                    <Currency/>
                </div>
        );
    }
}

export default Main;
