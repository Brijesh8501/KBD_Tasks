import React, {Component} from 'react';
import Home from './Component/Home';
import AboutUs from './Component/aboutUs';
import ContactUs from './Component/contactUs';
import Portfolio from './Component/portfolio';
import Service from './Component/service';

import {Route, Switch } from 'react-router-dom';

class Routes extends Component{

    render(){
        return (
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about-us" exact component={AboutUs}/>
                    <Route path="/contact-us" exact component={ContactUs}/>
                    <Route path="/portfolio-1" exact component={Portfolio}/>
                    <Route path="/portfolio-2" exact component={Portfolio}/>
                    <Route path="/portfolio-3" exact component={Portfolio}/>
                    <Route path="/portfolio-4" exact component={Portfolio}/>
                    <Route path="/service-1" exact component={Service}/>
                    <Route path="/service-2" exact component={Service}/>
                    <Route path="/service-3" exact component={Service}/>
                    <Route path="/service-4" exact component={Service}/>
                    <Route path="/service-5" exact component={Service}/>
                </Switch>

        )
    }
}
export default Routes;