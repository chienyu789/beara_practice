import React,{ useState} from 'react';
import { Link } from 'react-router-dom';

import DropdownList from '../dropdown-list/dropdown-list.components';

import './dropdown-controller.styles.scss';

const DropdownNavbar = ({ show }) => (
    <div className='dropdown'>
        <Link className='title' to='/store'>
        OUR STORE
        </Link>
        <div className='subtitle'>
            <DropdownList show={show}/>
        </div>
    </div>
    
);

export default DropdownNavbar;