<template lang="html">
    <div class="container">
        <ul class="product-list">
            <li v-for="produs of products" :key="produs.id" :class="[{ 'stock-none': (produs.stock==0 && !showAllProducts) }, {'transparent': (!produs.stock && showAllProducts) }]" >
                <ProductCardComponent                                                      
                    :name="produs.name" :description="produs.description" :price="produs.price"
                    :img="produs.image" :id="produs.id" 
                    @addedToCart="handleAddingToCart" @click="incrementProduct"  
                />
            </li>
        </ul>
        {{ productClicks }}
        
    </div>

    <button @click="stock++">Click</button>
    

     <div v-cloak></div>
     {{ nume }}

</template>

<script>
import { Options, Vue } from 'vue-class-component';
import ProductCardComponent from './ProductCardComponent.vue'
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter';


@Options({
    name: 'ContainerComponent',
    components: {
        ProductCardComponent,
    },
    methods: {
        handleAddingToCart(id) {
            this.$emit('addedProductToCart', id);
        },
        ...mapActions(useCounterStore, ['incrementProduct'])
    },
    created() {
        
        axios.get('http://localhost:3000/produse')
            .then(response => {
                for (const produs of response.data) {
                    this.products.push(produs)
                }
            });

        
    },
    
    props: {
        showAllProducts: {
            type: String,
            default: false
        }
    },
    data() {
        return {
            products:[],
            footerContent: '<h2>© VueJS 2406</h2>',
            message:'text',
            prenume: 'Eugenia',
            nume_familie: 'Indoitu',
            mesaj: 'Hello world',
            stock: 8
        }
    },
    computed: {
        nume() {
            return this.prenume + " " + this.nume_familie
        },
        mesajInvers() {
            return this.mesaj.split('').reverse('').join('');
        },
        ...mapState(useCounterStore, ['productClicks'])

    },

    watch: {
        stock(valoareNoua, valoareVeche) {
            if (valoareNoua <= 5) {
                this.limitedQuantity = true
            }
            alert(`Valoarea veche: ${valoareVeche}, Valoare Noua: ${valoareNoua}`)
        }
    }
})
export default class ContainerComponent extends Vue {

}
</script>

<style lang="css" scoped>
    .container {
        display:flex;
        width: 100%;
    }
    .product-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px;
        list-style: none;
    }
    .stock-none {
        display: none;
    }
    .transparent {
        opacity: 70%;
    }
</style>


