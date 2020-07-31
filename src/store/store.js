import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    state: {
        tier : {
            Banjoandkazooie : 'D',
            Bayonetta : 'F',
            Blyeth : 'E',
            Bowser : 'C',
            BowserJr : 'F',
            Byleth : 'E',
            Captainfalcon : 'E',
            Chrom : 'B',
            Cloud : 'C',
            Charizard : 'B',
            Corrin : 'F',
            Daisy : 'A',
            Darkpit : 'F',
            Pokemontrainer : 'B',
            Darksamus : 'C',
            Diddykong : 'D',
            Donkeykong : 'F',
            Drmario : 'F',
            Duckhunt : 'D',
            Falco : 'D',
            Fox : 'B',
            Ganondorf : 'F',
            Greninja : 'B',
            Hero : 'D',
            Iceclimbers : 'E',
            Ike : 'D',
            Incineroar : 'F',
            Inkling : 'B',
            Isabelle : 'F',
            Jigglypuff : 'F',
            Joker : 'A',
            Ken : 'C',
            Kingdedede : 'F',
            Kingkrool : 'F',
            Kirby : 'F',
            Link : 'C',
            Littlemac : 'F',
            Lucario : 'E',
            Lucas : 'D',
            Lucina : 'B',
            Luigi : 'D',
            Mario : 'B',
            Marth : 'D',
            Megaman : 'B',
            Metaknight : 'E',
            Mewtwo : 'F',
            Miibrawler : 'E',
            Miiswordfighter : 'E',
            Miigunner : 'F',
            Minmin : 'D',
            Gameandwatch : 'B',
            Ness : 'C',
            Olimar : 'B',
            Pacman : 'B',
            Palutena : 'A',
            Peach : 'A',
            Pichu : 'C',
            Pikachu : 'A',
            Piranhaplant : 'E',
            Pit : 'F',
            Richter : 'E',
            Ridley : 'E',
            Rob : 'B',
            Robin : 'F',
            Rosalinaandluma : 'D',
            Roy : 'B',
            Ryu : 'C',
            Samus : 'C',
            Sheik : 'E',
            Shulk : 'B',
            Simon : 'E',
            Snake : 'B',
            Sonic : 'C',
            Terry : 'C',
            Toonlink : 'D',
            Villager : 'E',
            Wario : 'B',
            Wiifittrainer : 'D',
            Wolf : 'B',
            Yoshi : 'C',
            YoungLink : 'C',
            Zelda : 'E',
            Zerosuitsamus : 'A',
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

        charsUnique : [],
        charsSorted : [],
        charsAll : [],

    },
    getters: {
        getTier: (state) => (name) => {
            return state.tier[name]
        },
        
        maxValue: (state) => (elm) => {
            return state.value[elm]
        },
        
    },

    mutations: {
        STORE_UNIQUE(state, all) {
            // Remove duplicates from array
            const uniqueChars = all.reduce((acc, current) => {
                const x = acc.find(item => item.OwnerId === current.OwnerId);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);

            state.charsUnique = uniqueChars;
        },

        STORE_SORTED(state) {
            // Sort and store array of characters 
            const all = state.charsUnique;
            const allSorted = all.sort(function(a, b) {
                const textA = a.Name.toUpperCase();
                const textB = b.Name.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });   
        
            state.charsSorted = allSorted
        },

        STORE_BG(state) {
            // Add background colors to characters
            const all = state.charsSorted
            let count = 0;
            const addColors = all.map(elm => {
                switch(count) {
                    case 0:
                        count++;
                        elm.Background = 'bg-secondary-blue';
                        break;
                    case 1:
                        count++;
                        elm.Background = 'bg-secondary-green';
                        break;
                    case 2:
                        count++;
                        elm.Background = 'bg-secondary-orange';
                        break;
                    case 3:
                        count++;
                        elm.Background = 'bg-secondary-lightblue';
                        break;
                    case 4:
                        count++;
                        elm.Background = 'bg-secondary-purple';
                        break;
                    default:
                        count = 0;
                        elm.Background = 'bg-secondary-red';
                        break;
                }
                return elm
            })

            state.charsAll = addColors
        },
    },
    
    actions: {
        async loadChars({commit}) {
            const ult = "https://api.kuroganehammer.com/api/characters?game=ultimate";
            const smash = "https://api.kuroganehammer.com/api/characters?game=smash4";
            
            const ultGet = axios.get(ult);
            const smashGet = axios.get(smash);
            
            axios.all([ultGet, smashGet]).then(axios.spread((...responses) => {
            
                const ultResponse = responses[0].data;
                const smashResponse = responses[1].data;
                const all = [...ultResponse, ...smashResponse]

                commit('STORE_UNIQUE', all);
                commit('STORE_SORTED')
                commit('STORE_BG')

            })
          ).catch(error => {
            throw new Error(`API ${error}`);
          });
        },
        
    }
})