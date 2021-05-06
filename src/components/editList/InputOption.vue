<template>
  <li class="list-group-item">
    <label for="browser">
      <slot></slot>
    </label>
    <form @submit.prevent="" class="input-group">
      <select class="form-control" @change="selectCategory($event)">
        <option selected disabled>produkty...</option>
        <option v-for="(item, i) in listItem" :key="i" :value="item.id">
          {{ item.name }}
        </option>
      </select>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-plus"></i></button>
    </form>
  </li>
      <basketModal/>
</template>

<script>
import basketModal from './BasketModal.vue';

export default {
  name: "InputOption",
  components: { basketModal },
  data() {
    return {
      itemName: "",
      loading:true
    };
  },
  props: ["listItem"],
  methods: {
    selectCategory(event) {
      this.$emit('item-name', event.target.value);
      this.itemName = "";
      event.target.value = 'produkty...';
    },
  },
};
</script>

<style scoped>
.form-control {
  overflow-y:scroll;
}
</style>