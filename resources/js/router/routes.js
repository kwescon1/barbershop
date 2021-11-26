const routes = [
    {
        path: "/",
        name: "welcome",
        component: () => import("../components/WelcomeComponent.vue"),
    },
    {
        path: "/register/client",
        name: "registerclient",
        component: () =>
            import("../components/clients/RegisterClientComponent.vue"),
    },
    {
        path: "/clients",
        name: "allclients",
        component: () =>
            import("../components/clients/AllClientsComponent.vue"),
    },

    {
        path: "/search/clients",
        name: "searchclient",
        component: () => import("../components/search/SearchComponent.vue"),
        beforeEnter: (to, from, next) => {
            if (!to.query.param) {
                next({ name: "welcome" });
            } else {
                next();
            }
        },
    },
];

export default routes;
