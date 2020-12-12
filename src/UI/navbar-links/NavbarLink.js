import React from 'react';
import './navbar-link.css';

const NavbarLink = (props) => {
    return (
        <div>
            <li className='navbar-link' id={props.elementId} onClick={props.clicked}>{props.name}</li>
        </div>
    );
};

export default NavbarLink;