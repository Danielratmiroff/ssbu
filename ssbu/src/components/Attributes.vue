<template>
    <div>
    
        <button v-on:click="this.getAttr">
           {{this.name}}
        </button>
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
        id: null,
        name: String
    },

    data() {
        return {
            charAttr: [],
        };
    },

    methods: {
        async getAttr() {
            try {
                
                let fetch = await this.fetchAttr(this.id, 'ultimate')

                // if its not found in SSBU, use Smash4
                if (!Array.isArray(fetch) || !fetch.length) {
                    fetch = await this.fetchAttr(this.id, 'smash4')
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
