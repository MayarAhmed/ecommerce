import { all } from 'redux-saga/effects';

import{ getProuctSaga } from './products'

export function* watchSagas(){
    yield all([
        getProuctSaga()
    ])
}