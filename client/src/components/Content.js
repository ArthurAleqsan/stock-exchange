import React, { Component } from 'react';
import './../styles/Content.css';
import Main from "./Main";

class Content extends Component {

    render() {
        return (
            <section className='main'>
                <p className="header-name">
                    {this.props.location.pathname.slice(1)? this.props.location.pathname.slice(1).toUpperCase() : 'BTC'}
                </p>
                <Main name='exmo'/>
                <Main name='binance'/>
                <Main name='cryptocompare'/>
                <Main name='poloniex'/>
                <Main name='yobbit'/>
            </section>
        );
    }
}

export default Content;
