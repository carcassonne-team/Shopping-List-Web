<template>
  <nav-bar>
    <edit-list></edit-list>
  </nav-bar>
</template>

<script>
import NavBar from '../../components/SideBar.vue';
import EditList from '../../components/EditList.vue';

export default {
  name:"ListView",
  components: {NavBar,EditList},
};
</script>