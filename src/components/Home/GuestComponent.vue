<template>
  <div class="bg-image pt-5 white">
    <h1>WITAMY NA NASZEJ STRONIE</h1>
    <div>
      <p class="pt-2 text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis
        repellat! Quis vero, rem fugit ab magni laboriosam, et perspiciatis
        minus cupiditate accusantium, laudantium iusto temporibus veniam
        assumenda esse accusamus.
      </p>
    </div>
    <router-link to="/register" class="btn btn-lg mt-4 white"
      >Join us</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-image {
  background-image: url("../../assets/bg.jpg");
  height: 90vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.white {
  color: #fff;
  text-align: center;
}

.text {
  width: 50%;
  margin: auto;
}

.btn {
  border-radius: 20%;
  width: 8rem;
  border: 3px solid white;;
}

</style>