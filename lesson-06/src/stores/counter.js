import { defineStore } from "pinia";

export const useCounterOptionStore = defineStore('counter' , {
    state : () => ({
        count : 0,
        name : 'pinia',
        age : 6,
    }),
    getters : {
        trippleCount : (state) => {return state.count * 3},
    },
    actions : {
        increment : () => {
            this.count++;
        },

    }
});

