import {
  LOADING_GET_DATA,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAIL
} from '../actions/ActionType';

const initState = {
  loading: false,
  dataMovies: [],
  error: null
}

const movies = (state = initState, action) => {
  switch (action.type) {
    case LOADING_GET_DATA:
      return { ...state, loading: action.loading }
    case GET_DATA_SUCCESSFUL: 
      return { ...state, dataMovies: action.receivedMovies, loading: action.loading }
    case GET_DATA_FAIL:
      return { ...state, error: action.error, loading: action.loading }
    default:
      return state
  }
}

export default movies