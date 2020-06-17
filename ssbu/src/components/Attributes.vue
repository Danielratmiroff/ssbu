<template>
    <div class="overlay">
         
        <img :src="this.char.img" />
        <ul v-for="(item, index) in this.charAttr" :key="index">
            <li>
                {{ item.Name }} {{ item.Values[0].Value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Attributes',

    props: {
        char: Object
    },

    data() {
        return {
            charAttr: [],
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
    padding: 5rem 2rem 2rem 2rem;
    background: white;
}

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
