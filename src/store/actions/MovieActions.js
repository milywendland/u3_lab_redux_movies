import { GET_MOVIES, GET_MOVIE_DETAILS } from '../types'
import { GetMovies, GetDetails } from '../../services/MovieServices'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      console.log(movies)
      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadDetails = (ID) => {
  return async (dispatch) => {
    try {
      const details = await GetDetails(ID)

      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}
