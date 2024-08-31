import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

// export const createAppSlice = buildCreateSlice({
//   creators: { asyncThunk: asyncThunkCreator },
// })

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
  },
  reducers: (create) => ({
    deleteTodo: create.preparedReducer(
      (id) => {
        return { payload: {id}}

      },
      
      (state, action) => {
      state.todos.forEach((item, index) => {
        if(item.id === action.payload.id){
          state.todos.splice(index, 1)
        }
      })
    }),
    updateTodo: create.preparedReducer(
      (title, status, id) => {
        return { payload: {title, status, id}}

      },
      
      (state, action) => {
      state.todos.forEach((item, index) => {
        if(item.id === action.payload.id){
          state.todos[index].text = action.payload.title
          state.todos[index].status = action.payload.status
        }
      })
    }),
    checkboxTodo: create.preparedReducer(
      (id) => {
        return { payload: {id}}

      },
      
      (state, action) => {
      state.todos.forEach((item, index) => {
        if(item.id === action.payload.id){
          if(state.todos[index].status === "Completed"){
                state.todos[index].status = "Incomplete"
            } else {
                state.todos[index].status = "Completed"
            }
        }
      })
    }),
    addTodo: create.preparedReducer(
      (text, status) => {
        const id = nanoid()
        return { payload: { id, text, status } }
      },
      // action type is inferred from prepare callback
      (state, action) => {
        state.todos.push(action.payload)
      }
    ),
    // fetchTodo: create.asyncThunk(
    //   async (id, thunkApi) => {
    //     const res = await fetch(`myApi/todos?id=${id}`)
    //     return await res.json()
    //   },
    //   {
    //     pending: (state) => {
    //       state.loading = true
    //     },
    //     rejected: (state, action) => {
    //       state.loading = false
    //     },
    //     fulfilled: (state, action) => {
    //       state.loading = false
    //       state.todos.push(action.payload)
    //     },
    //   }
    // ),
  }),
})

export const { addTodo, deleteTodo, checkboxTodo, updateTodo } = todosSlice.actions


export default todosSlice.reducer





// import { createSlice } from '@reduxjs/toolkit'

// const initialState = { value: 0 }

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value++
//     },
//     decrement(state) {
//       state.value--
//     },
//     incrementByAmount(state, action) {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer

