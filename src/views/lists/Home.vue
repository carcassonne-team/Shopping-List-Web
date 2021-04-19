<template>
  <nav-bar>
      <div v-if="userAuth">
        <create-list v-if="lists.length == 0"></create-list>
        <show-lists name="nazwa listy" v-else></show-lists>
      </div>

      <div v-else>
        <guest-component></guest-component>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from "../../components/SideBar.vue";
import CreateList from "../../components/CreateList.vue";
import showLists from "../../components/showLists.vue";
import GuestComponent from "../../components/Home/GuestComponent.vue";

export default {
  data() {
    return {
    };
  },
  components: { NavBar, CreateList, showLists, GuestComponent },
  computed: {
    userAuth() {
      return this.$store.getters.login;
    },
    lists() {
      return this.$store.getters.lists;
    },
  },
  methods: {
    async getLists() {
     await this.$store.dispatch("getLists");
    },
  },
  beforeMount() {
    this.getLists();
  },
};
</script>

<style scoped>
video {
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.overlay {
  height: 100%;
  width: 100%;
  background-color: #cd9557;
  opacity: 0.7;
  z-index: 1;
}
</style>