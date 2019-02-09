<template>
  <div id="app">
    <navbar/>
    <div class>
      <div class="row">
        <div class="col-md-1"></div>
        <search-bar class="col-md-2 mr-3"/>
        <Map class="col-md-8"/>
        <div class="col-md-1"></div>
      </div>
    </div>
    <div id="map" class="container">
      <div>
        <current-location v-if="this.$store.state.currentLocation.address"/>
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
  color: #2c3e50;

  background-color: #e7cd0f;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
