<script setup lang="ts">
import ExerciseDetails from '../components/training/ExerciseDetails.vue';
import { exerciseList } from '../components/training/utils';

</script>

<template>
    <main class="max-w-lg mx-auto p-4">
        <nav class="flex justify-between items-center mb-4">
            <a href="/" class="text-gray-500 underline">Today's Log {{ new Date().toLocaleDateString() }}</a>
            <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer">Finish</button>
        </nav>
        <section>
            <h1 class="text-3xl font-bold text-center mb-4">Training session</h1>
            <ExerciseDetails v-for="exercise in exerciseList" :key="exercise.id" :exercise="exercise" />
        </section>
    </main>
</template>


