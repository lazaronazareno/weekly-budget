import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Expenses = ({ setExpense, setIsExpense }) => {
  const [values, setValues] = useState({
    name: '',
    value: ''
  })
  const [error, setError] = useState(false)
  const { name, value } = values

  const handleChange = e => {
    if (e.target.name === 'value') {
      setValues({
        ...values,
        [e.target.name]: parseInt(e.target.value)
      })
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
    console.log(values)
  }

  const onSubmit = e => {
    e.preventDefault()

    if (value < 1 || isNaN(value)) {
      setError(true)
      return
    }
    console.log(error)
    setError(false)

    // eslint-disable-next-line no-undef
    values.id = crypto.randomUUID()
    values.date = new Date().toLocaleDateString('es-Es')
    setExpense(values)
    setIsExpense(true)

    setValues({
      name: '',
      value: ''
    })
  }

  return (
    <form
      className='d-flex flex-column rounded-2 m-1 p-3 bg-white w-50 gap-2'
      onSubmit={onSubmit}
    >
      <h2>Agrega tus gastos</h2>

      {error
        ? <Error msj='Ambos campos son obligatorios o Presupuesto Incorrecto' />
        : null}

      <div>
        <label>Gasto</label>
        <input
          type='text'
          name='name'
          placeholder='Ej: Transporte'
          value={name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Valor</label>
        <input
          type='number'
          name='value'
          placeholder='Ej: 500'
          value={value}
          onChange={handleChange}
        />
      </div>

      <button type='submit' className='btn btn-primary'>Agregar gasto</button>
    </form>
  )
}

Expenses.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setIsExpense: PropTypes.func.isRequired
}

export default Expenses
