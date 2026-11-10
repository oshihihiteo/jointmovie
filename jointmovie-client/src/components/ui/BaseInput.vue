<script setup>
import { defineProps } from "vue";
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div>
    <input :placeholder="placeholder" :disabled="disabled" class="base_input" />
  </div>
</template>
<style scoped lang="scss">
.base_input {
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 4px;
}
</style>
