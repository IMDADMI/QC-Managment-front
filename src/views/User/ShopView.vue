<template>
    <main-header />
    <BoxPr title="Tous les Produits" lien="/shop/" lientit=true ></BoxPr><br>
    <h3 id="Types">les Types des Produits</h3>
    <div class="position">

        <minibox v-for="typee in Types" v-bind:key="typee.Nom" v-bind:name="typee.Nom + ' (' + typee.quantite + ')'" @click="redirection(typee.Nom)">
            <img :src="imageSource(typee.Nom)" class="imageAll">
        </minibox>

    </div>
    <section v-if="this.message == false">

        <div class="forFlex">
            <div class="composant">
                <div id="prix">
                    <h3 id="cat"><strong>Filtrer par prix</strong></h3>
                    <div class="filtrage-prix">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Min" v-model.number="minPrice"
                                step="100">
                        </div>
                        <h3>à</h3>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Max" v-model.number="maxPrice"
                                step="100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="containers">
                <div class="product__container" >
                    <product-card v-for="(product, index) in selectCategorie" :key="index" :productId="product.productId"
                        :productName="product.productName" :productType="product.productType" :brand="product.brand"
                        :model="product.model" :weight="product.weight" :garantie="product.garrntyPerriode"
                        :price="product.productPrice" :image_url="product.image" class="product-card"/>
                </div>

            </div>
        </div>


    </section>
    <section v-else>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <h3 id="filtrage">Filtrage</h3>
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

                    <div class="composant_Cacher">
                        <div class="select_prix">
                            
                            <div id="prix">
                                <h3 id="cat"><strong>Filtrer par prix</strong></h3>
                                <div class="filtrage-prix">
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Min" v-model.number="minPrice"
                                step="100">
                        </div>
                        <h3>à</h3>
                        <div class="input-group mb-3">
                            <input type="number" class="form-control" placeholder="Max" v-model.number="maxPrice"
                                step="100">
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div class="containers_cacher">
            <div class="product__container_caher">
                <product-card v-for="(product, index) in selectCategorie" :key="index" :productId="product.productId"
                    :productName="product.productName" :productType="product.productType" :brand="product.brand"
                    :model="product.model" :weight="product.weight" :garantie="product.garrntyPerriode"
                    :price="product.productPrice" :image_url="product.image" />
            </div>

        </div>

    </section>
    <main-footer />
</template>
<script>

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import BoxPr from "@/components/home_components/PapierBox/boxPrinc.vue";
import minibox from "@/components/home_components/PapierBox/miniBox.vue"
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";

import axios from "axios";






