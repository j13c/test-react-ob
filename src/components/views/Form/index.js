import React, {Component} from "react";
import InputClue from "../../Inputs/InputClue";
import InputPassword from "../../Inputs/InputPassword";
import SectionBodyWizard from "../../WizardCCopenClose/BodyWizard/SectionBodyWizard";
import TitleBodyWizard from "../../WizardCCopenClose/BodyWizard/TitleBodyWizard";

class Step2 extends Component {

  section = {title: '',body: 'En primer lugar, debes crear una constraseña diferentes para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.'};
  section2 = {title:'', body:'También puedes crear una pista que te ayude a recordar tu contraseña maestra.'};
  title = "Crea tu Contraseña Maestra";
  placeholderTxt = "Inserte tu contraseña";
  title2 = "Repite tu Contraseña Maestra";
  placeholderTxt2 = "Repite tu contraseña";

  title3 = "Crea tu pista para recordar tu contraseña (opcional)";
  placeholderTxt3= "Introduce tu pista";

  lengthClue = 0;


  constructor(props){
    super(props);

    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangePassConfirm = this.handleChangePassConfirm.bind(this);

    this.state = {
      ValuePassword: "",
      ValueConfirmPassword: ""
    }
  }

  handleChangePass(event) {
    this.setState({ValuePassword: event.target.value});
  }

  handleChangePassConfirm(event) {
    this.setState({ValueConfirmPassword: event.target.value});
  }

  render(){
    console.log('FormFeedBack');
    console.log(this.state);

    const aux = {
      maxLength:24,
      minLength:8,
      pattern: /([A-Z]*)+([a-z]*)+([0-9])/
    }

    return (
      <div>

        <TitleBodyWizard></TitleBodyWizard>

        <SectionBodyWizard content={this.section} ></SectionBodyWizard>

        <div id="form-password-manager">

          <div id="inputs-password" className="inputs-password">

            <InputPassword  title={this.title} 
                            placeholderTxt={this.placeholderTxt}
                            handleChange={ ()=> this.handleChangePass} 
                            validations={aux} 
                            notEqual={false}></InputPassword>

            <InputPassword  title={this.title2} 
                            placeholderTxt={this.placeholderTxt2} 
                            handleChange={ ()=> this.handleChangePassConfirm} 
                            validations={aux} 
                            notEqual={false}></InputPassword>

          </div>

          <SectionBodyWizard content={this.section2} ></SectionBodyWizard>
          <InputClue title={this.title3} placeholderTxt={this.placeholderTxt3} lengthClue ={this.lengthClue} ></InputClue>
        </div>
      </div>
    );
  }
}

export default Step2;