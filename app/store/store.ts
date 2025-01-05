import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import imageReducer from '../slices/imageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    images: imageReducer,
  },
  // Optional: Cách tùy chỉnh middleware
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
