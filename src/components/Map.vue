<template>
  <div class="card mb-3">
    <div class="card-body">
      <GmapMap
        :zoom="4"
        :center="{ lat: 25.7392, lng: -104.9903 }"
        map-type-id="terrain"
        style="width: 100%; height: 37rem"
      >
        <GmapMarker
          v-for="location in locations"
          :key="location.key"
          :position="location.position"
          :animation="location.defaultAnimation"
          @rightclick="markerRightClicked"
        />
      </GmapMap>
    </div>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
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
    markerRightClicked() {}
  }
};
</script>
