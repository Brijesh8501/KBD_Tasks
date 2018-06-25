import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>
{
    let template = null;

    switch(props.menuType)
    {
        /* This switch case 'single' is for creating direct menu */
        case('Single') :
            template = (
                <Link to={props.hrefLink}>
                    {props.menuTitle }
                </Link>
            )
            break;
            /* This switch case 'dropdown' is for creating dropdown menu */
        case('Dropdown') :
            template = (
                <div class="dropdownbrij">
                    <button class="dropbtnbrij">{props.menuTitle}&nbsp;<i class="brij-down-arrow"></i>
                    </button>
                    <div class="dropdown-contentbrij">
                        { props.dropDownMenuLink.map( (item, i) =>
                        {
                            return (<Link to={item.Link}>{item.DropMenuTitle}</Link>)
                        }) }
                   </div>
                </div>
            )
            break;
        default :
            template = null;
    }
    return template
}
export default NavBar;