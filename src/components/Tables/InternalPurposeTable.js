import React, { useState } from "react";
import ColumnTable from "../SubComponent/InternalPurposeTable";
import Button from "../UI/Button";

const InternalPurposeTable = () => {
  const [inputList, setInputList] = useState([{}]);
  

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {}]);
  };
  return (
    <div className="mb-6 box">
      <div className="columns has-text-weight-bold">
        <div className="column is-one-fifth">
          <p>Bill Date</p>
        </div>

        <div className="column is-one-fifth">
          <p>Bill Amount</p>
        </div>

        <div className="column is-one-fifth">
          <p>Settlement Date</p>
        </div>

        <div className="column is-one-fifth">
          <p>Settlement Amount</p>
        </div>

        <div className="column is-one-fifth">
          <p>Voucher No.</p>
        </div>
      </div>

      <ColumnTable />
      <ColumnTable />

      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <ColumnTable />
            <div className="is-flex">
              <div className="mx-2">
                {inputList.length !== 1 && (
                  <Button
                    className="is-danger is-light"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}
              </div>
                {inputList.length - 1 === i && (
                  <Button
                    className="is-success is-light"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
                )}
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InternalPurposeTable;
