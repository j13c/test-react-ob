import React from 'react';


function FeedbackMsg(props) {

  const {icon, title, content, link} = props;
  return (
    <div className="feedback-msg-container">
      
      <img src={icon.src} alt={icon.alt}  width={icon.width} height={icon.height}></img>
      
      <div className="feedback-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <hr></hr>
        <a>{link}</a>
      </div>

    </div>
  )
}

export default FeedbackMsg
