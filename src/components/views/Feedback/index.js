import React, {Component} from "react";
import FeedbackMsg from "../../FeedbackMsg/FeedbackMsg";
import {Images} from "./../../../constant/image";

class Step3 extends Component {
  
  constructor(props){
    super(props);
    this.state={ feedback: props.feedback}
    this.content = <FeedbackMsg  icon={Images.iconAlert} 
                                title='Ha habido un error' 
                                content='No hemos podido modificar tu Contraseña Maestra. Inténtalo mas tarde.' 
                                link='Volver a Password Manager'></FeedbackMsg>;
}

  render() {
    if ( this.state.feedback === true ){ 
      this.content = <FeedbackMsg  icon={Images.iconSucces} 
                                    title='¡Tu Password Manager ya está creado!' 
                                    content='Lorem ipsum dolor sit amet, consetrur addipsicing eloit. maecenas varius tortar nibgh' 
                                    link='acceder'></FeedbackMsg>;
    } 
    return(
      <div>
        {this.content}
      </div>
    );
  }
}

export default Step3;