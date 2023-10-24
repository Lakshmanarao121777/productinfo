<script setup></script>
<template>
  <div class="mx-2">
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
      <option v-for="(option, key) of options" :key="key" :value="option?.[name]">
        {{ option?.[identifier] }}
      </option>
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
