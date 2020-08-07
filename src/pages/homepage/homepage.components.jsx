import React, { useState, useEffect } from 'react';

import Directory from '../../components/directory/directory.components';
import Blogcategory from '../../components/blogcategory/blogcategory.components';
import HomeBack from '../../components/homepage-back/homepage-back.components';

import './homepage.styles.scss';
import {
  BackgroundContainer, DirectoryContainer, BlogContainer, VideoContainer,
} from './homepage.styles';
import SummerSales from '../../assets/summersale.jpg';
import OurStory from '../../assets/ourstory.jpg';

const HomePage = () => {
  const [scrollState, setscrollState] = useState({ position: 0 });
  const [showState, setshowState] = useState(true);

  const ScrollHandler = () => {
    setscrollState({ position: window.scrollY });
    if (scrollState.position > 200) {
      setshowState(false);
    } else {
      setshowState(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', ScrollHandler);
    return () => window.removeEventListener('scroll', ScrollHandler);
  });

  return (
    <div>
      <BackgroundContainer>
        <HomeBack show={showState} />
      </BackgroundContainer>
      <img src={SummerSales} alt="summersale" />
      <DirectoryContainer>
        <Directory />
      </DirectoryContainer>
      <img src={OurStory} alt="ourstory" />
      <BlogContainer>
        <Blogcategory />
      </BlogContainer>
      <VideoContainer>
        <iframe title="home" src="https://player.vimeo.com/video/386453266?background=1&autoplay=1&loop=1&byline=0&title=0" frameBorder="0" />
      </VideoContainer>
    </div>
  );
};

export default HomePage;
