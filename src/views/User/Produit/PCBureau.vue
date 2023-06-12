<template>
    <main-header />
    <BoxPr title="PC Bureau" lien="/shop/PC-Bureau"> <img src="@/assets/images/imagePC.png" class="image1"></BoxPr><br>

    <h2 id="Marque">Marque</h2>
    <div class="position">

        <minibox v-for="brand in Brands" v-bind:key="brand.Nom" v-bind:name="brand.Nom + ' (' + brand.quantite + ')'"
            @click="Brandfilter(brand.Nom)">
            <div v-if="brand.click"><font-awesome-icon icon="fa-solid fa-circle-check"
                    style="color: #45a81a; height:2.5em;margin-left:90%;" /></div><img :src="imageSource(brand.Nom)"
                class="imageAll">
        </minibox>

    </div>
    <section v-if="this.message == false">
        <div class="forFlex">
            <div class="composant">
                <h3 id="cat"><strong>Catégories</strong></h3>
                <div class="form-check" v-for="c in Categories" :key="c">
                    <input class="form-check-input" type="checkbox" :value="value" id="flexCheckDefault"
                        v-model="c.selected">
                    <label class="form-check-label" for="flexCheckDefault">
                        <p class="espace">&nbsp; {{ c.Nom }} ({{ c.quantite }})</p>
                    </label>
                </div>

                <div class="select">
                    <select class="form-select" v-model="CarteSelectionner">
                        <option selected>
                            <p class="espace">Cartes Graphiques</p>
                        </option>
                        <option :value="Carte.Nom" v-for="Carte in CarteGraphique" :key="Carte.Nom">
                            <p class="espace">{{ Carte.Nom }} ({{ Carte.quantite }})</p>
                        </option>
                    </select>
                </div>
                <div class="select">
                    <select class="form-select" v-model="ProcesseurSelectionner">
                        <option selected>
                            <p class="espace">Processeur</p>
                        </option>
                        <option :value="Pro.Nom" v-for="Pro in Processeurs" :key="Pro.Nom">
                            <p class="espace">{{ Pro.Nom }} ({{ Pro.quantite }})</p>
                        </option>
                    </select>
                </div>
                <div class="select">
                    <select class="form-select" v-model="RAMSelectionner">
                        <option selected>
                            <p class="espace">RAM</p>
                        </option>
                        <option :value="Ra.Nom" v-for="Ra in RAM" :key="Ra.Nom">
                            <p class="espace">{{ Ra.Nom }} ({{ Ra.quantite }})</p>
                        </option>
                    </select>
                </div>
                <div class="select">
                    <select class="form-select" v-model="HDDSelectionner">
                        <option selected>
                            <p class="espace">Stockage HDD</p>
                        </option>
                        <option :value="hdd.Nom" v-for="hdd in DisqueHDD" :key="hdd.Nom">
                            <p class="espace">{{ hdd.Nom }} ({{ hdd.quantite }})</p>
                        </option>
                    </select>
                </div>

                <div class="select">
                    <select class="form-select" v-model="SSDSelectionner">
                        <option selected>
                            <p class="espace">Stockage SSD</p>
                        </option>
                        <option :value="ssd.Nom" v-for="ssd in DisqueSSD" :key="ssd.Nom">
                            <p class="espace">{{ ssd.Nom }} ({{ ssd.quantite }})</p>
                        </option>
                    </select>
                </div>
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
                        <div class="categor">
                            <h3 id="cat"><strong>Catégories</strong></h3>
                            <div class="form-check" v-for="c in Categories" :key="c">
                                <input class="form-check-input" type="checkbox" :value="value" id="flexCheckDefault"
                                    v-model="c.selected">
                                <label class="form-check-label" for="flexCheckDefault">
                                    <p class="espace">&nbsp; {{ c.Nom }} ({{ c.quantite }})</p>
                                </label>
                            </div>
                        </div>

                        <div class="select_prix">
                            <div class="select">
                                <select class="form-select" v-model="CarteSelectionner">
                                    <option selected>
                                        <p class="espace">Cartes Graphiques</p>
                                    </option>
                                    <option :value="Carte.Nom" v-for="Carte in CarteGraphique" :key="Carte.Nom">
                                        <p class="espace">{{ Carte.Nom }} ({{ Carte.quantite }})</p>
                                    </option>
                                </select>
                            </div>
                            <div class="select">
                                <select class="form-select" v-model="ProcesseurSelectionner">
                                    <option selected>
                                        <p class="espace">Processeur</p>
                                    </option>
                                    <option :value="Pro.Nom" v-for="Pro in Processeurs" :key="Pro.Nom">
                                        <p class="espace">{{ Pro.Nom }} ({{ Pro.quantite }})</p>
                                    </option>
                                </select>
                            </div>
                            <div class="select">
                                <select class="form-select" v-model="RAMSelectionner">
                                    <option selected>
                                        <p class="espace">RAM</p>
                                    </option>
                                    <option :value="Ra.Nom" v-for="Ra in RAM" :key="Ra.Nom">
                                        <p class="espace">{{ Ra.Nom }} ({{ Ra.quantite }})</p>
                                    </option>
                                </select>
                            </div>
                            <div class="select">
                                <select class="form-select" v-model="HDDSelectionner">
                                    <option selected>
                                        <p class="espace">Stockage HDD</p>
                                    </option>
                                    <option :value="hdd.Nom" v-for="hdd in DisqueHDD" :key="hdd.Nom">
                                        <p class="espace">{{ hdd.Nom }} ({{ hdd.quantite }})</p>
                                    </option>
                                </select>
                            </div>

                            <div class="select">
                                <select class="form-select" v-model="SSDSelectionner">
                                    <option selected>
                                        <p class="espace">Stockage SSD</p>
                                    </option>
                                    <option :value="ssd.Nom" v-for="ssd in DisqueSSD" :key="ssd.Nom">
                                        <p class="espace">{{ ssd.Nom }} ({{ ssd.quantite }})</p>
                                    </option>
                                </select>
                            </div>
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
import minibox from "@/components/home_components/PapierBox/miniBox.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";