export default {
    name: "ShopView",
    components: {
        MainHeader,
        MainFooter,
        BoxPr,
        minibox,
        ProductCard,
        "product-preloader": ProductPreloader,



    },
    data() {
        return {
            message: false,
            categore: null,
            Categories:[],
            products: [],
            Tempproducts: [],
            page: 1,
            loaded: false,
            total: 0,
            NomTypes: [],
            Types: [],
            TempBrands: [],
            Configurations: [],
            minPrice: null,
            maxPrice: null,

        }
    }, created() {
        this.getProducts();
        
    }, computed: {
        imageSource() {
            return function (TypeNom) {try{
                return require(`@/assets/images/\logotypecompo/${TypeNom}.jpg`);}catch(error){
                };
            }
        },
        category() {
            return this.Categories.filter(c => c.selected)
        },
        selectCategorie() {
            const filters = [];


            //Appliquer tous les filtres déja définie
            let filteredProducts = this.products;
            //Appliquer le filtre de price
            filteredProducts = this.filtrerProduitPrix();

            for (const filter of filters) {
                filteredProducts = filteredProducts.filter(filter);
            }





            return filteredProducts;
        },


        filterProduct(produit) {
            this.category.forEach((cat) => {
                if (cat.title == produit.brand)
                    return true;
            });
            return false;
        }

    }, mounted() {
        window.addEventListener('resize', this.handleResize);
        //alert(this.categore)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            if (window.innerWidth < 868) {
                this.message = true
            } else {
                this.message = false
            }
        }, getProducts() {
            this.loaded = false;
            axios.get('http://164.92.134.202:8099/api/product/allProduct').then((res) => {
                this.products = res.data.map((product) => {
                    this.NomTypes.push(product.productType);
                    return product;
                });
                this.getAllTypes();
                console.log(this.products);
                this.total = res.data.total_pages;
                this.loaded = true;
            })
                .catch((err) => {
                    console.log(err);
                    this.loaded = false;
                });
            console.log(this.products);
            localStorage.setItem("produits", JSON.stringify(this.products))
        },
        getAllTypes() {
            //fonctions pour déduire les marques existes et leurs quantité
            this.NomTypes = this.NomTypes.map(nomtype => nomtype.toLowerCase());
            let lowerCaseNomTypes = this.NomTypes.map(nombrand => nombrand.toLowerCase()); // convertir toutes les chaînes de caractères en minuscules
            let NomTypesSansDoublons = [...new Set(lowerCaseNomTypes)];
            for (var i = 0; i < NomTypesSansDoublons.length; i++) {
                var repetition = 0;
                for (var j = 0; j < this.NomTypes.length; j++) {
                    if (this.NomTypes[j] === NomTypesSansDoublons[i])
                        repetition++;
                }
                var Nom = NomTypesSansDoublons[i].charAt(0).toUpperCase() + NomTypesSansDoublons[i].slice(1);
                var Type = { Nom: Nom, quantite: repetition, click: false };
                this.Types.push(Type);

            }


        }, filtrerProduitPrix() {
            let min = parseFloat(this.minPrice);
            let max = parseFloat(this.maxPrice);

            return this.products.filter((pro) => {
                let prix = parseFloat(pro.productPrice);
                if ((isNaN(min) || prix >= min) && (isNaN(max) || prix <= max)) {
                    return true;
                } else {
                    return false;
                }


            })


        },redirection(TypeCompo){
            if(/Casque/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Casque");
            if(/Clavier/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Clavier");
            if(/Usb/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Usb");
            if(/Hautparleur/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Hautparleur");
            if(/Microphone/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Microphone");
            if(/Souris/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Souris");
            if(/Webcam/i.test(TypeCompo))
            this.$router.push("/shop/Accessoires/Webcam");
            if(/Graphique/i.test(TypeCompo))
            this.$router.push("/shop/Composants/Carte-Graphique");
            if(/Ram/i.test(TypeCompo))
            this.$router.push("/shop/Composants/memoirevive-RAM");
            if(/mère/i.test(TypeCompo))
            this.$router.push("/shop/Composants/Carte-mere");
            if(/stockage/i.test(TypeCompo))
            this.$router.push("/shop/Composants/stockage");
            if(/boitier/i.test(TypeCompo))
            this.$router.push("/shop/Composants/Boitier");
            if(/blocs/i.test(TypeCompo))
            this.$router.push("/shop/Composants/Blocs-Alimentation");
            if(/Processeur/i.test(TypeCompo))
            this.$router.push("/shop/Composants/Processeurs");



            if(/Pc-Bureau/i.test(TypeCompo))
            this.$router.push("/shop/Pc-Bureau");
            if(/Pc-Portable/i.test(TypeCompo))
            this.$router.push("/shop/Pc-portable");
            if(/Imprimante/i.test(TypeCompo))
            this.$router.push("/shop/Imprimantes");
            if(/Scanner/i.test(TypeCompo))
            this.$router.push("/shop/Scanners");
            if(/Ecran/i.test(TypeCompo))
            this.$router.push("/shop/Ecrans");
        }

    }


};
</script>

<style>
.product-card {
  width: 30em;
  height: 50em;
}

.image1 {
    width: 120px;
}

.imageAll {
    width: 60%;
    margin-left: 23%;
}

.position {
    margin-top: 2%;
    margin-bottom: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.range {
    width: 10%;
    background: none;
}

#Marque {
    margin-top: 2%;
    margin-left: 45%;
}

.composant {
    width: 20%;
    margin-left: 3%;
    border: solid 0px;

}

.espace {
    font-size: 1.75rem;

}

.form-check {
    margin-left: 8%;
}

.form-check input {
    margin-top: 3%;
}

#cat {
    margin-left: 3%;
    margin-bottom: 4%;
}

.form-select {
    margin-top: 10%;
    font-size: 2rem;
    border-radius: 10px;
    width: 90%;
    margin-bottom: 9%;

}

.form-control {
    font-size: 2rem;
    border-radius: 18px;
}

.input-group {
    width: 30%;
}

.filtrage-prix {
    display: flex;
    margin: 0%;
}

.filtrage-prix p {
    font-size: 1.5rem;
    margin-left: 12%;
}

.filtrage-prix input,
#h3 {
    margin-left: 8%;
    margin-right: 8%;

}

#prix {
    margin-bottom: 10%;
}

#filtrage {
    margin-left: 45%;
}

.composant_Cacher {
    width: 80%;
    margin-top: 10%;
    margin-left: 8%;
}

.select_prix {
    margin-left: 33%;

}

.categor {
    margin-left: 39%;
}

.containers {
    margin-left: 3%;
    border: solid 0px;
    width: 60%;
}

.containers_cacher {
    margin-left: 0%;
}

.forFlex {
    display: flex;
    width: 100%;
}
#Types{

    margin-top: 2%;
    margin-left: 40%;
}
</style>

