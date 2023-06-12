<template>
    <main-header />
    <div class="titre">
        <h1><strong>Composez dès maintenant le Serveur de vos rêves !</strong></h1>
        <p>
            Avec notre configurateur de Serveur  simple et clair. SETUP  vous propose une large sélection de composants matériels Serveur de haute qualité et à jour qui sont parfaitement adaptés. Achetez maintenant votre Serveur individuel à un prix raisonnable.
        </p>
    </div>
  <div class="composant_fitrage">
    <div class="h" v-for="element in typeFiltrage" :key="element">

            <div id="h_image" style="background-color: darkcyan ; width: 80px;height: 70px;" v-if="element.clique==0">        
             <button @click="clique(element.type)"> <img v-bind:src="element.image" style="width: 50px ;"> </button>
        </div>
        <div id="h_image"  v-if="element.clique==1" style=" background-color: black ; width:80px;height: 70px;">        
             <button @click="clique(element.type)"> <img v-bind:src="element.image" style="width: 50px ;" > </button>
        </div>
        <div id="h_image"  v-if="element.clique==-1" style="width:80px;height: 70px;">        
             <button @click="clique(element.type)"> <img v-bind:src="element.image" style="width: 50px ;" > </button>
        </div>
        <p>{{element.type}}</p>
    </div>

</div>   

<div class="panier_Carts">
    
    <div class="Carts_Comp" v-for="element in selectionType" :key="element">
        <div class="composant"  v-for="comp in fitrage" :key="comp">
          <button  v-on:click="select(comp.compName,comp.compType)" v-if="element.type!='Total' "> 
             <CartComponent v-if="comp.compType==element.type && element.clique==0" 
                :Id = "comp.id"
                :Name ="comp.compName" 
                :Type= "comp.compType" 
                :Price = "comp.compPrice"
                :isClick = "comp.isSelect"                 
             />
            </button>

        </div>
        <div class="total" v-if="element.type=='Total'">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col"><p></p></th>
                    <th scope="col" style="width: 50%;"><p><strong>Produit</strong></p> </th>
                    <th scope="col"><p><strong>Prix</strong></p></th>
                    <th scope="col" style="width: 30%;"> <p><strong>Quantité</strong></p></th>
                    <th scope="col" style="width: 10%;"> <p><strong></strong></p></th>

                    </tr>
                </thead>
                <tbody v-for="element in configure" :key="element">
                    <tr v-if="element.quantity>0 && element.quantity<=5 ">
                    <th scope="row" style="width: 10%;">
                        <img v-bind:src="element.image" style="width: 30px;height: 30px; margin-left:30%;margin-top: 2%;">
                        <p>{{ element.compType }}</p> </th>
                    <td><p>{{ element.compName }}</p></td>
                    <td> <p>{{ element.compPrice }}</p> </td>
                    <td v-if="element.compType=='Carte mere' || element.compType=='Carte Graphique' || element.compType=='Stockage SSD' || element.compType=='Stockage HDD' || element.compType=='Memoire Ram' "> <p><input type="number" :placeholder="1" v-model="element.quantity" style="margin-left: 5%;" max="5"></p> </td>                     
                    <td v-else> <p>{{ element.quantity }} </p> </td>
                    <td><button @click="vider(element.compType)"><img src="@/assets/images/composant_PC_Server/bouton-supprimer.png" style="width: 30px; background: none;margin-left: 50%;"></button>                     </td> 

                </tr>                    
                </tbody>
                <thead>
                    <tr>
                        <th scope="col" colspan="3"><h4 style="color:var(--grey)"><strong> Prix Total: </strong> </h4></th>
                        <th scope="col" colspan="3"><h4> {{this.product.productPrice}} MAD </h4></th>
                    </tr>
                </thead>
                </table>
                <button @click="acheter()" style="background: none;margin-top: 3%;margin-left: 100%;"><img src="@/assets/images/composant_PC_Server/Comp_Images/checkout.png" style="width: 40px;"> <p>Selecte</p></button>

        </div>
     <!--  <div  class="checkout" v-else-if="element.type=='CheckOut'">
            <h3>CheckOut</h3>
        </div>-->
   
      
    </div>

    <div class="panier" v-if="!this.typeFiltrage[9].clique==0">
        
        <div v-for="i in configuration" :key="i">
            <div style="display: flex;flex-wrap: wrap;gap: 5px; text-align: center;">
                <img  src="@/assets/images/composant_PC_Server/Comp_Images/checklist.png" style="width: 40px;margin-top: 0%;">
                <h4 style="color: darkgreen;margin-top: 5%;"><strong>{{i.compType}}</strong></h4>
            </div>
            <p style="font-size: 1.7rem; width: 200px;"><strong>{{i.compName}}</strong><button @click="vider(i.compType)" style="background: none;width: 10%;"> <img src="@/assets/images/composant_PC_Server/Comp_Images/faire-pivoter-le-symbole-dinterface-fleche-circulaire-gauche.png" style="width: 10px;">  </button>
