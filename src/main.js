import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faLaptop,faEnvelope,faCircleCheck)





//importer bootstrap

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

//createApp(App).use(router).use(store).use(VueAwesomePaginate).mount("#app");
//createApp(App).use(bootstrap).use(router).use(store).use(VueAwesomePaginate).mount("#app");
createApp(App).use(bootstrap).component('font-awesome-icon', FontAwesomeIcon).use(router).use(store).use(VueAwesomePaginate).mount("#app");
