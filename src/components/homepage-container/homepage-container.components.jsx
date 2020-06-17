import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './homepage-container.styles.scss';

const HomeContainer = ({show}) => {
    return(
        <div className='position'>
            {
                show?
                <Logo className='logo'/>:null
            }
        </div>
    )
};

export default HomeContainer;