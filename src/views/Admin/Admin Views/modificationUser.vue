<template>
  <h4 style="text-align: center;">Page d'admin</h4>
    <div>
      <div style="display: flex;margin-top: 8%;margin-left: 12%;">

    <p style="margin-left: 12%;">Nom:</p>

    <div class="input-group mb-3" id="input">
      <input type="text" class="form-control" v-model="utilisateur.lastName" aria-describedby="basic-addon1">
    </div>
    <p style="margin-left: 2%;">Prenom:</p>

  <div class="input-group mb-3" id="input">
    <input type="text" class="form-control" v-model="utilisateur.firstName"  aria-label="Username" aria-describedby="basic-addon1">
  </div>
  </div>
  <div style="display: flex;margin-top: 3%;margin-left: 12%;">
   <p>  pays:</p>
    <div class="input-group mb-3" id="input" >
      <input type="text" class="form-control"  v-model="utilisateur.country" aria-describedby="basic-addon1">
    </div>
    <p style="margin-left: 2%;">Telephone:</p>

    <div class="input-group mb-3" id="input">
      <input type="text" class="form-control"  v-model="utilisateur.fullNumber" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <p style="margin-left: 2%;">Ville:</p>

  <div class="input-group mb-3" id="input">
    <input type="text" class="form-control" v-model="utilisateur.city"  aria-label="Username" aria-describedby="basic-addon1">
  </div>
  </div>
  <div style="display: flex;margin-top: 3%;margin-left: 12%;">
   <p>  État :</p>
    <div class="input-group mb-3" id="input" >
      <input type="text" class="form-control"  v-model="utilisateur.state"  aria-describedby="basic-addon1">
    </div>
    <p style="margin-left: 2%;">Code ZIP : </p>

  <div class="input-group mb-3" id="input">
    <input v-model="utilisateur.zipCode" type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1" >
  </div>
  <p style="margin-left: 2%;">Password : </p>

  <div class="input-group mb-3" id="input" style="width: 18%;">
    <input type="text" class="form-control" v-model="utilisateur.password">
  </div>
  </div>

  <div style="display: flex;margin-top: 3%;margin-left: 12%;">
   <p>  Email :</p>
    <div class="input-group mb-3" id="input"  style="width:28%">
      <input type="text" class="form-control"  v-model="utilisateur.email">
    </div>
    <p style="margin-left: 2%;">Address : </p>

  <div class="input-group mb-3" id="input" style="width:42%">
    <input type="text" class="form-control"  v-model="utilisateur.adress">
  </div>
 
  
  </div>
  
    </div>
    <button type="button" style="background: none;margin-left: 85%;margin-top: 3%;" @click="modifierUser()"><img src="@/assets/images/composant_PC_Server/Admin/modification-du-stylo.png" alt="" style="width: 50px;"><p>Modifier</p></button>

  
 

  
  


</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "user",
  data(){
    return{
      utilisateur:{}
    }
  },
  computed: {
        ...mapState(["user"])
    },methods:{
        modifierUser(){
          try {
            axios.put(
                    'http://164.92.134.202:8099/api/user/modifier',  
                    {
                        "userId": this.user.userId,
                        "firstName":this.utilisateur.firstName,
                        "lastName":this.utilisateur.lastName,
                        "email": this.utilisateur.email,
                        "password": this.utilisateur.password,
                        "fullNumber": this.utilisateur.fullNumber,
                        "adress": this.utilisateur.adress,
                        "city": this.utilisateur.city,
                        "state":this.utilisateur.state,
                        "country":this.utilisateur.country,
                        "zipCode":this.utilisateur.zipCode,
                        "admin":this.utilisateur.admin
                    }              
                ).then((res)=>{

                })
           } catch (error) {
              console.log(error);
           } 
        }
    },created(){
      try {
            axios.get(
                    'http://164.92.134.202:8099/api/user/'+this.user.lastName,                
                ).then((res)=>{
                    this.utilisateur=res.data[0];
                    console.log(this.utilisateur)
                })
           } catch (error) {
              console.log(error);
           }  
    }
  
};
</script>

<style>
  .input-group input{
    font-size: 2rem;
    border-radius: 30px;
    
  }
  #input{
    width: 20%;
    margin-left: 3%;
  }
  
</style>
