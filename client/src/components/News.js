import React, { Component } from 'react';
import './../styles/News.css';

class News extends Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div className="news-container">
                    <p className="container-header">News of
                        <span> {this.props.pathname ? this.props.pathname.toUpperCase() : 'BTC'}</span>
                    </p>
                    <p className="news-item">
                        Lorem Lorem Lorem Lorem LoremLorem LoremLoremLorem  Lorem Lorem Lorem
                    </p>
                </div>
        );
    }
}

export default News;
