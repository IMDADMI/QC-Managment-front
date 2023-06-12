<template>
    <main-header />
    <sub-header heading="#Panier" subHeading="Parcourez notre boutique et découvrez nos derniers produits." />
    <section class="cart-section">
        <div class="container">
            <section v-if="cart.length">
                <div class="cart-details">
                    <table>
                        <thead>
                            <tr>
                                <td>Retirer</td>
                                <td>Image</td>
                                <td>Produit</td>
                                <td>Prix</td>
                                <td>Quantité</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in cart" :key="index" >
                                <td>
                                    <svg @click="deleteItem(index)" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" class="bi bi-x-circle delete-btn"
                                        viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path
                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </td>
                                <td>
                                    <img :src="item.image" :alt="item.brand" class="img" @click="produitLien(item.productId)"/>
                                </td>
                                <td @click="produitLien(item.productId)">{{ item.brand }}</td>
                                <td>
                                    {{ item.productPrice }} MAD
                                </td>
                                <td>
                                    <input type="number" v-model="item.quantity" placeholder="QTY" min="1" max="10"
                                        @input="updateTotalPrice(item)" />
                                </td>
                                <td>
                                    {{ (item.quantity * item.productPrice).toFixed(2) }} MAD
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="checkout-section">
                    <div class="checkout">
                        <h3>Détails du panier</h3>
                        <table>
                            <thead>
                                <tr>
                                    <td>Total du panier</td>
                                    <td>{{ subtotal.toFixed(2) }} MAD</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frais d'expédition</td>
                                    <td>Gratuit</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td>
                                        <strong>
                                            {{ subtotal.toFixed(2) }} MAD
                                        </strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <router-link to="/checkout">
                            <action-button btnvalue="Passé a la Checkout" />
                        </router-link>
                    </div>
                </div>
            </section>
            <div class="no-cart" v-else>
                <div class="no-cart-text">
                    <img src="@/assets/images/empty-cart.svg" alt="empty-cart" />
                    <h3>Votre panier est vide!</h3>
                    <p>Parcourez notre boutique et découvrez nos derniers produits.</p>
                </div>
                <router-link to="/shop">
                    <action-button btnvalue="Commencer à magasiner" />
                </router-link>
            </div>
        </div>
    </section>
    <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    components: { SubHeader, ActionButton, MainHeader, MainFooter },
    name: "CartView",
    data() {
        return {
            total: 0,

            orders: [],//######
            orderQuantity: null,
            orderPrice: null,
            discount: 20,
            orderDate: null,     //#####"Date.now()
            productId: null,
            product:null,
            totaleAmount:0,
            paymentMethod: "Cash on Delivery",
            totalAmount:0,
            status: "encore"
        }
    },
    methods: {
        ...mapActions(["delete_item", "update_quantity","set_orders"]),
        deleteItem(index) {
            this.delete_item(index);

            ////////////////////////////////////
            let indexo = this.orders.indexOf(index);
            this.orders.splice(indexo, 1);
            this.set_orders(this.orders);

            //////////////////////////////////////
        },

        // update total price of cart and increase the quantity of product in cart
        updateTotalPrice(item) {
            
            this.update_quantity(item);

///////////////////////////////////////////////
            this.orders.forEach((itemo)=>{
                if (itemo.productId==item.productId) {
                itemo.orderQuantity = item.quantity;
                itemo.orderPrice=item.quantity*item.productPrice;
            }

            });
            this.set_orders(this.orders);

//////////////////////////////////////////////




            this.cart.forEach((item) => {
                this.total += item.quantity * item.productPrice;
            });
        }, produitLien(ProduitId){
            this.$router.push("/cart/"+ProduitId);

        },
        getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, "0");
            const day = now.getDate().toString().padStart(2, "0");
            return `${year}-${month}-${day}`;
        },
    },
    computed: {
        ...mapState(["cart","orders"]),
        ...mapGetters(["subtotal"]),
    },
    mounted() {
        this.cart.forEach((item) => {
            ///////////////////////////
            
            this.orderQuantity = item.quantity;
            this.orderPrice = (item.quantity * item.productPrice).toFixed(2);
            this.orderDate = this.getCurrentDate();
            this.productId=item.productId;
            this.product=item;
            let order={
                "orderQuantity":this.orderQuantity,
                "orderPrice":this.orderPrice,
                "orderDate":this.orderDate,
                "productId":this.productId,
                "product":this.product

            };
            this.orders.push(order);

            this.set_orders(this.orders);


            //////////////////////////////////
            this.total += item.quantity * item.productPrice;
        });
    },
};
</script>

<style scoped>
.no-cart {
    display: grid;
    place-items: center;
    gap: 30px;
}

.no-cart-text {
    text-align: center;
}

.no-cart img {
    height: 150px;
    width: 30%;
}

.cart-details {
    overflow-x: auto;
}

.img {
    height: 70px;
    width: 70px;
    margin-inline: auto;
    object-fit: contain;
}

table {
    border-collapse: collapse;
    white-space: nowrap;
    width: 100%;
}

td {
    font-size: 2rem;
}

.delete-btn {
    cursor: pointer;
}

.cart-details table thead {
    border: 1px solid lightgrey;
    border-left: none;
    border-right: none;
}

.cart-details table thead tr td {
    font-weight: 600;
    text-transform: uppercase;
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td {
    padding-block: 2rem;
    text-align: center;
}

.cart-details table tbody td i {
    cursor: pointer;
}

/* Checkout */
.checkout-section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.coupon {
    width: 40%;
}

form {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
}

form input {
    width: 100%;
}

.checkout {
    width: 40%;
    padding: 2.5rem;
    border: 1px solid lightgrey;
    margin-left: 50%;
}

.checkout table {
    margin-bottom: 2rem;
}

.checkout td {
    border: 1px solid lightgrey;
    padding: 0.8rem;
}

@media (max-width: 699px) {
    .cart-details table {
        table-layout: fixed;
    }

    .cart-details table thead td {
        width: 200px;
    }

    .checkout-section {
        flex-direction: column;
        gap: 3rem;
    }

    .checkout,
    .coupon {
        width: 100%;
    }
}
</style>
