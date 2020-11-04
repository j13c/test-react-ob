import React, { useState } from 'react';
import {Images} from './../../constant/image';

function InputClue(props) {

  const [cantChar, setCantChar] = useState(0)
  const {title, placeholderTxt, lengthClue} = props;
  const icon = Images.iconInfo;

  const handleValue = (event) => {
    const value = event.target.value;
    setCantChar(String(value).length);
  }

  return (
    <div id="input-pista" className="item-container-input-clue">
      <label>{title} <img src={icon.src} alt={icon.alt} height={icon.height} width={icon.width} ></img></label>
      <input  type="text" 
              placeholder={placeholderTxt} 
              onKeyUp={ handleValue }></input>
      <span>{cantChar}/60</span>
    </div>
  )
}

export default InputClue
