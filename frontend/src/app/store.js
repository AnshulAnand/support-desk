import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/auth/ticketSlice'
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer,
  },
})
