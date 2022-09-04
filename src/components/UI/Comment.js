import React from "react";

const Comment = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="field">
          <label className="label">{props.children}</label>
          <div className="control">
            <textarea rows="10"
              className="textarea"
              placeholder={props.placeholder}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
