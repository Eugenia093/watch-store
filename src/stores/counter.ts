import { defineStore } from "pinia";


export const useCounterStore = defineStore('counter', {
    state: () => ({
        productClicks: 0,
        blogClicks: 0
    }),

    getters: {
        totalClicks: (state) => {
            state.blogClicks + state.productClicks
        }
    },

    actions: {
        incrementProduct() {
            this.productClicks++;
        },
        incrementBlog() {
            this.blogClicks++;
        },
        async sendClicks() {
            //cream o functie in api.ts si o apelam aici
        }
    }

})