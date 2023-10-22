<script setup>
import AddProduct from '../components/AddProduct.vue'
</script>

<template>
  <AddProduct />
</template>

<script>
export default {
  name: 'AddOrEditView',
  props: ['Product'],
  mounted() {
    // console.log(this.$route)
  }
}
</script>

<style></style>
