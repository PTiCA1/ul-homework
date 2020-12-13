<template>
  <header class="header">
    <router-link class="navbar-brand px-3" to="/">UL</router-link>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common/variables";

.header {
  display: flex;
  justify-content: space-between;
  background: $white;
  border-bottom: solid 0.125rem #ededed;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}
</style>
