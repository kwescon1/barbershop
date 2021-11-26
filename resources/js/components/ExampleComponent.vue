<template>
  <div class="container">
    <div><navbar-component></navbar-component></div>
    <div class="row justify-content-center">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./NavbarComponent.vue";
export default {
  mounted() {
    console.log("Component mounted.");
  },

  components: { NavbarComponent },
};
</script>
