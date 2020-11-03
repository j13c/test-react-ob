import React from 'react';

import Step1 from '../../views/ProductInformation';
import Step2 from '../../views/Form';
import Step3 from '../../views/Feedback';

function BodyWizard (props){

  console.log(props.step);
  let content;
  switch (props.step) {
    case 1:
      console.log('PoductInformation');
      content = <Step1></Step1>
      break;
    case 2:
      console.log('Form');
      content = <Step2></Step2>
      break;
    case 3:
      console.log('Feedback')
      content = <Step3></Step3>
      break;
    default:
      console.log('Default: PoductInformation');
      content = <Step1></Step1>
      break;
  }

  return(
    <div id="body-wizard" className="body-wizard-container">
      {content}
    </div>
  );
}

export default BodyWizard;