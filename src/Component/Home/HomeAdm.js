import React, { Component } from 'react';
import NavbarAdm from '../Layout/NavbarAdm'
import SectionTop from '../Layout/SectionTop'
import ProductAdm from '../Layout/ProductAdministrator'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component {

    render() {
        console.log('render');
        return (
            <Router>
                <div>
                    <NavbarAdm />
                    <SectionTop />
                    <ProductAdm />
                </div>
            </Router>
        )
    }
}

export default Home;