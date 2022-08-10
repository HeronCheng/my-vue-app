import Vue from "vue";
import "./tailwind.css";
import App from "./App.vue";
import List from "./components/List.vue";
import HomePage from "./components/HomePage.vue";
import Test from "./components/Test.vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    { path: "/", component: HomePage },
    { path: "/list", component: List },
    { path: "/test", component: Test }
];

const router = new VueRouter({
    routes 
});

new Vue({
    render: h => h(App),
    router,

}).$mount("#app");