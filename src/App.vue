<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <header class="flex flex-col items-center py-4">
    <h1 class="text-3xl text-neutral-700 uppercase font-semibold">Pokedex v1.0</h1>

    <nav class="flex py-4 px-6 bg-gray-200 rounded-md mt-4">
      <RouterLink class="text-neutral-600 mr-4" to="/">Pokemons</RouterLink>
      <RouterLink class="text-neutral-600" to="/types">Types</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
