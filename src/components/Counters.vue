<template>
    <div class="w-full my-5">
        
        <p class="text-primary-dark leading-tight">
          <slot /> is <b>{{this.categoryText}}</b> against:
        </p>

        <div v-for="item in this.Against(id)" :key="item.OwnerId" class="h-24 w-full flex items-center">
             <router-link 
                    :to="{ name : 'Attributes', params : { id : item.OwnerId } }" 
                     class="relative h-full w-full flex items-end">                
                
                <img :src="getImg(item.Name)" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-6 z-1" />
                
                <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between shadow-md" 
                    :class="getBackground()"
                    style="height:4.5rem;">
                
                    <p class="font-bold text-primary-white leading-tight" style='font-size:1.25rem;'>
                        {{item.DisplayName}}
                    </p>
                
                    <img src="@/assets/icon.png" class="h-full w-auto -mr-2" />

                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Counters',

    props: {
        id: Number,
        category: String
    },

    data() {
        return {
            categoryText : this.category.replace(/is/i, '')
        }
    },

    computed: {
        ...mapGetters(['getCounters'])
    },

    methods: {
        openCounterDetails(item) {
            this.$emit('openCounterDetails', item);
        },

        Against(id) {
            return this.getCounters(id, this.category);
        },
        
        getImg(name) {
            const cleanName = name.toLowerCase()
            return require(`@/assets/chars/${cleanName}.png`);
        },

        getBackground() {
            return this.category === 'isWeak' ? 'bg-red-50' : 'bg-green-50';
        }
    }
}
</script>
