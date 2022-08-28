import React from "react";

const Title = (props) => {
  return (
    <>
      <div
        className={`is-size-4  has-text-weight-bold py-5 ${props.className}`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Title;
