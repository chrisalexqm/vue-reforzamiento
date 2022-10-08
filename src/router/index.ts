import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '../views/PokemonsView.vue'
import PokemonView from '../views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemons',
      component: PokemonsView
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: PokemonView
    },
  ]
})

export default router
