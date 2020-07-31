<template>
    <div>
        <p class="text-primary-dark font-bold mt-3 mb-1 sm:ml-4" style="font-size:1.45rem">
            Character's Stats
        </p>
        <p class="text-primary-dark mb-4 sm:ml-4 leading-tight">
            Discover more about your favorite characters
        </p>
        <Searchbar v-on:filterBySearch="searchChar" />
        <Characters v-on:openDetails="openAttributes" :charList='this.showList' />
    
    </div>
</template>

<script>
import Searchbar from './Searchbar.vue'
import Characters from './Characters.vue'
import { mapState } from 'vuex';

export default {
    name: 'Dashboard',

    components: {
        Searchbar,
        Characters
    },

    data() {
        return {
            showList: Array
        };
    },
    
    created() {
        this.$store.dispatch('loadChars')
        .then(() => {
            this.setCharList();
        });
    },

    computed: {
        ...mapState(['charsAll'])
    },

    methods: {
        searchChar(elm) {
            this.showList = elm;
        },

        setCharList() {
            this.showList = this.charsAll;
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
 