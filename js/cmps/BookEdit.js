import { bookService } from "../services/book.service.js"

export default {
    // props:[], 
    template: `
    <section class="book-edit">
        <h2>Add a book</h2>
        <form @submit.prevent="save">
            <input type="text" v-model="book.title" placeholder="Title">
            <input type="number" v-model.number="book.listPrice.amount">
            <button>Save</button>
        </form>
        <button @click="closeEdit">Cancel</button>
    </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    this.book = bookService.getEmptyBook()
                    this.$emit('book-saved', savedBook)
                })
        },
        closeEdit() {
            this.$emit('hide-edit')
        }
    },
    computed: {},
    // created(){},
    // etc.
}