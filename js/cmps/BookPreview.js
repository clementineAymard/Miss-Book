export default {
    props: ['book'],
    template: `
    <article class="book-preview">
        <img src="http://coding-academy.org/books-photos/20.jpg" alt="book-thumbnail">
        <h2><span>Title:</span> {{book.title}}</h2>
        <h2>{{book.listPrice.amount}} <span>{{book.listPrice.currencyCode}}</span> </h2>
    </article>
    `,
    data() {
        return {
        }
    },
    methods: {},
    computed: {
        url(){
            return book["thumnail"]
        }
    },
    // created(){},
    // etc.
}