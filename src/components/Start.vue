<template>
<div>
    <div class="full-overlay bg-contain bg-secondary-lightblue">
        <div class="relative h-full">
            <img src="@/assets/logo.png" class="pt-6 w-16 m-auto">
            <div class="font-bold px-4 text-center leading-tight text-primary-dark" style="font-size:2.3rem;">
                Super Smash Pros
            </div>
            <img src="@/assets/kirby-start.png" class="kirby">
            <img src="@/assets/logo-start.png" class="logo">
            <div class="absolute bottom-0 mb-16 w-full z-50">
                <p @click="openDashboard()" class="text-center w-2/4 m-auto border-primary-blue bg-primary-blue text-primary-white font-bold rounded-lg p-3 border-2 hover:bg-primary-dark cursor-pointer hover:border-primary-dark transition ease-in-out duration-300 ">
                    CHARACTERS
                </p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Start',

    data() {
        return {
            background: require(`@/assets/kirby-start.png`)
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
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
}

.kirby {
   position: absolute;
   left: 50%;
   top: 50%;
   width: 100%;
   height: auto;
   margin-top: -50%;
   margin-left: -50%;
   max-width: 500px;
   z-index: 10;
}

.logo {
   position: absolute;
   top: 50%;
   left: 50%;
    width: 100%;
   height: auto;
   margin-top: -50%;
   margin-left: -50%;
   max-width: 500px;
   z-index: -1;
}
</style>
