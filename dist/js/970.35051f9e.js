"use strict";(self["webpackChunkBuy_Tech"]=self["webpackChunkBuy_Tech"]||[]).push([[970],{3628:function(e,t,o){o.r(t),o.d(t,{default:function(){return W}});var r=o(3396),s=o(9242);const i=(0,r._)("br",null,null,-1),n=(0,r._)("h3",{id:"Types"},"les Types des composants",-1),a={class:"position"},c=["src"],p={key:0},l={class:"forFlex"},u={class:"composant"},m={id:"prix"},d=(0,r._)("h3",{id:"cat"},[(0,r._)("strong",null,"Filtrer par prix")],-1),h={class:"filtrage-prix"},g={class:"input-group mb-3"},y=(0,r._)("h3",null,"à",-1),_={class:"input-group mb-3"},f={class:"containers"},P={class:"product__container"},C={key:1},S={class:"accordion accordion-flush",id:"accordionFlushExample"},v={class:"accordion-item"},b=(0,r._)("h2",{class:"accordion-header"},[(0,r._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"},[(0,r._)("h3",{id:"filtrage"},"Filtrage")])],-1),D={id:"flush-collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},N={class:"composant_Cacher"},T={class:"select_prix"},w={id:"prix"},x=(0,r._)("h3",{id:"cat"},[(0,r._)("strong",null,"Filtrer par prix")],-1),k={class:"filtrage-prix"},M={class:"input-group mb-3"},q=(0,r._)("h3",null,"à",-1),A={class:"input-group mb-3"},R={class:"containers_cacher"},H={class:"product__container_caher"};function F(e,t,o,F,$,B){const G=(0,r.up)("main-header"),Z=(0,r.up)("BoxPr"),I=(0,r.up)("minibox"),z=(0,r.up)("product-card"),E=(0,r.up)("main-footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(G),(0,r.Wm)(Z,{title:"Composants",lien:"/shop/Composants"}),i,n,(0,r._)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)($.Types,(e=>((0,r.wg)(),(0,r.j4)(I,{key:e.Nom,name:e.Nom+" ("+e.quantite+")",onClick:t=>B.redirection(e.Nom)},{default:(0,r.w5)((()=>[(0,r._)("img",{src:B.imageSource(e.Nom),class:"imageAll"},null,8,c)])),_:2},1032,["name","onClick"])))),128))]),0==this.message?((0,r.wg)(),(0,r.iD)("section",p,[(0,r._)("div",l,[(0,r._)("div",u,[(0,r._)("div",m,[d,(0,r._)("div",h,[(0,r._)("div",g,[(0,r.wy)((0,r._)("input",{type:"number",class:"form-control",placeholder:"Min","onUpdate:modelValue":t[0]||(t[0]=e=>$.minPrice=e),step:"100"},null,512),[[s.nr,$.minPrice,void 0,{number:!0}]])]),y,(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{type:"number",class:"form-control",placeholder:"Max","onUpdate:modelValue":t[1]||(t[1]=e=>$.maxPrice=e),step:"100"},null,512),[[s.nr,$.maxPrice,void 0,{number:!0}]])])])])]),(0,r._)("div",f,[(0,r._)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(B.selectCategorie,((e,t)=>((0,r.wg)(),(0,r.j4)(z,{key:t,productId:e.productId,productName:e.productName,productType:e.productType,brand:e.brand,model:e.model,weight:e.weight,garantie:e.garrntyPerriode,price:e.productPrice,image_url:e.image,class:"product-card"},null,8,["productId","productName","productType","brand","model","weight","garantie","price","image_url"])))),128))])])])])):((0,r.wg)(),(0,r.iD)("section",C,[(0,r._)("div",S,[(0,r._)("div",v,[b,(0,r._)("div",D,[(0,r._)("div",N,[(0,r._)("div",T,[(0,r._)("div",w,[x,(0,r._)("div",k,[(0,r._)("div",M,[(0,r.wy)((0,r._)("input",{type:"number",class:"form-control",placeholder:"Min","onUpdate:modelValue":t[2]||(t[2]=e=>$.minPrice=e),step:"100"},null,512),[[s.nr,$.minPrice,void 0,{number:!0}]])]),q,(0,r._)("div",A,[(0,r.wy)((0,r._)("input",{type:"number",class:"form-control",placeholder:"Max","onUpdate:modelValue":t[3]||(t[3]=e=>$.maxPrice=e),step:"100"},null,512),[[s.nr,$.maxPrice,void 0,{number:!0}]])])])])])])])])]),(0,r._)("div",R,[(0,r._)("div",H,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(B.selectCategorie,((e,t)=>((0,r.wg)(),(0,r.j4)(z,{key:t,productId:e.productId,productName:e.productName,productType:e.productType,brand:e.brand,model:e.model,weight:e.weight,garantie:e.garrntyPerriode,price:e.productPrice,image_url:e.image},null,8,["productId","productName","productType","brand","model","weight","garantie","price","image_url"])))),128))])])])),(0,r.Wm)(E)],64)}var $=o(1605),B=o(6499),G=o(2171),Z=o(8697),I=o(6103),z=o(8748),E=o(6265),U=o.n(E),V={name:"ComposantsView",components:{MainHeader:$.Z,MainFooter:B.Z,BoxPr:G.Z,minibox:Z.Z,ProductCard:I.Z,"product-preloader":z.Z},data(){return{message:!1,categore:null,products:[],Tempproducts:[],page:1,loaded:!1,total:0,NomTypes:[],Types:[],TempBrands:[],Configurations:[],Categories:[{Nom:"PC intel",quantite:0,selected:!1},{Nom:"PC AMD",quantite:0,selected:!1}],Processeurs:[],ProcesseurSelectionner:"Processeur",RAM:[],RAMSelectionner:"RAM",CarteGraphique:[],CarteSelectionner:"Cartes Graphiques",DisqueSSD:[],SSDSelectionner:"Stockage SSD",DisqueHDD:[],HDDSelectionner:"Stockage HDD",minPrice:null,maxPrice:null}},created(){this.getProducts()},computed:{imageSource(){return function(e){try{return o(3731)(`./${e}.jpg`)}catch(t){}}},category(){return this.Categories.filter((e=>e.selected))},selectCategorie(){const e=[];this.category.length>0&&e.push((e=>this.category.some((t=>"PC intel"===t.Nom?e.configuartion.some((e=>"Processeur"===e.component.compType&&/intel/i.test(e.component.compName))):"PC AMD"===t.Nom&&e.configuartion.some((e=>"Processeur"===e.component.compType&&/amd/i.test(e.component.compName))))))),"Cartes Graphiques"!==this.CarteSelectionner&&e.push((e=>e.configuartion.some((e=>"CarteGraphique"===e.component.compType&&e.component.compName===this.CarteSelectionner)))),"Processeur"!==this.ProcesseurSelectionner&&e.push((e=>e.configuartion.some((e=>"Processeur"===e.component.compType&&e.component.compName===this.ProcesseurSelectionner)))),"RAM"!==this.RAMSelectionner&&e.push((e=>e.configuartion.some((e=>"RAM"===e.component.compType&&e.component.compName===this.RAMSelectionner)))),"Stockage SSD"!==this.SSDSelectionner&&e.push((e=>e.configuartion.some((e=>"DisqueSSD"===e.component.compType&&e.component.compName===this.SSDSelectionner)))),"Stockage HDD"!==this.HDDSelectionner&&e.push((e=>e.configuartion.some((e=>"DisqueHDD"===e.component.compType&&e.component.compName===this.HDDSelectionner))));let t=this.products;t=this.filtrerProduitPrix();for(const o of e)t=t.filter(o);return t},filterProduct(e){return this.category.forEach((t=>{if(t.title==e.brand)return!0})),!1}},mounted(){window.addEventListener("resize",this.handleResize)},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){window.innerWidth<868?this.message=!0:this.message=!1},getProducts(){this.loaded=!1,U().get("http://164.92.134.202:8099/api/product/allProduct").then((e=>{this.products=e.data.map((e=>!!this.SeulementCompo(e.productType)&&(this.NomTypes.push(e.productType),e))),this.products=this.products.filter((e=>{if(null!=e)return e})),this.getAllTypes(),this.FonctionDiviseComposants(),this.total=e.data.total_pages,this.loaded=!0})).catch((e=>{console.log(e),this.loaded=!1}))},getAllTypes(){this.NomTypes=this.NomTypes.map((e=>e.toLowerCase()));let e=this.NomTypes.map((e=>e.toLowerCase())),t=[...new Set(e)];for(var o=0;o<t.length;o++){for(var r=0,s=0;s<this.NomTypes.length;s++)this.NomTypes[s]===t[o]&&r++;var i=t[o].charAt(0).toUpperCase()+t[o].slice(1),n={Nom:i,quantite:r,click:!1};this.Types.push(n)}},filtrerProduitPrix(){let e=parseFloat(this.minPrice),t=parseFloat(this.maxPrice);return this.products.filter((o=>{let r=parseFloat(o.productPrice);return!(!(isNaN(e)||r>=e)||!(isNaN(t)||r<=t))}))},redirection(e){/Graphique/i.test(e)&&this.$router.push("/shop/Composants/Carte-Graphique"),/Ram/i.test(e)&&this.$router.push("/shop/Composants/memoirevive-RAM"),/mère/i.test(e)&&this.$router.push("/shop/Composants/Carte-mere"),/stockage/i.test(e)&&this.$router.push("/shop/Composants/stockage"),/boitier/i.test(e)&&this.$router.push("/shop/Composants/Boitier"),/blocs/i.test(e)&&this.$router.push("/shop/Composants/Blocs-Alimentation"),/Processeur/i.test(e)&&this.$router.push("/shop/Composants/Processeurs")},SeulementCompo(e){return!!(/Graphique/i.test(e)||/Ram/i.test(e)||/mère/i.test(e)||/stockage/i.test(e)||/boitier/i.test(e)||/blocs/i.test(e)||/Processeur/i.test(e))}}},j=o(89);const L=(0,j.Z)(V,[["render",F]]);var W=L}}]);
//# sourceMappingURL=970.35051f9e.js.map