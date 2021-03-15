<template>
  <div class="container">
    <img
      src="../assets/empty-lists.png"
      alt="empty-list"
      class="pt-5 image center"
    />
    <h5 class="text-center pt-5 text-muted">
      Stwórz swoją pierwszą listę. Zaplanuj zakupy szybciej i wygodniej.
    </h5>
    <button type="button" class="btn btn-primary center mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">STWÓRZ LISTĘ</button>
    <create-list-modal></create-list-modal>
  </div>
</template>

<script>
import CreateListModal from './CreateListModal.vue';

export default {
    name:"CreateList",
    components: {CreateListModal},
    methods: {
    }
};
</script>

<style scoped>
.container {
  background-color: #ddd;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.image {
  width: 12rem;
  align-content: center;
}

.btn{
    width: 10rem;
    height: 4rem;
}
</style>