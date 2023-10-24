<script setup>
import { productsData } from '../data/products'
import SearchForm from '../components/SearchForm.vue'
import ProductsList from '../components/ProductsList.vue'
</script>

<template>
  <div>
    <SearchForm :search="search" :clear="clear" />
    <hr />
    <div class="text-center">
      <button class="btn btn-primary btn-sm" @click="addNewProduct">Add New Product</button>
    </div>
    <br />
    <ProductsList :products="products" :deleteItem="deleteItem" />
  </div>
</template>

<script>
import axios from 'axios'
import {
  BASE_URL,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  loadDummyData,
  requestHeaders,
  SEARCH_PRODUCT,
  cleanObject
} from '../utils/constants'
export default {
  name: 'SearchView',
  created() {
    this.getProducts()
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    addNewProduct() {
      this.$router.push({
        name: 'Add'
      })
    },
    clear() {
      this.$router.go()
      // this.$router.push({
      //   name: 'Search'
      // })
    },
    deleteItem(Product) {
      console.log('Delete item clicked', Product)
      const endPoint = BASE_URL + DELETE_PRODUCT
      axios
        .delete(endPoint, { ProductId: Product.ProductID }, requestHeaders)
        .then((res) => {
          alert('Success')
          console.log(res)
        })
        .then(() => {
          this.$router.push({
            name: '/'
          })
        })
        .catch((err) => {
          alert('Failed')
          console.log(err)
        })
    },
    search(formData) {
      console.log('search clicked', formData)
      const endPoint = BASE_URL + SEARCH_PRODUCT
      axios
        .post(endPoint, cleanObject(formData), requestHeaders)
        .then((res) => {
          this.products = res.data
          console.log(res)
        })
        .catch((err) => {
          if (loadDummyData) {
            this.products = this.productsData
          }
          console.log(err)
        })
    },
    getProducts() {
      const endPoint = BASE_URL + GET_PRODUCTS
      axios
        .get(endPoint, requestHeaders)
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => {
          if (loadDummyData) {
            this.products = productsData
          }
          console.log(err)
        })
    }
  }
}
</script>
