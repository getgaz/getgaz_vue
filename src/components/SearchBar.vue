<template>
  <div class="card mb-3">
    <div class="card-header">
      <h3>Search</h3>
    </div>
    <div class="card-body">
      <div class="input-group mb-3">
        <!-- <input
          type="text"
          class="form-control"
          placeholder="Filter locations"
          aria-label="Filter locations"
          aria-describedby="basic-addon2"
        > -->
          <div class="select-locations">
          <span>Locations:</span>
          <select v-model="selectedState">
            <option disabled value="">State</option>
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
          </select>

          <!-- <select v-model="selectedCity" v-for="city in cities">
             -->
          <select v-model="selectedCity">
            <!-- <option disabled value="">{{city}}</option> -->
            <option disabled value="">City</option>
            <option>Clanton</option>
            <option>Evergreen</option>
            <option>Falkville</option>
            <option>Jasper</option>
            <option>Loxley</option>
          </select>

          <select v-model="selectedHighway">
            <option disabled value="">Highway</option>
            <option>I-10, Exit 44</option>
            <option>I-22, Exit 65</option>
            <option>I-65, Exit 322</option>
            <option>I-65, Exit 93</option>
            <option>I-65, Exit 208</option>
          </select>
          <!-- <p class="state">test State : {{ selectedState }}</p>
          <p class="city">test City : {{ selectedCity }}</p>
          <p class="highway">test Highway : {{ selectedHighway }}</p> -->

        </div>
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="onClickSearch">search</button>
      </div>
    </div>
  </div>
</template>

// <script>
// import { loadMarkers } from "../utils/store";

export default {
  state: "selectedState",
  city: "selectedCity",
  highway: "selectedHighway",
  data: () => ({
    selectedState: "",
    selectedCity: "",
    selectedHighway: ""

    // items:data.mock
  }),

  mounted() {
    this.getLocations();
  },

  computed: {
    locations() {
      return this.$store.state.locations;
    }
    // google: gmapApi
  },

  methods: {
    getLocations: function() {
      this.$store.dispatch("loadMarkers");
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
      // console.log(this.locations[0].position);
      const loco = this.$store.state.locations;
      // console.log(this.$store.state.locations[0].Addresses[0].City); // one city
      // console.log(this.$store.state.locations[0].Addresses[0].State); // one state
      // console.log(this.$store.state.locations[0].Site.DescriptiveAddress); //one highway

      // if(typeof this.selectedState === "undefined" && typeof this.selectedCity === "undefined" && typeof this.selectedHighway === "undefined"){
      if (
        this.selectedState === "" &&
        this.selectedCity === "" &&
        this.selectedHighway === ""
      ) {
        // console.log("this.locations", this.locations);
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
        // console.log("loco", loco[i]);
        // console.log("hoge", loco[i].Addresses.length);
        for (let j = 0; j < loco[i].Addresses.length; j++) {
          // if(loco[i].Addresses[j].State === this.selectedState || loco[i].Addresses[j].City === this.selectedCity){
          if (loco[i].Addresses[j].State === this.selectedState) {
            resultArray = resultArray.concat(loco[i]);
          }
        }
      }
      console.log("filtered by state", resultArray);
      return resultArray;
    }

    //this.$store.state.locations[0].Addresses[0].City
  }
};
</script>

<style>
</style>
