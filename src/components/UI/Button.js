import React from 'react'

const Button = (props) => {
  return (
    <>
      <div class="field is-grouped">
  <div class="control">
    <button class="button is-link">{props.children}</button>
  </div>
  </div>
    </>
  )
}

export default Button
