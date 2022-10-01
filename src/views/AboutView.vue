<script setup lang="ts">
import Btn from "@/components/Button.vue";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log('Hola acabo de ser montado en el DOM')
});

onUnmounted(() => {
  console.log('Hola acabo de ser desmontado')
});
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Btn text="About">
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        explicabo nesciunt enim impedit eveniet accusantium temporibus
        reiciendis corporis et laborum, nemo molestias. Laboriosam labore
        dolorem quas enim vero in veritatis?
      </div>
      <span> bla labblbla </span>
      <input type="text" />
    </Btn>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
