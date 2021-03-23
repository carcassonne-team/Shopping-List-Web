<template>
  <nav-bar>
      <create-list v-if="false"></create-list>
      <show-lists name="nazwa listy" v-if="!false"></show-lists>
  </nav-bar>
</template>

<script>
import NavBar from '../../components/SideBar.vue';
import CreateList from '../../components/CreateList.vue';
import showLists from '../../components/showLists.vue';

export default {
    components: {NavBar,CreateList,showLists},
}
</script>

<style>

</style>