import React from "react";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Comment from "../UI/Comment";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import Shaded from "../UI/Shaded";
import Title from "../UI/Title";

const Form1 = () => {
  return (
    <>
      <h2 className="title has-text-centered mt-4 ">HR Requirement</h2>
      <div className=" my-6 mx-6 px-0 box">
        <div className="box1 px-5">
          <Input>Requested Position Title</Input>
          <Input>Department Name</Input>
          <Input type="date">Requested Date</Input>
        </div>

        <hr></hr>

        {/* employment type */}
        <div className="field px-5">
          <Title>Employment Type</Title>
          <Radio>Full Time</Radio>
          <Radio>Part Time</Radio>
        </div>
        <hr></hr>

    {/* Requirement Reason */}
        <Shaded>
          <Title>Requirement Reason</Title>
          (New or updated job descriptions must be attached/mentioned for all
          positions in Annex I)
        </Shaded>

        <hr></hr>

        {/* vacant position */}

        <div className="px-5">
          <Checkbox>Vacant Position</Checkbox>
          <Input>Name of Current vacant Position</Input>
          <Input>Current pay grade/range</Input>
          <Input>Recommended pay grade/range </Input>
        </div>

        <hr></hr>

        {/* New position */}

        <div className="px-5">
          <Checkbox>
            New position (Already included in Workforce Planning)
          </Checkbox>
          <Input>Name of NEW position</Input>
          <Input>Budgeted pay grade/rang</Input>
          <Input>Recommended pay grade/range </Input>
        </div>
        <hr></hr>

        <div className="px-5">
          <Checkbox>New position (Not included in Workforce Planning)</Checkbox>
          <Input>Name of NEW position</Input>
          <Input>Recommended pay grade/range_</Input>
        </div>
        <hr></hr>

        <Shaded>
          <Title>Position information/justification</Title>
          (Indicate what changes were made to the job description or provide
          justification for the new position.)
        </Shaded>

        <hr></hr>

        <Comment placeholder="please type here" />

        <hr></hr>
        <div className="px-5">
      <Button>Submit</Button>
      </div>
      </div>
    </>
  );
};

export default Form1;
