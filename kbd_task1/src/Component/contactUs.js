import React from 'react';
import Body from './bodycontent';
import NavBarManage from './navBar/navBarManage';
import './navBar/navbar.css';
import FooterBar from './footer';

const ContactUs = () =>
{

    const NavigationBar = () =>
    {
        return (<NavBarManage/>)

    }
    const BodyContent = () =>
    {
        return <Body content = "Contact Us"/>
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
export default ContactUs;