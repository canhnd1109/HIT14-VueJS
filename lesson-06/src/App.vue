<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router';
import Child from './components/Child.vue'
const router = useRouter();

const goAbout = () => {
  router.push('/about')
}

const goHome = () => {
  router.push('/')
}

const getUsers= () => {
  router.push('/users')
}
</script>

<template>
  <div>
    <button @click="goHome">Go to Home</button>
    <button @click="goAbout">Go to About</button>
    <!-- <button @click="getUsers  ">getUser</button> -->
  </div>
  <div>
    <!-- <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link> -->
    <router-view></router-view>
  </div>
  <Child></Child>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
