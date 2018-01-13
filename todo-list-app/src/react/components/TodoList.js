import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Todo from './Todo'

const Activities = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
`

const TodoList = ({ todos, onClick, onDeleteBtnClick }) => (
  <Activities>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onClick(todo.id)}
        onDeleteBtnClick={() => onDeleteBtnClick(todo.id)}
      />
    ))}
  </Activities>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired
}

export default TodoList