</p>
        </div>
    </div>
    <ajoute-panier  @close-modal="closeModal" ProduitNom="Buy-Tech Configurateur Serveur" :quantite="quantity"    v-if="showModal"/>


</div>
   


   

    
    <main-footer />
</template>
<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import AjoutePanier from "@/components/AjoutePanier.vue";

import axios from "axios";
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "vuex";
import CartComponent from "@/components/home_components/cards/CartComponent.vue";

export default{
    name: "ConfigServerView",
    data() {
        return {
            quantity:1,
            showModal:false,
            images:[],
            component:[],
            composontFiltre:[],
            product:{
                "productId":999999,
                "productName": "Serveur Configure",
                "productType": "Serveur",
                "brand": "Buy-Tech Server",
                "model": "Buy-Tech version 2022",
                "description": "Un PC de bureau configuré est généralement un ordinateur assemblé à partir de différentes composantes choisies pour répondre à des besoins spécifiques de l'utilisateur. Il peut inclure un boîtier de tour, une carte mère, un processeur, de la mémoire RAM, des disques durs ou des SSD pour le stockage, une carte graphique pour les graphismes, une alimentation électrique, ainsi qu'un système d'exploitation et des logiciels.",
                "image": "https://firebasestorage.googleapis.com/v0/b/images-projet-front-end.appspot.com/o/dell.jpg?alt=media&token=1b3154c4-837f-4eed-996e-af44aa09bbfa",
                "productPrice": 0,
                "garrntyPerriode": "12 mois",
                "weight": 3.55,
                configuration:[]
            }, 
            prix:0,
            configuration:[]
            ,typeFiltrage:[
                {
                    type:"Processeur",
                    image:require("@/assets/images/composant_PC_Server/processeur.png"),
                    clique:0
                },
                {
                    type:"Carte mere",
                    image:require("@/assets/images/composant_PC_Server/carte-mere.png"),
                    clique:-1

                },
                {
                    type:"Graphique",
                    image:require("@/assets/images/composant_PC_Server/carte-graphique.png"),
                    clique:-1

                },
                {
                    type:"Stockage HDD",
                    image:require("@/assets/images/composant_PC_Server/hdd.png"),
                    clique:-1

                },
                {
                    type:"Stockage SSD",
                    image:require("@/assets/images/composant_PC_Server/stockage-externe.png"),
                    clique:-1

                },
                {
                    type:"Boitier PC",
                    image:require("@/assets/images/composant_PC_Server/Comp_Images/cpu.png"),
                    clique:-1

                },
                {
                    type:"Memoire Ram",
                    image:require("@/assets/images/composant_PC_Server/memoire-ram.png"),
                    clique:-1

                },
                {
                    type:"Alimentation",
                    image:require("@/assets/images/composant_PC_Server/amplificateur.png"),
                    clique:-1

                },{
                    type:"RAID",
                    image:require("@/assets/images/composant_PC_Server/raid.png"),
                    clique:-1

                },{

                    type:"Total",
                    image:require("@/assets/images/composant_PC_Server/Comp_Images/gross.png"),
                    clique:-1

                }
                

            ]
           
        };
    },
    components: {
        MainHeader,
        MainFooter,
        axios,
        CartComponent,
        AjoutePanier
    },created(){
        this.getComponents()
    },
    computed:{
        configure(){
            this.prix=0
            this.configuration.forEach(element => {
                this.prix=this.prix+(element.compPrice*element.quantity)
            });
            this.product.productPrice=this.prix.toFixed(2)
            return this.configuration
        },

        fitrage(){
            let type =""
            this.typeFiltrage.forEach(element => {
                if(element.clique==0){
                    type=element.type
                }
            });
            for (let index = 0; index < this.component.length; index++) {
                this.composontFiltre[index] =  this.component[index];
                this.composontFiltre[index].isSelect=false;
            }
            return this.composontFiltre.filter(i=>
                i.compType.match(type)
                 )
        },
        selectionType(){
              return  this.typeFiltrage.filter(i=>
                    i.clique==0
                )

        }
    }
    ,methods:{
        ...mapActions(["add_to_cart"]),
        acheter(){
            let myArray = [];
            let unite_local=""
            for (let index = 0; index < this.configuration.length; index++) {
                if(this.configuration[index].compType=="Processeur"){
                    unite_local="GHz"
                }else if(this.configuration[index].compType=="Memoire Ram" || this.configuration[index].compType=="Stockage HDD" || this.configuration[index].compType=="Stockage SSD" ){
                    unite_local="Go"

                }else if(this.configuration[index].compType=="Graphique"){
                    unite_local="MHz"
                }else if(this.configuration[index].compType=="Boitier PC" || this.configuration[index].compType=="Carte mere"){
                    unite_local="mm*mm"
                }else if(this.configuration[index].compType=="Alimentation"){
                    unite_local="W"
                }
                let conf = {quantity:this.configuration[index].quantity,unite:unite_local,component:{ compId:this.configuration[index].compId,compName:this.configuration[index].compName, compType:this.configuration[index].compType,compPrice:this.configuration[index].compPrice}}; 
                this.product.configuration.push(conf)

            }
            console.log(this.product);
            let item = {
                    ...this.product,
                    quantity:1,
                    
                };
                this.add_to_cart(item);
                this.showModal=true;


       },closeModal() {
            this.showModal = false;
        }
        ,vider(type){
            this.composontFiltre.forEach(element => {
                if(element.compType==type){
                    element.isSelect=false;
                }
            });
            for (let index = 0; index < this.configuration.length; index++) {
                if(this.configuration[index].compType==type){
                    this.configuration.splice(index,1)
                }
            }
            

        }
        ,select(v,t){
            var image
            
            this.composontFiltre.forEach(element => {
                    element.isSelect=false;
            });
            for (let index = 0; index < this.configuration.length; index++) {
                    if(this.configuration[index].compType==t){

                        this.configuration.splice(index,1)
                    }                
            }
            
            for (let index = 0; index < this.composontFiltre.length; index++) {
                if(this.composontFiltre[index].compName==v){
                    this.composontFiltre[index].isSelect=true
                    this.composontFiltre[index].quantity=1;
                    this.typeFiltrage.forEach(element => {
                        if(this.composontFiltre[index].compType==element.type){
                            this.composontFiltre[index].image=element.image
                        }
                    });
                    this.configuration.push(this.composontFiltre[index])
                }      
            }
            console.log(this.product);
        }

        ,clique(a){
            let cliqueInver=false
            let i,i_1=0
            let size =this.typeFiltrage.length
            for (let index = 0; index < size; index++) {
                if( this.typeFiltrage[index].type==a && this.typeFiltrage[index].clique==-1 ){
                    this.typeFiltrage[index].clique=0 
                    i=index
                }else if( this.typeFiltrage[index].type==a && this.typeFiltrage[index].clique==1){
                    this.typeFiltrage[index].clique=0 
                    i_1=index
                    cliqueInver=true
                }                
            }
            for (let index = 0; index < i; index++) {
                this.typeFiltrage[index].clique=1   
            }
            let j=i_1
            while(cliqueInver==true && j<=size){
                j++
                this.typeFiltrage[j].clique=-1
                
            }
        },
        getComponents() {
          try {
            axios.get(
                    'http://164.92.134.202:8099/api/component/all',                
                ).then((res)=>{
                    this.component=res.data;
                  console.log(this.component)


                })
           } catch (error) {
            console.log(error);
           }        
        },
 
    }
    
}

