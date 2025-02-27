<script setup>
import { useRoute } from 'vue-router';
import { faker } from '@faker-js/faker';

const route = useRoute();

// Simulated recipe details
const ingredients = Array.from({ length: 5 }, () => faker.food.ingredient());
const instructions = faker.lorem.paragraphs(2);
const imageUrl = faker.image.urlLoremFlickr({ category: 'food', height: 600, width: 1000 });
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <img :src="imageUrl" class="w-full h-64 object-cover rounded-md" />
    <h1 class="text-3xl font-bold mt-4">{{ route.params.id }}</h1>
    <h2 class="text-xl font-semibold mt-4">Ingredients</h2>
    <ul class="list-disc pl-6">
      <li v-for="(ingredient, index) in ingredients" :key="index">{{ ingredient }}</li>
    </ul>
    <h2 class="text-xl font-semibold mt-4">Instructions</h2>
    <p class="mt-2">{{ instructions }}</p>
  </div>
</template>
