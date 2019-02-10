<template>
  <div class="card-custom mb-3 bg-orange">
    <div class="card-header-custom bg-orange">
      <h3>Search</h3>
    </div>
    <div class="card-body bg-dark">
      <div class="input-group mb-3">
        <div class="select-locations">
          <select class="form-control mb-3" v-model="selectedState">
            <option disabled value>State</option>
            <option
              v-for="(stateItem, ind) in this.$store.state.filters.states"
              :key="ind"
            >{{ stateItem.state }}</option>
          </select>
          
          <select class="form-control mb-3" v-model="selectedCity">
            <option disabled value>City</option>
            <option
              v-for="(cityItem, ind) in this.$store.state.filters.cities"
              :key="ind"
            >{{ cityItem.city }}</option>
          </select>
          
          <select class="form-control mb-3" v-model="selectedHighway">
            <option disabled value>Highway</option>
            <option
              v-for="(highwayItem, ind) in this.$store.state.filters.highways"
              :key="ind"
            >{{ highwayItem.highway }}</option>
          </select>
        </div>
      </div>
      <div class="input-group-append">
        <button
          class="btn btn-outline-light btn-block"
          type="button"
          v-on:click="onClickSearch"
        >search</button>
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
.bg-orange {
  background-color: #d8b800;
}

.card-header-custom {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  color: inherit;
  /* background-color: rgba(0,0,0,.03); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-custom {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  /* background-color: #fff; */
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
</style>
