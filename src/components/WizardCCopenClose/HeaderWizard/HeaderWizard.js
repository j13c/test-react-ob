import React, {Component } from "react";
/* assets */

function HeaderWizard (props) {
  
  let array = ["","","",""];
  array[ props.itemActive ] = "active";
  /* constructor(props){
    super(props);
    let array = ["","","",""];
    array[ props.itemActive ] = "active";
    this.state = { 
      itemActive : props.itemActive,
      cantItems: props.items | 3,
      styleItem: array
    }
    console.log(this.state)
  } */


  /* render() { */
    return(
      <div className="header-wizard">
        <ul className="progressbar">
          <li id="1" className={array[1]}></li>
          <li id="2" className={array[2]}></li>
          <li id="3" className={array[3]}></li>
        </ul>
      </div>
    );
  /* } */
  

}

export default HeaderWizard;