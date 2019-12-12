import { createSelector } from 'reselect';

const moviesSelector = state => state.movieReducers;

export const listDataMovieSelector = createSelector(
  moviesSelector,
  item => item.dataMovies
);

export const isLoadingDataSelector = createSelector(
  moviesSelector,
  item => item.loading
);

