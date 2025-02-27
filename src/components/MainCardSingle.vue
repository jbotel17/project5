<script setup>
import { faker } from '@faker-js/faker'

const recipeName = faker.commerce.productName(); 
const description = faker.lorem.sentences(2);
const imageUrl = faker.image.urlLoremFlickr({ category: 'food' }); 
const recipeId = faker.string.uuid();

</script>

<template>
  <RouterLink :to="{ name: 'CardDetail', params: { id: recipeId } }">
    <div class="border border-gray-500 rounded-lg shadow bg-gray-400 h-full">
      <img class="object-fill h-480 w-960 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category: 'food', height: 480, width: 960})" />
      <div class="p-4">
        <p class="mb-2 text-2xl font-bold">{{ recipeName }}</p>
        <p class="mb-3 font-normal text-gray-800">{{ description }}</p>
      </div>
    </div>
  </RouterLink>
</template>
