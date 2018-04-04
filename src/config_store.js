import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './stores';

export default function ConfigureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
        applyMiddleware(sagaMiddleware)
    );
    // store.subscribe( () => console.log(store.getState()) );
    sagaMiddleware.run(rootSaga);

    return store;
}