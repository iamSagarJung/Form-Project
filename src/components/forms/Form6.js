import React from "react";
import Box from "../UI/Box";
import Column from "../UI/Column";
import Input from "../UI/Input";
import ExpensesTable from "../Tables/ExpensesTable";
import Title from "../UI/Title";
import Button from "../UI/Button";

const Form6 = () => {
  return (
    <Box className="px-5">
      <p className=" has-text-weight-bold">
        B. Other Expenses e.g. Lodging, Fooding, Boarding, Registration fee,
        Visa fee, Insurance etc. (Only if not done by company)
      </p>
      <ExpensesTable />

      <Title>Certified that</Title>

      <ul>
        <li>
          ● All claims mentioned in this form correspond to actual expenditure
          incurred by me for e for which no reimbursements/claims have been made
          from any other source (Govt./Private/Others).
        </li>
        <li>
          ● I was not provided with any free
          boarding/lodging/conveyance/registration fee waiver/travel coupons for
          which claim has been made.
        </li>

        <div className="columns py-5 ">
          <Column>
            <Input>No.of Enclosures</Input>
          </Column>

          <Column>
            <Input>Mobile No.</Input>
          </Column>
        </div>
      </ul>

      <p className="is-size-5 has-text-weight-bold py-5">
        Certified that the claimant has made the travel and other expenses in
        connection with the work related to the project/consultancy
      </p>

      <div className="columns">
        <Column>
          <Input>Name</Input>
        </Column>

        <Column>
          <Input type="date">Date</Input>
        </Column>
      </div>

      <div className="columns">
        <Column>
          <Input type="number">Mobile No</Input>
        </Column>

        <Column>
          <Input>Signature</Input>
        </Column>
      </div>

      <Title>
        I certify that the leave of kind due was sanctioned to the claimant.
      </Title>
      <div className="columns">
        <Column>
          <Input>Head of the Dept.</Input>
        </Column>

        <Column>
          <Input>Name</Input>
        </Column>
      </div>

      <Button>Submit</Button>
    </Box>
  );
};

export default Form6;
