<template>
    <div id="app">
        <div class="flex mb-3 h-16 py-2 px-3
             mb-3 justify-between shadow-md items-center">
            <img src="./assets/logo.png" class="max-h-full" />
            <div class="flex items-center navbar-item rounded-md border-2 border-primary-blue py-1 px-2 text-primary-blue font-bold">About</div>
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
            <Dashboard v-on:openDetails="loadDetails" v-on:openAbout='loadAbout' />
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
            start: true,
            char: {
                id: '',
                name: ''
            }
        }
    },

    methods: {
        loadDetails(item) {
            this.detailsScreen = true;
            this.char.id = item.id;
            this.char.name = item.name;
        },

        unloadDetails() {
            this.detailsScreen = false
        },

        loadAbout() {
            this.aboutScreen = true
        },

        unloadAbout() {
            this.aboutScreen = false
        },

        loadDashboard() {
            this.start = false
        }

    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
}
</style>
