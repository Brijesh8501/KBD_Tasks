import React from 'react';
import Body from './bodycontent';
import NavBarManage from './navBar/navBarManage';
import './navBar/navbar.css';
import FooterBar from './footer';

const Home = () =>
{
    {/* Navigation Bar  */}
    const NavigationBar = () =>
    {
        { /* This component is created to manage navigation bar */}
        return (<NavBarManage/>)

    }
    {/* Body Content */}
    const BodyContent = () =>
    {
        return <Body content = "Home"/>
    }
    {/* Footer */}
    const Footer = () =>
    {
        return <FooterBar/>
    }

    return (
        <div>

            {NavigationBar() }
            { BodyContent() }
            { Footer() }
        </div>
    )

}
export default Home;