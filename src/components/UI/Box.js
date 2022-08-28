import React from "react";

const Box = (props) => {
  return (
    <>
      <div className={` my-6 mx-6 px-0 box has-shadow ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default Box;
