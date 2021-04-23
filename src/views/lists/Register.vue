<template>
  <auth>
    <form @submit.prevent="handleRegister" method="POST">
      <h1 class="text-center pb-2">Register for free account</h1>
      <div class="mb-3">
        <label for="nameInput" class="form-label orange">Name</label>
        <input type="text" class="form-control" id="nameInput" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="EmailInput" class="form-label orange">Email address</label>
        <input type="email" class="form-control" id="EmailInput" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="PassInput" class="form-label orange">Password</label>
        <input type="password" class="form-control" id="PassInput" v-model="password" required>
      </div>
      <div class="mb-3">
        <label for="ConfPassInput" class="form-label orange">Confirm password</label>
        <input type="password" class="form-control" id="ConfPassInput" v-model="confirmPassword" required>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary mt-3">Register</button>
      </div>
    </form>
  </auth>
</template>

<script>
import Auth from "../../components/Auth";
import AlertFail from '../../components/Alerts/AlertFail'
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  components: { Auth },
  methods: {
    async handleRegister() {
     await this.$store.dispatch('register', 
      { 
        name: this.name, 
        email: this.email,
        password: this.password, 
        password_confirmation: this.confirmPassword
      })
      .then(() => {
        if(this.$store.getters.statusError === 400){
          AlertFail.AlertFail(this.$store.getters.errors);
        }
      });
    },
  },
  mounted(){
    this.$store.dispatch('errors');
  }
};
</script>

<style scoped>
.containerBG {
  background-image: url("../../assets/loginBg.jpg");
  width: 100vw;
  height: 100vh;
}

.card {
  width: 50vw;
  min-height: 30vh;
}

.white {
  color: #fff;
}

.card {
  max-width: 50rem;
  max-height: 50rem;
}

.orange {
  color: rgb(240, 127, 22);
}
</style>