import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) =>
{
    const ShowDropDown = () =>
    {
         var x = document.querySelector(".dropdownbrij");
         x.style.display = "block";

    }
    let template = null;

    switch(props.menuType)
    {

        case('Single') :
            template = (
                <Link to={props.hrefLink}>
                    {props.menuTitle }
                </Link>
            )
            break;
        case('Dropdown') :
            template = (
                <div class="dropdownbrij" onClick={()=> { ShowDropDown()}}>
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