<template>
<div>
    <div class="full-overlay bg-contain bg-secondary-lightblue overflow-hidden">
        <div class="relative h-full">
            <img src="@/assets/logo.png" class="pt-6 w-16 m-auto">
            <div class="font-bold px-4 text-center leading-tight text-primary-white" style="font-size:2.3rem;">
                Super Smash Pros
            </div>
            <img src="@/assets/kirby-start.png" class="kirby" />
            <img src="@/assets/logo-start.png" class="logo" />
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
       left:-50%;
  right:0;
  top: 2%;
  bottom: 0;
  margin: auto;
  position: absolute;
   width: 200%;
   height: auto;
   z-index: -1;
   max-width: unset;
}


.logo {
       left:-30%;
  right:0;
  top:5%;
  bottom: 0;
  margin: auto;
  position: absolute;
   width: 175%;
   height: auto;
   max-width: unset;
     mix-blend-mode: screen;
   z-index: -2;
}


@media (min-width: 640px) {
    .kirby, .logo {
        max-width: 500px;
        left: 0;
        top: 0;
    }
    .logo {
        max-width: 800px;
    }
}
</style>
