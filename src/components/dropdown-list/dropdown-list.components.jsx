import React from 'react';

import { Link } from 'react-router-dom';

import './dropdown-list.styles.scss';

// const DropdownList = () => (
//     <div className='nav'>
//         {/* <Link  className='navlink' to={linkUrl}>
//            { subtitle }
//         </Link> */}
//         <Link  className='navlink' to='/'>
//            aaaaa
//         </Link>
//     </div>
// );
const DropdownList = ({ id, subtitle, linkUrl}) => (
    <div className='nav'>
        <Link  className='navlink' to={linkUrl}>
           { subtitle }
        </Link>
    </div>
);


export default DropdownList;