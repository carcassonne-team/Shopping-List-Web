<template>
  <router-link to="/" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-shopping-cart"></i> Lista Zakupów</router-link
  >
  <router-link to="settings" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-trash"></i> Kosz</router-link
  >
  <router-link to="settings" class="list-group-item list-group-item-action bg-light"
  ><i class="fas fa-cog"></i> Ustawienia</router-link
  >
  <router-link to="logout" class="list-group-item list-group-item-action bg-light" v-if="false"
  ><i class="fas fa-outdent"></i> Log Out</router-link
  >
</template>

<style scoped>

</style>