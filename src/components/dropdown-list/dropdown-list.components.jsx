import React from 'react';

import { Link } from 'react-router-dom';

import './dropdown-list.styles.scss';

const DropdownList = ({show}) => (
    show?
    <div>
        <Link className='navlink' to='/london-store'>
                London Store
        </Link>
        <Link className='navlink' to='/shanghai-store'>
            Shanghai Store
        </Link>
    </div>:null
);

export default DropdownList;