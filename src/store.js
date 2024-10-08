import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './counter/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice
  },
})

