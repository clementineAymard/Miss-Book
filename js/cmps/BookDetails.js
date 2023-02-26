export default {
    props:['book'], 
    template: `
    <section class="book-details">
        <h1>details</h1>
        <button @click="closeDetails">Close</button> 
    </section>
    `,
    // data(){return {

    // }},
    methods:{
        closeDetails(){
            this.$emit('hide-details')
        }
    },
    computed:{},
    // created(){},
    // etc.
}