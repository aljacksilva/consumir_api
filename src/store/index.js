// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { persistStore } from 'redux-persist';
// eslint-disable-next-line import/no-extraneous-dependencies
import createSagaMiddleware from '@redux-saga/core';
import persistedReducers from './modules/reduxPersist';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
