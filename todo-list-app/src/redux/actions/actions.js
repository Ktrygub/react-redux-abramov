const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text: text || 'empty task'
})

const toggleTodo = id => ({ type: 'TOGGLE_TODO', id })

const setVisibilityFilter = filter => ({ type: filter })

export { addTodo, toggleTodo, setVisibilityFilter }
