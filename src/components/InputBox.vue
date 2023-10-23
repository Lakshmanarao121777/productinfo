<script setup>
import { Input } from 'bootstrap-vue'
</script>
<template>
  <div class="form-group flex-fill mx-2">
    <label :for="name">{{ placeholder }}</label>
    <Input 
    @input="(event) => change(event)"
    type="text"
    class="form-control flex-fill"
    :id="name"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    />
    <input
    @input="(event) => change(event)"
    type="text"
    class="form-control flex-fill"
    :id="name"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    />
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: ['name', 'change', 'placeholder', 'value']
}
</script>

<style></style>
