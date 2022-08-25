import React from 'react'

const Radio = (props) => {
  return (
    <>
      <div className="control">
    <label className="radio has-text-weight-bold py-2">
      <input type="radio" name="question"/>
      {props.children}
    </label><br></br>
</div>
    </>
  )
}

export default Radio
