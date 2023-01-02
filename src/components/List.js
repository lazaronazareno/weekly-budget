import React from 'react'
import ExpenseItem from './ExpenseItem'
import PropTypes from 'prop-types'

const List = ({ expenses }) => {
  return (
    <div className='mx-1'>
      <div className='top' />
      <div className='d-flex flex-column p-3 bg-white gap-2 paper'>
        <h2>Listado</h2>
        {expenses.length < 1 && <span>No hay registros.</span>}
        {expenses.map(item => (
          <ExpenseItem
            item={item}
            key={item.id}
          />
        ))}
      </div>

    </div>
  )
}

List.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default List
