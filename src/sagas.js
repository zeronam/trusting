import { all, call } from 'redux-saga/effects';

import WatchGetNews from './container/listNews/sagas';

export default function* rootSaga() {
    yield all([
       call(WatchGetNews)
    ]);
}