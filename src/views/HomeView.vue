<script setup lang="ts">
import Btn from "@/components/Button.vue";
import { ref } from "vue";
const counter = ref(0)

const add = () => {
  counter.value++
}

const openModal = () => {
  alert("Hola como estas!");
};
</script>

<template>
  <main class="home">
    <span style="font-size: 40px;">{{ counter }}</span>
    <br>
    <Btn @click="add" text="+1"></Btn>
    <br />
    <br />
    <Btn @click="openModal" text="Hazme click"></Btn>
  </main>
</template>
