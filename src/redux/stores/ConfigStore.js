import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import persistedReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);