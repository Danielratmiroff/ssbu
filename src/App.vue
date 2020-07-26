<template>
    <div id="app">
        <div class="flex mb-3 h-16 py-2 px-3 md:mx-4 md:my-2 
                 mb-3 justify-between items-center">
            <img @click="loadDashboard()" src="./assets/logo.png" class="max-h-full" />
            <div class="flex items-center navbar-item rounded-md border-2 border-primary-blue py-1 px-2 text-primary-blue font-bold
            md:text-lg
            ">About</div>
        </div>
        <div class="wrap p-3 bg-primary-white w-full pt-1">
            <!-- <nav>
                                Router
                                    <router-link to="/">Home</router-link>
                                    <router-link to="/attributes">Attributes</router-link>
                                    <router-link to="/about">About</router-link>
                                </nav>
                                <router-view></router-view>
                         -->
            <Start v-on:openDashboard="loadDashboard" v-if='this.start' />
            <About v-on:closeAbout="unloadAbout" v-if='this.aboutScreen' />
            <Dashboard class="inactive" :class="{ isActive : dashboardActive}" v-on:openDetails="loadDetails" v-on:openAbout='loadAbout' />
            <Attributes v-on:closeDetails="unloadDetails" v-if='this.detailsScreen' :char='this.char' />
        </div>
    </div>
</template>

<script>
import Start from './components/Start.vue'
import Dashboard from './components/Dashboard.vue'
import Attributes from './components/Attributes.vue'
import About from './components/About.vue'

export default {
    name: 'App',
    components: {
        Dashboard,
        Attributes,
        Start,
        About
    },
    data() {
        return {
            detailsScreen: false,
            aboutScreen: false,
            dashboardActive: false,
            start: true,
            char: {}
        }
    },

    methods: {
        loadDetails(elm) {
            this.detailsScreen = true;
            this.dashboardActive = false;
            // Pass char values to children
            this.char = elm;
        },

        unloadDetails() {
            this.detailsScreen = false;
            this.dashboardActive = true;
        },

        loadAbout() {
            this.aboutScreen = true;
            this.dashboardActive = false;
        },

        unloadAbout() {
            this.aboutScreen = false;
            this.dashboardActive = true;
        },

        loadDashboard() {
            this.start = false;
            this.dashboardActive = true;
        }
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito', cursive;
    font-size: 16px;
    max-width:1260px;
    margin: 0 auto
}

.inactive {
    display: none;
}

.isActive {
    display: block;
}
</style>
