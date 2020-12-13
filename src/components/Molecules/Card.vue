<template>
  <div class="card">
    <img
      src="https://images.unsplash.com/photo-1607835017779-c176b83b2dd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2078&q=80"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">{{ item.name }}</h5>
      <div class="text-muted">{{ item.phone }}</div>
      <div class="text-muted">{{ item.nickname }}</div>
      <a href="#" class="btn btn-success">Like</a>
      <a href="#" class="btn btn-danger">Unlike</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
