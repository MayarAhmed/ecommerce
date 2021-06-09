import {GET_PRODUCT_REQUEST, GET_PRODUCT_RECEIVE } from './types/productInfo'

export const productRequest = (payload) =>({
    type:GET_PRODUCT_REQUEST,
    payload
})

export const productReceive = (payload) =>({
    type:GET_PRODUCT_RECEIVE,
    payload
})