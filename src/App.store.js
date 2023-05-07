import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './App.rootReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const enhancers = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancers);

export default store;
