import React from 'react'

function FooterWizard(props) {
  return (
    <div id="footer-wizard" className="footer-wizard-container">
      <hr></hr>

      <div className="button-container">
        <button className="btn-cancel"   onClick={ props.restart() } >Cancelar</button>
        <button className="btn-continue" onClick={ props.continue() } >Siguiente</button>
      </div>
    </div>
  )
}

export default FooterWizard;