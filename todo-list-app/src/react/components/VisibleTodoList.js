import { connect } from 'react-redux'

import { toggleTodo } from '../../redux/actions/actions'
import TodoList from './TodoList'

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.isCompleted)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.isCompleted)
    default:
      return todos
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
