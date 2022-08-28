import React from "react";

const Shaded = (props) => {
  return (
    <>
      <div className="field has-background-grey-light py-3">
        <div className="has-text-weight-bold px-5 ">{props.children}</div>
      </div>
    </>
  );
};

export default Shaded;
