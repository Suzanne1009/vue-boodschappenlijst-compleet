// Bevat de store-logica voor het beheren van de boodschappen

import { ref, computed } from 'vue'

// State
const products = ref([
  {id: 1, name: "Rijst", price: 1.00, amount: 0},
  {id: 2, name: "Broccoli", price: 0.99, amount: 0},
  {id: 3, name: "Koekjes", price: 1.20, amount: 0},
  {id: 4, name: "Noten", price: 2.99, amount: 0}
])

// Getters
export const getAllProducts = computed(() => products.value); 
export const getGroceryById = (id) => computed(() => products.value.find(product => product.id === Number(id)));

// Actions
export const addGrocery = (product) => {
  products.value.push(product); //Toevoegen van nieuwe product
}

export const updateGrocery = (product) => {
  const grocery = getGroceryById(product.id);
  grocery.value.name = product.name;
  grocery.value.price = product.price;
  grocery.value.amount = product.amount;
};

export const removeGrocery = (id) => {
  products.value = products.value.filter(products => products.id !== id)
}