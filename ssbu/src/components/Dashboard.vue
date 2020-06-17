<template>
    <div>
    
        <div v-for="item in this.chars" :key="item.id">
            <div class="rounded-md h-12 w-full flex items-center justify-center bg-secondary-red my-4" @click="openDetails(item)">
                <p>{{item.name}}</p>
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
            chars: [{
                id: '',
                name: '',
                img: ''
            }]
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
                        img: elm.ThumbnailUrl
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
