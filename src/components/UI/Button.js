import React from "react";

const Button = (props) => {
  return (
    <>
      <div className="field is-grouped">
        <div className="control">
          <button
            className={`button has-background-primary px-5 mt-5 has-text-weight-bold ${props.className}`}
          >
            {props.children}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
