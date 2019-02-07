<template>
  <div class="card mb-3">
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
          @dblclick="markerRightClicked(location)"
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
    markerRightClicked(location) {
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo(location.position);
      });

      this.$refs.mapRef.$mapPromise.then(() => {
        this.$store.dispatch("reZoom", { zoom: 13 });
      });
    },
    onZoomChange() {
      this.$refs.mapRef.$mapPromise.then(map => {
        this.$store.dispatch("reZoom", { zoom: map.getZoom() });
      });
    }
  }
};
</script>
