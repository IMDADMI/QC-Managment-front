<template>

<button class="btn btn-secondary dropdown-toggle" href="/shop" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:white">
                    Parcourir<span class="caret"></span>
                </button>

  <ul class="dropdown-menu"  @mouseleave="noAfficher($event)">
                        <li>
                            <a class="dropdown-item" href="/Configurateur-produit"  @mouseover="afficher($event,1)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
</svg>&ensp; Configurateur</a>                              
                                    <ul class="submenu" v-if="this.affichage1==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/Configurateur-produit/Config-PC"> Configurer votre Pc</a></li>
<li><a class="dropdown-item" href="/Configurateur-produit/Config-Serveur">
 Configurer votre Serveur</a></li>
                                    </ul>
                                    </li>
                                    <li>
                            <a class="dropdown-item" href="/shop/PC-Bureau"  @mouseover="afficher($event,2)"><svg xmlns="http://www.w3.org/2000/svg" width="1em"
                            height="1em" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
</svg>&ensp; Pc Bureau</a>                              
                                    <ul class="submenu" v-if="this.affichage2==true && this.x!=0">
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Apple">Apple</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Hp" >hp</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Dell">DELL</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Asus">Asus</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Lenovo">Lenovo</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Msi">MSI</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Bureau/Acer">Acer</a></li>
                                        
                                    </ul>
                                    </li> 
                                  <li>
                                    <a class="dropdown-item" href="/shop/PC-Portable"  @mouseover="afficher($event,3)"><svg xmlns="http://www.w3.org/2000/svg" width="1em"
                            height="1em" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>&ensp; Pc Portable</a>                              
                                    <ul class="submenu" v-if="this.affichage3==true && this.x!=0">
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Apple">Apple</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Hp" >hp</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Dell">DELL</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Asus">Asus</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Lenovo">Lenovo</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Msi">MSI</a></li>
                                        <li><a class="dropdown-item" href="/shop/PC-Portable/Acer">Acer</a></li>

                                    </ul>
                                    </li>
                                    <li>
                        
                        <a class="dropdown-item" href="/shop/Composants" @mouseover="afficher($event,4)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
</svg> &ensp; Composants</a>
<ul class="submenu" v-if="this.affichage4==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/shop/Composants/Processeurs">Processeur</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/Carte-mere" >Carte Mère Générale</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/Carte-Graphique">Carte Graphique</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/boitier">Boitier</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/memoirevive-RAM">Mémoire vive (RAM)</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/Stockage">Stockage</a></li>
                                        <li><a class="dropdown-item" href="/shop/Composants/Blocs-Alimentation">Blocs d'Alimentation</a></li>
                                        
                                    </ul>

                    </li>
                    <li><a class="dropdown-item" href="/shop/Ecrans" @mouseover="afficher($event,5)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
</svg> &ensp;Ecrans</a>

<ul class="submenu" v-if="this.affichage5==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/shop/Ecrans/AOC">AOC</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Asus" >ASUS</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Benq">BENQ</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Hp">HP</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Hybrok">Hybrok</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/iiyama">iiyama</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Lg">LG</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Msi">Msi</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Samsung">Samsung</a></li>
                                        <li><a class="dropdown-item" href="/shop/Ecrans/Viewsonic">ViewSonic</a></li>
                                        
                                    </ul>
</li>

                    <li><a class="dropdown-item" href="/shop/Imprimantes" @mouseover="afficher($event,6)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg>&ensp; Imprimantes</a>

<ul class="submenu" v-if="this.affichage6==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/shop/Imprimantes/Canon">Canon</a></li>
                                        <li><a class="dropdown-item" href="/shop/Imprimantes/Epson" >Epson</a></li>
                                        <li><a class="dropdown-item" href="/shop/Imprimantes/Hp">Hp</a></li>    
                                    </ul>

</li>
                    <li><a class="dropdown-item" href="/shop/Scanners" @mouseover="afficher($event,7)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-landscape" viewBox="0 0 16 16">
  <path d="M1 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z"/>
  <path d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
