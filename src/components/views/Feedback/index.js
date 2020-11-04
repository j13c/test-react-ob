import React, {Component} from "react";
import FeedbackMsg from "../../FeedbackMsg/FeedbackMsg";
import {Images} from "./../../../constant/image";

class Step3 extends Component {
  
  constructor(props){
    super(props);
    this.state={ feedback: props.feedback}
    this.content = {
      icon: Images.iconAlert,
      title: 'Ha habido un error' ,
      content: 'No hemos podido modificar tu Contraseña Maestra. Inténtalo mas tarde.',
      link: 'Volver a Password Manager',
  };
}

  render() {
    if ( this.state.feedback === true ){ 
      this.content = {
        icon:  Images.iconSucces ,
        title: '¡Tu Password Manager ya está creado!' ,
        content: 'Lorem ipsum dolor sit amet, consetrur addipsicing eloit. maecenas varius tortar nibgh' ,
        link: 'acceder'
      }
    } 
    return(
      <div>
        <FeedbackMsg  icon={this.content.icon} title={this.content.title}
                      content={this.content.content}
                      link={this.content.link} ></FeedbackMsg>
      </div>
    );
  }
}

export default Step3;