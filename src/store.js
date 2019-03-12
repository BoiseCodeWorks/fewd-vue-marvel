import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let _api = Axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=53496df3cd682930aa9108759e347171'
})

export default new Vuex.Store({
  state: {
    characters: [],
    activeCharacter: {}
  },
  mutations: {//referrenced by commit
    characters(state, data){
      //first, updates the state with new data
      state.characters = data
      //second, under the hood, envokes all of the observer functions that are watching the updated prop
    },
    activeCharacter(state, character) {
      state.activeCharacter = character
    }
  },
  actions: {//referrenced by dispatch
    getCharacters({dispatch, commit}) {
      _api.get("")
        .then(res => {
          console.log(res)
          let characters = res.data.data.results
          commit('characters', characters)
        })
        .catch(e => console.error(e))
    },
    setActiveCharacter({commit}, character){
      commit('activeCharacter', character)
    }
  }
})
