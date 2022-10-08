<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button class="bg-sky-500 active:bg-sky-600 rounded-full px-4 py-2 text-white font-semibold">
    {{ text }}
  </button>
</template>
