import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CouplesReducer } from './bookedByCouples/reducer';

const allReducers = combineReducers({
    CouplesReducer,
});

const store = createStore(
    allReducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

export default store;
