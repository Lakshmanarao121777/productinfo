<script setup>
import ProductItem from './ProductItem.vue'
</script>
<template>
  <div class="border border-secondary-subtle p-2 rounded bg-body-tertiary mb-4">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Supplier ID</th>
          <th scope="col">Category ID</th>
          <th scope="col">Quantity Per Unit</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Units in stock</th>
          <th scope="col">Units on order</th>
          <th scope="col">Reorder Level</th>
          <th scope="col">Discontinued</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody
        v-for="(product, key) of products.slice(currentPage * limit, (currentPage + 1) * limit)"
        :key="key"
        class="table-striped table-hover"
      >
        <ProductItem :product="product" :deleteItem="deleteItem" />
      </tbody>
    </table>
    <div class="d-flex justify-content-between">
      <div>
        <div class="d-flex mx-2">
          <div class="mx-2 py-2">Show</div>
          <select @change="setLimit" class="form-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">200</option>
          </select>
        </div>
      </div>
      <div class="py-2">
        Showing {{ currentPage * limit + 1 }} to
        {{
          products.length < (currentPage + 1) * limit ? products.length : (currentPage + 1) * limit
        }}
        of {{ products.length }}
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <div
              class="page-link"
              :class="{ disabled: currentPage < 1 }"
              href="#"
              @click="setPage(currentPage - 1)"
            >
              Previous
            </div>
          </li>
          <li class="page-item" v-for="(i, key) of new Array(totalPages)" :key="key">
            <div
              class="page-link"
              :class="{ active: key === currentPage }"
              href="#"
              @click="setPage(key)"
            >
              {{ key + 1 }}
            </div>
          </li>
          <li class="page-item">
            <div
              class="page-link"
              :class="{ disabled: currentPage >= totalPages - 1 }"
              href="#"
              @click="setPage(currentPage + 1)"
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ['products', 'editItem', 'deleteItem'],
  data() {
    return {
      limit: 5,
      currentPage: 0,
      totalPages: Math.ceil(this.products.length / 5)
    }
  },
  methods: {
    setPage(pageNo) {
      this.currentPage = pageNo
    },
    setLimit(event) {
      this.limit = event.target.value
      this.totalPages = Math.ceil(this.products.length / this.limit)
      if (this.totalPages < this.currentPage) {
        this.currentPage = this.totalPages - 1
      }
    }
  }
}
</script>

<style scoped></style>
