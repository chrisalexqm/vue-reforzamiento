<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import PokeButton from '../components/PokeButton.vue'

const pokemons = ref<any>([])
const page = ref(1);
const itemsPerPage = ref(10)
const isPokemonsLoading = ref(false)

const fetchPokemons = async () => {
    isPokemonsLoading.value = true
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${itemsPerPage.value * (page.value - 1)}&limit=${itemsPerPage.value}`);
    
    pokemons.value = response.data.results.map((p: any) => {
        const pokeNumber = p.url.split('/')[6]
        return {
            ...p,
            number: pokeNumber,
        }
    })
    isPokemonsLoading.value = false
}

const nextPokemons = async () => {
    page.value++
    await fetchPokemons()
}

const prevPokemons = async () => {
    page.value--
    await fetchPokemons()
}

onMounted(async () => {
    await fetchPokemons()
})
</script>
<template>
    <main class="px-5">
        <div class="flex items-center mb-4">
            <h1 class="text-xl font-semibold text-sky-500 mb-4 flex-grow">Lista de pokemones</h1>
            <div class="flex justify-end">
                <PokeButton v-if="page != 1" @click="prevPokemons()" class="mr-4" text="Anterior"></PokeButton>
                <PokeButton @click="nextPokemons()" text="Siguiente"></PokeButton>
            </div>
        </div>
        <div class="relative rounded-lg overflow-hidden">
            <div v-if="isPokemonsLoading" class="bg-neutral-600/50 absolute w-full h-full flex items-center justify-center">
                <span class="text-lg text-neutral-700 font-semibold">Cargando...</span>
            </div>
            <RouterLink :to="'/pokemon/' + pokemon.name" class="rounded-lg py-2 px-8 bg-neutral-200/40 mb-2 last:mb-0 flex items-center"
                v-for="pokemon in pokemons">
                <img class="mr-4"
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.number}.png`"
                    alt="">
                <span class="text-neutral-600 text-lg font-medium capitalize">{{pokemon.name}}</span>
            </RouterLink>
        </div>
    </main>
</template>