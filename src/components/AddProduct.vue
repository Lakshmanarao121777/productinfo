<script setup>
import InputBox from './InputBox.vue'
import CheckBox from './CheckBox.vue'
import SelectionBox from './SelectionBox.vue'
import { categoriesData } from '../data/categories'
import { suppliersData } from '../data/suppliers'
import { productsData } from '../data/products'
</script>
<template>
  <div>
    <div class="text-center mt-4">
      <h1>Product {{ ProductID ? 'Update ' : 'Add ' }} Form</h1>
    </div>
    <div class="border border-secondary-subtle p-2 rounded bg-body-tertiary">
      <div class="py-2 d-flex">
        <InputBox
          name="ProductID"
          :change="change"
          placeholder="Product ID"
          :value="product[0]?.ProductID"
        />
        <InputBox
          name="ProductName"
          :change="change"
          placeholder="Product Name"
          :value="product[0]?.ProductName"
        />
      </div>
      <div class="py-2 d-flex">
        <SelectionBox
          name="CategoryID"
          :change="change"
          placeholder="Category Name"
          :options="categories"
          identifier="CategoryName"
          :value="product[0]?.CategoryID"
        />
        <SelectionBox
          name="SupplierID"
          :change="change"
          placeholder="Supplier Name"
          :options="suppliers"
          identifier="CompanyName"
          :value="product[0]?.SupplierID"
        />
      </div>
      <div class="py-2 d-flex">
        <InputBox
          name="ReorderLevel"
          :change="change"
          placeholder="Re-Order Level"
          :value="product[0]?.ReorderLevel"
        />
        <InputBox
          name="QuantityPerUnit"
          :change="change"
          placeholder="Quantity Per Unit"
          :value="product[0]?.QuantityPerUnit"
        />
      </div>
      <div class="py-2 d-flex">
        <InputBox
          name="UnitPrice"
          :change="change"
          placeholder="Unit Price"
          :value="product[0]?.UnitPrice"
        />
        <InputBox
          name="UnitsInStock"
          :change="change"
          placeholder="Units In Stock"
          :value="product[0]?.UnitsInStock"
        />
      </div>
      <div class="py-2 d-flex">
        <InputBox
          name="UnitsOnOrder"
          :change="change"
          placeholder="Units On Order"
          :value="product[0]?.UnitsOnOrder"
        />
        <CheckBox
          name="Discontinued"
          :change="change"
          placeholder="Discontinued"
          :value="product[0]?.Discontinued"
        />
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary btn-sm my-2 mx-2" @click="clear">Clear</button>
      <button class="btn btn-primary btn-sm my-2 mx-2" @click="AddOrUpdate">
        {{ ProductID ? 'Update ' : 'Add ' }}Product
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {
  ADD_PRODUCT,
  BASE_URL,
  EDIT_PRODUCT,
  GET_CATEGORIES,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_SUPPLIERS,
  loadDummyData,
  requestHeaders
} from '../utils/constants'
export default {
  name: 'AddProduct',
  props: ['search'],
  data() {
    return {
      formData: {
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
      suppliers: [],
      ProductID: 0,
      product: {}
    }
  },

  created() {
    this.ProductID = this.$route.params.ProductID
    this.getCategories()
    this.getSuppliers()
    if (this.$route.params.ProductID) {
      // this.getProduct()
      this.getProducts()
      // this.product = {
      //   ...this.products.filter((product) => {
      //     return product.ProductID == this.ProductID
      //   })
      // }
    }
  },
  methods: {
    change(e) {
      this.formData = {
        ...this.formData,
        [e?.target?.name]: e?.target?.type === 'checkbox' ? e.target.checked : e.target.value
      }
    },
    clear() {
      this.$router.push({
        name: 'Search'
      })
    },
    AddOrUpdate() {
      this.ProductID ? this.edit() : this.add()
    },
    add() {
      const endPoint = BASE_URL + ADD_PRODUCT
      axios
        .post(endPoint, this.formData, requestHeaders)
        .then((res) => {
          alert('Success')
          console.log(res)
        })
        .then(() => {
          this.$router.push({
            name: 'Search'
          })
        })
        .catch((err) => {
          alert('Failed')
          console.log(err)
        })
    },
    edit() {
      const endPoint = BASE_URL + EDIT_PRODUCT
      axios
        .put(endPoint, this.formData, requestHeaders)
        .then((res) => {
          alert('Success')
          console.log(res)
        })
        .then(() => {
          this.$router.push({
            name: 'Search'
          })
        })
        .catch((err) => {
          alert('Failed')
          console.log(err)
        })
    },
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
    getProduct() {
      const endPoint = BASE_URL + GET_PRODUCT
      axios
        .post(endPoint, { ProductID: parseInt(this.$route.params.ProductID) }, requestHeaders)
        .then((res) => {
          this.product = res.data
          this.formData = res.data
        })
        .catch((err) => {
          if (loadDummyData) {
            this.product = {
              ...productsData.filter((product) => {
                return product.ProductID == this.ProductID
              })
            }
            this.formData = this.product
          }
          console.log(err)
        })
    },
    getProducts() {
      const endPoint = BASE_URL + GET_PRODUCTS
      axios
        .get(endPoint, requestHeaders)
        .then((res) => {
          const data = res.data.filter((product) => {
            return parseInt(product.ProductID) == parseInt(this.ProductID)
          })
          this.product = {
            ...data
          }
          this.formData = data[0]
        })
        .catch((err) => {
          if (loadDummyData) {
            this.product = {
              ...productsData.filter((product) => {
                return product.ProductID == this.ProductID
              })
            }
            this.formData = this.product[0]
          }
          console.log(err)
        })
    }
  }
}
</script>

<style></style>
