//Wordt gebruikt voor het toevoegen en bewerken van boodschappen

<script setup>
import { ref } from 'vue'

const props = defineProps({
    grocery: Object,
})

//Voor nieuw product
const name = ref(props.grocery?.name ?? ''); //Als er een naam is geef die weer, anders Name weergeven
const price = ref(props.grocery?.price ?? '');
const amount = ref(props.grocery?.amount ?? '');

const emit = defineEmits(['submit']);

const emitEvent = () => { //Als je op submit drukt, gebeurt dit
    emit('submit', {
        id: props.grocery.id,
        name: name.value,
        price: price.value,
        amount: amount.value
    })
}
</script>


<template>
    <div>
        <input v-model="name" placeholder="Naam">
        <input v-model="price" type="number"  min="0" step="0.01" placeholder="Prijs">
        <input v-model="amount" type="number" placeholder="Aantal">
    </div>
    <div>
        <RouterLink :to="`/`"> <!-- Als je op de submit knop drukt, ga je weer naar de overview pagina-->
            <button @click="emitEvent">Submit</button>
        </RouterLink>
    </div>


</template>