<!-- Voor het toevoegen van nieuwe producten -->

<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import { addGrocery, getAllProducts } from '../store.js'; //Haalt de addGrocery functie op uit de store
import { ref } from 'vue';

const grocery = { id: null, name: '', price: null, amount: null };


const idCount = ref(Math.max(0, ...getAllProducts.value.map(product => product.id))) //Om het hoogste id nummer uit de lijst te halen

const addNewGrocery = (product) => { //Functie voor het toevoegen van nieuw product
    idCount.value++;

    addGrocery({ //maakt nieuw product, met als toevoeging de nieuwe id
        ...product,
        id: idCount.value
    });
};
</script>

<template>
    <!-- Als er op submit wordt gedrukt wordt de nieuwe grocery toegevoegd aan de array -->
    <GroceryForm :grocery="grocery" @submit="addNewGrocery"/> <!-- doorgeven van grocery als prop aan het groceryform component-->
</template>