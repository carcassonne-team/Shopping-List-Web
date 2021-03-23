<template>
  <auth>
    <form @submit.prevent="handleRegister" method="POST">
      <div class="mb-3">
        <label for="EmailInput" class="form-label">Email address</label>
        <input type="email" class="form-control" id="EmailInput" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="PassInput" class="form-label">Password</label>
        <input type="password" class="form-control" id="PassInput" v-model="password" required>
      </div>
      <div class="mb-3">
        <label for="ConfPassInput" class="form-label">Confirm password</label>
        <input type="password" class="form-control" id="ConfPassInput" v-model="confirmPassword" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Register</button>
    </form>
  </auth>
</template>

<script>
import Auth from "../../components/Auth";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  components: { Auth },
  methods: {
    handleRegister() {
      console.log("register");
    },
  },
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
</style>