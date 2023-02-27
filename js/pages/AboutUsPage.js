export default {
    // props:[], 
    template: `
    <section class="about-page">
        <h2>About Us...</h2>
        <p>This book shop was created in the frame of practising Vue framework and CRUD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <RouterView to="/about/team">Our Team</RouterView>
        <RouterView t0="/about/services">Our Services</RouterView>
    </section>
    `,
    data(){return {

    }},
    methods:{},
    computed:{},
    // created(){},
    // etc.
}

export const AboutTeam = {
    template:`
        <h1>Our Team is amazing !</h1>
        <p>Bloo Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla </p>
    `
}
export const AboutServices = {
    template:`
        <h1>Our Services are the best !</h1>
        <p>Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo Bloo </p>
    `
}