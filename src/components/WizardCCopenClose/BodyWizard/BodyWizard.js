import React from 'react';
import {Images} from './../../../constant/image';

import CardBodyWizard from './CardBodyWizard';
import SectionBodyWizard from './SectionBodyWizard';
import TitleBodyWizard from './TitleBodyWizard';

function BodyWizard (props){
  const text = 'Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas.';
  const text2 = 'Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.';
  const section = {
    title : 'Cómo funciona',
    body : 'En primer lugar, debes crear una contraseña diferente para sis pertenencias electrónicas. No podrás recuperar tus contraseñas, así que recuerdala bien.',
  }
  const section2 = {
    title:'Qué datos puedes guardar',
    body:'Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro.'
  }
  
  return(
    <div id="body-wizard" className="body-wizard-container">

      <TitleBodyWizard></TitleBodyWizard>

      <div id="cards" className="body-wizard-card-container">     
        <CardBodyWizard image={Images.iconBrainSavePass}  text={text} ></CardBodyWizard>
        <CardBodyWizard image={Images.iconSafeBox}        text={text2} ></CardBodyWizard>
      </div>

      <SectionBodyWizard content = {section} ></SectionBodyWizard>
      <SectionBodyWizard content = {section2} ></SectionBodyWizard>

    </div>
  );
}

export default BodyWizard;