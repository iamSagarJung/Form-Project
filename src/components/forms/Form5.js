import React from "react";
import "bulma/css/bulma.min.css";
import TravelListTable from "../Tables/TravelListTable";
import Box from "../UI/Box";
import Button from "../UI/Button";

const Form5 = () => {
  return (
    <Box className="px-5">
      <p className=" has-text-weight-bold">
        A. Travel between Countries including local to and fro from Airport,
        intercity taxis,etc.
      </p>
      <TravelListTable />
      <Button>Submit</Button>
    </Box>
  );
};

export default Form5;
