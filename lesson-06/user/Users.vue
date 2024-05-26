<template>
    <div>
        <p>ID : 1</p>
        <p>Tên : {{route.params.username}}</p>
        <p>Tuổi : 20</p>
    </div>
</template>

<script setup>
    const route = useRoute();
</script>

<style scoped>


</style>
