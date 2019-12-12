import {
  LOADING_GET_DATA,
  GET_DATA_MOVIES,
  GET_DATA_SUCCESSFUL,
  GET_DATA_FAIL
} from '../actions/ActionType';


//Saga effects
import { put, takeLatest, call } from 'redux-saga/effects';
import { ApiMovie } from '../api/Movies';

function* fetchMovies(action) {
  try {
    yield put({ type: LOADING_GET_DATA, loading: true}); 
    const receivedMovies = yield call(ApiMovie.getDataMovieByName, action.name);

    if(receivedMovies.results){
      yield put({ type: GET_DATA_SUCCESSFUL, receivedMovies: receivedMovies.results, loading: false }); 
    } else {
      yield put({ type: GET_DATA_FAIL, error: [], loading: false });
    }
          
  } catch (error) {        
    yield put({ type: GET_DATA_FAIL, error, loading: false });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(GET_DATA_MOVIES, fetchMovies);
}