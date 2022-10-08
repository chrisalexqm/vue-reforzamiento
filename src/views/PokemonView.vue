<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemonName = ref('')
const pokemon = ref<any>({})
const isPokemonsLoading = ref(false)

const fetchPokemon = async () => {
    isPokemonsLoading.value = true
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`);

    pokemon.value = response.data
    isPokemonsLoading.value = false
}

onMounted(async () => {
    pokemonName.value = route.params.name as string
    await fetchPokemon()
})
</script>
<template>
    <main class="px-5">
        <h1 class="text-xl capitalize">{{pokemon.name}}</h1>
        <img class="" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`" alt="">
    </main>
</template>