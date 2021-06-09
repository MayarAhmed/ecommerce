import { axiosInstance } from './axiosInstance';

export const getProduct = async() => {
    return await axiosInstance.get('/products')
}

