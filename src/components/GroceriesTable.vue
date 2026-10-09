<script setup>
import {computed} from 'vue';
import { RouterLink } from 'vue-router';
import { removeGrocery } from '../domains/groceries/store';

const {products} = defineProps({ //From overview.vue
    products: Array,
});

const calculateTotal = computed(() => {
  return  products.reduce((sum, product) => sum + (product.price * product.amount), 0);
})

</script>

<template>
 <h1>Boodschappenlijst</h1>
 <table>
  <thead>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Prijs</th>
        <th>Aantal</th>
        <th>Totaal</th>
      </tr>    
  </thead>
  
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td>{{ product.price.toFixed(2) }}</td>
      <td><input v-model.number= "product.amount" type="number" placeholder="Amount"></td>
      <td>{{ (product.price * product.amount).toFixed(2)}}</td> <!--To get the subtotal for each product-->
      <td>
        <RouterLink :to="`groceries/edit/${product.id}`"> <!-- Edit knop die leidt naar edit pagina per product id-->
          <button>Edit</button> 
        </RouterLink>
      </td>
      <td><button @click="removeGrocery(product.id)">Delete</button></td>
    </tr>
  </tbody>
 </table>
 <br>
 <h2>Totaal: {{ calculateTotal.toFixed(2) }}</h2> 
</template>


