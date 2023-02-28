import { bookService } from "../services/book.service.js"
import { eventBusService } from '../services/event-bus.service.js'

export default {
    // props:[], 
    template: `
    <RouterLink to="/books">Back to books</RouterLink>
    <section class="book-edit flex column">
        <h2>{{(book.id)? 'Edit' : 'Add'}} a book</h2>
        <form @submit.prevent="save" class="form flex column">
            <input type="text" v-model="book.title" placeholder="Title">
            <!-- <input type="text" v-model="book.authors.join(',')" placeholder="Author"> -->
            <div class="new-price">
                <input type="number" v-model.number="book.listPrice.amount">
                <select v-model="book.listPrice.currencyCode">
                    <option>EUR</option>
                    <option>ILS</option>
                    <option>USD</option>
                </select>
            </div>
            <button class="btn-save">Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            eventBusService.emit('show-msg', { txt: ((this.book.id)? 'Edit' : 'Add')+'ed Book', type: 'success' })

            bookService.save(this.book)
                .then(savedBook => {
                    // console.log(savedBook)
                    this.$router.push('/books') // this is called imperative routing: because we don't have just a router link : we want to do routing but after some code
                })
        },
    },
    computed: {},
    mounted() {
        const { bookId } = this.$route.params
        if (bookId) {
            bookService.get(bookId)
                .then(book => this.book = book)
        }
    },
}