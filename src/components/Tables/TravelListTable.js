import React,{useState} from "react";
import Table from "../UI/Table";
import SubTravelList from "../SubComponent/SubTravelList";
import Button from "../UI/Button";


const TravelListTable = () => {

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
    <div className="box">
      <Table>
        <tr>
          <th colSpan="3">Departure</th>
          <th colSpan="3">Arrival</th>
          <th rowSpan="2" className="is-vcentered">
            Mode(Air)
          </th>
          <th rowSpan="2" className="is-vcentered">
            Fare
          </th>
        </tr>

        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Place</th>
          <th>Date</th>
          <th>Time</th>
          <th>Place</th>
        </tr>
      </Table>
      <SubTravelList />
      <SubTravelList />

      {inputList.map((x, i) => {
        return (
          <div key={i}>
                  <SubTravelList />
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

export default TravelListTable;
