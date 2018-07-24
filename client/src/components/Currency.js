import React, { Component } from 'react';
import './../styles/Currency.css';

class Currency extends Component {
    render() {
        return (
            <div className="currency-container">
                <div className="currency-item">
                    <span>Currency</span>
                    <span>Buy</span>
                    <span>Sale</span>
                    <span>Changes</span>
                </div>
                <div className="currency-item">
                    <span>USD</span>
                    <span>Buy</span>
                    <span>Sale</span>
                    <span>Changes</span>
                </div>
                <div className="currency-item">
                    <span>EUR</span>
                    <span>Buy</span>
                    <span>Sale</span>
                    <span>Changes</span>
                </div>
                <div className="currency-item">
                    <span>RUB</span>
                    <span>Buy</span>
                    <span>Sale</span>
                    <span>Changes</span>
                </div>
            </div>
        );
    }
}

export default Currency;
