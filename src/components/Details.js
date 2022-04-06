import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadDetails } from '../store/actions/MovieActions'

const maptStateToProps = ({ detailsState }) => {
  return { detailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (ID) => dispatch(LoadDetails(ID))
  }
}

const Details = (props) => {
  let { ID } = useParams()

  useEffect(() => {
    props.fetchDetails(ID)
  }, [ID])

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.detailsState.details.poster_path}`}
        alt={'Movie poster'}
      />
      <h3>{props.detailsState.details.title}</h3>
      <p>{props.detailsState.details.overview}</p>
      {console.log(props.detailsState.details.title)}
    </div>
  )
}

export default connect(maptStateToProps, mapDispatchToProps)(Details)
