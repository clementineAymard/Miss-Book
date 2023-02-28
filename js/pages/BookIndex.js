import { bookService } from '../services/book.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'
import { eventBusService } from '../services/event-bus.service.js'

export default {
    template: `
    <section class="book-index">
        <BookFilter @filter="setFilterBy"/>
        <div class="btn-add-wrapper" >
            <RouterLink class="btn-add" to="/books/edit">Add a book</RouterLink>
        </div>
        <BookList 
            :books="filteredBooks" 
            v-if="books" 
            @remove="removeBook" 
             /> 
    </section>
    `,
    data() {
        return {
            books: null,
            filterBy: { title: '', listPrice: { amount: 0 } },
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId) // function in service which calls storage's remove function
                .then(() => {
                    const idx = this.books.findIndex((book => book.id === bookId))
                    this.books.splice(idx, 1)
                    eventBusService.emit('show-msg', { txt: 'Book Removed', type: 'success' }) // emit = event launch
                })
                .catch(err => {
                    eventBusService.emit('show-msg', { txt: 'Book removal failed', type: 'error' })
                })
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i') // this defines that we don't differenciate uppercase and lowercase 
            // console.log(this.filterBy.listPrice.amount);
            var filteredBooks = this.books.filter(book => regex.test(book.title) && (book.listPrice.amount >= this.filterBy.listPrice.amount)) // test returns true or false in comparison of this.filterBy.title and book.title
            // console.log(filteredBooks)
            return filteredBooks
        }
    },
    created() { // RELATES TO DATA
        bookService.query()
            .then(books => {
                console.log('books', books)
                this.books = books })
                console.log('this.books', this.books)
    },
    mounted(){}, // RELATES TO DOM
    components: {
        BookFilter,
        BookList,
    }
    // etc.
}