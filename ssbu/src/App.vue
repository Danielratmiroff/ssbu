<template>
    <div id="app">
        <div class="wrap p-3 bg-grey-100">
        <div class="flex h-12 mb-3 justify-between items-center">
            <img src="./assets/logo.png" class="w-1/5 bg-gray-500" />
            <div class="w-1/5 bg-gray-500 h-12 flex items-center navbar-item">About</div>
        </div>
    
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
                id: null,
                name: null,
                img: null
            }
        }
    },

    methods: {
        loadDetails(item) {
            this.detailsScreen = true
            this.char.id = item.id
            this.char.name = item.name
            this.char.img = item.img
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
