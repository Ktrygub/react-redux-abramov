import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import combinedReducer from './redux/reducers/combinedReducer'

import registerServiceWorker from './registerServiceWorker'
import App from './react/components/App'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(combinedReducer, persistedState || {})

store.subscribe(() => saveState({ todos: store.getState().todos }))

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
