import { createStore, applyMiddleware, compose } from 'redux';
import ThunkMiddleware from 'redux-thunk'; // nos permite definir acciones asíncronas

import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;
