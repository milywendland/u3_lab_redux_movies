const { GET_MOVIE_DETAILS } = require('../types')

const iState = {
  details: []
}

const DetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, details: action.payload }
    default:
      return { ...state }
  }
}

export default DetailsReducer
