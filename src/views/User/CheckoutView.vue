<template>
    <main-header />
    <sub-header heading="Checkout" subHeading="Complétez votre commande en remplissant le formulaire ci-dessous" />
    <section>
        <div class="container">
            <form class="billing-info" @submit.prevent="placeOrder">
                <div class="form" id="forma">
                    <h2>Détails de facturation</h2>
                    <div class="form-group">
                        <div class="form-control">
                            <label>Prénom * <span style="color:red;font-size: 1.75rem;">{{ erreurs[0] }}</span></label>
                            <input type="text" required v-model="Prenom" />
                        </div>
                        <div class="form-control">
                            <label>Nom * <span style="color:red;font-size: 1.75rem;">{{ erreurs[1] }}</span></label>
                            <input type="text" required v-model="Nom" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Pays *</label>
                        <input type="text" required readonly v-model="Pays" />
                    </div>
                    <div class="form-control">
                        <label>Adresse *<span style="color:red;font-size: 1.75rem;">{{ erreurs[2] }}</span></label>
                        <input type="text" placeholder="Numéro de maison et nom de rue" required v-model="userAddress" />
                    </div>
                    <div class="form-group">
                        <div class="form-control">
                            <label>Ville *<span style="color:red;font-size: 1.75rem;">{{ erreurs[3] }}</span></label>
                            <input type="text" required v-model="Ville" />
                        </div>
                        <div class="form-control">
                            <label>région / Province *<span style="color:red;font-size: 1.75rem;">{{ erreurs[4] }}</span></label>
                            <input type="text" required v-model="userState" />
                        </div>
                    </div>
                    <div class="form-control">
                        <label>Adresse Email *<span style="color:red;font-size: 1.75rem;">{{ erreurs[5] }}</span></label>
                        <input type="email" required v-model="email" />
                    </div>
                    <div class="form-control">
                        <label>Code Postal *<span style="color:red;font-size: 1.75rem;">{{ erreurs[6] }}</span></label>
                        <input type="number" required v-model="Zipcode" step="1" />

                    </div>
                    <div class="form-control">
                        <label>Notes de commande (facultatif) </label>
                        <textarea rows="10" v-model="Notes"
                            placeholder="Remarques concernant votre commande, par ex. notes spéciales pour la livraison"></textarea>
                    </div>
                </div>
                <aside>
                    <h4>Votre commande</h4>
                    <table class="table table-summary">
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Total (MAD)</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index) in cart" :key="index">
                                <td>
                                    <span>{{ item.productName }}</span> <br />
                                    Quantité: {{ item.quantity }}
                                </td>
                                <td>
                                    {{ item.quantity }} * {{ item.productPrice }}={{ (item.productPrice * item.quantity).toFixed(2) }}
                                </td>
                            </tr>

                            <tr class="summary-subtotal">
                                <td>Sous-total (MAD):</td>
                                <td>{{ subtotal.toFixed(2) }}</td>
                            </tr>
                            <!-- End .summary-subtotal -->
                            <tr>
                                <td>livraison:</td>
                                <td>Livraison gratuite</td>
                            </tr>
                            <tr class="summary-total">
                                <td>Total HT (MAD):</td>
                                <td>
                                    {{ subtotal.toFixed(2) }}
                                </td>
                            </tr>
                            <!-- End .summary-total -->
                        </tbody>
                    </table>
                    <button v-on:click="imprimpdfdevis()" class="imprime">
                        <span>Imprimer le Devis sous forme PDF</span>
                    </button>
                    <button class="submit" :class="{ payment: !noOrder }" v-on:click="Afficherform">
                        <template v-if="noOrder">
                            <span>Passer la commande</span>
                            <div class="icon">
                                <i class="fa fa-credit-card"></i>
                            </div>
                        </template>
                        <button-preloader v-else />
                    </button>

                </aside>
            </form>
        </div>
    </section>
    <success-modal @close-modal="closeModal" :price="subtotal" :email="this.user.email" :BonCom="this.Form"
        :reference="referenceMessage" v-if="showModal" />
    <main-footer />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import ButtonPreloader from "@/components/preloaders/ButtonPreloader.vue";
import SubHeader from "@/components/SubHeader.vue";
import ActionButton from "@/components/ActionButton.vue";
import SuccessModal from "@/components/SuccessModal.vue";

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

import { mapState, mapGetters } from "vuex";
import axios from "axios";

