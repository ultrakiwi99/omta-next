<script setup lang="ts">
import { ref } from 'vue';
import ExerciseDetails from '../components/training/ExerciseDetails.vue';

const sessionData = ref({
    date: new Date().toLocaleDateString(),
    exercises: [
        { name: 'Exercise 1', details: 'Details about exercise 1' },
        { name: 'Exercise 2', details: 'Details about exercise 2' },
        { name: 'Exercise 3', details: 'Details about exercise 3' },
    ],
});

const exercise = {
    id: '1',
    name: 'Squat',
    sets: 4,
    reps: 8,
    weight: 100
};

</script>

<template>
    <main>
        <nav class="main-nav">
            <a href="/">Today's Log {{ sessionData.date }}</a>

            <button>Finish</button>
        </nav>
        <section class="training-session">
            <h1>Training Session</h1>
            <p>This is where the training session details will go.</p>
            <ExerciseDetails :exercise="exercise" />
        </section>
    </main>
</template>

<style lang="css" scoped>
.training-session {
    padding: var(--padding);
}
</style>