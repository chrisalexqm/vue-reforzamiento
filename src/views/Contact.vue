<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import axios from "axios";

const loadingPokemon = ref(true);
const pokemon = ref<any>({});

onMounted(async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/charizard"
  );
  pokemon.value = response.data;
  loadingPokemon.value = false;
});

onUnmounted(() => {
  console.log("Hola acabo de ser desmontado");
});
</script>
<template>
  <main>
    <span v-if="loadingPokemon">Cargando...</span>
    <div v-else>
      <img :src="pokemon.sprites.front_default" alt="" />
      <h1 style="text-transform: capitalize;">{{ pokemon.name }}</h1>
      <span style="margin-right: 5px; background-color: beige; border-radius: 3px; padding: 2px 4px; color: dimgrey;" v-for="tipo in pokemon.types">{{ tipo.type.name }}</span>
    </div>
  </main>
</template>
