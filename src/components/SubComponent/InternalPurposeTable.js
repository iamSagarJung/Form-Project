import React from 'react'
import Input from '../UI/Input'

const ColumnTable = () => {
  return (
    <div className='columns'>
    <div className='column is-one-fifth'>
        <Input type="date"/>
    </div>
    <div className='column is-one-fifth'>
        <Input/>
    </div>
    <div className='column is-one-fifth'>
        <Input type="date"/>
    </div>
    <div className='column is-one-fifth'>
        <Input/>
    </div>
    <div className='column is-one-fifth'>
        <Input type="number"/>
    </div>
  </div>
  )
}

export default ColumnTable
