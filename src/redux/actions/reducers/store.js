import {createStore, combineReducers, applyMiddleware} from 'redux';
import { counterReducer } from './counter.reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    counter : counterReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;