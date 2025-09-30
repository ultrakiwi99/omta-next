<script setup>
defineProps({
    id: String,
    name: String,
    sets: Number,
    reps: Number,
    weight: Number
})
</script>

<template>
    <details>
        <summary>{{ name }}</summary>
        <div>{{ sets }} sets, {{ reps }} reps, {{ weight }} kg</div>
    </details>
</template>

<style lang="css" scoped></style>