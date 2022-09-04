import React from 'react'
import Input from '../UI/Input'

const ExpenseListTabel = () => {
  return (
    <>
      <div className='columns'>
        <div className='column is-one-fourth'>
             <Input type="number"></Input>
        </div>

        <div className='column is-one-fourth'>
        <Input placeholder="particulars"/>

        </div>

        <div className='column is-one-fourth'>
        <Input placeholder="Enter Amount Here"/>
        </div>

        <div className='column is-one-fourth'>
          <Input placeholder="Enter Details Here"/>
        </div>

      </div>
    </>
  )
}

export default ExpenseListTabel
