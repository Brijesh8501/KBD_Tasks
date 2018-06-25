import React from 'react';
import Body from './bodycontent';
import NavBarManage from './navBar/navBarManage';
import './navBar/navbar.css';
import FooterBar from './footer';

const Service = () =>
{

    const NavigationBar = () =>
    {
        return (<NavBarManage/>)

    }
    const BodyContent = () =>
    {
        return <Body content = "Service"/>
    }
    const Footer = () =>
    {
        return <FooterBar/>
    }

    return (
        <div> {NavigationBar() }
            { BodyContent() }
            { Footer() }
        </div>
    )

}
export default Service;