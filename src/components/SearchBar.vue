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
          </select>

          <select v-model="selectedCity">
            <option disabled value="">City</option>
            <option>Clanton</option>
            <option>Evergreen</option>
            <option>Falkville</option>
            <option>Jasper</option>
            <option>Loxley</option>
          </select>

          <select v-model="selectedHighway">
            <option disabled value="">Highway</option>
            <option>I-10</option>
            <option>I-22</option>
            <option>I-65</option>
          </select>
          <p class="state">test State : {{ selectedState }}</p>
          <p class="city">test City : {{ selectedCity }}</p>
          <p class="highway">test Highway : {{ selectedHighway }}</p>

        </div>
      </div>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">search</button>
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
  })
};
</script>

<style>
</style>
