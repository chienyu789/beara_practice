import React,{ useState, useEffect } from 'react';

import Directory from '../../components/directory/directory.components';
import Blogcategory from '../../components/blogcategory/blogcategory.components';
import HomeBack from '../../components/homepage-back/homepage-back.components';
import HomeContainer from '../../components/homepage-container/homepage-container.components';

import './homepage.styles.scss';
import SummerSales from '../../assets/summersale.jpg';
import OurStory from '../../assets/ourstory.jpg';

const HomePage = () =>{
    const [ scrollState, setscrollState ] = useState({position:0});
    const [ showState, setshowState ] = useState(true);

    const ScrollHandler =()=>{
        setscrollState({position: window.scrollY})
        if( scrollState.position>200 ){
            setshowState(false)
        }else{
            setshowState(true)
        }
        };

    useEffect(() => {
        window.addEventListener('scroll',ScrollHandler)
        return () => window.removeEventListener('scroll',ScrollHandler)
        });

    return(
    <div>
        <div className='background'>
        <HomeContainer show={showState}/>
        <HomeBack/>
        </div>
        <img src={SummerSales} alt='summersale'/>
        <div className='directory'>
        <Directory/>
        </div>
        <img src={OurStory} alt='ourstory'/>
        <div className='blogcategory'>
        <Blogcategory/>
        </div>
        <div className='video'>
        <iframe title='home' src='https://player.vimeo.com/video/386453266?background=1&autoplay=1&loop=1&byline=0&title=0' frameBorder='0'/>
        </div>
    </div>
)};

export default HomePage;