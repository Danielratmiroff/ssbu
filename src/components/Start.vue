<template>
  <div>
    <div class="full-overlay bg-contain bg-secondary-lightblue overflow-hidden">
      <div class="relative h-full">
        <div class="flex m-auto justify-center pt-6 w-full m-auto items-center">
          <img src="../assets/logo.svg" class="w-16" />
          <div
            class="font-bold px-4 text-center leading-tight text-primary-white"
            style="font-size: 2.3rem"
          >
            Super Smash Pros
          </div>
        </div>
        <img src="../assets/kirby-start.png" class="start-images kirby" />
        <img src="../assets/logo-start.svg" class="start-images logo" />

        <router-link
          :to="{ name: 'Dashboard' }"
          class="absolute bottom-0 mb-16 w-full z-50"
        >
          <p
            class="text-center w-2/4 m-auto border-primary-blue bg-primary-blue text-primary-white font-bold rounded-lg p-3 border-2 hover:bg-primary-dark cursor-pointer hover:border-primary-dark transition ease-in-out duration-300"
          >
            Characters
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",

  methods: {
    openDashboard() {
      this.$emit("loadDashboard");
    },
  },
};
</script>

<style>
.full-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.start-images {
  margin: auto;
  position: absolute;
  height: auto;
  bottom: 0;
  right: 0;
  max-width: unset;
}

.kirby {
  top: 2%;
  width: 100%;
  z-index: -1;
}

.logo {
  left: -10%;
  top: 5%;
  width: 115%;
  mix-blend-mode: screen;
  z-index: -2;
}

@media (min-width: 640px) {
  .start-images {
    max-width: 500px;
    left: 0;
    top: 0;
  }
  .logo {
    max-width: 800px;
  }
}
</style>
