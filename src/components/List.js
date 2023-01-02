import React from 'react'
import ExpenseItem from './ExpenseItem'
import PropTypes from 'prop-types'

const List = ({ expenses }) => {
  return (
    <div className='d-flex flex-column rounded-2 m-1 p-3 bg-white gap-2'>
      <h2>Listado</h2>
      {expenses.map(item => (
        <ExpenseItem
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}

List.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default List
