import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import DropdownList from '../dropdown-list/dropdown-list.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';

import './header.styles.scss';

const Header = () => {
    const [ showState, setshowState ] = useState(false);

    const ShowNavbar = () =>(
        setshowState(true)
    );
    const HideNavbar = () =>(
        setshowState(true)
    );
    console.log(showState);
    return(
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
        <div className='dropdown' onMouseOver={ShowNavbar} onMouseLeave={HideNavbar} >
        <Link className='title' to='/store'>
        OUR STORE
        </Link>
        {/* {
            showState?
            <DropdownList/>:
            null
        } */}
        {
            showState?
            <DropDownStore/>:
            null
        }
        </div>
        <Link className='options' to='/story'>
            OUR STORIES
        </Link>
    </div>
)};

export default Header;