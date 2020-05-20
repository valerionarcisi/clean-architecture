import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { movieReducer } from 'movie-lib'

const rootReducer = combineReducers({
  movieState: movieReducer
})

export type RootState = ReturnType<typeof rootReducer>


const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch

export default store
