import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import Header from '../header';


const NavBarManage = () =>
{
    {/* myMenuBrij() is to show menu button to make nav bar responsive */}
    const myMenuBrij = () => {
        let x = document.getElementById("myTopnavbrij");
        if (x.className === "topnavbrij") {
            x.className += " responsivebrij";
        } else {
            x.className = "topnavbrij";

        }
    }
    return (<div>
            { /* Header is included over here */}
            <Header/>
            {/* Nav Bar       -- start -- */}
        <div className="topnavbrij" id="myTopnavbrij">
            {/* Nav bar component created for reusability to create menus in nav bar */}
            <NavBar
                menuType = "Single"
                hrefLink = "/"
                menuTitle = "Home"
            />
            <NavBar
                menuType = "Single"
                hrefLink = "/about-us"
                menuTitle = "About Us"
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Services"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Service 1',
                    Link:'/service-1'
                },
                    {
                        DropMenuTitle:'Service 2',
                        Link:'/service-2'
                    },
                    {
                        DropMenuTitle:'Service 3',
                        Link:'/service-3'
                    },
                    {
                        DropMenuTitle:'Service 4',
                        Link:'/service-4'
                    },
                    {
                        DropMenuTitle:'Service 5',
                        Link:'/service-5'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Portfolio"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Portfolio 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Portfolio 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Portfolio 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Portfolio 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Single"
                hrefLink = "/contact-us"
                menuTitle = "Contact Us"
            />
            <Link to='#' class="iconbrij" onClick={() =>  myMenuBrij()}>&#9776;</Link>
        </div>
            {/* Nav Bar       -- end -- */}
        </div>
    )
}
export default NavBarManage;