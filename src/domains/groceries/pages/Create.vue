<!-- Voor het toevoegen van nieuwe producten -->

<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery } from '../store.js'; //Haalt de addGrocery functie op uit de store

const grocery = { id: null, name: '', price: null, amount: null };

</script>

<template>
    <!-- Als er op submit wordt gedrukt wordt de nieuwe grocery toegevoegd aan de array -->
    <GroceryForm :grocery="grocery" @submit="addGrocery"/> <!-- doorgeven van grocery als prop aan het groceryform component-->

</template>