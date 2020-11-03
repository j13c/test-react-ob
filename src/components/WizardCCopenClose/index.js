import React, {Component} from "react";

import HeaderWizard from "./HeaderWizard/HeaderWizard";
import BodyWizard   from "./BodyWizard/BodyWizard";
import FooterWizard from "./FooterWizard/FooterWizard";

class WizardCCOpenClose extends Component {

  constructor(props) {
    super(props);
    this.state = { step : 1}
  }

  nextStepHandler = () => {
    if(this.state.step >= 3){
      console.log('reinicio')
      this.setState( { step : 1 } );
    }else{
      this.setState( { step : this.state.step+1 } );
    }
    console.log(this.state.step)
  }

  restartStepHandler = () => {
    console.log('restart step wizard')
    this.setState( { step: 1} );
  }

  render() {
      return (
        <div id="page-container">
          
          <div id="content-wrap">
            <HeaderWizard itemActive={ this.state.step }></HeaderWizard>

            <BodyWizard step={ this.state.step }></BodyWizard>
          </div>
          
          <div id="footer">
            <FooterWizard continue={ () => this.nextStepHandler } 
                          restart= { () => this.restartStepHandler} ></FooterWizard>        
          </div>
          
        </div>
      );
  }

}

export default WizardCCOpenClose;