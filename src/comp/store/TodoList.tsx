import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../model/model';

interface TodoState {
  tasks: Todo[];
}

const initialState: TodoState = {
  tasks: [],
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ todo: string }>) => {
      // Create a new array with the existing tasks and the new task
      state.tasks = [
        ...state.tasks,
        {
          id: Date.now(),
          todo: action.payload.todo,
          isdone: false,
        },
      ];
    },
    deleteTask : (state,action : PayloadAction<{id : number}>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },
    doneTask : (state ,action : PayloadAction<{todol : Todo}>) => {
      
      const updatedTodos = state.tasks.map((task) =>
            task.id === action.payload.todol.id ? { ...task, isdone: !action.payload.todol.isdone } : task
        );
        state.tasks = updatedTodos;
    },
    editTask: (state, action: PayloadAction<{ id: number, todotask: string }>) => {
      state.tasks = state.tasks.map((todo) => {
        return todo.id === action.payload.id ? { ...todo, todo: action.payload.todotask } : todo;
      });
    },
  },
});

export const { addTask,deleteTask ,doneTask,editTask} = TodoSlice.actions;

export default TodoSlice.reducer;
