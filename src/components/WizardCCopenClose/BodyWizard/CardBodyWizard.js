import React from 'react'

function CardBodyWizard(prop) {
  const { image, text } = prop;
  return (
    <div className="card-container">
      <img src={image.src} alt={image.name} height={image.height} width={image.width}  ></img>
      <p>{text}</p>
    </div>
  )
}

export default CardBodyWizard
