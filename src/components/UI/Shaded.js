import React from 'react'

const Shaded = (props) => {
  return (
    <>
      <div className="field has-background-grey-light py-3">
          <p className="has-text-weight-bold px-5 ">{props.children}</p>
        </div>
    </>
  )
}

export default Shaded
