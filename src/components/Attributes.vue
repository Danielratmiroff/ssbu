<template>
    <div class="overlay">
        <div class="relative" :class="this.char.Background">
    
            <div class="px-4 py-2 sm:flex sm:flex-row-reverse sm:justify-evenly
                                sm:max-w-lg m-auto
                                ">
                <div class="flex relative justify-between items-center z-50">
                    <img src="@/assets/arrow.svg" class="w-6 absolute
                                    sm:hidden" @click="closeOverlay()" />
                    <p class="w-full text-center py-3 font-bold text-primary-white char-title">
                        {{this.char.DisplayName}}
                    </p>
                </div>
                <img :src="getImg(this.char.Name)" class="my-2 mx-auto relative pb-6 z-10 w-3/5
                                                        sm:w-1/3 sm:mx-0" style="max-height:250px;object-fit:contain;" />
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

                    <!-- Refactor the shit out of this, is too confusing. Combine two loops pls -->
                    <div v-if="notFoundInAPI">
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
                    </div>

                    <div v-else>
                      <ul v-for="(item, idx) in this.charAttr" :key="idx">
                            <li class="my-2 py-1 relative">
                                <div class="mb-2 text-sm flex items-center text-primary-dark" >
                                    {{ item.Name }}

                                    <Clues :attr="item.Name" />
                                    
                                </div>
                                <div class="w-full rounded-lg flex items-center">
                                    <!-- <p class="text-xs mr-3">
                                        {{item.Values[0].Value}}
                                    </p> -->
                                    <progress-bar size="medium" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValueAPI(item)" :max="100" style="width:100%;" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <Counters :id="this.char.OwnerId" v-on:openCounterDetails="AppOpenCounterDetails" /> 
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import Counters from './Counters.vue';
import Clues from './Clues.vue';

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
            hintActive: Boolean,
            hintIndex: Number,
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

        closeOverlay() {
            this.$emit('closeDetails');
        },

        AppOpenCounterDetails(item) {
            this.$emit('PassCounterDetails', item);
        },

        async getAttr(id) {
            const ultimate = await this.fetchAttr(id, 'ultimate')
            const isFound = !Array.isArray(ultimate)
            this.notFoundInAPI = undefined;
            this.attrFound = 0;

            // if its not found in SSBU, use Smash4
            const attr = isFound ? ultimate : await this.fetchAttr(id, 'smash4')

            // Get selected attributes 
            const attrFilter = attr.filter(name => {
                return this.filterAttr(name.Name)
            })

            // if API doesn't return any attributes or any that matter to us
            if (attr.length < 1 || this.attrFound < 4) {
                this.notFoundInAPI = true;
                this.charAttr = this.getStatsFromStore(id);
                return
            }
     
            // Remove duplicates
            const attrUnique = this.uniqueAttr(attrFilter);
            this.charAttr = attrUnique;
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

        filterAttr(elm) {
            switch (elm) {
                case 'AirSpeed':
                case 'AirFriction':
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

        uniqueAttr(elm) {
            // Would be cool to reuse filtering function from store.js
                const unique = elm.reduce((acc, current) => {
                const x = acc.find(item => item.Name === current.Name);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            return unique
        },

        getImg(elm) {
            const name = elm.toLowerCase();
            return require(`@/assets/chars/${name}.png`)
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
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
