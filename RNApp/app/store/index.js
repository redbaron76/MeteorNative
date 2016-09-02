// export store

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducers from '../reducers';

export default function getStoreWithMiddleware(initialState = {}) {
    // add middleware...
    const middleware = [thunk];
    // apply middleware to createStore...
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    // create Redux store...
    return createStoreWithMiddleware(reducers);

    // With DevTools
    /*const enhancer = compose(
        applyMiddleware(...middleware),
        devTools({ realtime: true })
    );

    const store = createStore(reducers, initialState, enhancer);
    devTools.updateStore(store);
    return store;*/
}