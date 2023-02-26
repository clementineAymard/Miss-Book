// import CMP from './'
export default {
    props: ['txt', 'length'],
    template: `
    <p>{{txtCut}}</p>
    <button v-if="txt" class="read-more" @click="toggle">{{compBtn}}</button>
    `,
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    },
    computed: {
        txtCut() {
            const lengthComp = (this.length) ? this.length : 100
            return this.txt.slice(0, lengthComp)
        },
        compBtn() {
            return this.isOpen ? '...read less' : 'read more...'
        }
    },
    // created(){},
    // etc.
    // components:{},
}