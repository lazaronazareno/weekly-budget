import React from 'react'
import PropTypes from 'prop-types'

const ExpenseItem = ({ item }) => {
  return (
    <div className='color-paper blue fs-6 my-2'>
      <div className='top-tape' />
      <div className='w-100'>
        <span className='fs-4'>{item.name}</span>
      </div>
      <span>{item.date}</span>
      <span className='bg-primary px-2 rounded-pill'>${item.value}</span>
    </div>
  )
}

ExpenseItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ExpenseItem
