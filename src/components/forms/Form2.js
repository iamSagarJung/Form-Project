import React from "react";
import "bulma/css/bulma.min.css";
import Box from "../UI/Box";
import Title from "../UI/Title";
import Column from "../UI/Column";
import Input from "../UI/Input";
import Button from "../UI/Button";
import BudgetItemTable from "../Tables/BudgetItemTable";
import InternalPurposeTable from "../Tables/InternalPurposeTable";
import Comment from "../UI/Comment";


const Form3 = () => {
  return    <Box className="px-5">
 
  {/* ----------TEAM BUDGET APPROVAL FORM--------- */}
  <Title className="has-text-centered">TEAM BUDGET APPROVAL FORM</Title>
  <div className="columns">
    <Column>
      <Input placeholder="Enter Team Name" >Team Name</Input>
    </Column>
    <Column>
      <Input placeholder="Enter No.of participants" >No.of participants</Input>
    </Column>
  </div>

  <div className="columns">
    <Column>
      <Input type="date">Event Date</Input>
    </Column>
    <Column>
      <Input placeholder="Enter Event Location" >Event Location</Input>
    </Column>
  </div>

  <Input placeholder="Enter Participants Names" >Participants Names</Input>
  <Input placeholder="Enter Occasion " >Occasion</Input>

  {/*---------- Budget Items-------- */}
  <Title className="has-text-centered is-underlined">BUDGET ITEMS</Title>
  <BudgetItemTable />

  {/* -----------Approval-------- */}
  <Title className="has-text-centered is-underlined">APPROVAL</Title>
  <div className="columns">
    <Column>
      <Input placeholder="Enter here" >Manager</Input>
    </Column>
    <Column>
      <Input placeholder="Enter here">HR</Input>
    </Column>
  </div>
  <Input placeholder="Enter " >Finance</Input>


  <Title className="has-text-centered">For Internal Purpose</Title>

<InternalPurposeTable />

{/* -----------Comments--------- */}
<Comment>Remarks:</Comment>

  <Button>Submit</Button>
</Box>
   
  
};

export default Form3;
