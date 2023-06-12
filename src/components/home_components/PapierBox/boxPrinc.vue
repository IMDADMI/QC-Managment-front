<template>
    <section class="banner1">
        <div class="container">   
            <slot></slot>   
                <p><router-link to="/" >Accueil</router-link>
                    <router-link to="/shop"> / shop</router-link>
                    <router-link  v-if="lienComp" to="/shop/Composants"> / Composants</router-link>
                    <router-link  v-if="lienAcc" to="/shop/Accessoires"> / Accessoires</router-link>

                    <router-link  v-if="!lientit" v-bind:to="lien"> / {{ title }}</router-link> </p>
                
                <h2><strong>{{ title }}</strong></h2>                
        </div>
    </section>
</template>

<script>
export default {
    name: "BoxPrincipal",
    props: {
        title:String,
        lien:String,
        lienComp:false,
        lienAcc:false,
        lientit:false,

    },
    data(){
        return{
            
        }
    }

};
</script>

<style scoped>
.banner1 {
    width: 70%;
    text-align: center;
    min-height: 25vh;
    background-color:#025661;
    background-size: cover;
    color: white;
    display: grid;
    place-items: center;
    padding-block: 40px;
    border: solid 0px;
    border-radius: 10px;
    margin-left: 15%;
    margin-top: 30px;
}

p {
    padding-block: 1.4rem;
    font-size: 2rem;
    color:white;
}

.banner1 button {
    margin-top:20px;
    padding: 14px 30px;
    letter-spacing: 0.5px;
    background-color: white;
    border: 2px solid white;
    font-size: 1.8rem;
    color: #060f1e;
}

.banner1 button:hover {
    background-color: transparent;
    color: white;
}

@media (max-width: 599px) {
    p {
        font-size: 2.8rem;
    }
}
.container img{
    width: 25%;
}
a:hover{
    color: white;
}

</style>
