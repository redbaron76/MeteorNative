// export store

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function getStoreWithMiddleware() {
    // add middleware...
    const middleware = [thunk];
    // apply middleware to createStore...
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    // create Redux store...
    return createStoreWithMiddleware(reducers);
}