<template>
  <div
      class="modal fade pt-5"
      id="shareList"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">List Access Code</h5>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <h2 class="text-center">{{code}}</h2>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateListModal",
  props: ["code"],
  data() {
    return {
      listName: "",
    };
  },
  methods: {
    handleCreateList(){
      console.log(this.listName);
      this.listName = "";
    }
  }
};
</script>

<style scoped>

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