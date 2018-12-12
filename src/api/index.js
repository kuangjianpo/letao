import axios from 'axios'

const baseURL = 'http://127.0.0.1:3000/'

axios.defaults.baseURL = baseURL

// 允许axios传递cookie数据，因为默认情况下，axios并不会传递cookie
axios.defaults.withCredentials = true

// 获取一级分类列表
export const getFirstCate = () => {
  return axios.get('/category/queryTopCategory').then((result) => {
    return result.data
  })
}

// 获取二级分类列表
export const getSecondCate = (id) => {
  return axios.get('/category/querySecondCategory', {params: {id: id}}).then((result) => {
    return result.data
  })
}

// 获取搜索商品列表数据
export const getSearchList = (pa) => {
  return axios.get('/product/queryProduct', {params: pa}).then((result) => {
    return result.data
  })
}

// 获取商品详情数据
export const getProductById = (id) => {
  return axios.get('/product/queryProductDetail', {params: {id: id}}).then((result) => {
    return result.data
  })
}

// 添加到购物车
export const addCart = (params) => {
  return axios.post('/cart/addCart', params).then((result) => {
    return result.data
  })
}

// 登录
export const login = (pa) => {
  return axios.post('/user/login', pa).then((result) => {
    return result.data
  })
}

// 获取购物车数据
export const getCartList = () => {
  return axios.get('/cart/queryCart').then((result) => {
    return result.data
  })
}

// 修改购物车数据
export const editCart = (pa) => {
  return axios.post('/cart/updateCart', pa).then((result) => {
    return result.data
  })
}

// 删除购物车数据
export const deleteCart = (pa) => {
  return axios.get('/cart/deleteCart', {params: {id: pa}}).then((result) => {
    return result.data
  })
}
