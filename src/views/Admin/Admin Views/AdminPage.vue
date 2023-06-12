<template>
  <main>
    <aside :class="{ open: sideBarOpen }">
      <div class="sidebar-header">
        <h3>BUY IT</h3>
        <button v-if="sideBarOpen" @click="openSideBar" style="background: none;">
          <img src="@/assets/images/composant_PC_Server/Admin/precedent.png" style="width:30px;">
        </button>
      </div>
      <ul>
        <li>
          <router-link :to="{ name: 'overview' }">
            <img src="@/assets/images/composant_PC_Server/Admin/bouton-daccueil.png" style="width: 30px;">
            <span>Accueil</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'products' }">
            <img src="@/assets/images/composant_PC_Server/Admin/traits.png" style="width: 33px;">
            <span>Produits</span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'orders' }">
            <img src="@/assets/images/composant_PC_Server/Admin/liste-de-colisage.png" style="width: 40px;">
            <span>Ordres</span>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'users' }">
            <img src="@/assets/images/composant_PC_Server/Admin/users.png" alt="Users"
                                    style="width: 40px;">
            <span>Utilisateurs</span>
          </router-link>
        </li>
        <li>
          <a @click="logout">
            <img src="@/assets/images/composant_PC_Server/Admin/se-deconnecter.png" style="width: 40px;">
            <span>Déconnexion</span>
          </a>
        </li>
      </ul>
    </aside>
    <section class="main-content">
      <nav>
        <div class="sidebar-toggle">
          <button  @click="openSideBar" style="background: none;">
            <img src="@/assets/images/composant_PC_Server/Admin/symbole-de-liste-de-trois-elements-avec-des-points.png" style="width:30px;">
          </button>
        </div>
        <div class="nav-profile">
          <img
            src="@/assets/images/composant_PC_Server/Admin/utilisateur.png"
            alt="John Smith"
          />
          <span class="name">&#128075; Salut, Admin ({{this.user !=null ? this.user.lastName : " " }})!</span>
          <button  @click="showDropDown = !showDropDown" style="background: none;">
            <img src="@/assets/images/composant_PC_Server/Admin/fleche-vers-le-bas.png" style="width:24px; height: 26px;">
          </button>

          <div class="dropdown" v-if="showDropDown">
            <div class="dropdown-profile">
              <span>Connecté en tant que</span>
              <span class="dropdown-name">Admin</span>
            </div>
            <router-link to="/admin/user">
              <span>Modifier le profile</span>
            </router-link>
            <router-link :to="{ name: 'home' }">
              <span>magasiner</span>
            </router-link>
            <a @click="logout">
              <span>Déconnexion</span>
            </a>
          </div>
        </div>
      </nav>
      <div class="container1">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";


export default {
  name: "AdminPage",
  data() {
    return {
      sideBarOpen: false,
      showDropDown: false,
    };
  },computed: {
        ...mapState(["user"])
    },
  methods: {
    ...mapActions(["remove_user"]),

    logout() {
      this.remove_user();
      //chikhi modif
        location.href = "http://164.92.134.202:3000/admin/login";
      //chikhi modif
      //this.$router.push("/admin/login");
    },
    openSideBar() {
      this.sideBarOpen = !this.sideBarOpen;
    },
  },
};
</script>

<style scoped>
nav {
  background-color: whitesmoke;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
}

.nav-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.nav-profile img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.nav-profile .name {
  font-size: 1.8rem;
}

.nav-profile i {
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown {
  background-color: white;
  z-index: 2;
  border-radius: 8px;
  border: 1px solid var(--grey-2);
  position: absolute;
  top: 35px;
  right: 0;
  transition: 0.25s;
  width: 170px;
}

.dropdown-profile {
  padding: 10px;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--grey-2);
}

.dropdown a {
  font-size: 1.6rem;
  color: #222;
}

.dropdown a:hover {
  color: var(--dark-green);
}

.dropdown-name {
  font-weight: 500;
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.2rem;
}

main {
  display: flex;
  height: 100vh;
}
aside {
  position: fixed;
  height: 100%;
  background-color: var(--dark-blue);
  width: 220px;
  color: white;
  display: flex;
  flex-direction: column;
  transition: 0.25s;
  z-index: 2;
}

.sidebar-header {
  width: 100%;
  border-bottom: 1px solid white;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-header h3 {
  font-size: 2.2rem;
  font-weight: 600;
}

.sidebar-header i {
  cursor: pointer;
  font-size: 2rem;
  display: none;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

li {
  width: 100%;
}

a {
  padding: 10px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  transition: color 0.2s, background-color 0.2s;
}

.icon {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 7px;
  border-radius: 5px;
  font-size: 13px;
}

ul a.router-link-exact-active,
ul a:hover {
  border-left: 4px solid var(--dark-green);
  background-color: rgba(255, 255, 255, 0.1);
}

ul a.router-link-exact-active i,
ul a:hover i {
  color: var(--dark-green);
}

.main-content {
  color: #011627;
  flex: 1;
  padding-top: 0px;
}

@media (max-width: 799px) {
  aside {
    position: fixed;
    left: -220px;
  }
  .open {
    left: 0;
  }
  .sidebar-header i {
    display: initial;
  }
}
.container1{
  margin-left: 14.5%;
}
</style>