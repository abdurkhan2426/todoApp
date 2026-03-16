import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './counter/todoSlice'

function loadState() {
  try {
    const saved = localStorage.getItem('todos')
    return saved ? { todos: { loading: false, todos: JSON.parse(saved) } } : undefined
  } catch {
    return undefined
  }
}

function saveState(state) {
  try {
    localStorage.setItem('todos', JSON.stringify(state.todos.todos))
  } catch {
    // ignore write errors
  }
}

export const store = configureStore({
  reducer: {
    todos: todosSlice
  },
  preloadedState: loadState(),
})

store.subscribe(() => saveState(store.getState()))

