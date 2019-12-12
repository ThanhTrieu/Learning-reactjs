import React from 'react';
import { Spin } from 'antd';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, sagaMiddleware } from './stores/ConfigStore';
import rootSaga from './saga'
import App from './components/App';

//run the saga
sagaMiddleware.run(rootSaga);

const AppMovies = () => (
  <Provider store={store}>
    <PersistGate loading={<Spin />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default AppMovies;