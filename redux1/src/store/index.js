import { createStore, applyMiddleware} from 'redux';
import promiseMiddlware from 'redux-promise';

import reducers from '../reducers';

let store = createStore(reducers, applyMiddleware(promiseMiddlware))

export default store;