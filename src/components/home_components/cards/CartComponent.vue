<template>
        <div class="cart_comp" :style="{border:click}" >
             <div v-for="element in Image" :key="element">
                <img v-bind:src="element.image"  v-if="motDansChaine(element.Nom,Name)">
            </div>
            <p id="postionFont"><strong> {{ Name }} </strong></p>
            <h4><strong>{{ Price }}</strong> MAD</h4>
        </div>
        <img src="">
</template>
<script>
    export default {
    name: "ComponantCard",
    data(){
        return{
            bord:'solid 0px',
            Image:[
            {   
                Nom:"Intel",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/intel.png")
            },
            {   
                Nom:"Ryzen",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Ryzen-Logo.wine.png")
            },
            {   
                Nom:"ASRock",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/ASRock-logo.jpg")
            },
            {   
                Nom:"ASUS",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Asus-Logo.png")
            },
            {   
                Nom:"GIGABYTE",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Gigabyte-Logo.png")
            },
            {   
                Nom:"MSI",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/MSI-Logo.png")
            },
            {   
                Nom:"OCPC",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/OCPC.png")
            },
            {   
                Nom:"INNO3D",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/INNO3D.jpg")
            },
            {   
                Nom:"Kingston",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/kingston-logo-5.png")
            },
            {   
                Nom:"PNY",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/PNY.png")
            },
            {   
                Nom:"DELTA",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/téléchargement.png")
            },
            {   
                Nom:"Toshiba",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Toshiba-Logo.png")
            },
            {   
                Nom:"SEAGATE",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/SEAGATE.png")
            },
            {   
                Nom:"NZXT ",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/NZXT.png")
            },
            {   
                Nom:"CORSAIR",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/CORSAIR.png")
            },
            {   
                Nom:"SILVERSTONE",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/SILVERSTONE.png")
            },
            {   
                Nom:"BIOSTAR",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Biostar.png")
            },
            {   
                Nom:"Nvidia",
                image:require("@/assets/images/composant_PC_Server/Comp_Images/Nvidia.png")
            }
            

            ]

        }
    },
    props: [
        "Id",
        "Type",
        "Name",      
        "Price",
        "isClick"
    ],
    computed: {
        formattedPrice() {
            return this.price;
        },click(){
                if(this.isClick){
                    return 'solid darkgreen 3px'
                }else{
                    return this.bord
                }
        }
    },
    methods:{
        motDansChaine(mot, chaine) {
             mot = mot.toUpperCase();
             chaine = chaine.toUpperCase();
            if (chaine.includes(mot)) {
                return true;
            } else {
                return false;
            }
         },
   
    }
};
</script>
<style>
.cart_comp{
    width: 90%;
    height: 90%;
    border: solid 0px;
    border-radius:10px ;
    justify-content: center;
    margin-left: 0%;
    flex-wrap: wrap;
    gap: 25px;

}


.cart_comp img{
    width: 100px;
    height: 90px;
    display: block;
    margin: auto;
    
    
}
p,h4{
    text-align: center;
    font-size: 1rem;

}
.cart_comp button{
    background: none;
    
}

</style>