</script>
<style scoped>
.container{
height: 100%;
min-height: 50%;
width:50%
}



.titre{
    margin-left: 0%;
    margin-top: 3%;
    width: 100%;
    margin-bottom: 3%;
    
}
.titre h1{
    margin-left: 17%;
}
.titre p{
    margin-left: 17%;
    width: 70%;
}
#h_image {
    border: solid #025661 3px;
    width: 70%;
    height: 40%;
    display: inline-block;
    border-radius:80px ;
    margin-bottom: 2%;
}
#h_image img{
    background-color: white;
    border-radius: 10px;
   
    margin-top: 15%;
    margin-left: 28.7%;
}
#h_image button{
    background: none;
}
.h p{
width: 100%;
border: solid 0px;
font-size: 1.60rem;
 text-align: center;
}
.h{
    display: block;
    margin-left: 1%;
}
.composant button{
    background: none;
    width: 100%;
    border: solid red 0px;
    
}
.composant_fitrage{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 1%;
    
    
}
.Carts_Comp{
    border: solid 0px;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 1%;
    width: 70%;
    margin-left: 10%;

}
.composant{
    width: 200px;
    height: 200px;
    border: solid 0px;
    margin-left: 3%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    gap: 25px;
}
.panier{
    border: darkgreen solid 0px;
    height: 9%;
    margin-left: 0%;


}
.panier_Carts{
    border: solid 0px;
    flex-wrap: wrap;
    display: flex;
    gap: 15px;
}
.total{
    width: 100%;
    border: solid 0px;
    margin-top: 2%;
    margin-bottom: 2%;

    
}
.total table{
    width: 110%;
    border: solid px;
    margin-left: 3%;
}
.total p{
    font-size: 1.7rem;
    color: black;
}
</style>