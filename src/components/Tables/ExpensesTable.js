import React,{useState} from "react";
import ExpenseListTabel from "../SubComponent/ExpenseListTabel";
import Button from "../UI/Button";

const ExpensesTable = () => {

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
    <div div className="box">
    <div className="columns my-2">

      <div className="column is-one-fourth">
      <p className="has-text-weight-bold" >S.No.</p>
      </div>

      <div className="column is-one-fourth">
      <p className="has-text-weight-bold" >Particulars</p>
        </div>

        <div className="column is-one-fourth">
        <p className="has-text-weight-bold" >Amount Paid</p>
        </div>

        <div className="column is-one-fourth">
        <p className="has-text-weight-bold" >Receipt Details</p>
        </div>
    </div>

    <ExpenseListTabel/>
    <ExpenseListTabel/>
    <ExpenseListTabel/>

    {inputList.map((x, i) => {
        return (
          <div key={i}>
               <ExpenseListTabel/>
            <div className=" is-flex ">
              <div className="mx-1">
            {inputList.length - 1 === i && (
                  <Button
                    className="is-success is-light"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>
                )}
                </div>
                {inputList.length !== 1 && (
                  <Button
                    className="is-danger is-light py-3 "
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}
            
              </div>
          </div>
        );
      })}
     
    </div>
  );
};

export default ExpensesTable;
