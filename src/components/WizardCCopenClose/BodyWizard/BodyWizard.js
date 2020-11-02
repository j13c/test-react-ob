import React from 'react';
import TitleBodyWizard from './TitleBodyWizard';

function BodyWizard (props){

  return(
    <div id="body-wixard" className="body-wizard-container">

      <TitleBodyWizard></TitleBodyWizard>

      <div id="cards">

        <div id="item-1">
          <em></em>
          <p>Guarda aquí todas tus contraseñas, datos 
            o cualquier información, olvida las notas
            de papel y las aplicaciones no protegidas.</p>
        </div>
        
        <div id="item-2">
          <em></em>
          <p>Crea tu clave maestra: solo tú podrás
            acceder a tus secretos con ella.
          </p>
        </div>

      </div>

      <div id="secction-2">
        <h3>Cómo funciona</h3>
        <p>En primer lugar, debes crear una contraseña diferente para sis pertenencias electrónicas. No podrás
          recuperar tus contraseñas, así que recuerdala bien.</p>
      </div>

      <div id="secction-3">
        <h3>Qué datos puedes guardar</h3>
        <p>Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de
          tus dispositivos o cualquier información que necesites tener en un lugar seguro.
        </p>
      </div>

    </div>
  );
}

export default BodyWizard;