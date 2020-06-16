import React from 'react';
import { Link } from 'react-router-dom';

import DropdownNavbar from '../dropdown-controller/dropdown-controller.components';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <h1 className='languageselect'>UK|中國</h1>
        <Link className='options' to='/categorys'>
            BAGS
        </Link>
        <Link className='options' to='/customise'>
            CUSTOMISE
        </Link>
        <Link className='options' to='/'>
            Beara
        </Link>
        {/* <div>
        <Link className='options' to='/store'>
            OUR STORE
        </Link>
            <NavLink className='navlink' to='/london-store'>
                London Store
            </NavLink>
            <NavLink className='navlink' to='/shanghai-store'>
                Shanghai Store
            </NavLink>
        </div> */}
        <div className='options'>
        <DropdownNavbar/>
        </div>
        <Link className='options' to='/story'>
            OUR STORIES
        </Link>
    </div>
);

export default Header;