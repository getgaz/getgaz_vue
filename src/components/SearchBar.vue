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
            <option disabled value="">State</option>
            <option v-for="(stateItem, ind) in this.$store.state.filters.states" :key="ind">
              {{ stateItem.state }}
            </option>
          </select>

          <select v-model="selectedCity">
            <option disabled value="">City</option>
            <option v-for="(cityItem, ind) in this.$store.state.filters.cities" :key="ind">
              {{ cityItem.city }}
            </option>
          </select>

          <select v-model="selectedHighway">
            <option disabled value="">Highway</option>
            <option v-for="(highwayItem, ind) in this.$store.state.filters.highways" :key="ind">
              {{ highwayItem.highway }}
            </option>
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
      console.log(
        "selected",
        "state:",
        this.selectedState,
        "city:",
        this.selectedCity,
        "highway:",
        this.selectedHighway
      );
      const loco = this.$store.state.locations;
      if (
        this.selectedState === "" &&
        this.selectedCity === "" &&
        this.selectedHighway === ""
      ) {
        console.log("all locations", loco);
        return loco;
      } else if (this.selectedHighway !== "") {
        let resultArray = [];
        for (let i = 0; i < loco.length; i++) {
          if (loco[i].Site.DescriptiveAddress === this.selectedHighway) {
            resultArray = resultArray.concat(loco[i]);
          }
        }
        console.log("filtered by highway", resultArray);
        return resultArray;
      } else if (this.selectedCity !== "") {
        let resultArray = [];
        for (let i = 0; i < loco.length; i++) {
          for (let j = 0; j < loco[i].Addresses.length; j++) {
            if (loco[i].Addresses[j].City === this.selectedCity) {
              resultArray = resultArray.concat(loco[i]);
            }
          }
        }
        console.log("filtered by city", resultArray);
        return resultArray;
      }
      let resultArray = [];
      for (let i = 0; i < loco.length; i++) {
        for (let j = 0; j < loco[i].Addresses.length; j++) {
          if (loco[i].Addresses[j].State === this.selectedState) {
            resultArray = resultArray.concat(loco[i]);
          }
        }
      }
      console.log("filtered by state", resultArray);
      return resultArray;
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
