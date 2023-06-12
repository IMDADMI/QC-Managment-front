<template>
    <main-header />
    <section class="container">
        <a @click="direction" id="back"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                /></svg></a>
        <div class="cart-item" v-if="loaded">
            <div class="image-section">
                <img :src="Image" class="main-img" />
            </div>
            <div class="product-details">
                <span>Home / {{ product.brand }}</span>
                <h4>{{ product.productName }}</h4>
                <h4>{{ formattedPrice }} MAD</h4>
                <br>
                <div class="add-to-cart">
                    <input
                        type="number"
                        placeholder="QTY"
                        min="1"
                        max="10"
                        v-model="quantity"
                    />
                    <action-button
                        btnvalue="Ajouter au Panier"
                        @click="addItemToCart"
                    />
                </div>
                <h4 >Détails du produit</h4>
                <p class="product-description">
                    {{ product.description }}
                </p>
                <div class="garantie"><h4 style="">Garantie : {{ product.garrntyPerriode }}</h4>
</div>
            </div>
        </div>
        <product-preloader v-else> Chargement du Produit... </product-preloader>
        <ajoute-panier  @close-modal="closeModal" :ProduitNom="product.productName" :quantite="quantity"    v-if="showModal"/>

    </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
import { mapActions, mapState } from "vuex";
import AjoutePanier from "@/components/AjoutePanier.vue";

import axios from "axios";

export default {
    name: "CartItemView",
    components: {
        ProductCard,
        ActionButton,
        MainHeader,
        ProductPreloader,
        AjoutePanier,
    },
    data() {
        return {
            Image: "",
            product: [],
            loaded: false,
            showModal:false,
            quantity: 1,
        };
    },
    methods: {
        ...mapActions(["add_to_cart"]),
        setActiveImage(image) {
            this.Image = this.product.image;
        },
        direction(){ 
            let Type=this.product.productType
            if(/Casque/i.test(Type))
            this.$router.push("/shop/Accessoires/Casque");
            if(/Clavier/i.test(Type))
            this.$router.push("/shop/Accessoires/Clavier");
            if(/Usb/i.test(Type))
            this.$router.push("/shop/Accessoires/Usb");
            if(/Hautparleur/i.test(Type))
            this.$router.push("/shop/Accessoires/Hautparleur");
            if(/Microphone/i.test(Type))
            this.$router.push("/shop/Accessoires/Microphone");
            if(/Souris/i.test(Type))
            this.$router.push("/shop/Accessoires/Souris");
            if(/Webcam/i.test(Type))
            this.$router.push("/shop/Accessoires/Webcam");
            if(/Graphique/i.test(Type))
            this.$router.push("/shop/Composants/Carte-Graphique");
            if(/Ram/i.test(Type))
            this.$router.push("/shop/Composants/memoirevive-RAM");
            if(/mère/i.test(Type))
            this.$router.push("/shop/Composants/Carte-mere");
            if(/stockage/i.test(Type))
            this.$router.push("/shop/Composants/stockage");
            if(/boitier/i.test(Type))
            this.$router.push("/shop/Composants/Boitier");
            if(/blocs/i.test(Type))
            this.$router.push("/shop/Composants/Blocs-Alimentation");
            if(/Processeur/i.test(Type))
            this.$router.push("/shop/Composants/Processeurs");
            if(/Ecran/i.test(Type))
            this.$router.push("/shop/Ecrans");
            if(/Imprimante/i.test(Type))
            this.$router.push("/shop/Imprimantes");
            if(/Scanner/i.test(Type))
            this.$router.push("/shop/Scanners");
            if(/PC-bureau/i.test(Type))
            this.$router.push("/shop/Pc-Bureau");
            if(/PC-portable/i.test(Type))
            this.$router.push("/shop/Pc-portable");



        },
        addItemToCart() {
            
                let item = {
                    ...this.product,
                    quantity: this.quantity,
                    
                };
                this.add_to_cart(item);
                this.showModal=true;
            
        },
        closeModal() {
            this.showModal = false;
        },
    },
    computed: {
        ...mapState(["user", "cart"]),
        formattedPrice() {
            return this.product.productPrice ;
        },
    },
    async created() {

       /* axios.get('http://localhost:3000/produits/').then((res) => {

                this.product = res.data.map((product) => {

                    if(this.Idproduct==product.productId)
                    return product;
                });
                this.loaded = true;
            })
                .catch((err) => {
                    console.log(err);
                    this.loaded = false;
                });*/
        let res = await axios.get(
            `http://164.92.134.202:8099/api/product/${this.$route.params.productId}`
        );
        this.product = res.data;
        this.loaded = true;
        this.Image = this.product.image;
    },
};
</script>

<style scoped>
.cart-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5rem;
    padding-bottom: 2rem;
    margin-top: 10px;
}

.image-section {
    width: 47%;
}

.image-section,
.product-details {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#back {
    padding: 1rem 1.8rem;
    font-size: 2rem;
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    background-color: var(--dark-blue);
    transition: opacity 0.25s;
    display: grid;
    place-content: center;
    width: fit-content;
}

#back:hover {
    opacity: 0.85;
}

.main-img {
    height: 55vh;
    max-width: 100%;
    object-fit: contain;
}

.img-thumbnails {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    padding-top: 1rem;
    width: 100%;
}

.img-thumbnails .thumbnail {
    height: auto;
    max-width: 100%;
    cursor: pointer;
}

.img-thumbnails .thumbnail:hover {
    opacity: 0.7;
}

/* Product Details */
.product-details {
    width: 60%;
    padding-block: 2.5rem;
}

.product-details span {
    font-size: 1.4rem;
}

.product-details h4 {
    padding: 1.5rem 0 0rem 0;
}

.product-details select {
    max-width: 120px;
    padding: 0.8rem 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
}

.extra {
    padding-block: 4.5rem;
    text-align: center;
}

.product-description {
    line-height: 2.5rem;
}

@media (max-width: 599px) {
    .cart-item {
        flex-direction: column;
    }
    .image-section,
    .product-details {
        width: 100%;
    }

    .image-section {
        padding-top: 2rem;
    }
    .image-section a {
        top: -2rem;
        left: 0;
    }
}
.garantie{
    color: rgba(222, 70, 70, 0.778);

}
</style>
