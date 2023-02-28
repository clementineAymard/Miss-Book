import { bookService } from "../services/book.service.js"

export default {
    props: ['book'],
    template: `
    <section class="add-review">
        <h1>Leave a review</h1>
        <form class="review-form flex column" @submit.prevent="addReview(book, review)">
            <label>
                <input type="text" v-model="review.userName" placeholder="Your Name">
            </label>
            <label for="rating">Rate this book : 
            <select class="rating" id="rating" v-model="review.rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select></label>
            <label for="date">When did you read this book ?</label> 
            <input type="date" id="date" v-model="review.date">
            <button>Send</button>
        </form>
    </section>
    `,
    data() {
        return {
            review: {
                id: '',
                userName: '',
                rating: '',
                date: ''
            },
            // book: null,
        }
    },
    methods: {
        addReview(book, review) {
            this.$emit('addedReview', { book, review })
        }
    },
    computed: {},
}