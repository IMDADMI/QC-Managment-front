<template>
    <main-header />
    <div class="container">
        <h3 id="h3">Configurateur des différentes produits</h3>
        <div class="confps">
            <div class="config1"> 
                <a href="/Configurateur-produit/Config-PC">
                    <img src="@/assets/images/composant_PC_Server/configuration.png" style="width: 100px;">
                   <p>Configuration PC</p> 
                </a>
            </div>  
            <div class="config2">
                 <a href="/Configurateur-produit/Config-Serveur">
                    <img src="@/assets/images/composant_PC_Server/serveur.png" style="width: 100px;">
                   <p>Configuration Serveur</p> 
                </a>
            </div>
        </div>



    </div>
    <main-footer />
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";

import MainFooter from "@/components/MainFooter.vue";
export default{
    name: "ConfigView",
    data() {
        return {
            
        };
    },
    components: {
        MainHeader,

        MainFooter,
    },}

</script>
<style scoped>
.container{
    justify-content: space-between;

height: 100%;
min-height: 50%;
width:50%;
}
#h3{
    margin-top: 4%;
    text-align: center;
    margin-bottom: 10%;
}
.confps{
    display: flex;
    margin-right:auto;
}
.confps p{
    font-size: 2.1rem;
    text-align: center;

}
.config1,.config2{
    margin-left:auto ;
    margin-right: auto;
    display: block;
    font-size: 2.1rem;
    text-align: center;
    
}

</style>