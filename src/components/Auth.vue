<template>
  <div class="containerBG">
    <router-link to="/"><i class="fas fa-arrow-left white fs-1 pt-3 px-3"></i></router-link>
    <div class="container">
      <div class="card position-absolute top-50 start-50 translate-middle">
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"Register",
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    handleRegister(){
      console.log("register")
    }
  }
};
</script>

<style scoped>
.containerBG {
  background-image: url("../assets/loginBg.jpg");
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

.card{
  max-width: 50rem;
  max-height: 50rem;
}
</style>