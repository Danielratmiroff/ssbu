<template>
  <div class="px-3 py-1 md:px-3">
    <p
      class="text-primary-dark font-bold mt-3 mb-1 sm:ml-4"
      style="font-size:1.45rem"
    >
      Character's Stats
    </p>
    <p class="text-primary-dark mb-4 sm:ml-4 leading-tight">
      Discover more about your favorite characters
    </p>

    <Searchbar @filterBySearch="searchChar" />

    <div class="relative w-full h-full">
      <progress-bar
        v-if="progressBarShow"
        size="medium"
        bg-color="#F0F4FF"
        bar-color="linear-gradient(90deg, rgba(0,194,255,1) 0%, rgba(127,109,242,1) 78%)"
        :val="progressBar"
        :max="100"
        class="progressBar"
      />
    </div>
    <keep-alive>
      <Characters :charList="this.showList" />
    </keep-alive>
  </div>
</template>

<script>
  import Searchbar from "./Searchbar.vue";
  import Characters from "./Characters.vue";
  import { mapState } from "vuex";

  export default {
    name: "Dashboard",

    components: {
      Searchbar,
      Characters,
    },

    data() {
      return {
        showList: Array,
        progressBar: 0,
        progressBarShow: false,
      };
    },

    async created() {
      if (this.charsAll.length < 80) {
        await this.loadFirstTime();
      }
      this.setCharList();
    },

    computed: mapState(["charsAll"]),

    methods: {
      searchChar(elm) {
        this.showList = elm;
      },

      setCharList() {
        this.showList = this.charsAll;
      },

      async loadFirstTime() {
        this.progressBarShow = true;
        setTimeout(() => {
          this.progressBar = 75;
        }, 75);

        await this.$store.dispatch("loadChars");

        this.progressBar = 100;

        setTimeout(() => {
          this.setCharList();
          this.progressBarShow = false;
        }, 200);
      },
    },
  };
</script>

<style>
  .progressBar {
    width: calc(100% - 2rem);
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 3rem auto;
  }
</style>
