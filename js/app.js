const { createApp } = Vue
// import ComponentName from './cmps/ComponentName.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'

import BookIndex from './cmps/BookIndex.js'

import HomePage from './pages/HomePage.js'
import AboutUsPage from './pages/AboutUsPage.js'

const options = {
    template: `
        <section class="container">
            <AppHeader @setRoute="route = $event"/>  
            <main class="router-view">
                <HomePage  v-if="route === 'HomePage'"/>  
                <BookIndex  v-if="route === 'BookIndex'"/>
                <AboutUsPage v-if="route === 'AboutUsPage'"/>
            </main>
            <AppFooter />
        </section>
    `,
    data() {
        return {
            route: 'HomePage',
        }
    },
    // methods: {},
    // computed: {},
    components: {
        AppHeader,
        AppFooter,
        BookIndex: BookIndex,
        HomePage,
        AboutUsPage,
    }
}
const app = createApp(options)

// app.component('ComponentName', ComponentName)

app.mount('#app')