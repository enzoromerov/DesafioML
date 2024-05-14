import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'main-root',
    storage,
}

const persistedReducer=persistReducer(persistConfig, rootReducer)

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(persistedReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)))

export const persistor = persistStore(store);
