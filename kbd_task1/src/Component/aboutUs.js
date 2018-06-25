import React from 'react';
import Body from './bodycontent';
import NavBarManage from './navBar/navBarManage';
import './navBar/navbar.css';
import FooterBar from './footer';

const AboutUs = () =>
{

    const NavigationBar = () =>
    {
        return (<NavBarManage/>)

    }
    const BodyContent = () =>
    {
        return <Body content = "About Us"/>
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
export default AboutUs;