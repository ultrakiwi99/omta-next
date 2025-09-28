<script setup>
import TrainingSessionDetails from '~/components/TrainingSessionDetails.vue';
import { ref } from 'vue';

const sessionData = ref({
    date: new Date().toLocaleDateString(),
    exercises: [
        { name: 'Exercise 1', details: 'Details about exercise 1' },
        { name: 'Exercise 2', details: 'Details about exercise 2' },
        { name: 'Exercise 3', details: 'Details about exercise 3' },
    ],
});

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
            <TrainingSessionDetails />
            <TrainingSessionDetails />
            <TrainingSessionDetails />
            <TrainingSessionDetails />
            <TrainingSessionDetails />
            <TrainingSessionDetails />
        </section>
    </main>
</template>

<style lang="css" scoped>
.training-session {
    padding: var(--padding);
}
</style>