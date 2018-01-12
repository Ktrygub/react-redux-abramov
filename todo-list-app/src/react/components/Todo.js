import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TodoItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 22px;
  display: flex;
  font-size: 1.2em;
  border-radius: 3px;
  transition: background-color 1s ease-out;
  background-color: ${props => (props.isCompleted ? 'white' : '#51A39A')};
  color: ${props => (props.isCompleted ? '#000' : '#fff')};
`

const Todo = ({ isCompleted, text, onClick }) => (
  <TodoItem
    isCompleted={isCompleted}
    role="presentation"
    style={{
      color: isCompleted ? '#E0E0E0' : '#fff'
    }}
    onClick={onClick}
  >
    {text}
  </TodoItem>
)
Todo.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo
