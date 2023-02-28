export default {
    template: `
    <section class="about-page">
        <h2>About Us...</h2>
        <p>This book shop was created in the frame of practising Vue framework and CRUD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <hr/>
        <RouterLink to="/about/team" class="about-link">Our Team</RouterLink> | 
        <RouterLink to="/about/goal" class="about-link">Our Goal</RouterLink>
        <RouterView/>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
    // created(){},
    // etc.
}

export const AboutTeam = {
    template: `
    <section>
        <h1>Our Team is amazing !</h1>
        <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
    </section>
    `
}
export const AboutGoal = {
    template: `
    <section>
        <h1>Our Goal is to give you our best !</h1>
        <p>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla</p>
    </section>
    `
}