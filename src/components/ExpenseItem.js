import React from 'react'
import PropTypes from 'prop-types'

const ExpenseItem = ({ item }) => {
  return (
    <div className='d-flex gap-2 justify-content-between align-items-center border-bottom border-primary py-2 my-1'>
      <span className='text-start'>{item.name}</span>
      <span>{item.date}</span>
      <span className='bg-primary px-2 rounded-pill'>${item.value}</span>
    </div>
  )
}

ExpenseItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ExpenseItem
