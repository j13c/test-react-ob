import React from 'react'

function SectionBodyWizard(prop) {

  const {title, body} = prop.content

  return (
    <div id="secction" className="section-container">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default SectionBodyWizard