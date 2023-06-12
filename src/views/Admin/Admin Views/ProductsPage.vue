<template>
  <h3 id="h4">Page des Produits</h3>

    <button style="background:none; margin-left: 90%;border: solid 0px;" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img src="@/assets/images/composant_PC_Server/Admin/ajouter-au-panier.png" style="width: 50px; ">
           <p style="text-align: center;">Ajouter</p> 
    </button>
    <div class="input-group mb-3" style="width: 30%; margin-left: 36%;">
    <input type="text" class="form-control" placeholder="Recherche" aria-describedby="basic-addon1" style="font-size: 1.8rem; border-radius: 30px;" v-model="recherche">
  </div>
  <table class="table table-hover" >
      <thead>
          <tr>
          <th scope="col"><p><strong>Nom</strong></p> </th>
          <th scope="col"><p><strong>Type</strong></p></th>
          <th scope="col"><p><strong>Module</strong></p></th>
          <th scope="col" style="width: 10%"><p><strong>garantie</strong></p></th>
          <th scope="col" style="width: 10%"><p><strong>Poid</strong></p></th>  
          <th scope="col" style="width: 8%;"></th>   
 
          </tr>
      </thead>
      <tbody v-for="p in produit" :key="p.productId">
          <tr>
            <th><p>{{ p.productName }}</p></th>
            <td> <p>{{ p.productType }}</p></td>
            <td><p>{{ p.model }} </p></td>
            <td> <input type="text" v-model="p.garrntyPerriode" @keyup.enter="modifier(p)" style="width: 70%; margin-left: 30%;"></td>
            <td> 
              <input type="text"  v-model="p.weight" @keyup.enter="modifier(p)" style="width: 65%; margin-left: 20%;"> 
            </td>
            <td>
              <button style="background: none;border: solid 0px;"  class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#supp'+p.productId"><img src="@/assets/images/composant_PC_Server/bouton-supprimer.png" style="width: 22px;"></button>
              <button  class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#consulter'+p.productId"   style="background: none;margin-left: 12%;border: solid 0px;"><img src="@/assets/images/composant_PC_Server/Admin/la-description.png" style="width: 30px;"></button> 
              <div class="modal fade" :id="'consulter'+p.productId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p> <strong> Description </strong>
                          <textarea class="form-control" aria-label="With textarea" v-model="p.description" style="font-size: 1.6rem;height: 290px;"></textarea>
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="width: 80px; height: 35px; font-size: 1.6rem;">Close</button>
                        <button type="button" class="btn btn-primary" @click="modifier(p)" style="width: 80px; height: 35px; font-size: 1.6rem;">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade" :id="'supp'+p.productId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p style="color: red;"> <strong> Supprimer le Produit {{ p.productType }} </strong></p>
                      </div>
                      <div class="modal-footer">
                        <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="width: 80px; height: 35px; font-size: 1.6rem;">Close</button>
                        <button type="button" class="btn btn-danger" style="width: 80px; height: 35px; font-size: 1.6rem;" @click="supprimer(p.productId)">Supprimer</button>
                      </div>
                    </div>
                  </div>
                </div>

            </td>
          </tr>                    
      </tbody>
  </table>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p  style="margin-left: 30%;"> 
                          <strong> Ajoute un Produit </strong>
                        </p>
                    <div  style="width: 80%;margin-left: 10%;">
                              <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Nom de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.productName">
                          </div> 
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Type de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.productType">
                          </div>  
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Marque de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.brand">
                          </div>   
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Module de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.model">
                          </div> 
                          <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Prix de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.productPrice">
                          </div>      
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Garrant de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.garrntyPerriode">
                          </div> 
                          <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Poid de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.weight">
                          </div>
                          <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Image de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.image">
                          </div>
                          <div class="input-group mb-3">
                            <textarea type="text" class="form-control" placeholder=" Description de Produit" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;" v-model="produitAjoute.description"/>
                          </div>
                          <div class="modal-footer">
                                <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="width: 80px; height: 35px; font-size: 1.6rem;">Close</button>
                                <button type="button" class="btn btn-success" style="width: 80px; height: 35px; font-size: 1.6rem;" @click="ajouterProduit()">Ajouter</button>
                              </div>
                          <p style="margin-left: 25%;margin-top: 3%;"> <strong>Ajoute un Composant</strong> </p>
                          <div class="input-group mb-3" >
                            <input type="text" class="form-control" placeholder="Nom de Composant" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;width: 30%;" v-model="composantAjoute.compName">
                          </div>
                          <div class="input-group mb-3" >
                            <input type="text" class="form-control" placeholder="Type de Composant" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;width: 30%;" v-model="composantAjoute.compType">
                          </div>
                            
                          <div class="input-group mb-3" >
                            <input type="number" class="form-control" placeholder="Prix de Composant" aria-describedby="basic-addon1" style="font-size: 1.7rem; border-radius: 30px;width: 30%;margin-left: 1%;" v-model="composantAjoute.compPrice">
                          </div>
                        
                              </div>
                              <div class="modal-footer">
                                <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="width: 80px; height: 35px; font-size: 1.6rem;">Close</button>
                                <button type="button" class="btn btn-success" style="width: 80px; height: 35px; font-size: 1.6rem;" @click="ajouterComposant()">Ajouter</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>                
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsPage",
  data(){
    return{
        product:[],
        produitAjoute:{
          
            "productName": undefined,
            "productType":undefined,
            "brand": undefined,
            "model": undefined,
            "description": undefined,
            "image": undefined,
            "productPrice": undefined,
            "garrntyPerriode": undefined,
            "weight":undefined,
            "configuartion": []
    
        },
        composantAjoute:{
          "compName": undefined,
          "compType": undefined,
          "compPrice":undefined
          },
        recherche:undefined
    }
  },
  created(){
              try {
            axios.get(
                    'http://164.92.134.202:8099/api/product/allProduct',                
                ).then((res)=>{
                    this.product=res.data;
                  console.log(this.product)
                })
           } catch (error) {
            console.log(error);
           }        
  },
  computed:{
    produit(){
      return this.product.filter((pro) => {
        if (new RegExp(this.recherche, "i").test(pro.productName)) return pro;
      });
     // return this.product.filter(i=> i.productName.match(this.recherche))

    }
  },methods:{
    supprimer(id){
      try {
            axios.delete(
                    'http://164.92.134.202:8099/api/product/deleteProduct/'+id,                
                ).then((res)=>{
                })
           } catch (error) {
            console.log(error);
           }  
           window.location.href='/admin/products'      

    },
    ajouterProduit(){

      try {
            axios.post(
                    'http://164.92.134.202:8099/api/product/addProduct', 
                    { 
                        "productName":this.produitAjoute.productName,
                        "productType": this.produitAjoute.productType,
                        "brand":this.produitAjoute.brand,
                        "model":this.produitAjoute.model,
                        "description": this.produitAjoute.description,
                        "image": this.produitAjoute.image,
                        "productPrice":this.produitAjoute.productPrice,
                        "garrntyPerriode":this.produitAjoute.garrntyPerriode,
                        "weight":this.produitAjoute.weight,
                        "configuartion": []
                    }               
                ).then((res)=>{
                })
           } catch (error) {
            console.log(error);
           } 
      window.location.href='/admin/products'      
    },ajouterComposant(){
        try {
              axios.post(
                      'http://164.92.134.202:8099/api/component/add', 
                      { 
                                "compName": this.composantAjoute.compName,
                                "compType": this.composantAjoute.compType,
                                "compPrice":this.composantAjoute.compPrice
                      }               
                  ).then((res)=>{
                  })
            } catch (error) {
              console.log(error);
            } 
            console.log(this.composantAjoute)
        window.location.href='/admin/products'      
    },modifier(element){ 
        try {
                axios.put(
                        'http://164.92.134.202:8099/api/product/updateProduct', 
                        {
                          "productId":element.productId,
                          "productName":element.productName,
                          "productType":element.productType,
                          "brand":element.brand,
                          "model":element.model,
                          "description":element.description,
                          "image":element.image,
                          "productPrice":element.productPrice,
                          "garrntyPerriode":element.garrntyPerriode,
                          "weight":element.weight,
    
                        }               
                    ).then((res)=>{
                    })
              } catch (error) {
                console.log(error);
              }

    
    }
  }
};

</script>

<style>
#h4{
  text-align: center;
}
.table{
  margin-top: 3%;
}
.table p{
  text-align: center;
}
.modal-body p{
  font-size: 2rem;
}
</style>