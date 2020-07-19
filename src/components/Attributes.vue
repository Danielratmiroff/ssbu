<template>
    <div class="overlay">
        <div class="relative"
        :class="bgClass(char)">
            <div class="px-4 py-2 sm:flex sm:flex-row-reverse sm:justify-evenly
                                            sm:max-w-lg m-auto
                                            ">
                <div class="flex relative justify-between items-center z-50">
                    <img src="@/assets/arrow.svg" class="w-6 absolute
                                                                sm:hidden" @click="closeOverlay()" />
                    <p class="w-full text-center py-3 font-bold text-primary-white char-title">
                        {{this.char.name}}
                    </p>
                </div>
                <img :src="getImg(this.cleanName)" class="my-2 mx-auto relative pb-6 z-10 w-3/5
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
                        :class="getTierBg(getTierFromStore(this.cleanName))">
                            <!-- Get Tier Text -->
                            {{ getTierFromStore(this.cleanName) }}
                            <span class="text-primary-white text-sm pl-2">
                                    TIER
                                </span>
                        </p>
                    </div>
    
                    <ul v-for="(item, index) in this.charAttr" :key="index">
                        <li class="my-2 py-1">
                            <p class="mb-2 text-sm text-primary-dark">
                                {{ item.Name }}
                            </p>
                            <div class="w-full rounded-lg flex items-center">
                                <!-- <p class="text-xs mr-3">
                                                {{item.Values[0].Value}}
                                            </p> -->
                                <progress-bar size="medium" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValue(item.Values[0].Value)" :max="300" style="width:100%;" />
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- <div class="mt-6">
                                <p class="font-bold text-lg text-primary-blue">
                                    - Counters
                                </p>
                            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Attributes',

    props: {
        char: {
            id: null,
            name: null,
            bgColor: null,
        }
    },


    computed: {
        ...mapGetters(['getTier'])
    },

    data() {
        return {
            charAttr: Array,
            cleanName: this.char.name.replace(/\s/g, "")
                        .toLowerCase()
                        .replace(/&/g, 'and')
                        .replace(/\./g, "")
        };
    },

    mounted() {
        // Get attributes from Char
        this.getAttr(this.char.id)
    },

    methods: {
        getTierFromStore(char) {
            return this.getTier(char)
        },

        bgClass({ bgColor }) {
            return {
                'bg-secondary-blue': bgColor === 0 ? true : null,
                'bg-secondary-green': bgColor === 1 ? true : null,
                'bg-secondary-orange': bgColor === 2 ? true : null,
                'bg-secondary-lightblue': bgColor === 3 ? true : null,
                'bg-secondary-purple': bgColor === 4 ? true : null,
                'bg-secondary-red': bgColor === 5 ? true : null,
            }
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

        async getAttr(id) {
            try {
                let fetch = await this.fetchAttr(id, 'ultimate')
                // if its not found in SSBU, use Smash4
                if (!Array.isArray(fetch) || !fetch.length) {
                    fetch = await this.fetchAttr(id, 'smash4')
                }
                // Get selected attributes 
                this.charAttr = fetch.filter(name => {
                    return this.filterAttr(name.Name)
                })
                // remove duplicates
                this.charAttr = this.uniqueValue(this.charAttr);

            } catch (err) { console.log('Error with Attributes') }
        },

        async fetchAttr(id, game) {
            let response = await fetch("https://api.kuroganehammer.com/api/characters/" +
                id +
                "/characterattributes?game=" + game + "");
            let attrJson = await response.json();
            return attrJson
        },

        filterAttr(elm) {
            let returnValue;
            switch (elm) {
                case 'AirSpeed':
                case 'AirFriction':
                case 'FallSpeed':
                case 'FullHop':
                case 'Weight':
                case 'WalkSpeed':
                case 'RunSpeed':
                case 'Gravity':
                    returnValue = elm
                    break;
                default:
                    returnValue = null;
            }
            return returnValue
        },

        uniqueValue(elm) {
            let arr = []
            let filter = elm.map(x => {
                if (!arr.includes(x.Name)) {
                    arr.push(x.Name)
                    return x
                }
            })
            // remove empty slots
            let unique = filter.filter(x => {
                return x != null
            })
            return unique
        },

        closeOverlay() {
            this.$emit('closeDetails')
        },

        getImg(elm) {
            return require(`@/assets/chars/${elm}.png`)
        },

        progressValue(elm) {
            let x = elm.replace('.', '');
            if (x.length > 3) { x = x.slice(0, -1) }
            return x
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
