import React from "react";
import Box from "../UI/Box";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Column from "../UI/Column";
import Comment from "../UI/Comment";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import Shaded from "../UI/Shaded";
import Title from "../UI/Title";

const Form1 = () => {
  return (
    <>
      <Box>
        <h2 className="title has-text-centered mt-4 ">HR Requirement</h2>
        <div className="px-5">
          <div className="columns">
            <Column>
              <Input>Requested Position Title</Input>
            </Column>

            <Column>
              <Input>Department Name</Input>
            </Column>
          </div>
          <Input type="date">Requested Date</Input>
        </div>

        <hr></hr>

        {/* employment type */}
        <div className="field px-5">
          <Title>Employment Type</Title>
          <Radio> Full Time</Radio>
          <Radio> Part Time</Radio>
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
          <Checkbox> Vacant Position</Checkbox>
          <div className="columns">
            <Column>
              <Input>Name of Current vacant Position</Input>
            </Column>

            <Column>
              <Input>Current pay grade/range</Input>
            </Column>
          </div>
          <Input>Recommended pay grade/range </Input>
        </div>

        <hr></hr>

        {/* New position */}

        <div className="px-5">
          <Checkbox>
            {" "}
            New position (Already included in Workforce Planning)
          </Checkbox>
          <div className="columns">
            <Column>
              <Input>Name of NEW position</Input>
            </Column>
            <Column>
              <Input>Budgeted pay grade/rang</Input>
            </Column>
          </div>
          <Input>Recommended pay grade/range </Input>
        </div>
        <hr></hr>

        {/* Comments */}

        <div className="px-5">
          <Checkbox>
            {" "}
            New position (Not included in Workforce Planning)
          </Checkbox>
          <div className="columns">
            <Column>
              <Input>Name of NEW position</Input>
            </Column>

            <Column>
              <Input>Recommended pay grade/range_</Input>
            </Column>
          </div>
        </div>
        <hr></hr>

        <Shaded>
          <Title>Position information/justification</Title>
          (Indicate what changes were made to the job description or provide
          justification for the new position.)
        </Shaded>

        <hr></hr>

        <Comment placeholder="please type here" className="px-5" />

        <hr></hr>
        <div className="px-5 has-text-centered">
          <Button className="button is-link">Submit</Button>
        </div>
      </Box>
    </>
  );
};

export default Form1;
