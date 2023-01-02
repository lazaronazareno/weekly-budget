import React from 'react'
import { checkBudget } from '../utils'
import PropTypes from 'prop-types'

const BudgetControl = ({ budget, remaining, setBudget, setRemaining, setExpenses }) => {
  const handleReset = () => {
    setBudget(null)
    setRemaining(null)
    setExpenses([])
  }

  return (
    <div className='container-fluid d-flex gap-1 px-1 flex-wrap text-white'>
      <span className='bg-primary fs-3 flex-grow-1 rounded'>Presupuesto Semanal: ${budget}</span>
      <span className={`rounded fs-3 flex-grow-1 ${checkBudget(budget, remaining)}`}>Restante: ${remaining}</span>
      <button className='btn btn-danger' onClick={handleReset}>Reiniciar</button>
    </div>
  )
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setExpenses: PropTypes.func.isRequired
}

export default BudgetControl
