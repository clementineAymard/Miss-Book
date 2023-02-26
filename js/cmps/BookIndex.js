import { bookService } from '../services/book.service.js'

import BookFilter from './BookFilter.js'
import BookList from './BookList.js'

import BookDetails from './BookDetails.js'
import BookEdit from './BookEdit.js'

export default {
    // props:[], 
    template: `
    <section class="book-index">
        <BookFilter @filter="setFilterBy"/>
        <div class="btn-wrapper" >
            <button class="btn-add" @click="isEditing = true">Add a book</button>
        </div>
        <BookList 
            :books="filteredBooks" 
            v-if="books" 
            @remove="removeBook" 
            @show-details="showBookDetails" /> <!-- v-if="books" this is here to prevent any computing before books is loaded from the service! -->
        
        <BookEdit 
            v-if="isEditing"
            @book-saved="onSaveBook"
            @hide-edit="isEditing=false"/>
        <BookDetails 
            v-if="selectedBook" 
            :book="selectedBook"
            @hide-details="selectedBook=null"
            />  <!-- appears only when selectedBook is not falsy -->
    </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: { title: '', listPrice: { amount: 10 } },
            isEditing: false,
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId) // function in service which call storage's remove
                .then(() => {
                    const idx = this.books.findIndex((book => book.id === bookId))
                    this.books.splice(idx, 1)
                    // bookService.query()               // NOT EFFICIENT BECAUSE ITS ANOTHER REQUEST FROM SERVER!
                    // .then(books => this.books = books)

                })
        },
        showBookDetails(bookId) {
            this.selectedBook = this.books.find(book => book.id === bookId)
        },
        onSaveBook(newBook) {
            this.isEditing = false
            this.books.push(newBook)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i') // this defines that we don't differenciate uppercase and lowercase 
            console.log(this.filterBy.listPrice.amount);
            var filteredBooks = this.books.filter(book => regex.test(book.title) && (book.listPrice.amount >= this.filterBy.listPrice.amount)) // test returns true or false in comparison of this.filterBy.title and book.title
            return filteredBooks
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    components: {
        BookFilter,
        BookList,
        BookDetails,
        BookEdit,
    }
    // etc.
}