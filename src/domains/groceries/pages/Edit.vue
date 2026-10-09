<!-- Voor het bewerken van bestaande producten -->

<script setup>
import { useRoute } from 'vue-router'
import { getGroceryById } from '../store.js';
import { updateGrocery } from '../store.js';
import GroceryForm from '../components/GroceryForm.vue';

const route = useRoute()

const grocery = getGroceryById(route.params.id) //Selecteren van grocery op id 

</script>

<template>
<GroceryForm :grocery="grocery" @submit="updateGrocery"/> <!--doorgeven van geselecteerde grocery naar Groceryform en uitvoeren update grocery-->

</template>