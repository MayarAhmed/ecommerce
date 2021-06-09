import { call, put, takeLatest} from "redux-saga/effects";
import {GET_PRODUCT_REQUEST} from '../types/productInfo';
import * as ACTIONS from '../actions'
import * as API from "../../axios/api"

export function* getProuctRequest({payload}){
    try{
        const response = yield call(API.getProduct, payload);
        console.log('saga',response);
        yield put(ACTIONS.productReceive(response.data))
    } catch(err){
        console.log(err)
    }
}

export function* getProuctSaga(){
    yield takeLatest(GET_PRODUCT_REQUEST, getProuctRequest);
}