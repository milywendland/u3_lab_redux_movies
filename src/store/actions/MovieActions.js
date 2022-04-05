import { GET_MOVIES, GET_ANIMATED_MOVIES } from '../types'
import { GetMovies } from '../../services/MovieServices'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()

      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}
