import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DropDownBag from '../dropdownbags/dropdownbags.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';
import CartIcon from '../cart-icon/cart-icon.components';
import CartNav from '../cart-nav/cart-nav.components';

import  { ReactComponent as Logo }  from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({hidden}) => {
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

    return(
    <div>
    <div className='header'>
        <h1 className='languageselect'>UK|中國</h1>
        <div className='dropdown' onMouseOver={ShowBagbar} onMouseLeave={HideBagbar} >
            <Link className='options' to='/category/all-products'>
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
            <Logo className='logo'/>
        </Link>
        <div className='dropdown' onMouseOver={ShowNavbar} onMouseLeave={HideNavbar} >
            <Link className='title' to='/london-store'>
            OUR STORE
            </Link>
            {
                showState?
                <DropDownStore/>:
                null
            }
        </div>
        <Link className='options' to='/our-story'>
            OUR STORY
        </Link>
        <CartIcon className='carticon'/>
    </div>
    {
        hidden?
        <CartNav/>:
        null
    }
    </div>
)};

const mapStateToProps = ({cart:{ hidden }}) =>({
    hidden
})

export default connect(mapStateToProps)(Header);