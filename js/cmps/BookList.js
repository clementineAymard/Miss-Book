import BookPreview from './BookPreview.js'

export default {
    props: ['books'],
    template: `
    <section class="book-list">
        <ul>
            <li v-for="book in books" :key="book.id" class="flex column space-between">
                <BookPreview :book="book"/>
                <div class="btns flex space-evenly">
                    <RouterLink :to="'/books/'+book.id">Details</RouterLink>
                    <RouterLink :to="'/books/edit/'+book.id">Edit</RouterLink>
                    <button @click="onRemove(book.id)">Delete</button>
                </div>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        onRemove(bookId) {
            this.$emit('remove', bookId)
        },
    },
    computed: {},
    components: {
        BookPreview,
    }
}