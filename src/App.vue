<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/groceries">Ga naar de boodschappenlijst</RouterLink>
    <br>
    <RouterLink to="/groceries/create">Voeg een product toe</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
