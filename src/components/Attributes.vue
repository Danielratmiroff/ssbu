<template>
    <div class="overlay fixed h-full overflow-hidden">
        <div class="px-4 bg-secondary-red relative">
            <div class="flex relative justify-between items-center">
                <img src="@/assets/arrow.svg" class="w-4 absolute" @click="closeOverlay()" />
    
                <p class="w-full text-center text-xl py-3 font-bold text-primary-white">
                    {{this.char.name}}
                </p>
            </div>
            <img :src="getImg()" class="my-2 mx-auto relative pb-6 z-10 w-3/5" />
            <img src="@/assets/iconbig.png" class="w-full absolute top-0" />
        </div>
        <div class="rounded-lg bg-primary-white py-6 px-5 relative -mt-3">
            <p class="font-bold text-lg text-primary-blue">
                Base stats
            </p>
            <ul v-for="(item, index) in this.charAttr" :key="index">
                <li class="my-3 py-2">
                    <p class="mb-2 text-base font-bold text-primary-dark">
                        {{ item.Name }}
    
                    </p>
                    <div class="w-full rounded-lg flex items-center">
                        <p class="text-xs mr-3">
                            {{item.Values[0].Value}}
                        </p>
                        <progress-bar size="large" bg-color="#F0F4FF" bar-color="linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)" :val="progressValue(item.Values[0].Value)" :max="300" style="width:100%;" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Attributes',

    props: {
        char: {
            id: '',
            name: '',
            img: '',
        }
    },

    data() {
        return {
            charAttr: Array,
        };
    },

    mounted() {
        this.getAttr(this.char.id)
    },

    methods: {
        async getAttr(id) {
            try {
                let fetch = await this.fetchAttr(id, 'ultimate')
                // if its not found in SSBU, use Smash4
                if (!Array.isArray(fetch) || !fetch.length) {
                    fetch = await this.fetchAttr(id, 'smash4')
                }
                this.charAttr = fetch.filter(name => {
                    return this.filterAttr(name.Name)
                })
                //remove duplicates
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

        getImg() {
            // works when all images are in place
            // names need to be adjusted to fit the image's path (spaces and so on)
            // ----->  return require(`@/assets/chars/${this.chars[idx].name.toLowerCase()}.png`)

            // for now use the following:
            return require(`@/assets/chars/joker.png`)
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
.overlay {
    position: absolute;
    top: 0;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 10;
}

.vue-simple-progress,
.vue-simple-progress-bar {
    border-radius: 20px;
}
</style>
