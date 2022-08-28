import React from "react";
import Input from "../UI/Input";
import Table from "../UI/Table";

const BudgetItemTable = () => {
  return (
    <Table>
      <tr className="row1 ">
        <th>Activities</th>
        <th>Amount Requested </th>
        <th>Approved Amount</th>
      </tr>

      <tr>
        <td>
          {" "}
          <Input></Input>
        </td>
        <td>
          {" "}
          <Input></Input>
        </td>
        <td>
          {" "}
          <Input></Input>
        </td>
      </tr>

      <tr>
        <th className="has-text-centered is-vcentered">Total</th>
        <td>
          <Input></Input>
        </td>
        <td>
          <Input></Input>
        </td>
      </tr>
    </Table>
  );
};

export default BudgetItemTable;
