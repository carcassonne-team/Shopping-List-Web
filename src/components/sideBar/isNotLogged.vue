<template>
  <div class="card text-dark bg-primary mb-3 mt-3" style="max-width: 18rem">
    <div class="card-header text-center white">
      Chcesz skorzystać z wszystkich funkcji Shopping List ZMP?
    </div>
    <div class="card-body text-center">
      <button type="button" class="btn btn-success text-center">
        <router-link to="/register" class="white routerBtn">ZAŁÓŻ KONTO</router-link>
      </button>
      <button type="button" class="btn btn-primary text-center pt-3">
        <router-link to="/login" class="white routerBtn">ZALOGUJ SIĘ</router-link>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .routerBtn {
    text-decoration: none;
  }

  .white {
    color: #fff;
  }
</style>