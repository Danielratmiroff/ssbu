<template>
    <div class="px-3 py-1 md:px-3">
        <p class="text-primary-dark font-bold mt-3 mb-1 sm:ml-4" style="font-size:1.45rem">
            Character's Stats
        </p>
        <p class="text-primary-dark mb-4 sm:ml-4 leading-tight">
            Discover more about your favorite characters
        </p>

        <Searchbar @filterBySearch="searchChar" />
        <keep-alive>
            <Characters :charList='this.showList' />
        </keep-alive>
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
    
    async created() {
        await this.$store.dispatch('loadChars')
        this.setCharList();
    },

    computed: mapState(['charsAll']),

    methods: {
        searchChar(elm) {
            this.showList = elm;
        },

        setCharList() {
            this.showList = this.charsAll;
        },

    }
}
</script>
 