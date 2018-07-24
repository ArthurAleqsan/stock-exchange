import React, { Component } from 'react';
import './../styles/Content.css';
import News from "./News";
import Main from "./Main";

class Content extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <section className='main'>
                <p className="header-name">
                    {this.props.location.pathname.slice(1)? this.props.location.pathname.slice(1).toUpperCase() : 'BTC'}
                </p>
                <News pathname={this.props.location.pathname.slice(1)}/>
                <Main/>
            </section>
        );
    }
}

export default Content;
