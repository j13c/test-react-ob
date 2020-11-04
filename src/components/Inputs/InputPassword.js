import React, { useState } from 'react';
import {Images} from './../../constant/image';

function InputPassword(props) {

  const {title, placeholderTxt, handleChange, validations, notEqual } = props;
  const { maxLength, minLength, pattern } = validations;

  const iconSee = Images.iconSeePassInput;
  const iconOcult = Images.iconOcultPassInput;

  const [ seePasword, setSeePassword ] = useState(false);
  const [ invalid, setInvalid ] = useState(false);
  const [ errorMsg, setErrorMsg ] = useState('');

  const handleTypeInput = ()=> {
    setSeePassword(!seePasword);
    console.log(seePasword);
  }
  const handleLocalValue = (event)=>{
    console.log(event.target.value);
  }

  const isValid = (event)=>{
    const value = event.target.value;
    if(String(value).length < minLength){
      setInvalid(true);
      setErrorMsg('Debe tener mas de '+minLength+' caracteres');
    }else if(String(value).length > maxLength){
      setInvalid(true);
      setErrorMsg('Debe tener menos de '+maxLength+' caracteres');
    }else if( pattern!=="" && pattern.test ){
      setInvalid(true);
      setErrorMsg('Debe tener una letra mayuscula,una minuscula y un numero');
    }else{
      setInvalid(false);
      setErrorMsg('');
    }
  }

  return (
    <div id="item-input" className="item-container">

      <label>{title}</label>

      <div id="form-control" className="form-control">

        <input  name="password" 
                className={(seePasword )? 'input-password':'input-password pass-hidden'} 
                type={(seePasword)? 'text':'password'}
                onKeyUp={ handleChange() }
                onChange={ handleLocalValue }
                onBlur={ isValid }
                placeholder={placeholderTxt}></input>
        
        <img  onClick={handleTypeInput} 
              src={ (seePasword )? iconOcult.src : iconSee.src} 
              alt={ (seePasword )? iconOcult.alt : iconSee.alt} 
              height={iconSee.height} 
              width={iconSee.width} ></img>        
      </div>
      <span className="pass-invalid">{(invalid)? errorMsg :''}</span>

    </div>
  )
}

export default InputPassword
