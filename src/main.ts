import { createApp } from "vue";
import Vant from "vant";
import ElementPlus from "element-plus"
import App from "./App.vue";
import "amfe-flexible";
import router from "./router/router";
import pinia from "./stores";
import "vant/lib/index.css";
import "element-plus/dist/index.css"

const app = createApp(App);

app.use(Vant);
app.use(pinia)
app.use(router);
app.use(ElementPlus)

app.mount("#app");
