require("./bootstrap");
window.axios = require("axios");
window.axios.defaults.baseURL = "http://localhost:8000/api";
window.Vue = require("vue").default;

import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import errorSuccessMixin from "./mixins/errorSuccessMixin";

Vue.use(VueSweetalert2);
// import "alga-css/dist/alga.min.css";

Vue.mixin({
    mixins: [errorSuccessMixin],
});

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "error-component",
    require("./components/ErrorComponent.vue").default
);

const app = new Vue({
    el: "#app",
    router,
});