</svg>&ensp; Scanners</a>
<ul class="submenu" v-if="this.affichage7==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/shop/Scanners/Canon">Canon</a></li>
                                        <li><a class="dropdown-item" href="/shop/Scanners/Epson" >Epson</a></li>
                                        <li><a class="dropdown-item" href="/shop/Scanners/Hp">Hp</a></li>    
                                    </ul>

</li>
                    <li><a class="dropdown-item" href="/shop/Accessoires" @mouseover="afficher($event,8)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse2" viewBox="0 0 16 16">
  <path d="M3 5.188C3 2.341 5.22 0 8 0s5 2.342 5 5.188v5.625C13 13.658 10.78 16 8 16s-5-2.342-5-5.188V5.189zm4.5-4.155C5.541 1.289 4 3.035 4 5.188V5.5h3.5V1.033zm1 0V5.5H12v-.313c0-2.152-1.541-3.898-3.5-4.154zM12 6.5H4v4.313C4 13.145 5.81 15 8 15s4-1.855 4-4.188V6.5z"/>
</svg>&ensp; Accéssoires</a><ul class="submenu" v-if="this.affichage8==true && this.x!=0">
                                      <li><a class="dropdown-item" href="/shop/Accessoires/Casque">Casque</a></li>
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Clavier" >Clavier</a></li>
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Usb">Clé USB</a></li>   
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Souris">Souris</a></li>
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Microphone" >Microphones</a></li>
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Hautparleur">Haut-Parleurs</a></li> 
                                        <li><a class="dropdown-item" href="/shop/Accessoires/Webcam">Webcams</a></li> 
                                    </ul></li>


                </ul>


















</template>    
<script >
export default {
    name: "ButtonCat",
    data() {
        return {
            affichage1:false,
            affichage2:false,
            affichage3:false,
            affichage4:false,
            affichage5:false,
            affichage6:false,
            affichage7:false,
            affichage8:false,

            x:0
            
        };
    },
    methods: {
        afficher($event,a){
            if($event){
                this.x=1;
                if(a==1){
                    this.affichage1=true
                }else if(a!==1){
                    this.affichage1=false
                }
                if(a==2){
                    this.affichage2=true
                }else if(a!==2){
                    this.affichage2=false
                }
                if(a==3){
                    this.affichage3=true
                }else if(a!==3){
                    this.affichage3=false
                }
                if(a==4){
                    this.affichage4=true
                }else if(a!==4){
                    this.affichage4=false
                }
                if(a==5){
                    this.affichage5=true
                }else if(a!==5){
                    this.affichage5=false
                }
                if(a==6){
                    this.affichage6=true
                }else if(a!==6){
                    this.affichage6=false
                }
                if(a==7){
                    this.affichage7=true
                }else if(a!==7){
                    this.affichage7=false
                }
                if(a==8){
                    this.affichage8=true
                }else if(a!==8){
                    this.affichage8=false
                }

            }

       
           
        },
        noAfficher($event){
           
                    this.affichage1=false
                    this.affichage2=false
                    this.affichage3=false
                    this.affichage4=false
                    this.affichage5=false
                    this.affichage6=false
                    this.affichage7=false
                    this.affichage8=false
                
        }
    },

};
</script>
    
<style scoped>

 a {
    padding-inline: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--dark-blue);
    transition: all 0.25s ease-in-out;
    line-height: 2rem;
    padding:0.5rem;
}



button {
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.25s, color 0.25s;
    border: none;
}
.btn-secondary {
    color: #fff;
    background-color:var(--dim-blue);
    border-color:var(--dim-blue);
    box-shadow:none;
    padding: 1rem 2rem;
    font-size: 1.7rem;
    transition:none;
}
.btn-secondary:focus {
    color: #fff;
    background-color: var(--dark-blue);
    border-color: var(--dark-blue);
    box-shadow:none;
    transition: none;
    
}
.btn-secondary:hover {
    color: #fff;
    background-color: var(--dark-blue);
    border-color: var(--dark-blue);
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
}

.btn{
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
}

</style>