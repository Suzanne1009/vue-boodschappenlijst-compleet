<!-- Toont een overzicht van de boodschappenlijst -->

<script setup>
import GroceriesTable from '../../../components/GroceriesTable.vue'
import { getAllProducts } from '../../groceries/store.js';


</script>

<template>
  <GroceriesTable :products="getAllProducts" />
</template>
