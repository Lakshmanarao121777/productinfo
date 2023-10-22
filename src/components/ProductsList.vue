<script setup>
import ProductItem from './ProductItem.vue'
</script>
<template>
  <div class="border border-secondary-subtle p-2 rounded bg-body-tertiary">
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Supplier Id</th>
          <th scope="col">Category Id</th>
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
        <li
          class="page-item"
          v-for="(i, key) of new Array(Math.ceil(products.length / limit))"
          :key="key"
        >
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
            :class="{ disabled: currentPage >= Math.ceil(products.length / limit) - 1 }"
            href="#"
            @click="setPage(currentPage + 1)"
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['products', 'editItem', 'deleteItem'],
  data() {
    return {
      limit: 10,
      currentPage: 0
    }
  },
  methods: {
    setPage(pageNo) {
      this.currentPage = pageNo
    }
  }
}
</script>

<style scoped></style>
