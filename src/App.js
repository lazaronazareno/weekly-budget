/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import Budget from './components/Budget'
import BudgetControl from './components/BudgetControl'
import Expenses from './components/Expenses'
import List from './components/List'

function App () {
  let initialExpenses = JSON.parse(localStorage.getItem('expenses'))
  if (!initialExpenses) {
    initialExpenses = []
  }
  let initialBudget = JSON.parse(localStorage.getItem('budget'))
  if (!initialBudget) {
    initialBudget = 0
  }
  let initialRemainingBudget = JSON.parse(localStorage.getItem('remainingBudget'))
  if (!initialRemainingBudget) {
    initialRemainingBudget = 0
  }
  const [budget, setBudget] = useState(initialBudget)
  const [remaining, setRemaining] = useState(initialRemainingBudget)
  const [showBudget, setShowBudget] = useState(true)
  const [expenses, setExpenses] = useState(initialExpenses)
  const [expense, setExpense] = useState({})
  const [isExpense, setIsExpense] = useState(false)
  console.log(showBudget)

  useEffect(() => {
    if (isExpense) {
      setExpenses([
        ...expenses,
        expense
      ])

      const budgetRemaining = remaining - expense.value
      setRemaining(budgetRemaining)

      setIsExpense(false)
    }
    console.log(expenses)
  }, [expense])

  useEffect(() => {
    if (initialExpenses) {
      localStorage.setItem('expenses', JSON.stringify(expenses))
    } else {
      localStorage.setItem('expenses', JSON.stringify([]))
    }
  }, [expenses])

  useEffect(() => {
    localStorage.setItem('budget', budget)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('remainingBudget', remaining)
  }, [remaining])

  return (
    <div className='App p-3'>
      <h1>Balance semanal</h1>

      {!budget
        ? (
          <Budget
            setBudget={setBudget}
            setRemaining={setRemaining}
            setShowBudget={setShowBudget}
          />
          )
        : (
          <>
            <BudgetControl
              budget={budget}
              remaining={remaining}
              setBudget={setBudget}
              setRemaining={setRemaining}
              setExpenses={setExpenses}
            />
            <div className='d-flex m-3 container-fluid notes'>
              <Expenses
                setExpense={setExpense}
                setIsExpense={setIsExpense}
              />
              <div className='d-flex flex-column w-50 m-1'>
                <List expenses={expenses} />
              </div>
            </div>
          </>
          )}
    </div>
  )
}

export default App
