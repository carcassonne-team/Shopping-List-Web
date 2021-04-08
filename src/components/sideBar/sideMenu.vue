<template>
  <router-link to="/" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-shopping-cart"></i> Lista Zakupów</router-link
  >
  <router-link to="code" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-share-alt"></i> Kod Dostępu</router-link
  >
  <router-link to="settings" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-cog"></i> Ustawienia</router-link
  >
  <router-link to="/" class="list-group-item list-group-item-action bg-light" @click="handleLogout"
  ><i class="fas fa-outdent"></i> Log Out</router-link
  >
</template>

<script>
export default {
  methods: {
    async handleLogout(){
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>

</style>