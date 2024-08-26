import { createSlice } from "@reduxjs/toolkit";


const TodoSlice=createSlice({
    name:'Todos',
    initialState:{Todo:[]},
    reducers:{
        addTodo: (state,action)=>{
            state.Todo.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.Todo = state.Todo.filter((todo,index)=>index !== action.payload)
        },
        updateTodo: (state, action) => {
            const { index, newValue } = action.payload;
            state.Todo[index] = newValue;
        }

    }

})

export const { addTodo, deleteTodo,updateTodo } = TodoSlice.actions
export default TodoSlice.reducer

 