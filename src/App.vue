<template>
    <div id="app" class="bg-primary-white">
        <div class="flex bg-primary-white mb-3 h-16 py-2 px-3 md:mx-4 md:my-2 
                 mb-3 justify-between items-center">
            <router-link :to="{ name : 'Dashboard' }" class="h-16 py-2 md:my-2"> 
                <img src="./assets/logo.png" class="max-h-full" /> 
            </router-link>
            <div class="flex items-center navbar-item rounded-md border-2 border-primary-blue py-1 px-2 text-primary-blue font-bold
               md:text-lg
              ">
                About
            </div>
        </div>

        <router-view />

    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style lang="scss">

html {
    @apply bg-primary-white;
}

p {
    text-rendering: optimizeLegibility;
}

.smoothScroll {
    scroll-behavior: smooth;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito', 'Helvetica', 'Arial', sans-serif;
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
