<template>
  <div>
    <div class="card mb-3" v-for="(location, index) in this.$store.state.locations" :key="index">
      <div class="card-header">{{location.key}}</div>
      <div class="card-body">
        <h5 class="card-subtitle mb-2 text-muted">Address</h5>
        <label class="ml-2">
          {{
          `${location.Addresses[0].Address1},
          ${location.Addresses[0].City},
          ${location.Addresses[0].State},
          ${location.Addresses[0].Zip}`
          }}
        </label>
        <h5 class="card-subtitle mt-2 text-muted mb-2">Amenities</h5>
        <ul class="list-group">
          <li
            v-for="(amenity, ind) in location.AdditionalAmenities"
            :key="ind"
            class="list-group-item"
          >{{amenity.SiteManagementItem.Title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style>
</style>
