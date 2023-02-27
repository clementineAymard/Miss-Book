import LongTxt from '../cmps/LongTxt.js'
import { bookService } from '../services/book.service.js'
import AddReview from '../cmps/AddReview.js'
import ReviewList from '../cmps/ReviewList.js'

export default {
    template: `
        <RouterLink to="/books">Back to books</RouterLink> 
    <section class="book-details flex column" v-if="book">
        <div class="details-container flex" >
            <img :src="book.thumbnail" >
            <div class="details flex column">
                <h1 class="title"><span>Title: </span>{{book.title}}</h1>
                <h1><span>Subtitle: </span>{{book.subtitle}}</h1>
                <h2><span>Authors: </span>{{author}}</h2>
                <h1><span>Published in: </span>{{bookAge}}</h1>
                <h1><span>Reading Level: </span>{{level}}</h1>
                <h2><span>Categories: </span>{{categories}}</h2>
                <h1><span>Language: </span>{{book.language}}</h1>
                <h1 class="price"><span>Price: </span><span class="price-amount" v-bind:class="priceClass">{{formattedPrice}}</span></h1>
                <h1 v-if="book.listPrice.isOnSale===true" class="on-sale"> On Sale ! </h1>
                <h1><span>Description: </span><LongTxt :txt="book.description" :length="30"/></h1>
            </div>
        </div>
        <AddReview :book="this.book"/>
        <ReviewList :reviews="this.book.reviews" @remove="removeReview"/>
        <!-- <h1><span>Description: </span>{{book.description}}</h1> -->
    </section>
    `,
    data() {
        return {
            book: null,
        }
    },
    methods: {
        closeDetails() {
            this.$emit('hide-details')
        },
        removeReview(reviewId) {
            var reviewIdx = this.book.reviews.findIndex(review => review.id === reviewId)
            this.book.reviews.splice(reviewIdx, 1)
            bookService.save(this.book)
        }
    },
    computed: {
        level() {
            const pageCount = this.book.pageCount
            if (pageCount < 100) return 'Light Reading'
            if (pageCount > 200) return 'Decent Reading'
            if (pageCount > 500) return 'Serious Reading'
            else return pageCount + ' pages'
        },
        bookAge() {
            const yrs = this.book.publishedDate
            const today = new Date().getFullYear()
            if (Math.round(today - yrs) > 10) return `${yrs}, Vintage`
            if (today - yrs < 1) return `${yrs}, New`
            else return yrs
        },
        formattedPrice() {
            const { amount, currencyCode } = this.book.listPrice
            return new Intl.NumberFormat('en', { style: 'currency', currency: currencyCode }).format(amount)
        },
        priceClass() {
            return (this.book.listPrice.amount > 150) ? 'red' : (this.book.listPrice.amount < 20) ? 'green' : ''
        },
        author() {
            return this.book.authors.join(', ')
        },
        categories() {
            return this.book.categories.join(', ')
        },
    },
    components: {
        LongTxt,
        AddReview,
        ReviewList,
    },
    created() {
        const { bookId } = this.$route.params
        bookService.get(bookId)
            .then(book => this.book = book)
    },
    // etc.
}