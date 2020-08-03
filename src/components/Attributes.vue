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
    
                        <p class="text-lg text-primary-white flex items-center inline-block rounded-md shadow-md px-3 py-1 text-center" 
                            :class="getTierBg(fetchTier(this.char.Name))
                            ">
                            {{ fetchTier(this.char.Name) }}
                            <span class="text-primary-white text-sm pl-2">
                                TIER
                            </span>
                        </p>
                    </div>
                    
                    <div v-if="foundInAPI">
                        <ul v-for="(item, index) in this.charAttr" :key="index">
                            <li class="my-2 py-1">
                                <p class="mb-2 text-sm text-primary-dark">
                                    {{ item.Name }}
                                </p>
                                <div class="w-full rounded-lg flex items-center">
                                    <!-- <p class="text-xs mr-3">
                                        {{item.Values[0].Value}}
                                    </p> -->
                                    <progress-bar size="medium" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValueAPI(item)" :max="100" style="width:100%;" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <ul v-for="(value, attr) in this.charAttr" :key="attr">
                            <li class="my-2 py-1">
                                <p class="mb-2 text-sm text-primary-dark">
                                    {{ attr }}
                                </p>
                                <div class="w-full rounded-lg flex items-center">
                                    <progress-bar size="medium" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValueStore(attr, value)" :max="100" style="width:100%;" />
                                </div>
                            </li>
                        </ul>
                    </div>

                <Counters :id="this.char.OwnerId" /> 
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Counters from './Counters.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'Attributes',
    
    components: {
        Counters
    },

    props: {
        char: Object
    },

    computed: {
        ...mapGetters(['getTier', 'maxValue', 'getStats'])
    },

    data() {
        return {
            charAttr: Array,
            foundInAPI : true
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

        async getAttr(id) {
            const ultimate = await this.fetchAttr(id, 'ultimate')
            const isFound = !Array.isArray(ultimate)

            // if its not found in SSBU, use Smash4
            const attr = isFound ? ultimate : await this.fetchAttr(id, 'smash4')

            // if API doesn't return any attributes
            if (attr.length < 1) {
                this.foundInAPI = false;
                this.charAttr = this.getStats(id);
                return
            }

            // Get selected attributes 
            const attrFilter = attr.filter(name => {
                return this.filterAttr(name.Name)
            })

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

        fetchTier(elm) {
            const name = elm.toLowerCase();
            return this.getTier(name);
        },

        getTierBg(tier) {
            return {
                'bg-secondary-red': tier === 'A' ? true : null,
                'bg-secondary-orange': tier === 'B' ? true : null,
                'bg-secondary-green': tier === 'C' ? true : null,
                'bg-secondary-lightblue': tier === 'D' ? true : null,
                'bg-secondary-blue': tier === 'E' ? true : null,
                'bg-secondary-purple': tier === 'F' ? true : null,
            }
        },

        progressValueAPI({ Name, Values }) {
            const statValue = Values[0].Value
            const maxValue = this.maxValue(Name)
            const percentaje = this.calcPercentaje(statValue, maxValue)
            return percentaje
        },

        progressValueStore(attrName, statValue) {
            const maxValue = this.maxValue(attrName)
            const percentaje = this.calcPercentaje(statValue, maxValue)
            return percentaje
        },

        calcPercentaje(a, b) {
            return (a * 100) / b
        }
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
