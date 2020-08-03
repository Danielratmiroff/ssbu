<template>
    <div class="mt-6 w-full">
        <p class="font-bold text-lg text-primary-blue">
            Counters Picks
        </p>

        <p class="text-primary-dark mt-6 leading-tight">
            <b>Weak</b> against:
        </p>

        <!-- Weak Against -->
        <div v-for="item in this.weakAgainst(id)" :key="item.OwnerId" class="h-24 w-full flex items-center                             " @click="openDetails(item)
            ">
            <div class="relative h-full w-full flex items-end">                
                
                <img :src="getImg(item.Name)" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-6 z-1" />
                
                <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between shadow-md" 
                :class="item.Background" 
                style="height:4.5rem;">
                
                    <p class="font-bold text-primary-white leading-tight" style='font-size:1.25rem;'>
                        {{item.DisplayName}}
                    </p>
                
                    <img src="@/assets/icon.png" class="h-full w-auto -mr-2" />

                </div>
            </div>
        </div>
     
        <p class="text-primary-dark mt-12 leading-tight">
            <b>Strong</b> against:
        </p>

        <!-- Strong Against -->
        <div v-for="item in this.strongAgainst(id)" :key="item.OwnerId" class="h-24 w-full flex items-center 
                            " @click="openDetails(item)
            ">
            <div class="relative h-full w-full flex items-end">                
                
                <img :src="getImg(item.Name)" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-6 z-1" />
                
                <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between shadow-md" 
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Counters',

    props: {
        id: Number
    },

    computed: {
        ...mapGetters(['getCounters'])
    },

    data() {
        return {}
    },

    methods: {
        weakAgainst(id) {
            return this.getCounters(id, 'isWeak');
        },
        strongAgainst(id) {
            return this.getCounters(id, 'isStrong');
        },
         getImg(name) {
            const cleanName = name.toLowerCase()
            return require(`@/assets/chars/${cleanName}.png`)
        }
    }
}
</script>

<style>

</style>
