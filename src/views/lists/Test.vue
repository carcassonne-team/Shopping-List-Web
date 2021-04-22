<template>
  <div>
    <button @click="showAlert">Hello world</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showAlert() {
      this.$swal.fire(
        "The Internet?",
        "That thing is still around?",
        "success"
      );

      setInterval(() => {
          this.$router.push('/');
      },1000)
    },
  },
};
</script>

<style scoped>
</style>