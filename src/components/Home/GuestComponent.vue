<template>
  <div>
    <div class="bg-image">
      <img src="../../assets/app.png" alt="list" class="listImg img-fluid rounded mx-auto d-block" draggable="false">
      <div class="info">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-image {
  background-image: url("../../assets/bg.jpg");
  box-shadow: 0 0 15px 15px #fff inset;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* .listImg {
    user-select: none;
} */

@media screen and (min-width: 715px) {
  .listImg{
    display: block;
    width: 45rem;
    height: 40rem;
    padding-right: 20rem;
    }
}
</style>