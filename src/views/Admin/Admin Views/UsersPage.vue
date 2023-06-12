<template>
    <h3 style="text-align: center;">Page des utilisateurs</h3>

    <table class="table table-hover" id="table">
        <thead>
            <tr>
                <th scope="col" style="margin-left: 2%;">
                    <p><strong>ID</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Prénom</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Nom</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Email</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Numéro de téléphone</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Adresse</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Ville</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>région / Province</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Pays</strong> </p>
                </th>
                <th scope="col">
                    <p><strong>Code postal</strong> </p>
                </th>
                <th scope="col">
                    <p><strong> Afficher les orders</strong> </p>
                </th>





            </tr>
        </thead>
        <tbody v-for="uo in userorders" :key="uo.user.userId">
            <tr>

                <th scope="row">

                    <p>{{ uo.user.userId }}</p>
                </th>
                <td>
                    <p>{{ uo.user.firstName }}</p>
                </td>
                <td>
                    <p>{{ uo.user.lastName }}</p>
                </td>
                <td>
                    <p>{{ uo.user.email }}</p>
                </td>
                <td>
                    <p>{{ uo.user.fullNumber }}</p>
                </td>
                <td>
                    <p>{{ uo.user.adress }}</p>
                </td>
                <td>
                    <p>{{ uo.user.city }}</p>
                </td>
                <td>
                    <p>{{ uo.user.state }}</p>
                </td>
                <td>
                    <p>{{ uo.user.zipCode }}</p>
                </td>
                <td>
                    <p>{{ uo.user.country }}</p>
                </td>
                <td>
                    <button data-bs-toggle="modal" :data-bs-target="'#utilisateur' + uo.user.userId"
                        style="background: none;">
                        <img src="@/assets/images/composant_PC_Server/Admin/remarque.png" style="width:20%;">
                    </button>
                    <div class="modal fade" :id="'utilisateur' + uo.user.userId" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src="@/assets/images/composant_PC_Server/Admin/user.png" alt="User"
                                        style="width: 40px;margin-left: 45%;">
                                    <p> les orders de <strong> {{ uo.user.firstName }} {{ uo.user.lastName }} </strong></p>
                                    <table class="table table-hover" >
                                        <thead>
                                            <tr scope="row">
                                                <th scope="col">
                                                    <p><strong>Id de l'ordre</strong> </p>
                                                </th>
                                                <th scope="col">
                                                    <p><strong>Quantité</strong> </p>
                                                </th>
                                                <th scope="col">
                                                    <p><strong>Prix</strong> </p>
                                                </th>
                                                <th scope="col">
                                                    <p><strong>Date</strong> </p>
                                                </th>

                                                <th scope="col">
                                                    <p><strong>ID Produit</strong> </p>
                                                </th>
                                                <th scope="col">
                                                    <p><strong>ID Commande</strong> </p>
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody v-for="o in uo.orders" :key="o.orderId">
                                            <tr>
                                                <th scope="row">
                                                    <p>{{ o.orderId }}</p>
                                                </th>
                                                <td>
                                                    <p>{{ o.orderQuantity }}</p>
                                                </td>
                                                <td>
                                                    <p>{{ o.orderPrice }}</p>
                                                </td>
                                                <td >
                                                    <p>{{ o.orderDate }}</p>
                                                </td>
                                                <td>
                                                    <p>{{ o.product.productId }} </p>
                                                </td>

                                                <td>
                                                    <p>{{ o.commande.comdId }}</p>
                                                </td>

                                            </tr>


                                        </tbody>
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
import { mapState } from "vuex";

export default {
    name: "UsersPage",
    data() {
        return {
            users: [],
            order: [],
            userorders: []
        }

    }, computed: {
        ...mapState(["user"])
    },
    async created() {
        try {
            await axios.get(
                'http://164.92.134.202:8099/api/user/allUser',
            ).then((res) => {
                this.users = res.data;
                this.users = this.users.filter((user) => {
                    if (user.userId != this.user.userId)
                        return user;
                })
                console.log(this.users)
            })
            await axios.get(
                'http://164.92.134.202:8099/api/order/allOrder',
            ).then((res) => {
                this.order = res.data;
            })
        } catch (error) {
            console.log(error);
        }
        this.fonctionuserOrder();
    },
    methods: {

        fonctionuserOrder() {
            this.users.forEach((user) => {
                let tempUserOrder = {};
                let temporder = [];
                let tempuser = user;

                this.order.forEach((or) => {
                    if (user.userId === or.user.userId) {
                        temporder.push(or);
                    }
                });

                tempUserOrder.user = tempuser;
                tempUserOrder.orders = temporder;

                this.userorders.push(tempUserOrder);
            });
            console.log(this.userorders)
        }



    }
};
</script>
  
<style>
#table {
    margin-top: 7%;
}

#table p {
    text-align: center;
}</style>