import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import Bulma from "bulma";
import "@/Axios";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;
Vue.use(Bulma, { defaultIconPack: "fa" });

Vue.use(VueGtag, {
	config: { id: "UA-XXXXXXX-1" }
}, router);

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
