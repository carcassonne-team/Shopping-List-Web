<template>
  <div v-if="loading">
    <loading></loading>
  </div>

  <div v-else>
    <div v-if="lists.length > 0">
      <div class="pointer text-center pt-2 fs-1">
        <i
          class="fas fa-plus-circle green"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        ></i>
        <create-list-modal></create-list-modal>
      </div>

      <div class="mt-4" v-for="(list, i) in lists" :key="i">
        <div class="card mx-auto">
          <div class="card-body">
            <div class="d-flex bd-highlight mb-3">
              <router-link :to="`/lists/${list.id}`">
                <h3>{{ list.name }}</h3>
              </router-link>
              <h4 class="ms-auto p-2 bd-highlight"></h4>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a
                      class="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#renameModal"
                      >Zmień nazwę</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#shareList"
                      @click="share_code = list.share_code"
                      >Udostępnij</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" @click="deleteList(list.id)"
                      >Usuń</a
                    >
                  </li>
                </ul>

                <rename-modal></rename-modal>
                <shareList :code="share_code"></shareList>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenameModal from "./RenameModal.vue";
import shareList from "./shareModal.vue";
import CreateListModal from "./CreateListModal.vue";
import AlertSuccess from "../Alerts/AlertSuccess";

export default {
  name: "show Lists",
  props: ["name"],
  components: { CreateListModal, RenameModal, shareList },
  data() {
    return {
      loading: true,
      share_code: "",
    };
  },
  methods: {
    async deleteList(index) {
      const conf = confirm("czy na pewno chcesz usunąć listę?");
      if (conf) {
        await this.$store.dispatch("deleteList", index);
        AlertSuccess.successAlert("Lista Została usunięta");
        this.showLists();
      }
    },
    async showLists() {
      await this.$store.dispatch("getLists");
    },
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    },
  },
  beforeMount() {
    this.loading = true;
    this.showLists();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
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