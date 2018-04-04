import { combineReducers } from 'redux';
import NewsStore from './container/listNews/stores';

const rootReducer = combineReducers({
    NewsStore,
})

export default rootReducer;