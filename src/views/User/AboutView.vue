<template>
    <main-header />
    <sub-header heading="#QuiNousSommes" subHeading="Apprendre a nous connaitre" />
    <div class="container">
        <article>
            <img
                src="@/assets/images/a6.jpg"
                class="about-img"
                alt="Who we are"
            />
            <div class="about-text">
                <h1>Qui nous sommes ?</h1>
                <p>
                    Nous sommes fiers de notre délai de livraison et de nos clients
                    satisfaction première approche. Notre plateforme vous connecte à
                    les meilleurs prestataires de services de votre région. Nous sommes une équipe de
                    jeunes et passionnés qui se consacrent à
                    vous offrir le meilleur service possible.
                </p>
            </div>
        </article>
     <!--  <div class="video-section">
            <h1>Download Our <a href="/">App</a></h1>
            <img
                src="@/assets/images/download.svg"
                alt=""
                class="video-banner"
            />
        </div>--> 
    </div>
    <service-section />
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ServiceSection from "@/components/home_components/ServiceSection.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
    components: { SubHeader, ServiceSection, MainHeader, MainFooter },
    name: "AboutView",
};
</script>

<style scoped>
article {
    display: flex;
    gap: 4rem;
    margin-bottom: 2.5rem;
}
.about-img {
    height: 50vh;
    width: 50%;
    object-fit: cover;
}

.about-text {
    width: 50%;
}

.about-text p {
    line-height: 25px;
}

.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 3rem;
    text-align: center;
}

.video-banner {
    height: 60vh;
    width: 60%;
    border-radius: 10px;
    margin-top: 2rem;
}

.video-section a {
    text-decoration: underline;
    color: var(--dark-blue);
}

@media (max-width: 499px) {
    article {
        flex-direction: column;
    }
    .about-img,
    .about-text,
    .video-banner {
        width: 100%;
    }

    h1 {
        font-size: 4rem;
    }
}
</style>
