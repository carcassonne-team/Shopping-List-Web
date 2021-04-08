<template>
  <auth>
    <p class="text-danger" v-if="errors">{{ errors }}</p>
    <form @submit.prevent="handleLogin" method="POST">
      <div class="mb-3">
        <label for="EmailInput" class="form-label">Email address</label>
        <input type="email" class="form-control" id="EmailInput" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="PassInput" class="form-label">Password</label>
        <input type="password" class="form-control" id="PassInput" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
  </auth>
</template>

<script>
import Auth from '../../components/Auth';

export default {
  name:"Login",
  data(){
    return {
      email:"",
      password:"",
      error: '',
    }
  },
  components: {Auth},
  methods: {
    async handleLogin(){
      let email = this.email
      let password = this.password
      await this.$store.dispatch('login', { email, password })
      .catch(res => this.error = res.data.data.error)
    }
  },
  computed: {
    errors() {
      return this.$store.getters.errors; 
    }
  }
};
</script>

<style scoped>
.containerBG {
  background-image: url('../../assets/loginBg.jpg');
  height: 100vh;
  width: 100vw;
}

.white {
  color: #fff;
}

.pointer {
  cursor: pointer;
}

#profile-img {
  height:180px;
}
.h-80 {
  height: 80% !important;
}

.passInput {
  min-width: 10rem;
  margin: auto;
}


</style>