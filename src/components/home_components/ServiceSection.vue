<template>
    <section class="services">
        <h2>Catégories</h2>
        <div class="service-container">
            <service-card name="Configurateur" lien="/Configurateur-produit">
                <img src="@/assets/images/Config.jpg" alt="Configurateur"
            /></service-card>


            <service-card name="PC Bureau" lien="/shop/PC-Bureau">
                <img src="@/assets/images/PCBureauN.png" alt="PC Bureau"
            /></service-card>
<slot></slot>
            <service-card name="PC Portable" lien="/shop/PC-Portable">
                <img src="@/assets/images/laptop_cartoon.jpg" alt="PC Portable"
            /></service-card>

            <service-card name="Imprimante" lien="/shop/Imprimantes">
                <img src="@/assets/images/printer-with-white-sheets.jpg" alt="Imprimante" />
            </service-card>
           
        </div>



<div class="service-container">
            
    <service-card name="Scanner" lien="/shop/Scanners">
                <img src="@/assets/images/scanner.jpg" alt="Scanner" />
            </service-card>
            <service-card name="Ecran" lien="/shop/Ecrans">
                <img src="@/assets/images/Ecran.jpg" alt="Ecran" />
            </service-card>
            <service-card name="Composants" lien="/shop/Composants">
                <img src="@/assets/images/Cpu.jpg" alt="Composants"
            /></service-card>
            <service-card name="Accéssoires" lien="/shop/Accessoires">
                <img src="@/assets/images/keyboard_cartoon.jpg" alt="Accéssoires" />
            </service-card>
            
        </div>
    </section>
</template>

<script>
import ServiceCard from "@/components/home_components/cards/ServiceCard.vue";
export default {
    name: "ServiceSection",
    components: {
        "service-card": ServiceCard,
    },
};
</script>

<style scoped>
.services {
    text-align: center;
}

.services h2 {
    margin-bottom: 2rem;
}

.service-container {
    margin-bottom: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

img {
    height: 100px;
    width: 100px;
}

@media (max-width: 399px) {
    .service-container {
        padding: 2rem;
        flex-wrap: nowrap;
        overflow-x: auto;
        justify-content: initial;
    }
}
button {
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.25s, color 0.25s;
    border: none;
}

h1 {
    font-size: 5rem;
    line-height: 6rem;
}

h2 {
    font-size: 4.6rem;
    line-height: 5.4rem;
}

h3 {
    font-size: 3.2rem;
    line-height: 4.4rem;
}

h4 {
    font-size: 2rem;
}

h6 {
    font-size: 1.2rem;
    font-weight: 700;
}

</style>
