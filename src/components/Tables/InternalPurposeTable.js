import React from "react";
import Input from "../UI/Input";
import Table from "../UI/Table";

const InternalPurposeTable = () => {
  return (
    <Table>
      <tr>
        <th>Bill Date</th>
        <th>Bill Amount</th>
        <th>Settlement Date</th>
        <th>Settlement Amount</th>
        <th>Voucher No.</th>
      </tr>

      <tr>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="number" />
        </td>
      </tr>

      <tr>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="number" />
        </td>
      </tr>

      <tr>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="number" />
        </td>
      </tr>

      <tr>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="date" />
        </td>
        <td>
          <Input type="number" />
        </td>
        <td>
          <Input type="number" />
        </td>
      </tr>
    </Table>
  );
};

export default InternalPurposeTable;
