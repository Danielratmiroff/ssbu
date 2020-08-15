<template>
    <div>
        <div class="flex w-full flex-col 
                sm:flex-row sm:flex-wrap sm:items-center sm:justify-center
                ">
            <div v-for="item in this.charList" :key="item.OwnerId" class="h-24 w-full flex items-center my-2 md:my-3
                                sm:w-2/4 lg:w-2/6" @click="openDetails(item)
                ">
                <div class="relative h-full w-full sm:mx-3 md:mx-4 flex items-end" style="cursor:pointer;">
                    
                    <img :src="getImg(item.Name)" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-6 z-1" />
                    
                    <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between shadow-md
                     hover:cursor-pointer
                    " 
                    :class="item.Background" 
                    style="height:4.5rem;">
                    
                        <p class="font-bold text-primary-white leading-tight" style='font-size:1.25rem;'>
                            {{item.DisplayName}}
                        </p>
                    
                        <img src="@/assets/icon.png" class="h-full w-auto -mr-2" />

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Characters',

    props: {
        charList: null
    },
    
    methods: {
        
        openDetails(item) {
            this.$emit('openDetails', item);
        },

        openAbout() {
            this.$emit('openAbout');
        },

        // Find a way to share this code with attributes
        // Right now its repeating itself
        // Need to define a better data structure for chars in order to be able to fetch it easily
        getImg(name) {
            const cleanName = name.toLowerCase()
            return require(`@/assets/chars/${cleanName}.png`)
        }
    }
}

</script>
 