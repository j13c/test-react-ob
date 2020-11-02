import React, {Component} from "react";

import HeaderWizard from "./HeaderWizard/HeaderWizard";
import BodyWizard   from "./BodyWizard/BodyWizard";

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

  render() {
      return (
        <div>
          <HeaderWizard itemActive={ this.state.step }></HeaderWizard>
          <BodyWizard step={ this.state.step }></BodyWizard>
          <footer>
            <button onClick={ this.nextStepHandler } >+</button>
          </footer>
        </div>
      );
  }

  nextStep(){
    if(this.state.step >= 3){
      console.log('reinicio')
      this.setState( { step : 1 } );
    }else{
      this.setState( { step : this.state.step+1 } );
    }
    console.log(this.state.step)
  }
}

export default WizardCCOpenClose;