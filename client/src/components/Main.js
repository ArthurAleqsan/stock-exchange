import React, { Component } from 'react';
import './../styles/Content.css';
import Currency from "./Currency";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            data : {}
        }
    }
    // componentDidMount() {
    //     fetch('/')
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //             data : data,
    //         }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
                <div className="main-container">
                    {/*{console.log(this.state.data)}*/}
                    <div className="main-container-header">
                        {this.props.name.toUpperCase()}
                        </div>
                    <Currency />
                </div>
        );
    }
}

export default Main;
