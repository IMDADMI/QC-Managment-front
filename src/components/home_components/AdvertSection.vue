<template>
  <section>
    <div class="container">
      <div class="ad1">
        <advert-card
          advertText="Découvrez notre large sélection d'accessoires pour améliorer votre expérience de jeu, ainsi que des PC de bureau et portables performants pour vous aider à remporter toutes vos parties !"
          advertTitle="Équipez-vous pour gagner !"
          buttonText="J'achète"
          lien="/shop/Accessoires"
          backgroundImage="first"
        />
        <advert-card
          advertText="Optez pour notre service de montage de PC et Serveur sur mesure et choisissez les composants qui correspondent le mieux à vos besoins "
          advertTitle="Montez votre propre PC ou votre Serveur sur mesure"
          buttonText="Decouvrir"
          lien="/Configurateur-produit"
          backgroundImage="second"
        />
      </div>
      <div class="ad2">
        <advert-card
          advertText="Profitez de notre expertise pour choisir les composants les plus performants et adaptés à votre utilisation. Faites confiance à notre sélection !"
          advertTitle="Les meilleurs composants pour votre PC"
          backgroundImage="third"
          
          :haveButton="false"
        />
        <advert-card
          advertText="Vous êtes souvent en déplacement ou travaillez depuis chez vous ? Nos PC portables performants et légers sont conçus pour répondre à vos besoins, où que vous soyez !"
          advertTitle="Emportez votre travail partout avec nos PC portables"
          backgroundImage="fourth"
          :haveButton="false"
        />
        <advert-card
          advertText="Découvrez notre sélection d'imprimantes et de scanners de qualité pour une utilisation domestique ou professionnelle."
          advertTitle="Imprimez et numérisez avec facilité"
          backgroundImage="fifth"
          :haveButton="false"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AdvertCard from "./cards/AdvertCard.vue";

export default {
  components: { AdvertCard },
  name: "AdvertSection",
};
</script>

<style scoped>
.ad1,
.ad2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.ad2 {
  margin-top: 3rem;
  gap: 2rem;
}

@media (max-width: 670px) {
  .ad1,
  .ad2 {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
</style>