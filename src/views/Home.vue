<template>
  <div class="home">
    <h1>Hello</h1>
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="#">Today</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">This week</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">This month</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Last week</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Last month</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <CardList :items="users" />
      </div>
    </div>
  </div>
</template>

<script>
import CardList from "@/components/Molecules/CardList.vue";

export default {
  name: "Home",
  components: {
    CardList
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
};
</script>
