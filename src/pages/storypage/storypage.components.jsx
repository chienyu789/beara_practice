import React from 'react';

import OurStories1 from '../../assets/ourstory2.jpg';
import OurStories2 from '../../assets/ourstory3.jpg';

import './storypage.styles.scss';

const StoryPage = () => (
  <div className="story">
    <div className="video-container">
      <iframe src="https://player.vimeo.com/video/133121883?title=0&byline=0&portrait=0&playsinline=0&autoplay=1&autopause=0&app_id=122963" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title="our-story" data-ready="true"/>
    </div>
    <div className="story-detail">
      <p>The story of our brand starts with a journey through Latin America. As a travel writer at the time, Jake Bullough was living in Bolivia, writing about people's lives whom he encountered. In La Paz, the capital of Bolivia, he met the wonderful Julia, who along with her extended family have been making and selling leather bags from a tiny shop in the back streets of the city for many years. Intrigued by the combination of incredible craftsmanship and quality materials, they began collaborating, turning Jake's designs into a collection of never seen before handbags.</p>
      <p>With Bolivia being such an isolated country, Jake's idea was to provide Julia’s struggling business and subsequent others, with a substantial amount of work with which would bring in much needed finances and eventually improve their standards of living. The idea of encouraging employment has always been a huge motivational factor and we now provide full or part time employment to over forty people.</p>
      <p>Our ever expanding network of craftsmen are also motivated by the fact that their hard work, skill and tradition is being appreciated worldwide. To make our bags more unique we have been using vintage Andean cloths, known locally as ‘aguayos’. All antique aguayos are hand woven and defined by the region where they are made. The art of making these wonderful cloths has been passed down through generations, over hundreds of years and reflects the history of the indigenous cultures in Bolivia.</p>
    </div>
    <div className="photo">
      <img src={OurStories1} alt="ourstory2" />
      <div className="middle">
        <p>Our hope is that everyone who purchases a Beara Beara appreciates the skill, determination, respect and love that goes into making each individual bag. Our products are not only unique but extremely durable made from raw cows hide we source from the lowland areas in Bolivia. We respect the desire to buy a hi-fashion brand but are pleased to see that there are still plenty of people who appreciate quality and take pride in creating their own individual style.</p>
        <p>When we began working with our suppliers most of whom were caught in a never ending circle of manufacturing bags that sold for very little and next to no profit. They worked with their small family team in a cluttered outhouse or basement and lacked the knowledge of how to make a business profitable.</p>
        <p>When we visit our suppliers now we are proud to see the influence we have had. Gone are the cramped quarters and the antiquated machinery. We do still use traditional techniques to measure, cut, stain, emboss and stitch the leather, however it is now a time efficient process with less risk and wastage involved. Our workforce has grown significantly and we are delighted to see new faces in the workshops every time we visit.</p>
      </div>
      <img src={OurStories2} alt="ourstory3" />
      <div className="below">
        <p>Our maestros (the most experienced craftsmen) train new younger workers with the skills necessary to create bags to a high quality. Most of the trainees work for several months as an assistant before moving to a permanent position where they are then responsible for their part of the manufacturing process.</p>
        <p>It is usually quite a calm atmosphere as everyone focuses on their work however at breaktime it is very different with lots of loud chatter, fussing over siblings and the occasional hysterics. Our workers clock in and out and work around their other life commitments. Many are university students paying for their education by working half-days and weekends, some women only work mornings as they look after their children in the afternoons. We enjoy spending our time with the people that work so hard for us and whom I like to think we reward for that dedication.</p>
        <p>We have so many plans in the pipeline such as after schools programs, additional workshop facilities and community programs which we hope to get going over the coming year, however these things take a lot of planning and we know that it's important to take things one step at a time.</p>
      </div>
    </div>
  </div>
);

export default StoryPage;
