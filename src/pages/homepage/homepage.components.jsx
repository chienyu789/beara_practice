import React from 'react';

import Directory from '../../components/directory/directory.components';
// import MouseMove from '../../components/mousemove/mousemove.components';

import './homepage.styles.scss';
import Background from '../../assets/homepagebackground.jpg';
import SummerSales from '../../assets/summersale.jpg';


const HomePage = () =>(
    <div>
        <img src={Background} alt='homepage'/>
        <img src={SummerSales} alt='summersale'/>
        <Directory/>
        {/* <MouseMove imgUrl={require('../../assets/homepagebackground.jpg')}/> */}
    </div>
);
export default HomePage;