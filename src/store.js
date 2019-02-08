import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const mockLocations = require("../data/mock.json");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    center: { lat: 37.7392, lng: -99.9903 },
    zoom: 4.1,
    currentLocation: {},
    filters: {}
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    setFilters(state, filters) {
      state.filters = filters;
    },
    setZoom(state, zoom) {
      state.zoom = zoom;
    },
    setCenter(state, position) {
      state.center = position;
    },
    setNewLocation(state, location) {
      state.currentLocation = location;
    }
  },
  actions: {
    // async loadMarkers({ commit }) {
    //   try {
    //     const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
    //     const markers = locations.map(location => ({
    //       position: {
    //         lat: location.latitude,
    //         lng: location.longitude
    //       },
    //       key: location.name,
    //       defaultAnimation: 2
    //     }));
    //     commit("setLocations", markers);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
    async loadMarkers({ commit }) {
      try {
        const locations = mockLocations;
        const markers = locations.map(location => ({
          ...location,
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
    },
    async loadFilters({ commit }) {
      try {
        const { data: filters } = await axios.get("/api/filters");
        console.log(filters);
        commit("setLocations", filters);
      } catch (err) {
        console.log(err);
      }
    },
    reZoom({ commit }, { zoom }) {
      commit("setZoom", zoom);
    },
    reCenter({ commit }, { position }) {
      commit("setCenter", position);
    },
    updateCurrentLocation({ commit }, { location }) {
      commit("setNewLocation", location);
    }
  }
});
