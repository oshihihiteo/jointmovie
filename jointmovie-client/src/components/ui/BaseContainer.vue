<script setup></script>
<template>
  <div class="base_container">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.base_container {
  border: 1px solid;
  border-color: $primary;
  border-radius: 5px;
  padding: 5px;
  width: fit-content;
}
</style>
