import { createApp } from "vue";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import installD from "@/plugins/d";
import router from "./router";
import store from "./store";
import "@/scss/element-variables.scss";
//import ElementLocale from "element-plus/lib/locale";
//import VueI18n from "@/language";
import 'scss-flex/src/scss-flex.scss';

//ElementLocale.i18n(VueI18n.global.t);

const app = createApp(App).use(store).use(router);
installElementPlus(app);
installD(app);
// app.use(VueI18n).mount("#app");
app.mount("#app");