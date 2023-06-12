<template>
    <div
    v-if="showModal"
            class="modal-overlay"
            @click="$emit('close-modal')"
        ></div>
    <div v-if="showModal" class="modal-wrapper">
        <div class="modal-header">
            <h3>Produit ajouter avec Succès</h3>
            <button class="close" @click="$emit('close-modal')">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    />
                </svg>
            </button>
        </div>
        <div class="modal-body">
            <p>
                Votre Produit "{{ ProduitNom}}" a été  Ajouté au panier avec succès.
            </p>
            <h4>Quantité:{{ quantite }}</h4>
        </div>

    </div>

</template>
<script>
export default {
    props: ["ProduitNom","quantite"],
    components: {
    },
    data() {
        return {

            showModal: false,

        };
    },computed:{
        
    },
    emits: ["close-modal"],

    methods:{
        close(){
            this.showModal=false;
        }
    },
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
.close {
    background-color: transparent;
    font-size: 1.6rem;
    position: absolute;
    top: 20px;
    right: 20px;
}
.modal-body p{
    font-size: 2.1rem;
   
}
</style>
