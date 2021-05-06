<template>
  <nav-bar>
    <edit-list></edit-list>
  </nav-bar>
</template>

<script>
import NavBar from '../../components/sideBar/SideBar';
import EditList from '../../components/editList/EditList.vue';

export default {
  name:"ListView",
  components: {NavBar,EditList},
};
</script>