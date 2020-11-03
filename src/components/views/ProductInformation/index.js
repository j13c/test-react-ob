import React, {Component} from "react";
import {Images} from './../../../constant/image';

import CardBodyWizard from "../../WizardCCopenClose/BodyWizard/CardBodyWizard";
import SectionBodyWizard from "../../WizardCCopenClose/BodyWizard/SectionBodyWizard";
import TitleBodyWizard from "../../WizardCCopenClose/BodyWizard/TitleBodyWizard";


class Step1 extends Component {

  text = 'Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.';
  text2 = 'Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.';
  section = {
    title : 'Cómo funciona',
    body : 'En primer lugar, debes crear una contraseña diferente para sis pertenencias electrónicas. No podrás recuperar tus contraseñas, así que recuerdala bien.',
  }
  section2 = {
    title:'Qué datos puedes guardar',
    body:'Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro.'
  }

  render() {
    return (
      <div>
        <TitleBodyWizard></TitleBodyWizard>
        <div id="cards" className="body-wizard-card-container">     
          <CardBodyWizard image={Images.iconBrainSavePass}  text={this.text} ></CardBodyWizard>
          <CardBodyWizard image={Images.iconSafeBox}        text={this.text2} ></CardBodyWizard>
        </div>

        <SectionBodyWizard content = {this.section} ></SectionBodyWizard>
        <SectionBodyWizard content = {this.section2} ></SectionBodyWizard>
      </div>
    );
  }
}

export default Step1;