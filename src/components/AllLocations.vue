<template>
  <div>
    <div class="card mb-3" v-for="(location, index) in this.$store.state.locations" :key="index">
      <div class="card-header">
        <h3>{{location.key}}</h3>
      </div>
      <div class="card-body bg-dark">
        <h5 class="card-subtitle mb-2 text-white">Address</h5>
        <label class="ml-2 text-white">
          {{
          `${location.address}`
          }}
        </label>
        <h5 class="card-subtitle mt-2 text-white mb-2">Amenities</h5>
        <ul class="list-group">
          <li
            v-for="(amenity, ind) in location.amenities"
            :key="ind"
            class="list-group-item-custom bg-custom"
          >{{amenity.display_name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style>
.list-group-item-custom {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.bg-custom {
  background-color: #c0c1c4;
}
</style>
