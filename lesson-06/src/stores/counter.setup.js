import { defineStore } from "pinia";
import {ref} from 'vue';
export const useCounterSetupStore = defineStore('counter.setup' , () =>{
    const count = ref(0);
    return {count};
});

