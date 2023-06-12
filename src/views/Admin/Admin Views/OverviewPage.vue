<template>
  <h3 style="text-align: center;">Page d'accueil</h3>
  <div class="admin">
    <a href="/admin/products" style="display: block;">  <img src="@/assets/images/composant_PC_Server/Admin/traits.png" style="width: 30%;"><p style="margin-left :6%;  font-size: 2.5rem;">Produits</p> </a>
    <a href="/admin/users" style="display: block;">  <img src="@/assets/images/composant_PC_Server/Admin/users.png" style="width:40%;"><p style="margin-left :6%; font-size: 2.5rem;">Utilisateurs</p> </a>
    <a href="/admin/orders" style="display: block;">  <img src="@/assets/images/composant_PC_Server/Admin/liste-de-colisage.png" style="width:30%;"><p style="margin-left :6%; font-size: 2.5rem;">Ordres</p> </a>
  </div>
  


</template>

<script>
export default {
  name: "OverviewPage",
  
};
</script>

<style>
.admin{
  display: flex;
  margin-top:8% ;
  margin-left:10%;
  margin-right:10%;
  width: 100%;
}

</style>