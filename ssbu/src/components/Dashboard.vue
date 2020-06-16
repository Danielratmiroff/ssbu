<template>
    <div>
    
        <div v-for="item in this.chars" :key="item.id">
            <img :src='item.img' />
            <Attributes :id='item.id' :name='item.name' />
        </div>
    
    </div>
</template>

<script>
import Attributes from './Attributes.vue'

export default {
    name: 'Dashboard',

    components: {
        Attributes
    },

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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
