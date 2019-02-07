import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";
const mockLocations = require("../data/mock.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: []
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    }
  },
  actions: {
    // async loadMarkers({ commit }) {
    //   try {
    //     const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
    //     const markers = locations.map((location) => ({
    //       position: {
    //         lat: location.latitude,
    //         lng: location.longitude,
    //       },
    //       key: location.name,
    //       defaultAnimation: 2,
    //     }));
    //     commit("setLocations", markers);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },
    async loadMarkers({ commit }) {
      try {
        const locations = mockLocations;
        const markers = locations.map(location => ({
          position: {
            lat: location.Site.Latitude,
            lng: location.Site.Longitude
          },
          key: location.Name,
          defaultAnimation: 2
        }));
        commit("setLocations", markers);
      } catch (err) {
        console.error(err);
      }
    }
  }
});
