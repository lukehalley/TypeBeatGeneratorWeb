import {createRouter, createWebHistory} from 'vue-router'

// User Components
import UserProfile from '../pages/users/UserProfile'
import UserAuth from '../pages/auth/UserAuth'

// Beat Components
import UploadBeat from '../pages/beats/UploadBeat'
import BeatDetail from '../pages/beats/BeatDetail'
import UploadedBeats from '../pages/beats/UploadedBeats'

// Contact Components
import Inbox from '../pages/messages/Inbox'
// import MessageUser from '../pages/messages/MessageUser'
// Misc Components
import NotFound from '../pages/misc/NotFound'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Home Route
        {path: '/', redirect: '/auth'},

        // User Routes
        {path: '/auth', component: UserAuth},
        {path: '/auth/:id', component: UserProfile},

        // Beat Routes
        {path: '/beats', component: UploadedBeats},
        {path: '/beats/:id', component: BeatDetail, props: true},
        {path: '/upload', component: UploadBeat},

        // Account Routes
        {path: '/auth', component: UserAuth},

        // Contact Routes
        {path: '/inbox', component: Inbox},

        // 404 Route
        {path: '/:notFound(.*)', component: NotFound},
    ]
});

export default router;