export default {
    data() {
        return {
            Form: {},
            noOrder: true,
            Prenom: "",
            Nom: "",
            Ville: "",
            Pays: "Maroc",
            Notes: "",
            userState: "",
            userAddress: "",
            Zipcode: "",
            referenceMessage: "",
            price: "",
            showModal: false,
            email: "",
            ////
            basckets: [],
            idbascket: null,
            bascket: null,
            commandes: [],
            idcommande: null,
            commande: null,
            product: null,
            datelivraison: null,
            filter:false,
            erreurs:[]


        };
    }, async created() {
        let temp = await this.getidbascket();
        this.idbascket = temp + 1;
        temp = await this.getidcommande();
        this.idcommande = temp + 1;
        this.datelivraison = this.addDays(this.orders[0].orderDate);


    },
    components: {
        MainHeader,
        MainFooter,
        ButtonPreloader,
        SubHeader,
        ActionButton,
        SuccessModal,
    },
    computed: {
        ...mapState(["user", "cart", "orders"]),
        ...mapGetters(["subtotal"]),
    },
    methods: {
        getCurrentDate() {
            const now = new Date();
            const year = now.getFullYear();
            const month = (now.getMonth() + 1).toString().padStart(2, "0");
            const day = now.getDate().toString().padStart(2, "0");
            return `${year}-${month}-${day}`;
        },
        async imprimpdfdevis() {
            var pdf = new jsPDF();
            let tableaufinal = [];
            pdf.setFontSize(30);
            let Date = this.getCurrentDate();
            let DateExpire = this.addDays(Date);
            pdf.setTextColor(32, 72, 88);
            pdf.setFont("Helvetica", "bold");
            pdf.text("Buy-Tech", 10, 10);
            pdf.setFillColor(32, 72, 88);
            pdf.rect(159, 1, 60, 25, "F");
            pdf.setFontSize(15);
            pdf.setTextColor(255, 255, 255);
            pdf.setFont("Times");
            pdf.text("Devis N°" + this.idbascket, 165, 7);
            pdf.setFontSize(10);
            pdf.text("Date d'émission :" + Date, 162, 14);
            pdf.text("Date d'expiration :" + DateExpire, 162, 21);
            pdf.setFillColor(32, 72, 88);
            pdf.setFillColor(0, 0, 255);
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(12);
            pdf.setFont("Helvetica", "bold");
            pdf.text("Entreprise Buy-Tech", 20, 50)
            pdf.text("Destinataire", 140, 55)

            pdf.setFont("Times");
            pdf.setFontSize(9);
            pdf.text("BV Mohamed VI BP 717,", 20, 55)
            pdf.text("60000 Oujda", 20, 60)
            pdf.text("Maroc", 20, 65)
            pdf.text("Tel :0600000000", 20, 70)
            pdf.text("E-mail: M2I@ump.ac.ma", 20, 75)
            pdf.setFontSize(9);

            pdf.text(this.user.lastName + " " + this.user.firstName, 140, 60)

            pdf.text(this.user.zipCode + " " + this.user.city, 140, 70)
            pdf.text(this.user.country, 140, 75)
            pdf.text("Tel :" + this.user.fullNumber, 140, 80)
            pdf.text("E-mail:" + this.user.email, 140, 85)
            pdf.setFontSize(7);

            pdf.text(this.user.adress, 140, 65)

            let ligneorder = {};
            this.orders.forEach((order) => {
                ligneorder = [
                    order.product.productName,
                    order.product.productType,
                    order.orderQuantity,
                    order.product.productPrice,
                    order.orderPrice
                ]

                tableaufinal.push(ligneorder);


            })

            autoTable(pdf, {
                head: [['Produit', 'Type', 'Quantité', "Prix Unite HT (MAD)", "Prix Total HT (MAD)"]],
                margin: { top: 120 },
                body: tableaufinal,
                headStyles: {
                    fillColor: [32, 72, 88],
                    textColor: 255,
                    fontStyle: 'bold'
                }
            });

            const tableWidth = pdf.previousAutoTable.finalY;
            pdf.setFontSize(10);
            pdf.setDrawColor(0, 0, 0);
            pdf.setLineWidth(0.1);
            pdf.line(155, tableWidth + 2, 196, tableWidth + 2);
            pdf.setFont('helvetica', 'bold');
            pdf.text(155, tableWidth + 7, 'Total HT');
            pdf.setFont('helvetica', 'normal');
            pdf.text(155, tableWidth + 12, this.subtotal.toFixed(2).toString() + " MAD");
            pdf.setFont('helvetica', 'bold');
            pdf.text(155, tableWidth + 17, 'Total taxes (TVA 20%)');
            pdf.setFont('helvetica', 'normal');
            pdf.text(155, tableWidth + 22, (this.subtotal / 5).toFixed(2).toString() + " MAD");
            pdf.setFont('helvetica', 'bold');
            pdf.text(155, tableWidth + 27, 'Total TTC');
            pdf.setFont('helvetica', 'normal');
            pdf.text(155, tableWidth + 32, (this.subtotal + this.subtotal / 5).toFixed(2).toString() + " MAD");
            pdf.setFillColor(129, 156, 166);

            pdf.rect(112, tableWidth + 45, 83, 20, "F");
            pdf.setFontSize(8);
            pdf.text(114, tableWidth + 48, "Signature du client (précédée de la mention 'Bon pour accord')")
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(9);

            pdf.text(12, tableWidth + 75, 'Moyen de paiement');
            pdf.setFont('helvetica', 'normal');
            pdf.text(12, tableWidth + 80, 'paiement à la livraison ');
            pdf.save('Devis.pdf');
        },
        async getidbascket() {
            let res1 = await axios.get("http://164.92.134.202:8099/api/basckets/allBaskets");
            this.basckets = res1.data.map((bascket) => {
                return bascket;
            });
            let maxid = Number(this.basckets[0].bascketId);
            this.basckets.forEach((bascket) => {
                if (bascket.bascketId > maxid)
                    maxid = Number(bascket.bascketId);
            });
            return maxid;

        }, async getidcommande() {
            let res1 = await axios.get("http://164.92.134.202:8099/api/commandes/all");
            this.commandes = res1.data.map((commande) => {
                return commande;
            });
            let maxid = Number(this.commandes[0].comdId);
            this.commandes.forEach((commande) => {
                if (commande.comdId > maxid)
                    maxid = Number(commande.comdId);
            });
            return maxid;

        }, getuser() {
            return this.user;

        }, getproduct(order) { return order.product; },
        addDays(dateString) {
            // Convertir la chaîne de caractères en objet Date
            let date = new Date(dateString);

            // Ajouter 7 jours à la date
            date.setDate(date.getDate() + 14);

            // Retourner la nouvelle date sous forme de chaîne de caractères au format ISO
            return date.toISOString().slice(0, 10);
        }, async addorder(order) {
            await axios({
                method: "post",
                url: "http://164.92.134.202:8099/api/order/addOrdere",
                data: {
                    "orderQuantity": order.orderQuantity,
                    "orderPrice": order.orderPrice,
                    "discount": 20.0,
                    "orderDate": order.orderDate,
                    "user": await this.getuser(),
                    "bascket": {
                        "bascketId": this.idbascket,
                        "totaleAmount": this.subtotal
                    },
                    "product": await this.getproduct(order),
                    "commande": {
                        "comdId": this.idcommande,
                        "paymentMethod": "cash",
                        "totalAmount": this.subtotal,
                        "deliveryDate": this.datelivraison,
                        "status": "encore"
                    }
                }
            });




        }, Afficherform() {
            const element = document.getElementById("forma");
            if (element) {
                element.style.display = "flex";
            }

        },

        async placeOrder() {
           // this.noOrder = false;
            this.filter=true;

            this.erreurs=[];
            if(!(/^[a-zA-Z/\-]+$/.test(this.Prenom))){
           this.erreurs[0]=" Prénom non validé";
           this.filter= false;
       }
       if(!(/^[a-zA-Z/\-]+$/.test(this.Nom))){
           this.erreurs[1]=" Nom non validé";
           this.filter= false;
       }
       if(!(/^([a-zA-Z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(this.email))){
           this.erreurs[5]=" Email non validé";
           this.filter= false;
       }
       
       if(!(/^[a-zA-Z/\-]+$/.test(this.Ville))){
           this.erreurs[3]=" Nom de la ville non validé (contient des numéros)";
           this.filter= false;
       }
       if(!(/^[a-zA-Z/\-]+$/.test(this.userState))){
           this.erreurs[4]=" Nom du région non validé (contient des numéros)";
           this.filter= false;
       }
       
       if(!/^\d{5}$/.test(this.Zipcode.toString())){
           this.erreurs[6]="  Code Postal non validé";
           this.filter= false;
       }
            var DateCom = this.getCurrentDate();
            var DateLiv = this.addDays(DateCom);
            this.Form = {
                Prenom: this.Prenom,
                Nom: this.Nom,
                Ville: this.Ville,
                Pays: this.Pays,
                Notes: this.Notes,
                userState: this.userState,
                userAddress: this.userAddress,
                email: this.email,
                Zip: this.Zipcode,
                DateCom: DateCom,
                DateLiv: DateLiv,
                idCom: this.idcommande,


            }




            if(this.filter){
            await axios({
                method: "post",
                url: "http://164.92.134.202:8099/api/commandes/add",
                data: {
                    "comdId": this.idcommande,
                    "paymentMethod": "cash",
                    "totalAmount": this.subtotal.toFixed(2),
                    "deliveryDate": this.datelivraison,
                    "status": "encore"
                },
            });
            await axios({
                method: "post",
                url: "http://164.92.134.202:8099/api/bascket",
                data: {
                    "bascketId": this.idbascket,
                    "totaleAmount": this.subtotal.toFixed(2),
                },
            });
            this.orders.forEach((order) => {
                this.addorder(order);

            });
            this.noOrder = true;
            this.showModal = true;

        }},
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
.coupon {
    display: flex;
    gap: 15px;
}

.billing-info {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 15px;
}

.billing-info h4 {
    margin-bottom: 15px;
}

.form {
    flex: 3;
    display: none;
    flex-direction: column;
    gap: 15px;

}

form input,
form textarea {
    border-radius: 0px;
    padding: 0px;
}

.form-group {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.form-control {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

label {
    font-size: 1.5rem;
}

.form-control input,
.form-control textarea {
    padding: 10px 12px;
    outline: none;
    transition: 0.25s;
    background-color: whitesmoke;
    width: 100%;
}

textarea {
    resize: vertical;
}

.form-control input:focus,
.form-control textarea:focus {
    border: 1px solid var(--dim-blue);
    background-color: white;
}

aside {
    flex: 1.25;
    padding: 25px;
    border: 1px dashed lightgray;
    background-color: whitesmoke;
    height: auto;
}

aside h4 {
    padding-bottom: 20px;
    border-bottom: 1px solid black;
}

table {
    border-collapse: collapse;
}


.table.table-summary thead th,
.table.table-summary .summary-subtotal td {
    color: var(--brown);
    font-weight: 500;
    font-size: 1.6rem;
    border-bottom: 0.2rem solid #d3d2d2;
}

.table.table-summary thead th:last-child,
.table.table-summary tbody td:last-child {
    text-align: right;
    min-width: 90px;
}

table thead tr th {
    text-align: left;
    font-size: 1.6rem;
    font-weight: 400;
}

table tbody tr td {
    font-size: 1.6rem;
    font-weight: 400;
}

.table.table-summary tbody td {
    padding: 0;
    height: 70px;
    border-bottom: 0.2rem solid #d3d2d2;
}

.table.table-summary .summary-total td {
    font-weight: 500;
    font-size: 2rem;
    color: var(--dim-blue);
    border-bottom: none;
}

table tbody tr td span {
    width: 150px;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 10px;
}

.submit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 1.6rem;
    width: 100%;
    color: var(--dim-blue);
    background-color: transparent;
    border-radius: 0px;
    border: 1px solid var(--dim-blue);
}
.imprime {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 1.6rem;
    width: 100%;
    color: var(--brown);
    background-color: transparent;
    margin-bottom: 4px;
    border-radius: 2px;
    border: 1px solid var(--brown);
}

.imprime {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    font-size: 1.6rem;
    width: 100%;
    color: var(--brown);
    background-color: transparent;
    margin-bottom: 4px;
    border-radius: 2px;
    border: 1px solid var(--brown);
}

.icon {
    position: absolute;
    right: 20px;
}

.submit:hover,
.submit:focus,
.submit:active,
.payment {
    background-color: var(--dim-blue);
    color: white;
}

.submit:nth-child(2) {
    display: none;
}

.submit:hover:nth-child(1),
.submit:focus:nth-child(1) {
    display: none;
}

@media (max-width: 790px) {

    .billing-info,
    .form-group {
        flex-direction: column;
        width: 100%;
    }

    aside,
    .form {
        width: 100%;
    }

    table tbody tr td span {
        width: 100%;
        white-space: break-spaces;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
