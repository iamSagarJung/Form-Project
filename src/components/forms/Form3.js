import React from "react";
import "bulma/css/bulma.min.css";
import Input from "../UI/Input";
import Title from "../UI/Title";
import Column from "../UI/Column";
import Box from "../UI/Box";
import Button from "../UI/Button";
import ExpensesTable from "../Tables/ExpensesTable";
import TravelListTable from "../Tables/TravelListTable";


const Form2 = () => {
  return (
    <Box className=" px-6">

    <Title className="has-text-centered">
      TRAVELLING ALLOWANCE REIMBURSEMENT/SETTLEMENT FORM
    </Title>
    <div className="columns">
      <Column>
        <Input placeholder="Enter Name">Name</Input>
      </Column>
      <Column>
        <Input placeholder="Enter Job Title">Job Title</Input>
      </Column>
    </div>

    <div className="columns">
      <Column>
        <Input placeholder="Enter Department">Department</Input>
      </Column>

      <Column>
        <Input placeholder="Enter Purpose of Journey">Purpose of Journey</Input>
      </Column>
    </div>

    <div className="columns">
      <Column>
        <Input placeholder="Enter Advance Drawn (Rs)" type="number">Advance Drawn (Rs)</Input>
      </Column>

      <Column>
        <Input placeholder="Enter Date of drawl" type="date">Date of drawl</Input>
      </Column>
    </div>

    <hr></hr>

    {/* ----------------------instructions------------------- */}

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


{/* --------------------------travel list table------------------- */}
    <p className=" has-text-weight-bold py-5">
        A. Travel between Countries including local to and fro from Airport,
        intercity taxis,etc.
      </p>
      <TravelListTable />


{/* ---------------------------------expenses table----------------------- */}
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
            <Input placeholder="Enter No.of Enclosures">No.of Enclosures</Input>
          </Column>

          <Column>
            <Input placeholder="Enter Mobile No.">Mobile No.</Input>
          </Column>
        </div>
      </ul>

      <p className="is-size-5 has-text-weight-bold py-5">
        Certified that the claimant has made the travel and other expenses in
        connection with the work related to the project/consultancy
      </p>

      <div className="columns">
        <Column>
          <Input placeholder="Enter Name ">Name</Input>
        </Column>

        <Column>
          <Input placeholder="Enter " type="date">Date</Input>
        </Column>
      </div>

      <div className="columns">
        <Column>
          <Input placeholder="Enter Mobile No" type="number">Mobile No</Input>
        </Column>

        <Column>
          <Input placeholder="Enter ">Signature</Input>
        </Column>
      </div>

      <Title>
        I certify that the leave of kind due was sanctioned to the claimant.
      </Title>
      <div className="columns">
        <Column>
          <Input placeholder="Enter here">Head of the Dept.</Input>
        </Column>

        <Column>
          <Input placeholder="Enter Name">Name</Input>
        </Column>
      </div>
    <Button>Submit</Button>
  </Box>
  );
};

export default Form2;
