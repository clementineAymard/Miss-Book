import LongTxt from './LongTxt.js'

export default {
    props: ['book'],
    template: `
    <section class="book-details flex column">
        <button @click="closeDetails">Close</button> 
        <h1 class="title"><span>Title: </span>{{book.title}}</h1>
        <h1><span>Subtitle: </span>{{book.subtitle}}</h1>
        <h2><span>Authors: </span></h2>
        <ul class="authors">
            <li v-for="author in book.authors" :key="book.id" class="clean-list">
                {{author}}, 
            </li>
        </ul>
        <h1><span>Published in: </span>{{bookAge}}</h1>
        <h1><span>Description: </span>{{book.description}}</h1>
        <h1><span>Level: </span>{{reading}}</h1>
        <h2><span>Categories: </span></h2>
        <ul class="categories">
            <li v-for="category in book.categories" :key="book.id" class="clean-list">
                {{category}}, 
            </li>
        </ul>
        <h1><span>Language: </span>{{book.language}}</h1>
        <h1 class="price"><span>Price: </span><span class="price-amount" v-bind:class="priceClass">{{book.listPrice.amount}}</span> {{book.listPrice.currencyCode}}</h1>
        <h1 v-if="book.listPrice.isOnSale===true" class="on-sale">---> On Sale ! <---</h1>
        <LongTxt :txt="" :length=""/>
    </section>
    `,
    // data(){return {

    // }},
    methods: {
        closeDetails() {
            this.$emit('hide-details')
        }
    },
    computed: {
        reading() {
            const pageCount = this.book.pageCount
            if (pageCount < 100) return 'Light Reading'
            if (pageCount > 200) return 'Decent Reading'
            if (pageCount > 500) return 'Serious Reading'
        },
        bookAge() {
            const yrs = this.book.publishedDate
            const today = new Date()
            if (Math.round(today.getYear() + 1900 - yrs) > 10) return 'Vintage'
            if (today.getYear() + 1900 - yrs < 1) return 'New'
        },
        priceClass() {
            return (this.book.listPrice.amount > 150) ? 'red' : (this.book.listPrice.amount < 20) ? 'green' : ''
        }
    },
    components: {
        LongTxt,
    }
    // created(){},
    // etc.
}