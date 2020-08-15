<template>
    <div id="app" class="bg-primary-white">
        <div class="flex bg-primary-white mb-3 h-16 py-2 px-3 md:mx-4 md:my-2 
                 mb-3 justify-between items-center">
            <img @click="loadDashboard()" src="./assets/logo.png" class="max-h-full" />
            <div class="flex items-center navbar-item rounded-md border-2 border-primary-blue py-1 px-2 text-primary-blue font-bold
            md:text-lg
            ">About</div>
        </div>
        <div class="wrap p-3 bg-primary-white w-full pt-1
        md:p-0
        ">
            <!-- <nav>
                Router
                    <router-link to="/">Home</router-link>
                    <router-link to="/attributes">Attributes</router-link>
                    <router-link to="/about">About</router-link>
                </nav>
                <router-view></router-view>
            -->
            <Start 
                @openDashboard="loadDashboard" 
                v-if='this.start'
            />
            <About 
                @closeAbout="unloadAbout" 
                v-if='this.aboutScreen'
                 />
            <Dashboard class="inactive" 
                :class="{ isActive : dashboardActive}" 
                @openDetails="loadDetails" 
                @openAbout='loadAbout'
                 />
            <Attributes 
                @closeDetails="unloadDetails" 
                @PassCounterDetails="loadDetails" 
                v-if='this.detailsScreen' 
                :char='this.char' 
                />
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
            smooth: false,
            char: Object,
        }
    },

    methods: {
        
        loadDashboard() {
            this.start = false;
            this.detailsScreen = false;
            this.dashboardActive = true;
            this.smooth = false;
        },

        loadDetails(elm) {
            //We want the Attributes screen to smoothly scroll
            if (this.smooth) {
                window.scrollTo({ 
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            })} 
            else {
                window.scrollTo(0, 0)
            }

            this.detailsScreen = true;  
            this.dashboardActive = false;
            this.smooth = true;
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

    }
}
</script>

<style lang="scss">

html {
    @apply bg-primary-white;
}

.smoothScroll {
    scroll-behavior: smooth;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito', 'Helvetica', sans-serif;
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
