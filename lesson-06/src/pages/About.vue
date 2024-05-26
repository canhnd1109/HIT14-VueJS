<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button @click="counter.count++">+</button>
    </div>
</template>

<script setup>
    import { useCounterOptionStore } from '../stores/counter';

    const counter = useCounterOptionStore();
</script>

<style lang="scss" scoped>


</style>
