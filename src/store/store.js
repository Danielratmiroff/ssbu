/********************
 
Handles & manages all data retrieved from:
    * API
    * charsData vuex module
 
********************/

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import { charsData } from "./chars.js";
import { listUniqueValue } from "../components/mixins/listUniqueValue.js";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    charsData,
  },

  state: {
    maxValue: {
      Weight: 135,
      AirSpeed: 1.344,
      FallSpeed: 2.1,
      RunSpeed: 3.85,
      WalkSpeed: 1.575,
      AirFriction: 0.05,
      FullHop: 50.51,
      ShortHop: 17.34,
      AirJump: 50.51,
      Gravity: 0.23,
    },

    charsUnique: [],
    charsSorted: [],
    charsNewAdded: [],
    charsAll: [],
  },

  getters: {
    getTier: (state) => (id) => {
      if (!id) {
        return;
      }
      return state.charsData.chars[id].Tier;
    },

    getStatsFromStore: (state) => (id) => {
      return state.charsData.chars[id].Attr;
    },

    maxValue: (state) => (elm) => {
      return state.maxValue[elm];
    },

    getCounters: (state) => (id, list) => {
      if (!id) {
        return;
      }
      const counterNames = state.charsData.chars[id][list];
      const charsAll = state.charsAll;

      const counters = counterNames.reduce((acc, current) => {
        const names = charsAll.find((elm) => elm.Name === current);
        if (names) {
          return acc.concat(names);
        } else {
          return acc;
        }
      }, []);

      return counters;
    },
  },

  mutations: {
    STORE_UNIQUE(state, all) {
      // Remove duplicates from array
      state.charsUnique = listUniqueValue(all, "OwnerId");
    },

    STORE_SORTED(state) {
      // Sort and store array of characters
      const all = state.charsUnique;
      const allSorted = all.sort((a, b) => {
        const textA = a.Name.toUpperCase();
        const textB = b.Name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      state.charsSorted = allSorted;
    },

    STORE_NEWERCHARS(state) {
      // Add newer chars which are not yet in the API
      const all = state.charsUnique;

      const missingChars = ["Isabelle", "Byleth", "MinMin", "DarkSamus"];
      const counterStore = state.charsData.chars;
      const objectChars = JSON.parse(JSON.stringify(counterStore));

      const charsData = Object.keys(objectChars)
        .map((key) =>
          missingChars.includes(objectChars[key].Name) ? objectChars[key] : null
        )
        .filter((key) => key);

      const newerChars = all.concat(charsData);

      state.charsNewAdded = newerChars;
    },

    STORE_BG(state) {
      // Add background colors to characters
      const all = state.charsNewAdded;
      let count = 0;
      const addColors = all.map((elm) => {
        switch (count) {
          case 0:
            count++;
            elm.Background = "bg-secondary-blue";
            break;
          case 1:
            count++;
            elm.Background = "bg-secondary-green";
            break;
          case 2:
            count++;
            elm.Background = "bg-secondary-orange";
            break;
          case 3:
            count++;
            elm.Background = "bg-secondary-lightblue";
            break;
          case 4:
            count++;
            elm.Background = "bg-secondary-purple";
            break;
          default:
            count = 0;
            elm.Background = "bg-secondary-red";
            break;
        }
        return elm;
      });

      state.charsAll = addColors;
    },
  },

  actions: {
    async loadChars({ commit }) {
      const ult = "https://api.kuroganehammer.com/api/characters?game=ultimate";
      const smash = "https://api.kuroganehammer.com/api/characters?game=smash4";

      const ultGet = axios.get(ult);
      const smashGet = axios.get(smash);

      return axios
        .all([ultGet, smashGet])
        .then(
          axios.spread((...responses) => {
            const ultResponse = responses[0].data;
            const smashResponse = responses[1].data;
            const all = [...ultResponse, ...smashResponse];

            commit("STORE_UNIQUE", all);
            commit("STORE_SORTED");
            commit("STORE_NEWERCHARS");
            commit("STORE_BG");
          })
        )
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
  },
});
