import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";
import Vant from "vant";
import router from "./router/router";
import pinia from "./stores";
import "vant/lib/index.css";

const app = createApp(App);

app.use(Vant);
app.use(pinia)
app.use(router);

app.mount("#app");
