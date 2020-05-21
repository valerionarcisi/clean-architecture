import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'
import { ThunkAction} from 'redux-thunk'
import { MovieEntity } from './../../entities'
import { MovieRepositoryOmDBImpl } from '../../infrastructure'
import { MovieServiceImpl } from './../../useCase'
interface GenericState<T> {
  data?: T;
  loading: true | false;
  error: null | Error;
}

const initialState: GenericState<MovieEntity> = {
  data: undefined,
  loading: false,
  error: null
}
const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovieStart(state) {
      state.loading = true
      state.error = null
    },
    fetchMovieSuccess(state, action: PayloadAction<MovieEntity>) {
      state.data = action.payload
      state.loading = false
      state.error = null
    },
    fetchMovieFailure(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export type AppThunk = ThunkAction<void, any, null, Action<string>>

export const fetchMovie = (title: string):AppThunk => async dispatch => {

  try {
    dispatch(fetchMovieStart())
    const movieRepos = new MovieRepositoryOmDBImpl()
    const movieService = new MovieServiceImpl(movieRepos)
    const result = await movieService.getMovie(title)
    dispatch(fetchMovieSuccess({...result}))
  } catch (err) {
    dispatch(fetchMovieFailure(err))
  }
}

export const {
  fetchMovieStart,
  fetchMovieSuccess,
  fetchMovieFailure
} = movieSlice.actions

export const movieReducer = movieSlice.reducer

