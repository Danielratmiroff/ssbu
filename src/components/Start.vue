<template>
    <div class="full-overlay bg-cover" 
    style="background-position:bottom;"
    :style="{'background-image': 'url(' + this.background + ')'}">
        <div class="relative h-full">
            <img src="@/assets/logo.png" class="pt-6 w-16 m-auto">
            <div class="font-bold px-4 text-center leading-tight text-primary-dark" style="font-size:2.3rem;">
                Super Smash Pros
            </div>
            <div class="absolute bottom-0 mb-16 w-full">
                <p @click="openDashboard()" class="text-center w-2/4 m-auto border-primary-blue bg-primary-blue text-primary-white font-bold rounded-lg p-3 border-2 hover:bg-primary-dark cursor-pointer hover:border-primary-dark transition ease-in-out duration-300 ">
                    CHARACTERS
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Start',

    data() {
        return {
            background: require(`@/assets/wario.jpg`)
        };
    },

    methods: {
        openDashboard() {
            this.$emit('openDashboard')
        }
    }
}
</script>

<style>
.full-overlay {
    background-position: center;
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
}
</style>
