import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import Lior from '../lior_basic/Lior';
import { animalSlice } from '../lior_basic/liorSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    animal: animalSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
