import React, { useState } from "react";
import TravelListTable from "./components/Tables/TravelListTable";
import Input from "./components/UI/Input";
 
function One() {

 
  const [inputList, setInputList] = useState([{ }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {  }]);
  };
 
  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <Input name="f"/>
            <div className="btn-box">
              {inputList.length !== 1 && <button
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
 
export default One;