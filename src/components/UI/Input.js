import React from 'react'

const Input = (props) => {
  return (
    <>
      <div className="field">
  <label className="label">{props.children}</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" type={props.type} placeholder="Text input"/>
  </div> 
  </div> 
    </>
  )
}

export default Input
