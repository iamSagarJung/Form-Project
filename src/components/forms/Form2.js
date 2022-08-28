import React from "react";
import "bulma/css/bulma.min.css";
import Box from "../UI/Box";
import Title from "../UI/Title";
import Column from "../UI/Column";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Form3 = () => {
  return (
    <Box className="px-5">
      <Title className="is-underlined">Approving Authorities</Title>
      <div className="columns">
        <Column>
          <Input>Hiring Manager</Input>
        </Column>

        <Column>
          <Input type="date">Date</Input>
        </Column>
      </div>

      <div className="columns">
        <Column>
          <Input>Head of Department</Input>
        </Column>

        <Column>
          <Input type="date">Date</Input>
        </Column>
      </div>

      <div className="columns">
        <Column>
          <Input>HR</Input>
        </Column>

        <Column>
          <Input type="date">Date</Input>
        </Column>
      </div>

      <div className="columns">
        <Column>
          <Input>CEO/FCO</Input>
        </Column>

        <Column>
          <Input type="date">Date</Input>
        </Column>
      </div>

      <p className="has-text-centered has-text-weight-bold my-5">
        Annex I (Attach Job Description
      </p>
      <Button>Submit</Button>
    </Box>
  );
};

export default Form3;
