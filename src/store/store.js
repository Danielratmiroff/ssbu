import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const store = new Vuex.Store({
    state: {
        tier : {
            banjoandkazooie : 'D',
            bayonetta : 'F',
            blyeth : 'E',
            bowser : 'C',
            bowserjr : 'F',
            byleth : 'E',
            captainfalcon : 'E',
            chrom : 'B',
            cloud : 'C',
            corrin : 'F',
            daisy : 'A',
            darkpit : 'F',
            pokemontrainer : 'B',
            darksamus : 'C',
            diddykong : 'D',
            donkeykong : 'F',
            drmario : 'F',
            duckhunt : 'D',
            falco : 'D',
            fox : 'B',
            ganondorf : 'F',
            greninja : 'B',
            hero : 'D',
            iceclimbers : 'E',
            ike : 'D',
            incineroar : 'F',
            inkling : 'B',
            isabelle : 'F',
            jigglypuff : 'F',
            joker : 'A',
            ken : 'C',
            kingdedede : 'F',
            kingkrool : 'F',
            kirby : 'F',
            link : 'C',
            littlemac : 'F',
            lucario : 'E',
            lucas : 'D',
            lucina : 'B',
            luigi : 'D',
            mario : 'B',
            marth : 'D',
            megaman : 'B',
            metaknight : 'E',
            mewtwo : 'F',
            miibrawler : 'E',
            miiswordfighter : 'E',
            miigunner : 'F',
            minmin : 'D',
            gameandwatch : 'B',
            ness : 'C',
            olimar : 'B',
            pacman : 'B',
            palutena : 'A',
            peach : 'A',
            pichu : 'C',
            pikachu : 'A',
            piranhaplant : 'E',
            pit : 'F',
            richter : 'E',
            ridley : 'E',
            rob : 'B',
            robin : 'F',
            rosalinaandluma : 'D',
            roy : 'B',
            ryu : 'C',
            samus : 'C',
            sheik : 'E',
            shulk : 'B',
            simon : 'E',
            snake : 'B',
            sonic : 'C',
            terry : 'C',
            toonlink : 'D',
            villager : 'E',
            wario : 'B',
            wiifittrainer : 'D',
            wolf : 'B',
            yoshi : 'C',
            youngLink : 'C',
            zelda : 'E',
            zerosuitsamus : 'A',
        },
        value : {
            Weight : 135,
            AirSpeed : 1.344,
            FallSpeed : 2.1,
            RunSpeed : 3.85,
            WalkSpeed : 1.575,
            AirFriction : 0.05,
            FullHop : 50.51,
            ShortHop : 17.34,
            AirJump : 50.51,
            Gravity : 0.23
        },

        chars : [],

    },
    getters: {
        getTier: (state) => (name) => {
            return state.tier[name]
        },
        
        maxValue: (state) => (elm) => {
            return state.value[elm]
        },
        
        everyChar: (state) => (elm) => {
            return state.chars[elm]
        },
    
        searchChar: (state) => (elm) => {
            return state.chars[elm]
        }
    },

    mutations: {
        storeUniqueChars(state, all) {
            // Remove duplicates from array
            const uniqueChars = all.reduce((acc, current) => {
                const x = acc.find(item => item.OwnerId === current.OwnerId);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            
            state.chars = uniqueChars;
        }
    },
    
    actions: {
        loadChars({commit}) {
            const ult = "https://api.kuroganehammer.com/api/characters?game=ultimate";
            const smash = "https://api.kuroganehammer.com/api/characters?game=smash4";
            
            const ultGet = axios.get(ult);
            const smashGet = axios.get(smash);
            
            axios.all([ultGet, smashGet]).then(axios.spread((...responses) => {
            
                const ultResponse = responses[0].data;
                const smashResponse = responses[1].data;
                const all = [...ultResponse, ...smashResponse]

                commit('storeUniqueChars', all);
            })
          ).catch(error => {
            throw new Error(`API ${error}`);
          });
        }
    }
})