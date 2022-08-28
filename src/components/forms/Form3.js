import React from "react";
import "bulma/css/bulma.min.css";
import Input from "../UI/Input";
import Title from "../UI/Title";
import Column from "../UI/Column";
import Box from "../UI/Box";
import Button from "../UI/Button";
import BudgetItemTable from "../Tables/BudgetItemTable";

const Form2 = () => {
  return (
    <>
      <Box className="px-5">
        {/*---------- Learning Request FOrm----------- */}
        <Title className="has-text-centered">Learning Request Form</Title>
        <h4 className="is-size-5">Details Include: (Learning Request Form)</h4>
        <div className="px-6">
          <p>Course Name</p>
          <p>Purpose of Request (How it going to be helpful)</p>
          <p>Your plan to complete it by when (its timeline)</p>
          <p>Course amount</p>
          <p>Source of that particular course (learning gateway)</p>
        </div>

        {/* ----------TEAM BUDGET APPROVAL FORM--------- */}
        <Title className="has-text-centered">TEAM BUDGET APPROVAL FORM</Title>
        <div className="columns">
          <Column>
            <Input>Team Name</Input>
          </Column>
          <Column>
            <Input>No.of participants</Input>
          </Column>
        </div>

        <div className="columns">
          <Column>
            <Input type="date">Event Date</Input>
          </Column>
          <Column>
            <Input>Event Location</Input>
          </Column>
        </div>

        <Input>Participants Names</Input>
        <Input>Occasion</Input>

        {/*---------- Budget Items-------- */}
        <Title className="has-text-centered is-underlined">BUDGET ITEMS</Title>
        <BudgetItemTable />

        {/* -----------Approval-------- */}
        <Title className="has-text-centered is-underlined">APPROVAL</Title>
        <div className="columns">
          <Column>
            <Input>Manager</Input>
          </Column>
          <Column>
            <Input>HR</Input>
          </Column>
        </div>
        <Input>Finance</Input>
        <Button>Submit</Button>
      </Box>
    </>
  );
};

export default Form2;
