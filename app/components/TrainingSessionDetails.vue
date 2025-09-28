<script setup>
</script>

<template>
    <details>
        <summary>Exersise one</summary>
        <p>Details about exercise one.</p>
    </details>
</template>

<style lang="css" scoped>
& details {
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 0.5em;
    background: #f9f9f9;
}

& summary {
    font-weight: bold;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
        display: none;
    }
}

details[open] summary {
    color: #0077cc;
}
</style>