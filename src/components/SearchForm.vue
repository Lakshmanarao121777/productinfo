<script setup>
import InputBox from './InputBox.vue'
import CheckBox from './CheckBox.vue'
import SelectionBox from './SelectionBox.vue'
import { categoriesData } from '../data/categories'
import { suppliersData } from '../data/suppliers'
</script>
<template>
  <div>
    <div class="text-center mt-4"><h1>Product SearchForm</h1></div>
    <div class="border border-secondary-subtle p-2 rounded bg-body-tertiary">
      <div class="py-2 d-flex">
        <InputBox name="ProductID" :change="change" placeholder="Product ID" />
        <InputBox name="ProductName" :change="change" placeholder="Product Name" />
        <SelectionBox
          name="CategoryID"
          :change="change"
          placeholder="Category Name"
          :options="categories"
          identifier="CategoryName"
        />
        <SelectionBox
          name="SupplierID"
          :change="change"
          placeholder="Supplier Name"
          :options="suppliers"
          identifier="CompanyName"
        />
        <InputBox name="ReorderLevel" :change="change" placeholder="Re-Order Level" />
      </div>
      <div class="py-2 d-flex justify-content-between">
        <InputBox name="QuantityPerUnit" :change="change" placeholder="Quantity Per Unit" />
        <InputBox name="UnitPrice" :change="change" placeholder="Unit Price" />
        <InputBox name="UnitsInStock" :change="change" placeholder="Units In Stock" />
        <InputBox name="UnitsOnOrder" :change="change" placeholder="Units On Order" />
        <CheckBox name="Discontinued" :change="change" placeholder="Discontinued" />
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary btn-sm my-2 mx-2" @click="clear">Clear</button>
      <button class="btn btn-primary btn-sm my-2 mx-2" @click="searchClick">Search</button>
    </div>
  </div>
</template>

<script>
import {
  BASE_URL,
  GET_CATEGORIES,
  GET_SUPPLIERS,
  loadDummyData,
  requestHeaders
} from '../utils/constants'
import axios from 'axios'
export default {
  name: 'SearchForm',
  props: ['search', 'clear'],
  data() {
    return {
      searchData: {
        ProductID: '',
        ProductName: '',
        CategoryID: '',
        SupplierID: '',
        ReorderLevel: '',
        QuantityPerUnit: '',
        UnitPrice: '',
        UnitsInStock: '',
        UnitsOnOrder: '',
        Discontinued: false
      },
      categories: [],
      suppliers: []
    }
  },
  created() {
    this.getSuppliers()
    this.getCategories()
  },
  methods: {
    getCategories() {
      const endPoint = BASE_URL + GET_CATEGORIES
      axios
        .get(endPoint, requestHeaders)
        .then((res) => {
          this.categories = res.data
        })
        .catch((err) => {
          if (loadDummyData) {
            this.categories = categoriesData
          }
          console.log(err)
        })
    },
    getSuppliers() {
      const endPoint = BASE_URL + GET_SUPPLIERS
      axios
        .get(endPoint, requestHeaders)
        .then((res) => {
          this.suppliers = res.data
        })
        .catch((err) => {
          if (loadDummyData) {
            this.suppliers = suppliersData
          }
          console.log(err)
        })
    },
    change(e) {
      console.log(e, 'asd')
      this.searchData = {
        ...this.searchData,
        [e?.target?.name]: e?.target?.type == 'checkbox' ? e.target.checked : e.target.value
      }
    },
    searchClick() {
      this.search(this.searchData)
    }
  }
}
</script>

<style></style>
