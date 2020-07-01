<template>
    <div>
    
        <div v-for="(item, idx) in this.chars" :key="item.id">
            <div class="h-16 w-full flex items-center my-4" @click="openDetails(item)">
                <div class="relative h-full w-full flex items-end">
                    <img :src="getImg()" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-3 z-1" />
                    <div class="overflow-hidden w-full h-12 rounded-md flex items-center justify-between" 
                    :class="renderBg(idx)">
                        <p class="text-left ml-6 text-primary-white">{{item.name}}</p>
                        <img src="@/assets/chars/icon.png" class="h-full w-auto mr-4" />
                    </div>
                </div>
            </div>
            <!-- <img class="rounded-md" :src='item.img' @click="openDetails(item)" /> <br> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',

    data() {
        return {
            chars: Object
        };
    },

    mounted: async function() {
        const totalUltimate = await this.fetchChars('ultimate');
        const totalSmash4 = await this.fetchChars('smash4');
        this.chars = this.uniqueArr(totalSmash4, totalUltimate)
    },

    methods: {

        async fetchChars(game) {
            try {
                const response = await fetch("https://api.kuroganehammer.com/api/characters?game=" + game + "");
                const charsJson = await response.json();
                const chars = charsJson.map(elm => {
                    let obj = {
                        id: elm.OwnerId,
                        name: elm.DisplayName,
                    }
                    return obj
                })
                return chars
            } catch (err) { console.log('Error with Fetching Chars', game) }
        },

        uniqueArr(obj1, obj2) {
            let newObj = [...obj2, ...obj1]

            // Remove duplicates from array
            const filteredArr = newObj.reduce((acc, current) => {
                const x = acc.find(item => item.id === current.id);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            return filteredArr
        },

        openDetails(id) {
            this.$emit('openDetails', id);
        },

        openAbout() {
            this.$emit('openAbout');
        },

        renderBg(elm) {
            let value = String;
            switch (Math.sqrt(elm)) {
                case 0:
                    value = 'red'
                    break;
                case 1:
                    value = 'blue'
                    break;
                case 2:
                    value = 'orange'
                    break;
                case 3:
                    value = 'purple'
                    break;
                default:
                    value = 'red'
                    break;
            }
            return `bg-secondary-${value}`
        },

        getImg() {
            // works when all images are in place
            // names need to be adjusted to fit the image's path (spaces and so on)
            // ----->  return require(`@/assets/chars/${this.chars[idx].name.toLowerCase()}.png`)

            // for now use the following:
            return require(`@/assets/chars/jokersmall.png`)
        }
    }
}
</script>
