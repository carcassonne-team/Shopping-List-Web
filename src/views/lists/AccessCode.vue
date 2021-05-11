<template>
  <side-bar>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">ENTER YOUR LIST ACCESS CODE</h5>
        <div class="pt-3">
          <input
            type="text"
            class="form-control text-center"
            id="code"
            aria-describedby="code"
            v-model="code"
            @input="code = $event.target.value.toUpperCase()"
          />
          <div id="emailHelp" class="form-text text-center">
            The code will allow you to switch to another shopping list
          </div>
        </div>
        <div class="text-center">
          <a href="#" class="btn btn-primary center mt-3" @click="listHandle"
            >Go to List</a
          >
        </div>
      </div>
    </div>
  </side-bar>
</template>

<script>
import AlertSuccess from "../../components/Alerts/AlertSuccess";
import AlertFail from "../../components/Alerts/AlertFail";
import SideBar from "../../components/sideBar/SideBar";

export default {
  data() {
    return {
      code: "",
    };
  },
  components: { SideBar },
  methods: {
    async listHandle() {
      if (this.code.length > 5) {
        await this.$store.dispatch("shareCode", this.code);

        if (this.$store.getters.errorCode == 200) {
          AlertSuccess.successAlert("Product List has been shared");
        } else {
          AlertFail.AlertFail("You can't share the List");
        }
      }else {
        AlertFail.AlertFail("The list code is too short (min 5)");
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 20vh;
  min-height: 30vh;
}

.form-control {
  max-width: 30rem;
  font-size: 35px;
  margin: 0 auto;
  float: none;
}

.center {
  margin: auto;
  float: none;
}
</style>