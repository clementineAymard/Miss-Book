const { createApp } = Vue

import { router } from './routes.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'

const options = {
    template: `
        <section class="container">
            <AppHeader/>  
            <main class="router-view">
                <RouterView />
            </main>
            <AppFooter />
            <UserMsg/> <!-- is at the bottom so no pblms with z-indexs because last el in DOM wins -->
        </section>
    `,
    data() {
        return {}
    },
    // methods: {},
    // computed: {},
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
    }
}
const app = createApp(options)
app.use(router)
app.mount('#app')