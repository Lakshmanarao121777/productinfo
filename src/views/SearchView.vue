<script setup>
import { products } from '../data/products'
import SearchForm from '../components/SearchForm.vue'
import ProductsList from '../components/ProductsList.vue'
</script>

<template>
  <SearchForm :search="search" />
  <hr />
  <div class="tect-center">
    <button class="btn btn-primary btn-sm" @click="addNewProduct">Add New Product</button>
  </div>
  <br />
  <ProductsList :products="products" :deleteItem="deleteItem" />
</template>

<script>
import axios from 'axios'
import { BASE_URL, DELETE_PRODUCT, SEARCH_PRODUCT } from '../utils/constants'
export default {
  name: 'SearchView',
  methods: {
    addNewProduct() {
      this.$router.push({
        name: 'Add'
      })
    },
    deleteItem(Product) {
      console.log('Delete item clicked', Product)
      const endPoint = BASE_URL + DELETE_PRODUCT
      axios
        .post(endPoint, Product)
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
        .post(endPoint, formData)
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
          console.log(err)
        })
    }
  }
}
</script>
