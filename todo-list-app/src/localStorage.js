export const loadState = () =>
  JSON.parse(localStorage.getItem('TodoListStore')) || undefined

export const saveState = state => {
  localStorage.setItem('TodoListStore', JSON.stringify(state))
}
