import React from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import Header from '../header';


const NavBarManage = () =>
{
    {/* myMenuBrij() is to show menu button to make nav bar responsive */}
    const myMenuBrij = () => {
        let x = document.getElementById("myTopnavbrij");
            x.style.width = "300px";
            document.getElementById("iconbrij").style.display = "none";
            document.getElementById("closebtn").style.display = "block";

    }
    {/* Close Menu */}
    const closeNav = () =>
    {
        document.getElementById("myTopnavbrij").style.width = "0px";
        document.getElementById("iconbrij").style.display = "block";

    }
    {/* Shows Menu button to make nav bar responsive */}
    const MenuBar = () =>
    {
        return (
            <div className="responsivebar">
            <Link to='#' class="iconbrij" id="iconbrij" onClick={() =>  myMenuBrij()}>&#9776;</Link>

            </div>
        )
    }
     return (<div>
             { /* header is included over here */}
       <Header/>
             {/* Nav Bar       -- start -- */}
        <div className="topnavbrij" id="myTopnavbrij">
            {/* Nav bar header section -- start-- */}
            <header id="pointer">
                <div className="pointer-title">Search and menus<Link to="#" class="closebtn" id="closebtn" onClick={() => closeNav()}>&times;</Link>
            </div>
            </header>
            {/* Nav bar header section --end-- */}
            {/* Nav bar search box -- start -- */}
            <div className="menu-search">
                <input type="text" name="search" id="search" placeholder="Search Canada.ca"/>
                <div id='button-holder'>
                    <img src='/icons/magnify_glass.png' />
                </div>
                <div className="search-msg">Français</div>
            </div>
            {/* Nav bar search box -- end -- */}
            { /* Nav bar component created for reusability to create menus in nav bar */}
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Jobs"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Job Bank',
                    Link:'/service-1'
                },
                    {
                        DropMenuTitle:'Find a job',
                        Link:'/service-2'
                    },
                    {
                        DropMenuTitle:'Training',
                        Link:'/service-3'
                    },
                    {
                        DropMenuTitle:'Hire and manage employees',
                        Link:'/service-4'
                    },
                    {
                        DropMenuTitle:'Starting a business',
                        Link:'/service-5'
                    },
                    {
                        DropMenuTitle:'Workplace standards',
                        Link:'/service-5'
                    },
                    {
                        DropMenuTitle:'Pension and retirement',
                        Link:'/service-5'
                    },
                    {
                        DropMenuTitle:'Employment insurance',
                        Link:'/service-5'
                    },
                    {
                        DropMenuTitle:'Jobs -- More',
                        Link:'/service-5'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Immigration"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Immigration detail 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Immigration detail 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Immigration detail 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Immigration detail 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Travel"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Travel 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Travel 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Travel3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Travel 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Business"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Business 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Business 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Business 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Business 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Benefits"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Benefits 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Benefits 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Benefits 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Benefits 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Health"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Health 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Health 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Health 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Health 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "Taxes"
                dropDownMenuLink = {[{
                    DropMenuTitle:'Taxes 1',
                    Link:'/portfolio-1'
                },
                    {
                        DropMenuTitle:'Taxes 2',
                        Link:'/portfolio-2'
                    },
                    {
                        DropMenuTitle:'Taxes 3',
                        Link:'/portfolio-3'
                    },
                    {
                        DropMenuTitle:'Taxes 4',
                        Link:'/portfolio-4'
                    }
                ]}
            />
            <NavBar
                menuType = "Dropdown"
                hrefLink = "#"
                menuTitle = "More Services"
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
            {/* Nav bar additional menus -- start -- */}
            <div className="res-adtnlmenu">
                <span className="res-menus"><Link to="/contactus">Contact Us</Link></span>
                <span className="res-menus"><Link to="/contactus">Departments and agencies</Link></span>
                <span className="res-menus"><Link to="/contactus">Public service and military</Link></span>
                <span className="res-menus"><Link to="/contactus">News</Link></span>
                <span className="res-menus"><Link to="/contactus">Treaties,Laws and Regulations</Link></span>
                <span className="res-menus"><Link to="/contactus">Government-wide reporting</Link></span>
                <span className="res-menus"><Link to="/contactus">Prime Minister</Link></span>
                <span className="res-menus"><Link to="/contactus">How government works</Link></span>
                <span className="res-menus"><Link to="/contactus">Open government</Link></span>
                <span className="res-menus"><Link to="/contactus">Social Media</Link></span>
                <span className="res-menus"><Link to="/contactus">Mobile applications</Link></span>
                <span className="res-menus"><Link to="/contactus">About Canada.ca</Link></span>
                <span className="res-menus"><Link to="/contactus">Terms and Conditions</Link></span>
                <span className="res-menus"><Link to="/contactus">Privacy</Link></span>
            </div>
            {/* Nav bar additional menus -- end -- */}
            { /* Nav bar close button -- start -- */}
            <div className="res-adtnl-last-menu">
                <button className="res-close-btn" onClick={() =>  closeNav()}>Close</button>
            </div>
            { /* Nav bar close button -- end -- */}
            {/* Nav Bar       -- end -- */}
        </div>
             { /* MenuBar() function called to show menu button */}
    { MenuBar() }
         </div>

    )
}
export default NavBarManage;