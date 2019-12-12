import { all, call } from 'redux-saga/effects';
import { watchFetchMovies } from './MoviesSaga';

export default function* rootSaga() {
  yield all([
    call(watchFetchMovies)
  ]);              
}