import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../store/TodoList';
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';

// Define the root state type

// Create the Redux store
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // Add other slices as needed
  },
});

// Export the store and root state type
export const useAppDispatch: () => typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook <ReturnType<typeof store.getState>>=useSelector;
