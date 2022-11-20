
import {createWebHistory, createRouter} from 'vue-router'
import HomePage from '../components/HomePage.vue'
import UserLogin from '../components/UserLogin.vue'
import SignUp from '../components/SignUp.vue'
import UserProfile from '../components/UserProfile.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },

        {
            path: '/login',
            name: 'login',
            component: UserLogin
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: SignUp
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfile
        },
    ]
})

router.beforeEach((to, from, next) => {
    // redirect to login page if user is not logged in and trying to access a restricted page
    const publicPages = ['/login', '/home','/signUp' ]
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) {
        return next('/home')
    }

    next()
})

export default router