import {
  LOADING_GET_DATA,
  GET_DATA_MOVIES
} from './ActionType';

export const startGetDataApi = () => ({
  type: LOADING_GET_DATA
});

export const getDataApi = (name) => ({
  type: GET_DATA_MOVIES,
  name
});