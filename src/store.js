import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [],
    allLocations: [],
    center: { lat: 37.7392, lng: -99.9903 },
    zoom: 4.1,
    currentLocation: {},
    filters: {}
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations;
    },
    setAllLocations(state, locations) {
      state.allLocations = locations;
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
    async loadMarkers({ commit }) {
      try {
        const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
        const markers = locations.map(location => ({
          ...location,
          position: {
            lat: location.latitude,
            lng: location.longitude
          },
          key: location.name,
          defaultAnimation: 2
        }));
        commit("setLocations", markers);
        commit("setAllLocations", markers);
      } catch (err) {
        console.error(err);
      }
    },
    async loadFilters({ commit }) {
      try {
        const { data: filters } = await axios.get("/api/filters");
        console.log(filters);
        commit("setFilters", filters);
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
    },
    filterLocations({ commit }, locations) {
      commit("setLocations", locations);
    }
  }
});
