import React from "react";
import Table from "../UI/Table";
import SubTravelList from "../SubComponent/SubTravelList";

const TravelListTable = () => {
  return (
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

      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
      <SubTravelList />
    </Table>
  );
};

export default TravelListTable;
