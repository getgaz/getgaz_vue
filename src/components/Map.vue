<template>
  <div class="card mb-3 bg-dark">
    <div class="card-body">
      <GmapMap
        :zoom="$store.state.zoom"
        :center="$store.state.center"
        style="width: 100%; height: 37rem"
        ref="mapRef"
        @zoom_changed="onZoomChange"
      >
        <GmapMarker
          v-for="location in locations"
          :key="location.key"
          :position="location.position"
          :animation="location.defaultAnimation"
          @dblclick="markerDoubleClicked(location)"
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
    console.log("this is locations in map", this.$store.state.locations);
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
    markerDoubleClicked(location) {
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo(location.position);
      });

      this.$refs.mapRef.$mapPromise.then(() => {
        this.$store.dispatch("reZoom", { zoom: 13 });
      });

      this.$store.dispatch("updateCurrentLocation", { location });
    },
    onZoomChange() {
      this.$refs.mapRef.$mapPromise.then(map => {
        this.$store.dispatch("reZoom", { zoom: map.getZoom() });
      });
    }
  }
};
</script>
