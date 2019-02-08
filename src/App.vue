<template>
  <div id="app">
    <navbar/>
    <div id="map" class="container">
      <search-bar/>
      <Map/>
      <div>
        <current-location v-if="this.$store.state.currentLocation.Addresses"/>
        <all-locations v-else/>
      </div>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import CurrentLocation from "./components/CurrentLocation";
import AllLocations from "./components/AllLocations";

export default {
  name: "app",
  components: {
    Map,
    navbar: Navbar,
    "search-bar": SearchBar,
    "custom-footer": Footer,
    "current-location": CurrentLocation,
    "all-locations": AllLocations
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
