<template>
    <div v-if="status === 'Register'">
        <div>
            <span> FullName</span>
            <input type="text" v-model="data.fullName" />
        </div>
        <span>afas</span>
        <div>
            <span>Email</span>
            <input type="text" v-model="data.email" />
        </div>
        <div>
            <span>Password</span>
            <input type="text" v-model="data.password" />
        </div>
        <button @click="handleClick">Register</button>
    </div>
    <div v-if="status === 'Login'">
        <div>
            <span>Email</span>
            <input type="text" v-model="data.email" />
        </div>
        <div>
            <span>Password</span>
            <input type="text" v-model="data.password" />
        </div>
        <button @click="handleClick2">Login</button>
    </div>
    <div>
        <button @click="setStatus('Login')">Login</button>
        <button @click="setStatus('Register')">Register</button>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import request from '../api/index';
import Cookies from 'js-cookie';
const status = ref('Register');

const setStatus = (value) => {
    status.value = value;
};

const data = ref({
    email: '',
    password: '',
});

const data2 = ref({
    fullName: '',
    email: '',
    password: '',
});

const test = computed(() => {
    console.log(data);
});

const handleClick = async () => {
    const res = await request.post('/auth/login', data.value);
    location.href = '/';
    Cookies.set('access_token', res.data.accessToken);
};

const handleClick2 = async () => {
    const res = await request.post('/auth/register', data2.value);
};
</script>

<style lang="scss"></style>
