import React from 'react';

import './customise-button.styles.scss';
import { useState } from 'react';

const CustomiseButton = ({closeClick}) => {
    const [ customiseState, setcustomiseState ] = useState({ currentstring:'', string:'' });

    const customiseChange = (e) =>{
        const text = e.currentTarget.value
        const last = text.substring(text.length-1,text.length)
        setcustomiseState({currentstring: customiseState.currentstring + last,  string: e.currentTarget.value})
    }
    const buttonClick = (e) =>{
        setcustomiseState({currentstring: customiseState.currentstring+e.currentTarget.value })
    }
    const deleteKey = (e) =>{
        const KeyID = e.keyCode;
        const text = customiseState.currentstring;
        const back = text.substring(0,text.length-1)
        switch(KeyID)
        {
            case 8://backspace
            setcustomiseState({currentstring: back});
            alert(back);
            break; 
            case 46://delete
            setcustomiseState({currentstring: back});
            break;
            default:
            break;
        }
    }
    console.log(customiseState);
    return(
    <div className='customise'>
        <div className='close' onClick={closeClick}>&#10005;</div>
        <form>
            <input type='text' name='embosing' placeholder='Type your embosing here' onChange={customiseChange} value={customiseState.currentstring} onKeyDown={deleteKey}/>
            <select name='fonts' id='fonts'>
            <option value='' disabled selected hidden>Font</option>
            <option value='times-new-roman'>Times New Roman</option>
            <option value='handwritten'>Handwritten Font</option>
            </select>
            <select name='position' id='position'>
            <option value='' disabled selected hidden>Position</option>
            <option value='top-font'>Top Font</option>
            </select>
            <select name='colour' id='colour'>
            <option value='' disabled selected hidden>Colour</option>
            <option value='natural'>Natural</option>
            <option value='gold'>Gold</option>
            </select>
            <input type='button' onClick={buttonClick} value='&#10084;' id='10'/>
            <input type='button' onClick={buttonClick} value='&#10025;' id='25'/>
            <input type='button' onClick={buttonClick} value='&#10047;' id='47'/>
            <input type='button' onClick={buttonClick} value='&#9728;' id='28'/>
        </form>
    </div>
)};

export default CustomiseButton;