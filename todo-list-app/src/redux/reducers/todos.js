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
      return [
        ...state.slice(action.id),
        ...state.slice(action.id + 1, state.lenght)
      ]
    default:
      return state
  }
}

export default todos
