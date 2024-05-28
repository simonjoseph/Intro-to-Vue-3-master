app.component('product-display', {
    template: 
        /*html*/
        `<div class="product-disply">
            <div class="product-container">
                <div class="product-image">
                    <img :src="img" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title}}</h1>
                    <p v-if="inventory > 10" >In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                    <p v-else>Out of Stock</p>

                    <ul>
                        <li v-for="detail in details" >{{detail}}</li>
                    </ul>

                    <div v-for="(variant, index) in variants" :key="variant.id"
                        @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>

                    <button @click="addToCart" :disabled="!inStock" class="button" :class="{ disabledButton: !inStock }">Add to Cart</button>

                </div>
            </div>
        </div>`,
        data() {
            return {
                product: "Socks",
                brand: 'Vue Mastery',
                inventory: 100,
                selectedVariant: 0,
                details: ["50% cotton", "30% wool", "20% polyester"],
                variants: [{
                        id: 2234,
                        color: "green",
                        img: "assets/images/socks_green.jpg",
                        quantity: 50
                    },
                    {
                        id: 2235,
                        color: "blue",
                        img: "assets/images/socks_blue.jpg",
                        quantity: 0
                    }
                ]
            }
        },
})