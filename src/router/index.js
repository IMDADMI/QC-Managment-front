import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store"
import HomeView from "../views/User/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/UserRegistration/LoginBox.vue"),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("../views/UserRegistration/SignupBox.vue"),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import("../views/UserRegistration/ForgotPassword.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/User/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/User/ShopView.vue"),
    children:[






    ]
  },
 
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/User/BlogView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/User/ContactView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/User/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/User/CheckoutView.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: '/cart/:productId',
    name: 'cartItem',
    component: () => import("../views/User/CartItemView.vue"),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import("../views/Admin/Admin Views/AdminPage.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.user &&store.state.user.admin==true) {
        next();
      } else {
        next("/admin/login");
      }
    },
    children: [
      {
        path: '/admin/overview',
        name: 'overview',
        component: () => import("../views/Admin/Admin Views/OverviewPage.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.user &&store.state.user.admin==true) {
            next();
          } else {
            next("/admin/login");
          }
        }
      }, {
        path: '/admin/products',
        name: 'products',
        component: () => import("../views/Admin/Admin Views/ProductsPage.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.user &&store.state.user.admin==true) {
            next();
          } else {
            next("/admin/login");
          }
        }
      }, {
        path: '/admin/orders',
        name: 'orders',
        component: () => import("../views/Admin/Admin Views/OrdersPage.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.user &&store.state.user.admin==true) {
            next();
          } else {
            next("/admin/login");
          }
        }
      },
      {
        path: '/admin/user',
        name: 'user',
        component: () => import("../views/Admin/Admin Views/modificationUser.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.user &&store.state.user.admin==true) {
            next();
          } else {
            next("/admin/login");
          }
        }
      },
      {
        path: '/admin/users',
        name: 'users',
        component: () => import("../views/Admin/Admin Views/UsersPage.vue"),
        beforeEnter: (to, from, next) => {
          if (store.state.user &&store.state.user.admin==true) {
            next();
          } else {
            next("/admin/login");
          }
        }
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import("../views/Admin/AdminLogin.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.user &&store.state.user.admin==true) {
        next("/admin");
      } else {
        next();
      }
    }
  },
 
 
 
  {
    path:'/Configurateur-produit',
    name:'ConfigView',
    component:()=>import("../views/User/ConfigView.vue"),
  },
  {
    path:'/Configurateur-produit/Config-Pc',
    name:'ConfigPcView',
    component:()=>import("../views/User/ConfiPc.vue"),
  },
  {
    path:'/Configurateur-produit/Config-Serveur',
    name:'ConfigServView',
    component:()=>import("../views/User/ConfiServe.vue"),
  },
  {
    path:"/shop/Pc-Bureau",
    name:"Pc-Bureau",
    component: () => import("../views/User/Produit/PCBureau.vue"),
  },
  {
    path:"/shop/Pc-Bureau/:Brand",
    name:"Pc-Bureau-filter",
    component: () => import("../views/User/Produit/PCBureau.vue"),
  },
  {
    path:"/shop/Pc-Portable",
    name:"Pc-Portable",
    component: () => import("../views/User/Produit/PCPortable.vue"),
  },
  {
    path:"/shop/Pc-Portable/:Brand",
    name:"Pc-Portable-filter",
    component: () => import("../views/User/Produit/PCPortable.vue"),
  },
  {
    path:"/shop/Composants",
    name:"Composants",
    component: () => import("../views/User/Produit/Composants.vue"),
  },
          {
          path:"/shop/Composants/Processeurs",
          name:"Processeurs",
          component: () => import("../views/User/Produit/Composants/Processeurs.vue"),
        },
        {
          path:"/shop/Composants/memoirevive-RAM",
          name:"MemoireVive",
          component: () => import("../views/User/Produit/Composants/memoirevive.vue"),
        },
        {
          path:"/shop/Composants/Stockage",
          name:"Stockage",
          component: () => import("../views/User/Produit/Composants/Stockage.vue"),
        },

        {
          path:"/shop/Composants/Carte-mere",
          name:"Cartemere",
          component: () => import("../views/User/Produit/Composants/Cartemere.vue"),
        },
        {
          path:"/shop/Composants/Carte-Graphique",
          name:"CarteGraph",
          component: () => import("../views/User/Produit/Composants/CarteGraph.vue"),
        },
        {
          path:"/shop/Composants/boitier",
          name:"Boitier",
          component: () => import("../views/User/Produit/Composants/Boitier.vue"),
        },

        {
          path:"/shop/Composants/Blocs-Alimentation",
          name:"BlocAlimentation",
          component: () => import("../views/User/Produit/Composants/BlocAliment.vue"),
        },
  {
    path:"/shop/Ecrans",
    name:"Ecran",
    component: () => import("../views/User/Produit/Ecrans.vue"),
  },{
    path:"/shop/Ecrans/:Brand",
    name:"EcranFiltrer",
    component: () => import("../views/User/Produit/Ecrans.vue"),
  },
  {
    path:"/shop/Imprimantes",
    name:"Imprimantes",
    component: () => import("../views/User/Produit/Imprimantes.vue"),
  },{
    path:"/shop/Imprimantes/:Brand",
    name:"ImprimantesFiltrer",
    component: () => import("../views/User/Produit/Imprimantes.vue"),
  },
  {
    path:"/shop/Accessoires",
    name:"Accessoires",
    component: () => import("../views/User/Produit/Accessoires.vue"),
  },
            {
              path:"/shop/Accessoires/Casque",
              name:"Casque",
              component: () => import("../views/User/Produit/Accessoires/Casque.vue"),
            },
            {
              path:"/shop/Accessoires/Clavier",
              name:"Clavier",
              component: () => import("../views/User/Produit/Accessoires/Clavier.vue"),
            },
            {
              path:"/shop/Accessoires/Usb",
              name:"Usb",
              component: () => import("../views/User/Produit/Accessoires/Usb.vue"),
            },

            {
              path:"/shop/Accessoires/Microphone",
              name:"Microphone",
              component: () => import("../views/User/Produit/Accessoires/Microphone.vue"),
            },
            {
              path:"/shop/Accessoires/Hautparleur",
              name:"Hautparleur",
              component: () => import("../views/User/Produit/Accessoires/Hautparleur.vue"),
            },
            {
              path:"/shop/Accessoires/Webcam",
              name:"Webcam",
              component: () => import("../views/User/Produit/Accessoires/Webcam.vue"),
            },
            {
              path:"/shop/Accessoires/Souris",
              name:"Souris",
              component: () => import("../views/User/Produit/Accessoires/Souris.vue"),
            },


  {
    path:"/shop/Scanners",
    name:"Scanners",
    component: () => import("../views/User/Produit/Scanners.vue"),
  },
  {
    path:"/shop/Scanners/:Brand",
    name:"ScannersFilter",
    component: () => import("../views/User/Produit/Scanners.vue"),
  },
 
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

// Method 2 of setting navigation guard

// const openResources = ['home', 'login', 'signup', 'forgot-password', 'about', 'shop',
//   'blog', 'contact', 'cart', 'cartItem'];
// router.beforeEach((to, from, next) => {
//   if (openResources.includes(to.name)) {
//     next()
//   } else if (store.state.user) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router;
