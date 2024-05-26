<script setup>
import Model from "./components/Model.vue";
import { ref } from "vue";
const showModel = ref(false);
const getModel = ref(false);
</script>

<template>
  <div class="button">
    <p>Tối nay bạn rảnh khum ? </p>
    <button @click="showModel = true">Có chứ</button>
    <button @click="getModel = true">Khum</button>
  </div>
  <Model v-model="showModel"
    >Tối mình đi cháy phố nhé ?
  </Model>
  <Model v-model="getModel">
    !No
  </Model>
</template>

<style scoped>
button {
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;
  margin: 0 12px;
  background-color: blue;
  border: none;
}
button:hover {
  opacity: 0.7;
  background-color: rgb(8, 8, 8);
}
</style>
