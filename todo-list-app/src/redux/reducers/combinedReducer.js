import { combineReducers } from 'redux'

import todos, * as fromTodos from './todos'
import visibilityFilter from './visibilityFilter'

const combinedReducer = combineReducers({ todos, visibilityFilter })

export default combinedReducer

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter)