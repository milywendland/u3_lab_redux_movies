import Axios from 'axios'

const REACT_APP_API_KEY = 'c31f50ef10ce56826aa6c9c214aac51b'

const Client = Axios.get({
  baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=${REACT_APP_API_KEY}'
})

export default Client
