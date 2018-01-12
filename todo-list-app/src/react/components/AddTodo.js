import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addTodo } from '../../redux/actions/actions'

const Button = styled.button`
  margin-top: 40px;
  width: 96px;
  height: 38px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  transition: background-color 0.5s ease-out;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  border-radius: 3px;
  outline: 0;

  &:hover {
    background-color: #004d40;
    color: #ffffff;
  }
`

const Input = styled.input`
  margin: 4px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  outline: 0;
  background-color: #e3f9f7;
`

const AddTodo = ({ todos, dispatch }) => (
  <div>
    <Input
      innerRef={node => {
        this.input = node
      }}
    />

    <Button
      onClick={() => {
        const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0
        dispatch(addTodo(this.input.value, id))
        this.input.value = ''
      }}
    >
      Add todo
    </Button>
  </div>
)
AddTodo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps, null)(AddTodo)
