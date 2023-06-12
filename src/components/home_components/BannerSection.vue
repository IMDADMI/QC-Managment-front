<template>
    <section class="banner">
        <div class="container">
            <p>Soldes</p>
            <h2>Obtenez 20% de réduction sur tous les produits et les accessoires !</h2>
            <router-link to="/shop" aria-label="Go to shop">
                <button aria-label="Explore Now">Explorez maintenant</button>
                </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "BannerSection",
};
</script>

<style scoped>
.banner {
    text-align: center;
    min-height: 25vh;
    background-image: url("@/assets/images/banner/b2.jpg");
    background-size: cover;
    color: white;
    display: grid;
    place-items: center;
    padding-block: 40px;
}

p {
    padding-block: 1.4rem;
    font-size: 2.5rem;
    color:white;
}

.banner button {
    margin-top:20px;
    padding: 14px 30px;
    letter-spacing: 0.5px;
    background-color: white;
    border: 2px solid white;
    font-size: 1.8rem;
    color: #060f1e;
}

.banner button:hover {
    background-color: transparent;
    color: white;
}

@media (max-width: 599px) {
    p {
        font-size: 2.8rem;
    }
}
</style>
