export default {
    // props:[], 
    template: `
        <section class="book-filter flex align-center">
            <input 
                v-model="filterBy.title"
                @input="filter" 
                placeholder="Search Title"
                type="text"/>
            <input 
                v-model="filterBy.listPrice.amount"
                @input="filter" 
                min="10"
                max="200"
                type="range"/>
            <label>{{this.filterBy.listPrice.amount}}</label>
                
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', listPrice: { amount: 0 } }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    },
    computed: {},
    // created(){},
    // etc.
}