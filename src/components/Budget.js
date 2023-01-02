import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

function Budget ({ setBudget, setRemaining, setShowBudget }) {
  const [value, setValue] = useState(0)
  const [error, setError] = useState(false)

  const handleValue = e => {
    setValue(parseInt(e.target.value))
    console.log(value)
  }

  const onSubmit = e => {
    e.preventDefault()

    if (value < 1 || isNaN(value)) {
      setError(true)
      return
    }
    console.log(error)
    setError(false)
    setBudget(value)
    setRemaining(value)
    setShowBudget(false)
  }

  return (
    <div className='container bg-white p-5 rounded-5 w-50'>
      <h1>Coloca tu Presupuesto</h1>
      {error ? <Error msj='El Presupuesto es incorrecto' /> : null}
      <form
        className='d-flex flex-column gap-2'
        onSubmit={onSubmit}
      >
        <input
          type='number'
          placeholder='Presupuesto inicial'
          onChange={handleValue}
        />
        <button
          className='btn btn-primary'
          type='submit'
        >Definir Presupuesto
        </button>
      </form>
    </div>
  )
}

Budget.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowBudget: PropTypes.func.isRequired
}

export default Budget
