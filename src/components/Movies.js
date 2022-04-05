import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'

const maptStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div>
      <h2>MOVIES</h2>
    </div>
  )
}

export default Movies
