const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { text: action.text, id: action.id, isCompleted: false }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return { ...state, isCompleted: !state.isCompleted }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default todos

export const getVisibleTodos = (state, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return state
    case 'SHOW_COMPLETED':
      return state.filter(todo => todo.isCompleted)
    case 'SHOW_ACTIVE':
      return state.filter(todo => !todo.isCompleted)
    default:
      return state
  }
}

