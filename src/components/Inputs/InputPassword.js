import React from 'react';
import {Images} from './../../constant/image';

function InputPassword(props) {

  const {title, placeholderTxt} = props;
  const iconInput = Images.iconSeePassInput;
  let typeInput = 'password';

  function handleTypeInput(e) {
    e.preventDefault();
    typeInput = (typeInput === 'password')? 'text' : 'password';
    console.log(typeInput)
  }
  return (
    <div id="item-input" className="item-container">
      <label>{title}</label>
      <div id="form-control" className="form-control">
        <input name="password" className="input-password" type={typeInput} placeholder={placeholderTxt}></input>
        <img onClick={handleTypeInput} src={iconInput.src} alt={iconInput.alt} height={iconInput.height} width={iconInput.width} ></img>
      </div>
    </div>
  )
}

export default InputPassword
