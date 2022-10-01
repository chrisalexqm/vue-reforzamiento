<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button class="btn">
    {{ text }}
    <slot></slot>
  </button>
</template>
<style>
.btn {
  background-color: #8a2be2;
  border-radius: 4px;
  border-color: transparent;
  padding: 8px 12px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.btn:active {
  background-color: #7422c2;
}
</style>
