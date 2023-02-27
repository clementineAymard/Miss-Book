export default {
    template: `
    <header class="app-header flex align-center space-between">
        <h1 class="logo" @click="setRoute('HomePage')" href="#">Miss Book</h1>
        <nav class="flex">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/books">Books</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    `,
    data() {
        return {
            selected: 'HomePage',
        }
    },
    methods: {},
    computed: {},
}