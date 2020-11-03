import React from 'react';
import {Images} from './../../constant/image';

function InputClue(props) {

  let myRef = React.createRef();
  const {title, placeholderTxt, lengthClue} = props;
  const icon = Images.iconInfo;
  let cantChar = lengthClue;


  return (
    <div id="input-pista" className="item-container-input-clue">
      <label>{title} <img src={icon.src} alt={icon.alt} height={icon.height} width={icon.width} ></img></label>
      <input  type="text" 
              placeholder={placeholderTxt} 
              ref={myRef} ></input>
      <span>{cantChar}/60</span>
    </div>
  )
}

export default InputClue
