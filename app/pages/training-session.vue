<script setup lang="ts">
import ExerciseDetails from '../components/training/ExerciseDetails.vue';
import { exerciseList } from '../components/training/utils';

</script>

<template>
    <main>
        <nav class="main-nav">
            <a href="/">Today's Log {{ new Date().toLocaleDateString() }}</a>

            <button>Finish</button>
        </nav>
        <section>
            <h1 class="text-3xl font-bold underline">Training Session</h1>
            <p>This is where the training session details will go.</p>
            <ExerciseDetails v-for="exercise in exerciseList" :key="exercise.id" :exercise="exercise" />
        </section>
    </main>
</template>


