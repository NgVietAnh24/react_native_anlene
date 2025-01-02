import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    // user: userReducer,
  },
  // Optional: Cách tùy chỉnh middleware
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
