<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

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
    <div class="mb-4 p-4 border border-gray-300 rounded shadow">
        <button class="w-full text-left font-semibold text-gray-700" @click="isOpen = !isOpen">
            {{ exercise.name }}
            <span class="float-right text-sm text-gray-400">
                {{ exercise.weight }} kg x {{ exercise.reps }} x {{ exercise.sets }}</span>
        </button>
        <table class="w-full mt-4 table-auto border-collapse" v-show="isOpen">
            <thead class="bg-gray-100">
                <tr class="text-left">
                    <th class="px-2 py-1">Set</th>
                    <th class="px-2 py-1">Volume</th>
                    <th class="px-2 py-1 text-right">kg</th>
                    <th class="px-2 py-1"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="set in exercise.sets" :key="set"
                    class="text-left border-t hover:bg-green-100 active:bg-green-100 cursor-pointer">
                    <td class="px-2 py-1">{{ set }}</td>
                    <td class="px-2 py-1">{{ exercise.weight }} kg x {{ exercise.reps }}</td>
                    <td class="px-2 py-1 text-right">{{ exercise.weight }}</td>
                    <td class="px-2 py-1 text-right"><input type="checkbox" name="isDone" id="is-done-{{ set }}"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css" scoped></style>