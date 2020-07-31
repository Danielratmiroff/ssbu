<template>
    <div 
    v-on:keyup.enter="search(input)" 
    class="searchBox w-full h-8 rounded-md border border-primary-grey flex justify-between 
            sm:ml-4 lg:w-1/3
            ">
        <input type="search" placeholder="Search your character" v-model="input"
        class="pl-3 focus:outline-none text-sm w-full mr-3">

        <div @click="search(input)" class="bg-primary-grey h-full flex justify-center w-12">
            <img src="@/assets/magnifier.png" class="w-6 p-1 object-contain"/>
        </div>        
        
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Searchbar',

    computed: {
        ...mapState(['charsAll'])  
    },

    data() {
        return {
            input : ''
        }
    },

    methods: {
        search(value) {
            const string = value.toLowerCase();
            const list = this.charsAll;

            const filterList = list.filter(obj => {
                const name = obj.DisplayName.toLowerCase();
                return name.includes(string) ? name : null;
            })
          
            this.$emit('filterBySearch', filterList)
        },
    }
}
</script>
 