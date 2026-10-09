//Wordt gebruikt voor het toevoegen en bewerken van boodschappen

<script setup>
import { ref } from 'vue'

const props = defineProps({
    grocery: Object,
})

//Voor nieuw product
const tempGrocery = ref({...props.grocery});


const emit = defineEmits(['submit']);

const emitEvent = () => { //Als je op submit drukt, gebeurt dit
    emit('submit', {
        id: tempGrocery.value.id,
        name: tempGrocery.value.name,
        price: tempGrocery.value.price,
        amount: tempGrocery.value.amount
    })
}
</script>


<template>
    <div>
        <input v-model="tempGrocery.name" placeholder="Naam">
        <input v-model="tempGrocery.price" type="number"  min="0" step="0.01" placeholder="Prijs">
        <input v-model="tempGrocery.amount" type="number" placeholder="Aantal">
    </div>
    <div>
        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button @click="emitEvent">Submit</button>
        </RouterLink>
    </div>


</template>