import { connect } from 'react-redux'

import { toggleTodo, removeTodo } from '../../redux/actions/actions'
import TodoList from './TodoList'
import {getVisibleTodos} from '../../redux/reducers/combinedReducer'


const mapStateToProps = state => ({
  todos: getVisibleTodos(state, state.visibilityFilter)
})

// const mapDispatchToProps = dispatch => ({
//   onClick: id => dispatch(toggleTodo(id)),
//   onDeleteBtnClick: id => dispatch(removeTodo(id))
// })

const VisibleTodoList = connect(mapStateToProps, {
  onClick: toggleTodo,
  onDeleteBtnClick: removeTodo
})(TodoList)

export default VisibleTodoList
