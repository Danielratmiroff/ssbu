<template>
    <div class="searchBox w-full h-8 rounded-md border border-primary-grey flex justify-between 
            sm:ml-4 lg:w-1/3
            ">
        <input type="search" placeholder="Search your character" v-model="charInput"
        class="pl-3 focus:outline-none text-sm w-full mr-3">

        <div @click="search(charInput)" class="bg-primary-grey h-full flex justify-center w-12">
            <img src="@/assets/magnifier.png" class="w-6 p-1 object-contain"/>
        </div>        
        
    </div>
</template>

<script>

export default {
    name: 'Searchbar',

    props: {
        charList : null
    },

    data() {
        return {
            charInput : ''
        }
    },

    methods: {
        search(value) {
            const list = this.charList;
            const filterList = list.filter(obj => {
                let name = obj.name.toLowerCase();
                if (name === value || name.includes(value)) {
                    return name;
                }
            })
            console.log(filterList);
        }
    }
}
</script>
 