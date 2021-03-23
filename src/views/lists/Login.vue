<template>
  <auth>
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
      password:""
    }
  },
  components: {Auth},
  methods: {
    handleLogin(){
      console.log('login')
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