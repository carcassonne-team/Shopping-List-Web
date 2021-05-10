<template>
  <div class="card text-dark bg-primary mb-3 mt-3" style="max-width: 18rem">
    <div class="card-header text-center white">
      You want to use all features of ZMP Shopping List?
    </div>
    <div class="card-body text-center">
      <button type="button" class="btn btn-success text-center">
        <router-link to="/register" class="white routerBtn">CREATE AN ACCOUNT</router-link>
      </button>
      <button type="button" class="btn btn-primary text-center pt-3">
        <router-link to="/login" class="white routerBtn">LOG IN</router-link>
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