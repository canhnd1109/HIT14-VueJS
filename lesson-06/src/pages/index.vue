<script setup>
    import {useCounterOptionStore} from '../stores/counter.js';
    import {useCounterSetupStore} from '../stores/counter.setup.js';

    const counterOptionStore = useCounterOptionStore();
    const counterSetupStore = useCounterSetupStore();

</script>

<template>
    <div>
        <h1>Trang chủ {{ counterSetupStore.count }}</h1>
        <button @click="counterSetupStore.count++">thay doi o Trang chu</button>
        <button @click="counterSetupStore.$patch({count : 100})">thay doi su dung $patch</button>
    </div>
</template>

<style scoped>


</style>
