import HomePage from './pages/HomePage.js'
import AboutUsPage, {AboutTeam, AboutServices} from './pages/AboutUsPage.js'
import BookIndex from './pages/BookIndex.js'
import BookDetails from './pages/BookDetails.js'
import BookEdit from './pages/BookEdit.js'

const { createRouter, createWebHashHistory } = VueRouter

const options = {
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/about',
            component: AboutUsPage,
            children:[ // this means that this component contains a routerview itself
            {
                path: '/about/team',
                component: AboutTeam
            },
            {
                path: '/about/services',
                component: AboutServices
            },
            ]
        },
        {
            path: '/books',
            component: BookIndex
        },
        {
            path:'/books/:bookId', // ':' is for signaling that it is a variable
            component:BookDetails
        },
        {
            path:'/books/edit/:bookId?', // ? is for optional last parameter-bookId
            component: BookEdit
        },
        {
            path: '/:catchAll(.*)',
            component: HomePage
        }
    ]
}
export const router = createRouter(options)

