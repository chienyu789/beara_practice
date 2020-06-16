import React,{ useState} from 'react';
import { Link } from 'react-router-dom';

import DropdownList from '../dropdown-list/dropdown-list.components';

import './dropdown-controller.styles.scss';

const DropdownNavbar = () => {
    const [ showState, setshowState ] = useState(false);

    const ShowNavbar = () =>(
        setshowState(true)
    );
    const HideNavbar = () =>(
        setshowState(true)
    );

    return (
        <div onMouseOver={ShowNavbar} onMouseLeave={HideNavbar}>
            <Link to='/store'>
            OUR STORE
            </Link>
            <DropdownList show={showState}/>
        </div>
    )
};

export default DropdownNavbar;