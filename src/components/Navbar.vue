<template>
  <nav class="navbar_custom navbar-light mb-5 navbar_shadow">
    <div class="navbar-brand">
      <img src="../assets/logo.png" width="80" height="80" alt>
    </div>
  </nav>
</template>

<script>
export default {};
</script>


<style scoped>
nav {
  width: 100%;
  background-color: #000000;
  background-image: url(../assets/logo2.png);
  background-repeat: no-repeat;
  background-position: center;
}

.navbar_custom {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0rem 0.5rem;
}

.navbar_shadow {
  -webkit-box-shadow: 3px 10px 15px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 10px 15px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 10px 15px -6px rgba(0, 0, 0, 0.75);
}
</style>
