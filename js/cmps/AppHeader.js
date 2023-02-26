export default {
    template: `
    <header class="app-header flex align-center space-between">
        <h1 class="logo" @click="setRoute('HomePage')" href="#">Miss Book</h1>
        <nav class="flex">
            <a class="classHome()" @click="setRoute('HomePage')" href="#">Home</a>
            <a class="classBooks()" @click="setRoute('BookIndex')" href="#">Books</a>
            <a class="classAbout()" @click="setRoute('AboutUsPage')" href="#">About</a>
        </nav>
    </header>
    `,
    data() {
        return {
            selected: 'HomePage',
        }
    },
    methods: {
        setRoute(route) {
            this.selected = route + ''
            console.log('emit:', route)
            this.$emit('setRoute', route)
        }
    },
    computed: {
        classHome() { return this.selected === 'HomePage' ? 'selected' : '' },
        classBooks() { return this.selected === 'BookIndex' ? 'selected' : '' },
        classAbout() { return this.selected === 'AboutUsPage' ? 'selected' : '' }
    },
}