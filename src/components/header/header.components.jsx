import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import DropDownBag from '../dropdownbags/dropdownbags.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';

import './header.styles.scss';

const Header = () => {
    const [ showbagState, setshowbagState ] = useState(false);
    const [ showState, setshowState ] = useState(false);
    
    const ShowBagbar = () =>(
        setshowbagState(true)
    );
    const HideBagbar = () =>(
        setshowbagState(false)
    );

    const ShowNavbar = () =>(
        setshowState(true)
    );
    const HideNavbar = () =>(
        setshowState(false)
    );
    console.log(showState);
    return(
    <div className='header'>
        <h1 className='languageselect'>UK|中國</h1>
        <div className='dropdown' onMouseOver={ShowBagbar} onMouseLeave={HideBagbar} >
            <Link className='options' to='/category'>
                BAGS
            </Link>
            {
                showbagState?
                <DropDownBag/>:
                null
            }
        </div>
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