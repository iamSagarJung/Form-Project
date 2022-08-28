import React from "react";
import Box from "../UI/Box";
import Column from "../UI/Column";
import Input from "../UI/Input";
import Title from "../UI/Title";
import Comment from "../UI/Comment";
import Button from "../UI/Button";
import InternalPurposeTable from "../Tables/InternalPurposeTable";

const Form4 = () => {
  return (
    <>
      <Box className=" px-6">
        <Title className="has-text-centered">For Internal Purpose</Title>

        <InternalPurposeTable />
        {/* -----------Comments--------- */}

        <Comment>Remarks:</Comment>
        <Title className="has-text-centered">
          TRAVELLING ALLOWANCE REIMBURSEMENT/SETTLEMENT FORM
        </Title>
        <div className="columns">
          <Column>
            <Input>Name</Input>
          </Column>
          <Column>
            <Input>Job Title</Input>
          </Column>
        </div>

        <div className="columns">
          <Column>
            <Input>Department</Input>
          </Column>

          <Column>
            <Input>Purpose of Journey</Input>
          </Column>
        </div>

        <div className="columns">
          <Column>
            <Input type="number">Advance Drawn (Rs)</Input>
          </Column>

          <Column>
            <Input type="date">Date of drawl</Input>
          </Column>
        </div>

        <hr></hr>

        <h3 className="is-underlined is-size-6 px-5 is-italic has-text-weight-semibold py-4">
          INSTRUCTIONS FOR PREPARING TRAVELLING ALLOWANCE/REIMBURSEMENT BILLS:
        </h3>
        <ol>
          <li>
            {" "}
            Claim must be properly filled in and submitted within 15 days of
            completion of journey in case advance has been drawn.
          </li>

          <li>
            Copy of paper ticket or e-ticket with boarding pass (in case of
            travel by air) should be furnished along with the T.A. bill. (Only
            If the ticket is not done by the office)
          </li>

          <li>
            Hotel/accommodation/lodging bills should invariably be enclosed for
            claims. (Only If the hotel booking is not done by the office)
          </li>
          <li>
            All contingent expenses claimed for which bills are not available
            should be self-certified.
          </li>
        </ol>
        <Button>Submit</Button>
      </Box>
    </>
  );
};

export default Form4;
