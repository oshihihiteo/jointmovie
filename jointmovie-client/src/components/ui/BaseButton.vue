<script setup>
import { defineProps } from "vue";
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div>
    <button :type="type" :disabled="disabled" class="base_button">
      <span v-if="loading"></span>
      <span>
        <slot />
      </span>
    </button>
  </div>
</template>
<style scoped lang="scss">
.base_button {
  padding: 5px;
  border-radius: 6px;
  border: 1px solid;
  background: $primary;
}
</style>
