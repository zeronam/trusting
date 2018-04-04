import { newsCreate } from '../../api/homeApi';
import { put, call, takeEvery } from 'redux-saga/effects';

import * as CreateActionType from './constants';

export function* createAsync(action) {
    const result = yield call(newsCreate, action.params);
    const statusCode = result.status;
    if (statusCode === 200) {
        yield [
            put({ type: CreateActionType.GET_NEWS_SUCCESS, data: result.data.response.docs })
        ];
    } else {
        console.warn("createAsync eror", result.data);
    }
};

export default function* WatchGetNews() { 
    yield[
        takeEvery(CreateActionType.GET_NEWS_ASYNC, createAsync),
    ]
}