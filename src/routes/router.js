import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store/index";

// User Components
import UserAuth from '../pages/auth/UserAuth'

// Beat Components
import UploadBeat from '../pages/beats/UploadBeat'
import EditBeat from '../pages/beats/EditBeat'
import UploadedBeats from '../pages/beats/UploadedBeats' // Contact Components
import Inbox from '../pages/messages/Inbox' // Misc Components
import NotFound from '../pages/misc/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home Route
        {path: '/', redirect: '/auth'},

        // User Routes
        // {path: '/auth', component: UserAuth},
        // {path: '/auth/:id', component: UserProfile},

        // Beat Routes
        {path: '/beats', component: UploadedBeats},
        {path: '/beats/:id', component: EditBeat, props: true},
        {path: '/upload', component: UploadBeat, meta: {requiresAuth: true}},

        // Account Routes
        {path: '/auth', component: UserAuth, meta: {requiresNoAuth: true}},

        // Contact Routes
        {path: '/inbox', component: Inbox, meta: {requiresAuth: true}},

        // 404 Route
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

// This is run before each navigation, acts as a Route guard.
router.beforeEach(function (to, _, next) {
    const userIsAuthenticated = store.getters["authStore/isAuthenticated"];

    if (to.meta.requiresAuth && !userIsAuthenticated) {
        next('/auth');
    } else if (to.meta.requiresNoAuth && userIsAuthenticated) {
        next('/beats');
    } else {
        next();
    }
})

export default router;

