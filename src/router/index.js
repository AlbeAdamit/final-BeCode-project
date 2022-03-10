import { createWebHistory, createRouter } from "vue-router";


const routes = [
{
    path: "/",
    component: () => import("@/views/Home.vue")
},
{
    name: "login",
    path: "/login",
    component: () => import("@/views/Login.vue")
},
{
    name: "register",
    path: "/register",
    component: () => import("@/views/Register.vue")
},
{
    name: "settings",
    path: "/settings",
    component: () => import("@/views/Settings.vue")
},
// Handle child routes with a default, by giving the name to the
// child.
// SO: https://github.com/vuejs/vue-router/issues/777
{
    path: "/@:username",
    component: () => import("@/views/Profile.vue")
}
]

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;  