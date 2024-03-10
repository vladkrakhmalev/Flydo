export function filterTodo(todos, category, hiddenComplited) {
  let filtredTodos = todos

  if (category.id != 0) {
    filtredTodos = filtredTodos.filter(todo => todo.category == category.id)
  }
  
  if (hiddenComplited) {
    filtredTodos = filtredTodos.filter(todo => {
      return !todo.complited
    })
  }

  return filtredTodos
}



export function validateTodo(formData) {

  if (formData.name.length < 1) {
    return 'Todo name is not entered'
  }

}