import axios from "axios";






export default {
    name: "PCBureauView",
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
            products: [],
            Tempproducts: [],
            page: 1,
            loaded: false,
            total: 0,
            Nombrands: [],
            Brands: [],
            TempBrands: [],
            Configurations: [],
            Categories: [{
                Nom: "PC intel",
                quantite: 0,
                selected: false
            },
            {
                Nom: "PC AMD",
                quantite: 0,
                selected: false
            }
            ],
            Processeurs: [],
            ProcesseurSelectionner: 'Processeur',
            RAM: [],
            RAMSelectionner: 'RAM',
            CarteGraphique: [],
            CarteSelectionner: 'Cartes Graphiques',
            DisqueSSD: [],
            SSDSelectionner: 'Stockage SSD',
            DisqueHDD: [],
            HDDSelectionner: 'Stockage HDD',
            minPrice: null,
            maxPrice: null,

        }
    }, created() {
        this.getProducts();
        
    }, computed: {
        imageSource() {
            return function (brandNom) {try{
                return require(`@/assets/images/logobrand/${brandNom}.png`);}catch(error){};
            }
        },
        category() {
            return this.Categories.filter(c => c.selected)
        },
        selectCategorie() {
            const filters = [];


            //le filtre des catégories
            if (this.category.length > 0) {
                filters.push(product => {
                    return this.category.some(cat => {
                        if (cat.Nom === "PC intel") {
                            return product.configuartion.some(comp => {
                                return comp.component.compType === "Processeur" && /intel/i.test(comp.component.compName );
                            });
                        } else if (cat.Nom === "PC AMD") {
                            return product.configuartion.some(comp => {
                                return comp.component.compType === "Processeur" && /amd|ryzen/i.test(comp.component.compName);
                            });
                        }
                        return false;
                    });
                });
            }

            //le filtre des cartes graphiques
            if (this.CarteSelectionner !== 'Cartes Graphiques') {
                filters.push(product => {
                    return product.configuartion.some(comp => {
                        return comp.component.compType === "Graphique" && comp.component.compName === this.CarteSelectionner;
                    });
                });
            }

            //le filtre des processeurs
            if (this.ProcesseurSelectionner !== 'Processeur') {
                filters.push(product => {
                    return product.configuartion.some(comp => {
                        return comp.component.compType === "Processeur" && comp.component.compName === this.ProcesseurSelectionner;
                    });
                });
            }

            //le filtre des RAMs
            if (this.RAMSelectionner !== 'RAM') {
                filters.push(product => {
                    return product.configuartion.some(comp => {
                        return comp.component.compType === "Memoire Ram" && comp.component.compName === this.RAMSelectionner;
                    });
                });
            }

            //le filtre des SSD
            if (this.SSDSelectionner !== 'Stockage SSD') {
                filters.push(product => {
                    return product.configuartion.some(comp => {
                        return comp.component.compType === "Stockage SSD" && comp.component.compName === this.SSDSelectionner;
                    });
                });
            }

            //le filtre des HDD
            if (this.HDDSelectionner !== 'Stockage HDD') {
                filters.push(product => {
                    return product.configuartion.some(comp => {
                        return comp.component.compType === "Stockage HDD" && comp.component.compName === this.HDDSelectionner;
                    });
                });
            }

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



        /*
            cherche(){
                return this.products.filter(i=>{
                return i.type.match(this.valeur_cherche)
                })
            },*/






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
                    if(product.productType=="PC-Bureau"){
                    this.Nombrands.push(product.brand);
                    this.Configurations.push({ produitId: product.productId, confprod: product.configuartion })

                    return product;}
                    else return null;
                });
                this.products=this.products.filter((pro)=>{if(pro!=null)
                return pro;})
                this.getAllBrands();
                this.FonctionDiviseComposants();
                this.total = res.data.total_pages;
                this.loaded = true;
                localStorage.setItem("produits", JSON.stringify(res.data))
            })
                .catch((err) => {
                    console.log(err);
                    this.loaded = false;
                });
            console.log(this.products);
            
        },
        getAllBrands() {
            //fonctions pour déduire les marques existes et leurs quantité
            this.Nombrands = this.Nombrands.map(nombrand => nombrand.toLowerCase());
            var lowerCaseNombrands = this.Nombrands.map(nombrand => nombrand.toLowerCase()); // convertir toutes les chaînes de caractères en minuscules
            var NombrandsSansDoublons = [...new Set(lowerCaseNombrands)];
            for (var i = 0; i < NombrandsSansDoublons.length; i++) {
                var repetition = 0;
                for (var j = 0; j < this.Nombrands.length; j++) {
                    if (this.Nombrands[j] === NombrandsSansDoublons[i])
                        repetition++;
                }
                var Nom = NombrandsSansDoublons[i].charAt(0).toUpperCase() + NombrandsSansDoublons[i].slice(1);
                var Marque = { Nom: Nom, quantite: repetition, click: false };
                this.Brands.push(Marque);

            }


        }, Brandfilter(param) {
            this.Brands = this.Brands.map((Bra) => {

                if ((Bra.Nom == param || Bra.Nom.toUpperCase()==param || Bra.Nom.toLowerCase()==param) && Bra.click == false)
                    return { Nom: Bra.Nom, quantite: Bra.quantite, click: true };
                else if ((Bra.Nom == param || Bra.Nom.toUpperCase()==param || Bra.Nom.toLowerCase()==param) && Bra.click == true)
                    return { Nom: Bra.Nom, quantite: Bra.quantite, click: false };
                else
                    return Bra;
            });

            this.TempBrands = this.Brands.filter(Bra => { return Bra.click == true });



            if (this.Tempproducts.length < this.products.length) {
                this.Tempproducts = this.products.map((product) => {
                    product.brand = product.brand.toLowerCase();
                    product.brand = product.brand.charAt(0).toUpperCase() + product.brand.slice(1);
                    return product;
                });
            }
            //   console.log(this.products);
            // console.log(this.TempBrands.length)
            var Tempo = [];
            for (let i = 0; i < this.TempBrands.length; i++) {

                Tempo = Tempo.concat(this.Tempproducts.filter(product => { return product.brand == this.TempBrands[i].Nom }));
            }




            this.products = Tempo;

            if (this.TempBrands.length == 0) {
                axios.get('http://164.92.134.202:8099/api/product/allProduct').then((res) => {
                    this.products = res.data.map((product) => {
                    if(product.productType=="PC-Bureau"){
                    this.Nombrands.push(product.brand);
                    this.Configurations.push({ produitId: product.productId, confprod: product.configuartion })

                    return product;}
                    else return null;
                });
                this.products=this.products.filter((pro)=>{if(pro!=null)
                return pro;})
                    this.total = res.data.total_pages;
                    this.loaded = true;
                })
                    .catch((err) => {
                        console.log(err);
                        this.loaded = false;
                    });
            }
             // chikhi modif sorry
            try{
                this.selectCategorie();
            }catch(err){
                console.log(err);
            }
            //this.selectCategorie();
             // chikhi modif sorry
            console.log(this.products);
        }, FonctionDiviseComposants() {
            
            let NomProcesseurs = [], NomRam = [], NomCarte = [], NomHDD = [], NomSSD = [];
            this.Configurations.forEach((Conf) => {
                Conf.confprod.forEach((Comp) => {
                    if (Comp.component.compType == "Processeur")
                        NomProcesseurs.push(Comp.component.compName);
                    if (Comp.component.compType == "Memoire Ram")
                        NomRam.push(Comp.component.compName);
                    if (Comp.component.compType == "Graphique")
                        NomCarte.push(Comp.component.compName);
                    if (Comp.component.compType == "Stockage HDD")
                        NomHDD.push(Comp.component.compName);
                    if (Comp.component.compType == "Stockage SSD")
                        NomSSD.push(Comp.component.compName);


                })
            });

            this.FinalTabComposants(NomProcesseurs, this.Processeurs);
            this.FonctionDiviseGategorie();
            this.FinalTabComposants(NomRam, this.RAM);
            this.FinalTabComposants(NomCarte, this.CarteGraphique);
            this.FinalTabComposants(NomHDD, this.DisqueHDD);
            this.FinalTabComposants(NomSSD, this.DisqueSSD);
        
            if(this.$route.params.Brand!=null){
                
                this.Brandfilter(this.$route.params.Brand);

            }
        

        
        }, FinalTabComposants(NomTab, FinalTab) {
            let TabSansDoublons = [...new Set(NomTab)];
            for (var i = 0; i < TabSansDoublons.length; i++) {
                var repetition = 0;
                for (var j = 0; j < NomTab.length; j++) {
                    if (NomTab[j] === TabSansDoublons[i])
                        repetition++;
                }
                var Nom = TabSansDoublons[i];
                var Element = { Nom: Nom, quantite: repetition, click: false };
                FinalTab.push(Element);

            }
            
        }, FonctionDiviseGategorie() {
            this.Processeurs.forEach((Pros) => {
                if (Pros.Nom.includes("AMD") || Pros.Nom.includes("Amd") || Pros.Nom.includes("amd")||Pros.Nom.includes("RYZEN") || Pros.Nom.includes("Ryzen") || Pros.Nom.includes("ryzen"))
                    this.Categories.forEach((Cat) => {
                        if (Cat.Nom == "PC AMD")
                            Cat.quantite += Pros.quantite;

                    });
                if (Pros.Nom.includes("intel") || Pros.Nom.includes("INTEL") || Pros.Nom.includes("Intel"))
                    this.Categories.forEach((Cat) => {
                        if (Cat.Nom == "PC intel")
                            Cat.quantite += Pros.quantite;

                    });

            })

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


        },

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
</style>

