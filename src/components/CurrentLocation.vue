<template>
  <div class="card mb-3">
    <div class="card-header">
      <h3>{{this.$store.state.currentLocation.key}}</h3>
    </div>
    <div class="card-body">
      <h5 class="card-subtitle mb-2 text-muted">Address</h5>
      <label class="ml-2">
        {{this.$store.state.currentLocation.address ?
        `${this.$store.state.currentLocation.address}` : ""}}
      </label>
      <h5 class="card-subtitle mt-2 text-muted mb-2">Amenities</h5>
      <ul class="list-group">
        <li
          v-for="(amenity, index) in this.$store.state.currentLocation.amenities"
          :key="index"
          class="list-group-item"
        >{{amenity.display_name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
