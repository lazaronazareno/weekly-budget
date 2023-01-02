import React from 'react'
import { checkBudget } from '../utils'
import PropTypes from 'prop-types'

const BudgetControl = ({ budget, remaining, setBudget }) => {
  return (
    <div className='d-flex gap-1 px-1'>
      <span className='bg-primary fs-3 flex-grow-1 rounded'>Presupuesto Semanal: $ {budget}</span>
      <span className={`rounded fs-3 flex-grow-1 ${checkBudget(budget, remaining)}`}>Restante: $ {remaining}</span>
      <button className='btn btn-danger' onClick={() => setBudget(null)}>Reiniciar</button>
    </div>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired
}

export default BudgetControl
