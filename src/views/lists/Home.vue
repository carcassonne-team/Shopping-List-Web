<template>
  <div v-if="loading">
    <loading></loading>
  </div>

  <nav-bar v-else>
    <div>
      <div v-if="userAuth">
        <create-list v-if="lists.length == 0"></create-list>
        <show-lists v-else></show-lists>
      </div>

      <div v-else>
        <guest-component></guest-component>
      </div>
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
      loading: false,
    };
  },
  components: { NavBar, CreateList, showLists, GuestComponent },
  methods: {
    async getLists() {
      this.$store.dispatch("getLists").then(() => {
        this.$router.push("/");
      });
    },
  },
  computed: {
    userAuth() {
      return this.$store.getters.login;
    },
    lists() {
      return this.$store.getters.lists;
    },
  },
  created() {
    this.loading = true;
    this.getLists();
    this.loading = false;
  },
};
</script>