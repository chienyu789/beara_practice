import React from 'react';

import ThreeGrid from '../../components/grid/three-grid.components';

import Customise1 from '../../assets/customise1.jpg';
import Customise2 from '../../assets/customise2.jpg';
import Customise3 from '../../assets/customise3.jpg';
import Customise4 from '../../assets/customise4.jpg';
import Customise5 from '../../assets/customise5.jpg';
import Customise6 from '../../assets/customise6.jpg';
import Customise7 from '../../assets/customise7.jpg';


import './customise.styles.scss';

const CustomisePage = () => (
    <div>
        <div className='video-container'>
        <iframe src="https://player.vimeo.com/video/278923056?background=1&autoplay=1&loop=1&byline=0&title=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title="customise" data-ready="true"></iframe>
        </div>
        <div className='customise-detail'>
            <p>Embossings can add a lot of personality to a bag. Whether it's for yourself or as a lovely gift, adding a personal touch
                 is a fantastic option.</p>
            <p>We charge a flat rate of £15. Depending on 1) the font type, 2) the position and 3) the type of bag, you can emboss up
                 to 14 characters. Times New Roman font can fit up to 7 capitals and Handwritten font is slightly smaller so can fit
                  up to 8 capital letters.</p>
            <p>Symbols are generally the same size as upper case letters and can only be used along with Times New Roman letters. The
                 quantity of letters and symbols you can use will show automatically when inputting your embossing details on the
                  product page.</p>
            <p>Please note that our embossings are now case sensitive so if you type capital or lower case letters when placing your
                 order this is what you will receive on your bag.</p>
        </div>
        <div className='cu-detail'>
            <div className='cu-box'>
                <img src={Customise1} alt='Customise1'/>
            </div>
            <div className='cu-box'>
            To start with, what would you most like to feature on your bag?
            Your initials, a special date, your university, your company, your childrens/parents initials, an important place, your full name etc? If you want a longer word or several small words then best to use lower case Handwritten font.
            As well as the text, the font type, the colour and position are also important to consider.
            You have several options to chose from to create that perfect personalised bag.
            </div>
            <div className='cu-box'>
            FONT TYPE
            —
            Times New Roman - Our original font is around 9mm tall. You can use up to 7 upper case, 9 lower case characters or a combination of both. This font is slightly more formal and is best suited to our larger bags.
            Handwritten Font - Our new font is a beautiful italic font. It’s a little smaller and more delicate and has an almost vintage signature look. You can use up to 8 upper case, 14 lower case or a combination of both. Please note you cannot combine symbols with this font.
            </div>
            <div className='cu-box'>
                <img src={Customise2} alt='Customise2'/>
            </div>
            <div className='cu-box'>
                <img src={Customise3} alt='Customise3'/>
            </div>
            <div className='cu-box'>
            COLOUR
            —
            Gold - Gold embossings can be a fantastic addition as it compliments the brass hardware beautifully.
            Natural - This is the option with no additional colour added. Having a subtle natural embossing is a nice option if you would prefer to keep the embossing simple and personal.
            </div>
            <div className='cu-box'>
            POSITION
            —
            Front - The centre of the front flap is the most popular option with embossings. It is clear and proud for all to see and makes your bag obviously unique to you.
            Inside - Placing the embossing inside the bag keeps it more personal and subtle.
            Back - If inside isn't an option consider placing your embossing on the rear of the bag. Check the bag your interested in to see what options you have.
            </div>
            <div className='cu-box'>
                <img src={Customise4} alt='Customise4'/>
            </div>
            <div className='cu-box'>
                <img src={Customise5} alt='Customise5'/>
            </div>
            <div className='cu-box'>
            SYMBOLS
            —
            Heart - What better way to show someone your love than to give them a heart. Hearts can be embossed alone or along with someone initials.
            Star - You can use two stars which look nice at either end of a word.
            Rose - An intricate symbol depicting a love a nature or a gift to a loved one.
            Crown - A hint towards the British Royal Family. Maybe you have someone who you consider to be the King or Queen of your family.
            </div>
            <div className='cu-box'>
            Year of the Rat
            —
            Celebrate the coming year by personalising your bag with our cute rat embossing. Please note the Rat cannot be combined with letters.
            </div>
            <div className='cu-box'>
                <img src={Customise6} alt='Customise6'/>
            </div>
            <div className='cu-box'>
                <img src={Customise7} alt='Customise7'/>
            </div>
            <div className='cu-box'>
            BRACELET
            —
            A classic personalised bracelet comes with embossing included.
            A piece of natural leather joined by a uniquely designed Beara Beara magnetic clasp.
            Strong hold yet quick and easy to take on and off.
            </div>
        </div>
        <div className='customise-detail'>
            <p>Capital letters are approximately 9mm tall for Times New Roman font and 7mm tall for the Handwritten font.</p>
            <p>We are able to emboss up to seven capital letters in total on most bags or five letters plus one heart or rose. Please note that we can only emboss one heart or rose on each bag. Please enter the information you would like on the product page and it will automatically confirm if this can be done or not.</p>
            <p>Please allow three additional days for your bag to be embossed.</p>
            <p>Please also note that this work is done manually so there can be slight variations in positioning and finish and although we cannot guarantee perfection we will do our utmost to get it as close to perfect as possible.</p>
            <p>Please note that all embossed bags cannot be returned or exchanged.</p>
            <p>If you have any questions about particular bag options please send us an email.</p>
        </div>
        <ThreeGrid/>
    </div>
);

export default CustomisePage;
