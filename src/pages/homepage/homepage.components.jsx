import React from 'react';

import Directory from '../../components/directory/directory.components';
import Blogcategory from '../../components/blogcategory/blogcategory.components';

import './homepage.styles.scss';
import Background from '../../assets/homepagebackground.jpg';
import SummerSales from '../../assets/summersale.jpg';
import OurStory from '../../assets/ourstory.jpg';

const HomePage = () =>(
    <div>
        <img src={Background} alt='homepage'/>
        <img src={SummerSales} alt='summersale'/>
        <div className='directory'>
        <Directory/>
        </div>
        <img src={OurStory} alt='ourstory'/>
        <div className='blogcategory'>
        <Blogcategory/>
        </div>
    </div>
);
export default HomePage;