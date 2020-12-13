<template>
  <Header />
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Organisms/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
// Required
@import "./assets/styles/common/variables";

// Optional
// @import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/nav";
@import "../node_modules/bootstrap/scss/card";

a.router-link-exact-active {
  text-decoration: underline;
}
</style>
