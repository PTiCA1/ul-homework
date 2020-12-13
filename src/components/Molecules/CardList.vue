<template>
  <div class="card-list">
    <div v-for="item in items" :key="item.id" class="card-list__item">
      <Card :item="item" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Molecules/Card.vue";

export default {
  name: "CardList",
  components: {
    Card
  },
  props: {
    items: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  overflow: scroll;

  &__item {
    flex: 1 0 250px;
    max-width: 250px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    white-space: nowrap;
  }
}
</style>
