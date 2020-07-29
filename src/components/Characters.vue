<template>
    <div>
        <div class="flex w-full flex-col 
                sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <div v-for="(item, idx) in this.chars" :key="item.id" class="h-24 w-full flex items-center my-2 md:my-3
                                sm:w-2/4 lg:w-2/6" @click="openDetails(item)
                ">
                <div class="relative h-full w-full sm:mx-3 md:mx-4 flex items-end">
                    <img :src="getImg(idx)" class="absolute min-w-2/5 h-full max-h-16 right-0 mr-6 z-1" />
                    <div class="overflow-hidden w-full rounded-md px-6 flex items-center justify-between" :class="bgClass(item)" style="height:4.5rem;">
                        <!-- background:linear-gradient(90deg, rgba(29,109,227,1) 0%, rgba(0,194,255,1) 78%)  -->
                        <p class="font-bold text-primary-white leading-tight" style='font-size:1.25rem;'>
                            {{item.name}}
                        </p>
                        <img src="@/assets/icon.png" class="h-full w-auto -mr-2" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Characters',

    props: {
        filterByChar: null
    },

    data() {
        return {
            chars: Object,
        };
    },

    mounted: async function() {
        const totalUltimate = await this.fetchChars('ultimate');
        const totalSmash4 = await this.fetchChars('smash4');
        const mergeArrays = this.uniqueArr(totalSmash4, totalUltimate);
        const sortArr = this.sortChars(mergeArrays);

        // Adding bg colors to Chars object
        const addBgColors = this.addBgColors(sortArr);
        this.chars = addBgColors;
        this.$emit('charList' , this.chars);
    },

    methods: {
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

        sortChars(sortArr) {
            // Ascendent sorting
            sortArr.sort(function(a, b) {
                var textA = a.name.toUpperCase();
                var textB = b.name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            return sortArr
        },

        addBgColors(elm) {
            let bgNumber = 0;
            let bgColors = elm.map(elm => {
                if (bgNumber > 5) { bgNumber = 0 }
                elm.bgColor = bgNumber;
                bgNumber++;
                return elm
            })
            return bgColors
        },
        
        openDetails(item) {
            this.$emit('openDetails', item);
        },

        openAbout() {
            this.$emit('openAbout');
        },

        // Find a way to share this code with attributes
        // Right now its repeating itself
        // Need to define a better data structure for chars in order to be able to fetch it easily
        getImg(elm) {
            const charName = this.chars[elm].name;
            const cleanName = charName.replace(/\s/g, "")
                .toLowerCase()
                .replace(/&/g, 'and')
                .replace(/\./g, "");

            return require(`@/assets/chars/${cleanName}.png`)
        }
    }
}

</script>
 