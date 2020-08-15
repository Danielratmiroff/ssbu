<template>
    <div 
    v-on:keyup.enter="search(input)" 
    class="searchBox h-8 rounded-md border border-primary-grey flex justify-between 
            sm:mx-4 lg:w-1/3 lg:my-5
            "
            style="background-color:white;">
        <input type="search" placeholder="Search your character" v-model="input"
        class="pl-3 focus:outline-none text-sm w-full mr-3
            sm:mr-6 md:mr-8">

        <div @click="search(input)" class="bg-primary-grey h-full flex justify-center w-12
            sm:-ml-4">
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
    watch: {
        input: {
            handler (elm) {
                this.search(elm)
            }
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
 