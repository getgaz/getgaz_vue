<template v-if="this.$store.state.currentLocation.key">
  <div class="card mb-3">
    <div class="card-header">
      <h3>{{this.$store.state.currentLocation.key}}</h3>
    </div>
    <div class="card-body">
      <h5 class="card-subtitle mb-2 text-muted">Address</h5>
      <label class="ml-2">
        {{this.$store.state.currentLocation.Addresses ?
        `${this.$store.state.currentLocation.Addresses[0].Address1},
        ${this.$store.state.currentLocation.Addresses[0].City},
        ${this.$store.state.currentLocation.Addresses[0].State},
        ${this.$store.state.currentLocation.Addresses[0].Zip}` : ""}}
      </label>
      <h5 class="card-subtitle mt-2 text-muted mb-2">Amenities</h5>
      <ul class="list-group">
        <li
          v-for="(amenity, index) in this.$store.state.currentLocation.AdditionalAmenities"
          :key="index"
          class="list-group-item"
        >{{amenity.SiteManagementItem.Title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
