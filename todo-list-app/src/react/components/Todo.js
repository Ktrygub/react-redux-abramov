import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Ionicon from 'react-ionicons'

const TodoItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-size: 1.2em;
  border-radius: 3px;
  transition: background-color 1s ease-out;
  background-color: ${props => (props.isCompleted ? 'white' : '#51A39A')};
  color: ${props => (props.isCompleted ? '#000' : '#fff')};
`
const RemoveBtn = styled.i`
  float: right;
`

const Todo = ({ isCompleted, text, onClick, onDeleteBtnClick }) => (
  <TodoItem
    isCompleted={isCompleted}
    style={{
      color: isCompleted ? '#E0E0E0' : '#fff'
    }}
    onClick={onClick}
  >
    {text}
    <RemoveBtn onClick={onDeleteBtnClick}>
      <Ionicon icon="md-trash" color="#004d40" />
    </RemoveBtn>
  </TodoItem>
)
Todo.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired
}

export default Todo
