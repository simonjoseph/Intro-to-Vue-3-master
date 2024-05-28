const app = Vue.createApp({
    data() {
        return {
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product
        },
        img() {
            return this.variants[this.selectedVariant].img
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }

})

app.mount("#app");