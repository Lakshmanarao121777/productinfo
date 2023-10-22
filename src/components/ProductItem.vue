<template>
  <tr>
    <td>{{ product.ProductID }}</td>
    <td>{{ product.ProductName }}</td>
    <td>{{ product.SupplierID }}</td>
    <td>{{ product.CategoryID }}</td>
    <td>{{ product.QuantityPerUnit }}</td>
    <td>{{ product.UnitPrice }}</td>
    <td>{{ product.UnitsInStock }}</td>
    <td>{{ product.UnitsOnOrder }}</td>
    <td>{{ product.ReorderLevel }}</td>
    <td>{{ product.Discontinued }}</td>
    <td>
      <button class="btn btn-primary btn-sm mx-1" @click="editItem">Edit</button>
      <button class="btn btn-warning btn-sm" @click="deleteItem(product)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['product', 'deleteItem'],
  data() {
    return {}
  },
  methods: {
    editItem() {
      this.$router.push({
        name: 'Edit',
        params: {
          ProductID: this.product.ProductID,
          Product: this.product
        }
      })
    }
  }
}
</script>

<style></style>
