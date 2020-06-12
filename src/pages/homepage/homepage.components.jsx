import React from 'react';

import Directory from '../../components/directory/directory.components';

import './homepage.styles.scss';
import Background from '../../assets/homepagebackground.jpg';
import SummerSales from '../../assets/summersale.jpg';
import OurStory from '../../assets/ourstory.jpg';

const HomePage = () =>(
    <div>
        <img src={Background} alt='homepage'/>
        <img src={SummerSales} alt='summersale'/>
        <Directory/>
        <img src={OurStory} alt='ourstory'/>
    </div>
);
export default HomePage;