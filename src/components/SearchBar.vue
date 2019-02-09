<template>
  <div class="card mb-3">
    <div class="card-header">
      <h3>Search</h3>
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
        <div class="select-locations">
          <span class="title-locations">Locations:</span>
          <select v-model="selectedState">
            <option disabled value>State</option>
            <option
              v-for="(stateItem, ind) in this.$store.state.filters.states"
              :key="ind"
            >{{ stateItem.state }}</option>
          </select>
          
          <select v-model="selectedCity">
            <option disabled value>City</option>
            <option
              v-for="(cityItem, ind) in this.$store.state.filters.cities"
              :key="ind"
            >{{ cityItem.city }}</option>
          </select>
          
          <select v-model="selectedHighway">
            <option disabled value>Highway</option>
            <option
              v-for="(highwayItem, ind) in this.$store.state.filters.highways"
              :key="ind"
            >{{ highwayItem.highway }}</option>
          </select>
        </div>
      </div>
      <div class="input-group-append">
        <button class="btn-btn-outline-secondary" type="button" v-on:click="onClickSearch">search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  state: "selectedState",
  city: "selectedCity",
  highway: "selectedHighway",
  data: () => ({
    selectedState: "",
    selectedCity: "",
    selectedHighway: ""
  }),

  mounted() {
    this.getLocations();
    this.getFilters();
  },

  computed: {
    locations() {
      return this.$store.state.locations;
    }
  },

  methods: {
    getLocations: function() {
      this.$store.dispatch("loadMarkers");
    },

    getFilters: function() {
      console.log("loading filters");
      this.$store.dispatch("loadFilters");
    },

    onClickSearch: function() {
      let result = this.$store.state.locations.slice();

      if (this.selectedState !== "") {
        result = result.filter(location => {
          return location.state === this.selectedState;
        });
      }

      if (this.selectedCity !== "") {
        result = result.filter(location => {
          return location.city === this.selectedCity;
        });
      }

      if (this.selectedHighway !== "") {
        result = result.filter(location => {
          return location.highway === this.selectedHighway;
        });
      }
      this.$store.dispatch("filterLocations", result);
    }
  }
};
</script>

<style>
.title-location {
  font-family: sans-serif;
}
.btn-btn-outline-secondary {
  background-color: #333;
  color: #fff;
}
.btn-btn-outline-secondary:hover {
  background-color: yellow;
  color: #000;
}
</style>
