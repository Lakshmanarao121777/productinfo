<script setup>
// import { Button } from 'bootstrap'
</script>
<template>
  <div class="form-group flex-fill mx-2">
    <label :for="name">{{ placeholder }}</label>
    <select
      @change="(event) => change(event)"
      class="form-control"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
    >
      <option value="">Select {{ placeholder }}</option>
      <template v-for="(option, key) of options" :key="key">
        <option :value="option?.[name]">{{ option?.[identifier] }}</option>
      </template>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectionBox',
  props: ['name', 'change', 'placeholder', 'options', 'identifier']
}
</script>

<style></style>
