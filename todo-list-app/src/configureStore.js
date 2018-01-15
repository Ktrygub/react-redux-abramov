import { createStore } from 'redux'

import combinedReducer from './redux/reducers/combinedReducer'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(combinedReducer, persistedState || {})

  store.subscribe(() => saveState({ todos: store.getState().todos }))

  return store
}

export default configureStore
