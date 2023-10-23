// routes
export const BASE_URL = 'http://localhost:57308/api/Search'

export const ADD_PRODUCT = '/AddProduct'
export const EDIT_PRODUCT = '/EditProduct'
export const DELETE_PRODUCT = '/DeleteProduct'

export const SEARCH_PRODUCT = '/SearchProduct'

export const GET_PRODUCTS = '/GetProducts'
export const GET_PRODUCT = '/GetProduct'
export const GET_CATEGORIES = '/GetCategories'
export const GET_SUPPLIERS = '/GetSuppliers'

export const loadDummyData = !true
export const requestHeaders = {
  headers: {
    // 'Content-Type': 'application/json',
    // 'Accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Cache-Control': 'no-cache'
  }
}

export const cleanObject = (obj) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName]
    }
  }
  return obj
}
