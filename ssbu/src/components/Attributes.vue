<template>
    <div class="overlay">
        <div class="p-3 h-full">
            <div>
                <div class="flex relative h-12 mb-3 justify-between items-center">
                    <div class="w-1/4 absolute" @click="closeOverlay()">
                        Back
                    </div>
                    <p class="w-full text-center text-xl font-bold text-secondary-blue">
                        {{this.char.name}}
                    </p>
                </div>
                <!-- arreglar icono en el fondo -->
                <div class="rounded-lg shadow-xl bg-secondary-red flex items-center justify-center relative bg-local ..." style="
                            background-image: url('./assets/chars/iconbig.png');
                            height:17rem">
                    <img :src="getImg()" class="m-auto absolute" style="height:13rem" />
                </div>
                <div class="my-3 rounded-lg shadow-xl bg-secondary-red p-6">
                    <p class="font-bold">
                        Stats:
                    </p>
                    <ul v-for="(item, index) in this.charAttr" :key="index">
                        <li class="my-5 p-3 font-bold rounded-lg bg-secondary-blue">
                            <p class="mb-3 text-primary-white">
                                {{ item.Name }}
                                <!-- {{item.Values[0].Value}} -->
                            </p>
                            <div class="w-full rounded-lg">
                                <progress-bar size="large" bar-color="linear-gradient(90deg, rgba(77,255,90,1) 0%, rgba(0,212,255,1) 78%)" :val="progressValue(item.Values[0].Value)" :max="300" />
                            </div>
                            <p class="mt-3 text-primary-white">
                                {{item.Values[0].Value}}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
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
