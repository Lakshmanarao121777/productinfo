<script setup>
// import { Button } from 'bootstrap'
</script>
<template>
  <div class="form-group m-4 p-2 flex-fill mx-2">
    <label :for="name">{{ placeholder }}</label>
    <input
      @change="(event) => change(event)"
      type="checkbox"
      class="p-2 mx-2 flex-fill"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :checked="value"
    />
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: ['name', 'change', 'placeholder']
}
</script>

<style></style>
