import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <h1 className='languageselect'>UK|中國</h1>
        <Link className='options' to='/bags'>
            BAGS
        </Link>
        <Link className='options' to='/customise'>
            CUSTOMISE
        </Link>
        <Link className='options' to='/'>
            Beara
        </Link>
        <Link className='options' to='/store'>
            OUR STORE
        </Link>
        <Link className='options' to='/story'>
            OUR STORIES
        </Link>
    </div>
);

export default Header;