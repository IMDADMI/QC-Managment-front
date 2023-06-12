<template>
    <main-header />
    <div class="container">
        <h1>Page des Cartes Reseaux</h1>


    </div>
    <main-footer />
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";

import MainFooter from "@/components/MainFooter.vue";
export default{
    name: "CarteReseaux",
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
height: 100%;
min-height: 50%;
width:50%






}
</style>