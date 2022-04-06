import Client from './index'

export const GetMovies = async () => {
  try {
    const response = await Client.get(
      `/discover/movie?api_key=c31f50ef10ce56826aa6c9c214aac51b`
    )
    console.log(response)
    return response.data.results
  } catch (error) {
    throw error
  }
}

export const GetDetails = async (movieId) => {
  try {
    const response = await Client.get(
      `movie/${movieId}?api_key=c31f50ef10ce56826aa6c9c214aac51b`
    )
    console.log(response.data)
    return response.data
  } catch (error) {}
}
