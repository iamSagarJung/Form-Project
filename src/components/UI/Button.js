import React from "react";

const Button = (props) => {
  return (
    <>
      <div className="field is-grouped">
        <div className="control">
          <button
            className={`button  has-text-weight-bold ${props.className}`}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
