<template>
    <div>
        <h2>{{ counterOptionStore.count }}</h2>
        <h2> tripple count : {{ counterOptionStore.trippleCount }}</h2>
        <button @click="counterOptionStore.count++">Thay doi child</button>
    </div>
</template>

<script setup>
    import {useCounterOptionStore} from "../stores/counter.js";

    const counterOptionStore = useCounterOptionStore();
</script>

<style scoped>
   * {
    background-color: rgb(102, 102, 102);
   }
   button {
    background-color: blue;
    color: white;
   }
    
</style>
