import { combineReducers, createStore } from "redux";
import {DatVeReducer} from './reducers/DatVeReducer'

const rootRedux = combineReducers({
    DatVeReducer
});

export const store = createStore(rootRedux,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());