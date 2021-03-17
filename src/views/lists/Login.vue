<template>
  <div class="containerBG">
    <router-link to="/">
      <i class="fas fa-arrow-left white fs-1 px-3 py-2 pointer"></i>
    </router-link>
    <div class="container h-80">
      <div class="row align-items-center h-100">
        <div class="col-3 mx-auto">
          <div class="text-center">
            <img id="profile-img" class="profile-img-card passInput" src="../../assets/empty-lists.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="text-center mx-auto">
              <div class="mx-auto text-center">
                <form @submit.prevent="handleLogin" action="POST">
                  <input type="password" name="password" id="inputPassword" class="form-control form-group passInput" placeholder="token" required autofocus v-model="token">
                  <button class="btn btn-lg btn-primary btn-block mt-4 passInput" type="submit">enter</button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:"Login",
  data(){
    return {
      token: ''
    }
  },
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