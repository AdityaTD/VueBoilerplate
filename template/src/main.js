import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import "@/Axios";
import VueGtag from "vue-gtag";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faGoogle);
Vue.component("fai", FontAwesomeIcon);

Vue.use(Buefy);

Vue.config.productionTip = false;
Vue.use(Buefy);

Vue.use(VueGtag, {
	config: { id: "UA-XXXXXXX-1" }
}, router);

new Vue({
	router,
	render: h => h(App),
	mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount("#app");
