<template>
  <h3 style="text-align: center;">Page des ordres</h3>

  <table class="table table-hover" id="table">
  <thead>
    <tr>
      <th scope="col" style="margin-left: 2%;"><p><strong>ID</strong>  </p></th>
      <th scope="col"> <p><strong>Quantité</strong> </p></th>
      <th scope="col"><p><strong>Prix</strong> </p></th>
      <th scope="col" ><p><strong>Date</strong> </p></th>
      <th scope="col"><p><strong>ID Utilisateur</strong> </p></th>
      <th scope="col"><p><strong>ID Produit</strong> </p></th>
      <th scope="col"><p><strong>ID Commande</strong> </p></th>

    </tr>
  </thead>
  <tbody v-for="o in order" :key="o.orderId">
    <tr>
      <th scope="row"><p>{{ o.orderId }}</p></th>
      <td><p>{{ o.orderQuantity }}</p></td>
      <td><p>{{ o.orderPrice }}</p></td>
      <td><p>{{ o.orderDate }}</p></td>
      <td>
        <p><button class="buttoon" data-bs-toggle="modal" :data-bs-target="'#utilisateur'+o.orderId">{{ o.user.userId }}</button>(Plus détails...)</p>
        <div class="modal fade" :id="'utilisateur'+o.orderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="@/assets/images/composant_PC_Server/Admin/user.png" alt="User" style="width: 40px;margin-left: 45%;">
                        <p> <strong> {{o.user.firstName}} {{ o.user.lastName }} </strong></p>
                        <table border="0" style="margin-left: 9%;">
                          <tr>
                            <td style="width: 25%;">
                                <p><strong>Email : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.email }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Telephone : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.fullNumber }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Ville : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.city }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>État : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.state }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>pays : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.country }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Code ZIP : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.user.zipCode }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Address : </strong></p>
                            </td>
                            <td>
                                <p style="margin-top: 9%;width: 75%;margin-left: 13%;">{{ o.user.adress }}</p>
                            </td>
                        </tr>

                        </table>

                      </div>
   
                    </div>
                  </div>
                </div>
      </td>
     
      <td>
        <p><button class="buttoon" data-bs-toggle="modal" :data-bs-target="'#produit'+o.orderId"   >{{ o.product.productId }} </button>(Plus détails...)</p>
        <div class="modal fade" :id="'produit'+o.orderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img :src="o.product.image" alt="User" style="width: 140px;margin-left: 35%;">
                        <p> <strong> {{ o.product.productName }} </strong></p>

                        <table border="0" style="margin-left: 9%;">
                          <tr>
                            <td style="width: 25%;">
                                <p><strong>Module : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.model }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Type: </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.productType }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Prix : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.productPrice }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>garante : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.garrntyPerriode }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Poid : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.weight }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Description : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.product.description }}</p>
                            </td>
                        </tr>
                        </table>

                      </div>
   
                    </div>
                  </div>
                </div>
      </td>
     
      <td>
        <p> <button class="buttoon" data-bs-toggle="modal" :data-bs-target="'#commande'+o.orderId">{{ o.commande.comdId }}</button>(Plus détails...) </p>
        <div class="modal fade" :id="'commande'+o.orderId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="@/assets/images/composant_PC_Server/Admin/remarque.png" alt="User" style="width: 50px;margin-left: 45%;">
                        <p> <strong> Commande :  {{ o.commande.comdId }} </strong></p>
                        <table border="0" style="margin-left: 9%;">
                          <tr>
                            <td style="width: 25%;">
                                <p><strong>Paiement : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.commande.paymentMethod }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>TotalMontant: </strong></p>
                            </td>
                            <td>
                                <p>{{ o.commande.totalAmount }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Date de livraison : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.commande.deliveryDate }}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="width: 25%;">
                                <p><strong>Statut : </strong></p>
                            </td>
                            <td>
                                <p>{{ o.commande.status }}</p>
                            </td>
                        </tr>
                        </table>

                      </div>
   
                    </div>
                  </div>
                </div>
      </td>

    </tr>
    
   
  </tbody>
</table>
</template>

<script>
import axios from "axios";
export default {
  name: "OrdersPage",
  data(){
    return{
      order:[]
    }

  },
  created(){
    try {
            axios.get(
                    'http://164.92.134.202:8099/api/order/allOrder',                
                ).then((res)=>{
                    this.order=res.data;
                  console.log(this.order)
                })
           } catch (error) {
            console.log(error);
           }  
  }
};
</script>

<style>
#table{
  margin-top: 7%;
}
#table p{
  text-align: center;
}
.buttoon{
  height: 100%;
  width:100%;
  background-color:var(--light-green);
  background-position: left; /* Centre l'image de fond dans le bouton */
  background-repeat: no-repeat; /* Empêche la répétition de l'image de fond */
  border: none; /* Supprime les bordures du bouton si nécessaire */

}

.buttoon:hover {
    color: #fff;
    background-color: var(--dark-blue);
    border-color: var(--dark-blue);
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
}
</style>