<template>
    <Transition name="fade" appear>
        <div v-if="showModal" class="modal-overlay" @click="$emit('close-modal')"></div>
    </Transition>
    <Transition name="slide" appear>
        <div v-if="showModal" class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Succès</h3>
                    <button class="close" @click="$emit('close-modal')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        Votre commande a été passée avec succès.
                    </p>
                </div>
                <div class="modal-footer">
                    <button class="imp" @click="imprimpdfBC"><span>Imprimer le Bon de commande</span></button>
                    <br>

                    <action-button btnvalue="Retourner au Panier (vider le Panier)" @click="onSuccessfulPayment" />

                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
import paystack from "vue3-paystack";
import ActionButton from "@/components/ActionButton.vue";
import { mapActions, mapState, mapGetters } from "vuex";
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'





export default {
    props: ["reference", "price", "email", "BonCom"],
    components: {
        ActionButton,
        paystack,
    },
    data() {
        return {
            key: "pk_test_ec28501e234f6e2d802dc2a156c2511abd2d0527", // Replace with your public key
            amount: this.price * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
            ref: this.reference, // Replace with a reference you generated
            showModal: false,
            Form: this.BonCom,
        };
    }, computed: {

        ...mapState(["orders", "user"]),
        ...mapGetters(["subtotal"]),
    },
    methods: {
        ...mapActions(["clear_cart"]),
        async imprimpdfBC() {
            var pdf = new jsPDF();
            let tableaufinal = [];
            pdf.setFontSize(30);
            let Date = this.Form.DateCom;
            let DateLiv = this.Form.DateLiv;
            pdf.setTextColor(32, 72, 88);
            pdf.setFont("Helvetica", "bold");
            pdf.text("Buy-Tech", 10, 10);
            pdf.setFillColor(159, 193, 206);
            pdf.rect(100, 1, 120, 15, "F");
            pdf.rect(65, 55, 70, 60, "F");
            pdf.setFontSize(23);
            pdf.setTextColor(32, 72, 88);
            pdf.setFont("Times");
            pdf.text("Bon de Commande N°" + this.Form.idCom, 112, 10);
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.setTextColor(0, 0, 0);

            pdf.text("Date de la Commande : " + Date, 152, 20);
            pdf.text("Date de Livraison : " + DateLiv, 157, 26);
            pdf.setFillColor(32, 72, 88);
            pdf.setFillColor(0, 0, 255);
            pdf.setTextColor(0, 0, 0);
            pdf.setFontSize(12);
            pdf.setFont("Helvetica", "bold");
            pdf.text("Entreprise Buy-Tech", 15, 40)
            pdf.text("Destinataire", 145, 45)
            pdf.text("Detail de livraison", 82, 60)
            pdf.setFont("Helvetica", "normal");
            pdf.setFontSize(9);

            pdf.text("(si différente de celle du destinataire)", 75, 65);

            pdf.setFont("Times");
            pdf.setFontSize(9);
            pdf.text("BV Mohamed VI BP 717,", 15, 45)
            pdf.text("60000 Oujda", 15, 50)
            pdf.text("Maroc", 15, 55)
            pdf.text("Tel :0600000000", 15, 60)
            pdf.text("E-mail: M2I@ump.ac.ma", 15, 65)

            pdf.text(this.user.lastName + " " + this.user.firstName, 145, 50)
            pdf.text(this.user.zipCode + " " + this.user.city, 145, 60)
            pdf.text(this.user.country, 145, 65)
            pdf.text("Tel :" + this.user.fullNumber, 145, 70)
            pdf.text("E-mail:" + this.user.email, 145, 75)
            pdf.setFontSize(7);

            pdf.text(this.user.adress, 145, 55)



            pdf.text("Numéro de client : " + this.user.userId, 70, 70)

            pdf.text(this.Form.Nom + " " + this.Form.Prenom, 70, 75)
            pdf.text("Adresse de Livraison :", 70, 80)
            pdf.text(this.Form.userAddress, 70, 85)


            pdf.text(this.Form.Zip + " " + this.Form.Ville, 70, 90)
            pdf.text(this.Form.userState, 70, 95)
            pdf.text(this.Form.Pays, 70, 100)

            pdf.text("E-mail : " + this.Form.email, 70, 105)
            pdf.text('Moyen de paiement :paiement à la livraison', 70, 110);



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

            pdf.rect(112, tableWidth + 52, 83, 20, "F");
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(10);
            pdf.text(114, tableWidth + 48, "Signature du client :")

            pdf.setFontSize(9);
            pdf.text(12, tableWidth + 80, 'Remarques du client concernant la commande :');
            pdf.setFont('helvetica', 'normal');
            pdf.text(12, tableWidth + 85, this.Form.Notes);
            pdf.save('Bon de Commande.pdf');
        },

        onSuccessfulPayment() {
            this.clear_cart();
            this.orders = null;
            this.$router.push("/cart");
        },

    },
    emits: ["close-modal"],
    mounted() {
        this.showModal = true;
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    max-width: 500px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    z-index: 9999;
}

.modal-header h3 {
    text-align: center;
}

.modal-body {
    padding-block: 30px;
}

.modal-footer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-footer button {
    width: 100%;
}

.modal-footer button span {
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}

.close {
    background-color: transparent;
    font-size: 1.6rem;
    position: absolute;
    top: 20px;
    right: 20px;
}

.paystack-button {
    border: none;
    background-color: var(--dim-blue);
    padding: 10px 20px;
    border: 2px solid var(--dim-blue);
    font-size: 1.7rem;
    color: white;
}

.paystack-button:hover {
    background-color: #083e46;
    border-color: #083e46;
}

.imp {
    border: none;
    background-color: #575709;
    padding: 10px 20px;
    border: 2px solid #575709;
    font-size: 1.7rem;
    color: white;
    margin-bottom: 5px;
}

.imp:hover {
    background-color: #575709;
    border-color: #575709;
}
</style>
