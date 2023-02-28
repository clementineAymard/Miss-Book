import HomePage from './pages/HomePage.js'
import AboutUsPage, {AboutTeam, AboutGoal} from './pages/AboutUsPage.js'
import BookIndex from './pages/BookIndex.js'
import BookDetails from './pages/BookDetails.js'
import BookEdit from './pages/BookEdit.js'
import BookAdd from './pages/BookAdd.js'

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
                path: 'team',
                component: AboutTeam
            },
            {
                path: 'goal',
                component: AboutGoal
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
            path:'/addBook', // ? is for optional last parameter-bookId
            component: BookAdd
        },
        {
            path: '/:catchAll(.*)',
            component: HomePage
        }
    ]
}
export const router = createRouter(options)

