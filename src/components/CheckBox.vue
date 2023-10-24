<script setup>
import { BFormCheckbox } from 'bootstrap-vue'
</script>
<template>
  <div class="form-group flex-fill mx-2">
    <label :for="name">{{ placeholder }}</label>
    <BFormCheckbox
      @change="
        (value) => {
          return change({ target: { checked: !!value, name: name, type: 'checkbox' } })
        }
      "
      class="p-2 mx-2 flex-fill"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :checked="value"
      value="true"
      unchecked-value="false"
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
