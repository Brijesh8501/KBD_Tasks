import React from 'react';
import Body from './bodycontent';
import NavBarManage from './navBar/navBarManage';
import './navBar/navbar.css';
import FooterBar from './footer';

const Home = () =>
{

    const NavigationBar = () =>
    {
        {/* This component is created to manage navigation bar */}
        return (<NavBarManage/>)

    }
    const BodyContent = () =>
    {
        {/* Body content */}
        return <Body content = "Home"/>
    }
    const Footer = () =>
    {
        {/* Footer content */}
        return <FooterBar/>
    }

    return (
        <div>
            { /* Navigation Bar */}
            {NavigationBar() }

            {/* Body Content */}

            { BodyContent() }

            {/* Footer */}
            { Footer() }
        </div>
    )

}
export default Home;