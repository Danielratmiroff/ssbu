<template>
    <div>
        <p class="text-primary-dark font-bold mt-3 mb-1 sm:ml-4" style="font-size:1.45rem">
            Character's Stats
        </p>
        <p class="text-primary-dark mb-4 sm:ml-4 leading-tight">
            Discover more about your favorite characters
        </p>
        <Searchbar v-on:filterBySearch="searchChar" :charList="this.allChars" />
        <Characters v-on:openDetails="openAttributes" :filterByChar='this.filter' />
    
    </div>
</template>

<script>
import Searchbar from './Searchbar.vue'
import Characters from './Characters.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Dashboard',

    components: {
        Searchbar,
        Characters
    },

    data() {
        return {
            allChars: '',
            filter: Object
        };
    },

    computed: {
        ...mapGetters(['searchChar'])
    },

    created() {
      this.$store.dispatch('loadChars');
    },


    methods: {
        searchChar(elm) {
            this.filter = elm;
        },

        setCharList(elm) {
            this.allChars = elm;
        },

        openAttributes(item) {
            this.$emit('openDetails', item);
        },

        openAbout() {
            this.$emit('openAbout');
        },
    }
}
</script>
 