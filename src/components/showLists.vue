<template>
  <div class="pointer text-center pt-2 fs-1">
    <i
      class="fas fa-plus-circle green"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    ></i>
    <create-list-modal></create-list-modal>
  </div>

  <div class="mt-4">
    <div class="card mx-auto">
      <div class="card-body">
        <div class="d-flex bd-highlight mb-3">
          <router-link to="/lists/4">
            <h3>{{ name }}</h3>
          </router-link>
          <h4 class="ms-auto p-2 bd-highlight">0/5</h4>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showOptions"
            >
              <i class="fas fa-ellipsis-v"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#renameModal">Zmień nazwę</a></li>
              <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#shareList">Udostępnij</a></li>
              <li><a class="dropdown-item" @click="deleteList">Usuń</a></li>
            </ul>

            <rename-modal></rename-modal>
            <shareList></shareList>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import RenameModal from "../components/showList/RenameModal.vue";
import shareList from '../components/showList/shareModal.vue'
import CreateListModal from "./CreateListModal.vue";

export default {
  props: ["name"],
  components: { CreateListModal,RenameModal,shareList },
  data(){
    return{
      
    }
  },
  methods: {
    showOptions() {
      console.log("asdas");
    },
    deleteList(){
      const conf = confirm("czy na pewno chcesz usunąć listę?");
      console.log(conf)
    }
  },
};
</script>

<style scoped>
.card {
  max-width: 40rem;
  min-height: 6rem;
  transition: 0.3s ease;
}

.card:hover {
  box-shadow: 10px 10px 5px grey;
  cursor: pointer;
  transition: 0.3s ease;
}

.pointer {
  cursor: pointer;
}

.green {
  color: rgb(9, 238, 9);
}
</style>