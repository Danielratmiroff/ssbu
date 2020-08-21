<template>
    <div class="overlay">
        <div class="relative" :class="this.char.Background">
    
            <div class="px-4 py-2 sm:flex sm:flex-row-reverse sm:justify-evenly
                                sm:max-w-lg m-auto">

                <div class="flex relative justify-between items-center z-50">

                    <img src="@/assets/arrow.svg" class="w-6 absolute
                                    sm:hidden" 
                                    @click="closeOverlay()"
                                     />

                    <p class="w-full text-center py-3 font-bold text-primary-white char-title">
                        {{this.char.DisplayName}}
                    </p>

                </div>
                
                <img :src="getImg(this.char.Name)" class="my-2 mx-auto relative pb-6 z-10 w-3/5 sm:w-1/3 sm:mx-0" style="max-height:250px;object-fit:contain;" />
                
                <img src="@/assets/iconbig.png" class="w-full absolute mt-12 top-0 left-0" />
    
            </div>

            <div class="rounded-t-lg bg-primary-white py-6 px-5 relative -mt-4">
    
                <div class="sm:max-w-lg m-auto">

                    <div class="flex items-center justify-between">
    
                        <p class="font-bold text-lg text-primary-blue">
                            Base stats
                        </p>
    
                        <p class="text-md text-primary-white flex items-center inline-block rounded-md shadow-md px-3 py-1 text-center" 
                            :class="getTierBg(getTier(this.char.OwnerId))
                            ">

                            {{ getTier(this.char.OwnerId) }}

                            <span class="text-primary-white font-thin text-xs pl-2">
                                TIER
                            </span>

                        </p>
                    </div>

                    <ul v-for="(value, attr) in this.charAttr" :key="attr">
                
                        <li class="my-2 py-1 relative ">

                            <div class="mb-2 text-sm text-primary-dark flex items-center">
                                {{ attr }}
                                
                                <Clues :attr="attr" />
                            
                            </div>

                            <div class="w-full rounded-lg flex items-center">
                                <progress-bar size="medium" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValueStore(attr, value)" :max="100" style="width:100%;" />
                            </div>

                        </li>
                    </ul>
               
                    <p class="font-bold mt-8 text-lg text-primary-blue">
                        Counters Picks
                    </p>

                    <Counters 
                        :id="this.char.OwnerId" 
                        :category="'isWeak'" 
                        @openCounterDetails="AppOpenCounterDetails"> 

                        {{this.char.DisplayName}}

                    </Counters>

                    <div class="h-2" />

                    <Counters 
                        :id="this.char.OwnerId"
                        :category="'isStrong'" 
                        @openCounterDetails="AppOpenCounterDetails"> 

                        {{this.char.DisplayName}}

                    </Counters>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Counters from './Counters.vue';
import Clues from './Clues.vue';
import { mapGetters } from 'vuex';
import { listUniqueValue } from "@/components/mixins/listUniqueValue.js"

export default {
    name: 'Attributes',
    
    components: {
        Counters,
        Clues
    },

    props: {
        char: Object
    },

    computed: {
        ...mapGetters(['getTier', 'maxValue', 'getStatsFromStore'])
    },

    data() {
        return {
            charAttr: Array,
            notFoundInAPI : Boolean,
            attrFound: 0,
        }
    },

    watch: {
        char: {
            immediate: true, 
            handler (elm) {
                this.getAttr(elm.OwnerId);
            }
        }
    },

    created() {
        this.getAttr(this.char.OwnerId);
    },

    methods: {
        async getAttr(id) {
            this.attrFound = 0;
            const ultimate = await this.fetchAttr(id, 'ultimate')
            const isFound = ultimate && ultimate.length != 0

            const attr = isFound ? ultimate : await this.fetchAttr(id, 'smash4')

            const attrFilter = attr.filter(name => {
                return this.chosenAttr(name.Name)
            })

            // if API doesn't return enough attributes
            if (this.attrFound < 4) {
                this.charAttr = this.getStatsFromStore(id);
                return
            }
     
            const attrUnique = listUniqueValue(attrFilter, 'Name');
            
            let reqKeys = {};
            attrUnique.forEach(item => {
                reqKeys[item.Name] = item.Values[0].Value
            });
            
            this.charAttr = reqKeys;
        },

        async fetchAttr(id, game) {
            try {
                const url = "https://api.kuroganehammer.com/api/characters/" + id + "/characterattributes?game=" + game + "";
                const urlGet = await axios.get(url);
                return urlGet.data
            } catch (err) {
                console.log(err, 'Error with Attributes')
            }
        },

        chosenAttr(elm) {
            switch (elm) {
                case 'AirSpeed':
                case 'FallSpeed':
                case 'FullHop':
                case 'Weight':
                case 'WalkSpeed':
                case 'RunSpeed':
                case 'Gravity':
                    this.attrFound++
                    return elm
                default:
                    return null;
            }
        },

        getTierBg(tier) {
            return {
                'bg-secondary-red': tier === 'Top' ? true : null,
                'bg-secondary-orange': tier === 'High' ? true : null,
                'bg-secondary-green': tier === 'Mid+' ? true : null,
                'bg-secondary-lightblue': tier === 'Mid' ? true : null,
                'bg-secondary-blue': tier === 'Low+' ? true : null,
                'bg-secondary-purple': tier === 'Low' ? true : null,
            }
        },

        progressValueAPI({ Name, Values }) {
            const statValue = Values ? Values[0].Value : null;
            const maxValue = this.maxValue(Name);
            const percentaje = this.calcPercentaje(statValue, maxValue);
            return percentaje;
        },

        progressValueStore(attrName, statValue) {
            const maxValue = this.maxValue(attrName);
            const percentaje = this.calcPercentaje(statValue, maxValue);
            return percentaje;
        },

        calcPercentaje(a, b) {
            return (a * 100) / b
        },

        getImg(elm) {
            const name = elm.toLowerCase();
            return require(`@/assets/chars/${name}.png`)
        },

        closeOverlay() {
            this.$emit('closeDetails');
        },

        AppOpenCounterDetails(item) {
            this.$emit('PassCounterDetails', item);
        },

    }
}
</script>

<style>
.vue-simple-progress,
.vue-simple-progress-bar {
    border-radius: 20px;
}

.overlay {
    background-position: center;
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
}

.char-title {
    font-size: 1.25rem
}

@media (min-width: 540px) {
    .overlay {
        position: relative;
    }
    .char-title {
        font-size: 1.75rem
    }
}

</style>
