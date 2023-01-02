export const checkBudget = (budget, remaining) => {
  let className

  if ((budget / 4) > remaining) {
    className = 'bg-danger'
  } else if ((budget / 2) > remaining) {
    className = 'bg-warning'
  } else {
    className = 'bg-success'
  }

  return className
}
