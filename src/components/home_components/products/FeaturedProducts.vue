<template>
    <section class="products">
        <h2>Produits populaires</h2>
        <p class="highlight">Les produits les plus vendus que nous avons en vente.</p>
        <div class="product__container" v-if="featuredProducts">
            
            <product-card v-for="(product, index) in featuredProducts" :key="index" :productId="product.productId"
                    :productName="product.productName" :productType="product.productType" :brand="product.brand"
                    :model="product.model" :weight="product.weight" :garantie="product.garrntyPerriode"
                    :price="product.productPrice" :image_url="product.image" />



        </div>
        <product-preloader type="inline" v-else>
            Chargement des produits...
        </product-preloader>
    </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
export default {
    name: "FeaturedProducts",
    components: {
        ProductCard,
        ProductPreloader,
    },
    props: ["featuredProducts"],
};
</script>

<style>
.products {
    text-align: center;
}

.products h2 {
    display: inline-block;
    margin-bottom: 10px;
}

.products .highlight {
    font-size: 1.9rem;
}

.products h2::after {
    content: "";
    display: block;
    position: relative;
    margin-inline: auto;
    top: 2px;
    height: 3px;
    left: 0;
    width: 0;
    background-color: var(--text);
    border-radius: 6px;
    animation: play 2s infinite ease-in-out;
}

@keyframes play {
    from {
        width: 0;
    }
    50% {
        width: 70%;
    }
    to {
        width: 0;
    }
}

.product__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding-block: 4rem;
}

@media (max-width: 1200px) {
    .product__container {
        justify-content: center;
    }
}

@media (max-width: 599px) {
    .product__container {
        justify-content: center;
        grid-template-columns: minmax(250px, 300px);
    }
}
</style>
