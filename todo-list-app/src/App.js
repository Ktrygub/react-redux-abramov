import React from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({ filter, children, store }) => {
  const { visibilityFilter } = store.getState()
  return visibilityFilter === filter ? (
    <span>{children}</span>
  ) : (
    <button
      onClick={() => {
        store.dispatch({ type: filter })
      }}
    >
      {children}
    </button>
  )
}
FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  store: PropTypes.shape({}).isRequired
}

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

class App extends React.Component {
  render() {
    const { store } = this.props
    const { todos, visibilityFilter } = store.getState()

    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <input
          ref={node => {
            this.input = node
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
              text: this.input.value
            })
            this.input.value = ''
          }}
        >
          Add todo
        </button>
        <ul>
          {visibleTodos.map(todo => (
            <li
              role="presentation"
              key={todo.id}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none'
              }}
              onClick={() =>
                store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })
              }
            >
              {todo.text}
            </li>
          ))}
        </ul>
        Show:{' '}
        <FilterLink store={store} filter="SHOW_ALL">
          All
        </FilterLink>{' '}
        <FilterLink store={store} filter="SHOW_ACTIVE">
          Active
        </FilterLink>{' '}
        <FilterLink store={store} filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </div>
    )
  }
}
App.propTypes = {
  store: PropTypes.shape({}).isRequired
}

export default App
