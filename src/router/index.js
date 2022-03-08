import { createWebHistory, createRouter } from "vue-router";


const routes = [
{
    path: "/",
    component: () => import("@/views/Home")
},
{
    name: "login",
    path: "/login",
    component: () => import("@/views/Login")
},
{
    name: "register",
    path: "/register",
    component: () => import("@/views/Register")
},
{
    name: "settings",
    path: "/settings",
    component: () => import("@/views/Settings")
},
// Handle child routes with a default, by giving the name to the
// child.
// SO: https://github.com/vuejs/vue-router/issues/777
{
    path: "/@:username",
    component: () => import("@/views/Profile")
}
]

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;  