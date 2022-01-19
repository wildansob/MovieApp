// store
// adalah tempat penyimpanan
import {applyMiddleware, createStore} from 'redux';
import {allReducers} from './allReducers';
import {persistReducer, persistStore} from 'redux-persist';
import reduxSaga from 'redux-saga';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {allSaga} from './sagaWatcher';
//step 1 pembuatan config
const persistConfig = {
  key: 'MovieApps',
  storage: AsyncStorage,
  timeout: null,
};

const sagaMiddleware = reduxSaga();
const allMiddleware = applyMiddleware(logger, sagaMiddleware);

//step 2
const persistedReducer = persistReducer(persistConfig, allReducers);
// reducer
// adalah tempat penyimpanan

// action
// cara kita connect ke redux

// step 3
export const store = createStore(persistedReducer, allMiddleware);
export const persistedStore = persistStore(store);

sagaMiddleware.run(allSaga);
