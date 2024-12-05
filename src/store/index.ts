import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer from '../services/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here as you develop more features
  },
  // Optional: Add middleware or enhancers
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false  // Disable serializable check for now
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for typed useDispatch and useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;