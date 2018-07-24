import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Content from "./components/Content";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                    <Route exact path='/' component ={Content} />
                    <div className="routes-container">
                        <Route exact path='/eth' component ={Content} />
                        <Route exact path='/xrp' component ={Content} />
                        <Route exact path='/ltc' component ={Content} />
                    </div>
                <Footer/>
            </div>

        </Router>

    );
  }
}

export default App;
