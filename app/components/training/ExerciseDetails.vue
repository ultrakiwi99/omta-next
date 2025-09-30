<script setup>
defineProps({
    exercise: {
        id: String,
        name: String,
        sets: Number,
        reps: Number,
        weight: Number
    }
})
</script>

<template>
    <details>
        <summary>{{ exercise.name }}</summary>
        <table>
            <thead>
                <tr>
                    <th>Set</th>
                    <th>Volume</th>
                    <th>kg</th>
                    <th>Reps</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="set in exercise.sets" :key="set">
                    <td>{{ set }}</td>
                    <td>{{ exercise.weight }} kg x {{ exercise.reps }}</td>
                    <td>{{ exercise.weight }}</td>
                    <td><input type="checkbox" name="isDone" id="is-done-{{ set }}"></td>
                </tr>
            </tbody>
        </table>
    </details>
</template>

<style lang="css" scoped></style>