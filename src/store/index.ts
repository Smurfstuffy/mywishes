import {configureStore} from '@reduxjs/toolkit';
import wishReducer from './slices/wishes/wishSlice';

const store = configureStore({
  reducer: {
    wishes: wishReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
