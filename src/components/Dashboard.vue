<template>
    <div>
        <p class="text-primary-dark font-bold mt-3 mb-1 sm:ml-4" style="font-size:1.45rem">
            Character's Stats
        </p>
        <p class="text-primary-dark mb-4 sm:ml-4 leading-tight">
            Discover more about your favorite characters
        </p>
        <div class="flex w-full flex-col 
                        sm:flex-row sm:flex-wrap sm:items-center sm:justify-center
                            ">
            <div v-for="(item, idx) in this.chars" :key="item.id" class="h-24 w-full flex items-center my-2 md:my-3
                            sm:w-2/4 lg:w-2/6
                            " @click="openDetails(item)">
                <div class="relative h-full w-full sm:mx-3 md:mx-4 flex items-end">
                    <img :src="getImg()" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-3 z-1" />
                    <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between" 
                    :class="bgClass(idx)" style="height:4.5rem;">
                        <!-- background:linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)  -->
                        <p class="font-bold text-primary-white leading-tight" style='font-size:1.25rem;'>
                            {{item.name}}
                        </p>
                        <img src="@/assets/icon.png" class="h-full w-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',

    data() {
        return {
            chars: Object,
        };
    },

    computed: {
        bgClass: function(elm) {
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
            console.log(value)
            return `bg-secondary-${value}`
        }
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

            let sortedArr = this.sortChars(filteredArr)
            return sortedArr
        },

        sortChars(sortArr) {

            // Ascendent sorting
            sortArr.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });

            return sortArr
        },

        openDetails(id) {
            this.$emit('openDetails', id);
        },

        openAbout() {
            this.$emit('openAbout');
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
