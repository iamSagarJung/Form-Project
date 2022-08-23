import React from "react";
import "./Form1.css";

const Form1 = () => {
  return (
    <>
      <h2 className="title">HR Requirement Form</h2>
      <form className="form-container1">
        <div className="box1">
          <label htmlFor="position">Requested Position Title</label>
          <input type="text" id="position" name="position"></input>

          <label htmlFor="department">Department Name</label>
          <input type="text" id="department" name="department" />

          <label htmlFor="Rdate">Requested Date</label>
          <input type="date" id="Rdate" name="Rdate" />
        </div>

        <div className="line"></div>

        <div className="box2">
          <label className="title" htmlFor="employment-type1">
            Employment Time
          </label>
          <br></br>
          <input type="radio" name="employment-type" value="Full Time" />
          Full Time<br></br>
          <input type="radio" name="employment-type" value="Part Time" />
          Part Time
        </div>

        <div className="line"></div>
        <div className="shaded">
          <h4 className="title">Requirement Reason</h4>
          <p>
            (New or updated job descriptions must be attached/mentioned for all
            positions in Annex I)
          </p>
        </div>
        <div className="line"></div>

        <h3 className="checkbox ">
          <input type="checkbox" name="" value="Vacant Position" /> Vacant
          Position
        </h3>

        <div className="box3">
          <label htmlFor="Cposition">Name of CURRENT vacant position</label>
          <br></br>
          <input type="text" id="Cposition " name="Cposition " />
          <br></br>

          <label htmlFor="Cpay">Current pay grade/range</label>
          <br></br>
          <input type="text" id="Cpay " name="Cpay " />
          <br></br>

          <label htmlFor="Cposition">Name of CURRENT vacant position</label>
          <br></br>
          <input type="text" id="Rpay " name="Cposition " />
          <br></br>

          <label htmlFor="Cposition">Recommended pay grade/range</label>
          <br></br>
          <input type="text" id="Rpay " name="Rpay " />
          <br></br>
        </div>
      </form>
    </>
  );
};

export default Form1;
