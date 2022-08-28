import React from "react";

const Checkbox = (props) => {
  return (
    <>
      <div className="field">
        <div className="control">
          <label className="checkbox has-text-weight-bold is-size-5">
            <input type="checkbox" />
            {props.children}
          </label>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
