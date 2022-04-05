import Client from '.'

const REACT_APP_API_KEY = 'c31f50ef10ce56826aa6c9c214aac51b'

export const GetMovies = async () => {
  try {
    const res = await Client.get(
      'https://api.themoviedb.org/3/movie/550?api_key=${REACT_APP_API_KEY}'
    )

    console.log(res.data)
  } catch (error) {
    throw error
  }
}
