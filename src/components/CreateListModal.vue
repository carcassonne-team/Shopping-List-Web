<template>
  <div
    class="modal fade pt-5"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Nazwa nowej listy</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input type="text" class="inputList" v-model="listName"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" @click="handleCreateList">UTWÓRZ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlertSuccess from './Alerts/AlertSuccess'
export default {
  name: "CreateListModal",
  data() {
    return {
      listName: "",
    };
  },
  methods: {
      handleCreateList(){
          this.$store.dispatch('listCreate');
          this.listName = "";
          AlertSuccess.successAlert('Lista została utworzona!');
      }
  },
};
</script>

<style scoped>
.inputList {
  border: none;
  border-bottom: 1px solid rgb(80, 82, 75);
  padding: 5px 10px;
  outline: none;
  width: 100%;
}

.inputList:focus {
  border-bottom: 2px solid rgb(27, 219, 20);
}

.modal-dialog {
  height: 80% !important;
  padding-top: 10%;
}

.modal-content {
  min-height: 38% !important;
  overflow: visible;
}

.modal-body {
  height: 80%;
  overflow: auto;
}
</style>