<template>
  <div id="app">
    <navbar/>
    <div id="map" class="container">
      <search-bar/>
      <Map/>
    </div>
    <custom-footer/>
  </div>
</template>

<script>
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Map,
    navbar: Navbar,
    "search-bar": SearchBar,
    "custom-footer": Footer
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
