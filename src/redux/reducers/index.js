import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movieReducers from './MoviesReducer';

// save state in localStorage
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['dataMovies']
}

const dataMoviesPersistConfig = {
  key: 'listDataMovies',
  storage: storage,
  blacklist: ['loading', 'error']
}

const allReducers = combineReducers({
  movieReducers: persistReducer(dataMoviesPersistConfig, movieReducers)
});

export default persistReducer(rootPersistConfig, allReducers)