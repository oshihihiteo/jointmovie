<script setup></script>
<template>
  <div class="base_modal">
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.base_modal {
  background-color: $light-page;
  border: 1px solid;
  border-color: $primary;
  border-radius: 10px;
  padding: 5px;
  width: fit-content;
  height: fit-content;
}
</style>
