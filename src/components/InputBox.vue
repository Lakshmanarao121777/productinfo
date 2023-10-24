<script setup>
import { BFormInput } from 'bootstrap-vue'
</script>
<template>
  <div class="form-group flex-fill mx-2">
    <label :for="name">{{ placeholder }}</label>
    <BFormInput
      @input="
        (value) => {
          return change({ target: { value: value, name: name, type: 'text' } })
        }
      "
      type="text"
      class="form-control flex-fill"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="value"
    />
    <!-- <input
    @input="(event) => change(event)"
    type="text"
    class="form-control flex-fill"
    :id="name"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    /> -->
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: ['name', 'change', 'placeholder', 'value'],
  data() {
    return {
      names: ''
    }
  }
}
</script>

<style></style>
