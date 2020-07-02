<template>
    <div id="app">
        <div class="wrap p-3 bg-primary-white">
            <div class="flex h-12 mb-3 justify-between items-center">
                <img src="./assets/logo.png" class="max-h-full" />
                <div class="flex items-center navbar-item">About</div>
            </div>
    
            <!-- <nav>
                    Router
                        <router-link to="/">Home</router-link>
                        <router-link to="/attributes">Attributes</router-link>
                        <router-link to="/about">About</router-link>
                    </nav>
                    <router-view></router-view>
             -->
    
            <About v-on:closeAbout="unloadAbout" v-if='this.aboutScreen' />
            <Dashboard v-on:openDetails="loadDetails" v-on:openAbout='loadAbout' />
            <Attributes v-on:closeDetails="unloadDetails" v-if='this.detailsScreen' :char='this.char' />
        </div>
    </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Attributes from './components/Attributes.vue'
import About from './components/About.vue'

export default {
    name: 'App',
    components: {
        Dashboard,
        Attributes,
        About
    },
    data() {
        return {
            detailsScreen: false,
            aboutScreen: false,
            char: {
                id : '',
                name : ''
            }
            }
    },

    methods: {
        loadDetails(item) {
            this.detailsScreen = true;
            console.log(item)
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
