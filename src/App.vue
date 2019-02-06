<template>
  <div id="app">
    <navbar/>
    <div id="map" class="container">
      <Map/>
    </div>
  </div>
</template>

<script>
import Map from "./components/Map";
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Map,
    navbar: Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#map {
  height: 30rem;
}
</style>
