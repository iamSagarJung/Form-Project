import React from 'react'
import Input from '../UI/Input'

const SubTravelList = () => {
  return (
<div className="columns is-mobile">
  <div className="column is-one-eighth">
  <Input  type="date"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter Time"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter  place"/>
  </div>
  <div className="column is-one-eighth">
  <Input type="date"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter Time"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter place"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter Mode"/>
  </div>
  <div className="column is-one-eighth">
  <Input placeholder="Enter Fare"/>
  </div>
</div>
  
    
  )
}

export default SubTravelList
