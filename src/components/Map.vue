<template>
  <div class="card mb-3">
    <div class="card-body">
      <GmapMap :zoom="zoom" :center="center" style="width: 100%; height: 37rem">
        <GmapMarker
          v-for="location in locations"
          :key="location.key"
          :position="location.position"
          :animation="location.defaultAnimation"
          @rightclick="markerRightClicked(location)"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  data: () => ({
    center: { lat: 37.7392, lng: -99.9903 },
    zoom: 4.1
  }),
  mounted() {
    this.getLocations();
  },
  computed: {
    locations() {
      return this.$store.state.locations;
    },
    google: gmapApi
  },
  methods: {
    getLocations() {
      this.$store.dispatch("loadMarkers");
    },
    markerRightClicked(location) {
      console.log("zoom", this.zoom);
      this.center = location.position;
      this.zoom = 11;
    }
  }
};
</script>
