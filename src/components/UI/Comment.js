import React from "react";

const Comment = (props) => {
  return (
    <>
      <div className="px-5">
        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder={props.placeholder}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
