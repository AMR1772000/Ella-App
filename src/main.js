import "./assets/tailwind.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

//Emitter
import mitt from "mitt";
const Emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
app.provide("Emitter", Emitter);
app.use(createPinia());
app.use(router);

app.mount("#app");
