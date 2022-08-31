import React from 'react'
import Input from '../UI/Input'

const SubTravelList = () => {
  return (
    <tr>
         <td><Input type="date"/></td>
                <td><Input placeholder="Enter Time here"/> </td>
                <td><Input placeholder="Enter Place here"/> </td>
                <td><Input type="date"/></td>
                <td><Input placeholder="Enter Time here"/> </td>
                <td><Input placeholder="Enter Place here"/> </td>
                <td><Input placeholder="Enter Mode here"/> </td>
                <td><Input placeholder="Enter Fare here"/> </td>
    </tr>
  )
}

export default SubTravelList
