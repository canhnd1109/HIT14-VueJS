<template>
    <div>
        <span> FullName</span>
        <input type="text" v-model="data.fullName" />
    </div>
    <div>
        <span>Email</span>
        <input type="text" v-model="data.email" />
    </div>
    <div>
        <span>Password</span>
        <input type="text" v-model="data.password" />
    </div>
    <button @click="handleClick">Register</button>
</template>

<script setup lang="ts">
import request from '../api/index';
import { ref } from 'vue';
const data = ref<any>({
    fullName: '',
    email: '',
    password: '',
});

const handleClick = async () => {
    const res = await request.post('/auth/register', data.value);
};
</script>

<style scoped></style>
